import express from 'express';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { GenericDAO } from '../models/generic.dao';
import { User } from '../models/user';

const router = express.Router();

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
    res.status(400).json({ message: ' Es existiert bereits ein Konto mit der angegebenen E-Mail-Adresse.' });
    return;
  }

  const createdUser = await userDAO.create({
    name: req.body.name,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10)
  });
  res.cookie('jwt-token', createToken(createdUser), { sameSite: 'lax' });
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
    res.cookie('jwt-token', createToken(user), { sameSite: 'lax' });
    res.status(201).json(user);
  } else {
    res.clearCookie('jwt-token');
    res.status(400).json({ message: 'E-Mail oder Passwort ungültig!' });
  }
});

router.delete('/sign-out', (req, res) => {
  res.clearCookie('jwt-token');
  res.status(200).end();
});

function createToken(user: User) {
  const claimsSet = { id: user.id, name: user.name, email: user.email };
  return jwt.sign(claimsSet, 'mysecret', { algorithm: 'HS256', expiresIn: '1h' });
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
