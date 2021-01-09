import express, { CookieOptions } from 'express';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { GenericDAO } from '../models/generic.dao';
import { User } from '../models/user';

const router = express.Router();
const isProd = !!process.env.ISPROD;
const cookieOptions: CookieOptions = isProd
  ? { sameSite: 'none', secure: true, httpOnly: false }
  : { sameSite: 'lax', httpOnly: false };

// Used to check if a user has a valid token.
router.get('/', async (req, res) => {
  const token = req.cookies['jwt-token'] || '';
  try {
    const { email, name } = <User>jwt.verify(token, 'mysecret');
    res.status(200).json({ email, name });
  } catch (error) {
    res.status(401).json({ message: 'Bitte melden Sie sich an!' });
  }
});

router.post('/', async (req, res) => {
  const userDAO: GenericDAO<User> = req.app.locals.userDAO;
  const errors: string[] = [];

  res.clearCookie('jwt-token');

  if (!hasRequiredFields(req.body, ['email', 'name', 'password', 'passwordCheck'], errors)) {
    res.status(400).json({ message: errors.join('\n') });
    return;
  }

  if (req.body.password !== req.body.passwordCheck) {
    res.status(400).json({ message: 'Die beiden Passwörter stimmen nicht überein.' });
    return;
  }

  const filter: Partial<User> = { email: req.body.email };
  if (await userDAO.findOne(filter)) {
    res.status(400).json({ message: 'Es existiert bereits ein Konto mit der angegebenen E-Mail-Adresse.' });
    return;
  }

  const { name, email, password, status, filterConfig } = req.body;
  const createdUser = await userDAO.create({
    name,
    email,
    password: await bcrypt.hash(password, 10),
    filterConfig,
    status
  });

  res.cookie('jwt-token', createToken(createdUser), cookieOptions);

  res.status(201).json(createdUser);
});

router.post('/sign-in', async (req, res) => {
  const userDAO: GenericDAO<User> = req.app.locals.userDAO;
  const filter: Partial<User> = { email: req.body.email };
  const errors: string[] = [];

  if (!hasRequiredFields(req.body, ['email', 'password'], errors)) {
    res.status(400).json({ message: errors.join('\n') });
    return;
  }

  const user = await userDAO.findOne(filter);

  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    res.cookie('jwt-token', createToken(user), cookieOptions);
    res.status(201).json(user);
  } else {
    res.clearCookie('jwt-token');
    res.status(400).json({ message: 'E-Mail oder Passwort ungültig!' });
  }
});

// Edit user
router.patch('/', async (req, res) => {
  const userDAO: GenericDAO<User> = req.app.locals.userDAO;
  const partialUser: Partial<User> = req.body;
  if (!partialUser.email) res.status(400).json({ message: 'Email muss gesetzt sein' });
  const user = await userDAO.findOne({ email: partialUser.email });
  if (!user) res.status(400).json({ message: 'Dieser Benutzer existiert nicht.' });
  const newUser = { ...user, ...partialUser };
  const success = await userDAO.update(newUser);
  success ? res.json(newUser) : res.sendStatus(500);
});

router.delete('/sign-out', (req, res) => {
  res.clearCookie('jwt-token', cookieOptions);
  res.status(200).end();
});

function createToken(user: User) {
  const claimsSet = { id: user.id, name: user.name, email: user.email };
  return jwt.sign(claimsSet, 'mysecret', { algorithm: 'HS256', expiresIn: '1y' });
}

function hasRequiredFields(object: { [key: string]: unknown }, requiredFields: string[], errors: string[]) {
  let hasErrors = false;
  requiredFields.forEach(fieldName => {
    if (!object[fieldName]) {
      errors.push(fieldName + ' darf nicht leer sein.');
      hasErrors = true;
    }
  });
  return !hasErrors;
}

export default router;
