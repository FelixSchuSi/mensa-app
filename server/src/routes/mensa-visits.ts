import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { GenericDAO } from '../models/generic.dao';
import { Group } from '../models/group';
import { MensaVisit } from '../models/mensa-visit';

const router = express.Router();

router.post('/:groupID', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const groupID = req.params.groupID;
  const userID = res.locals.user.id;

  // Check if user is member of group
  const group = await groupDAO.findOne({ id: groupID });
  const userIsMember: boolean = group?.members.includes(userID) || false;
  if (!userIsMember) {
    res.status(404).json({ message: 'Gruppe existiert nicht' });
  }

  const newMensaVisit: MensaVisit = {
    id: uuidv4(),
    createdAt: new Date().getTime(),
    title: req.body.title,
    mensa: <any>req.body.mensa,
    datetime: Number(req.body.datetime),
    participants: [userID]
  };

  const listOfMensaVisits = group?.mensaVisits ? group.mensaVisits : [];
  const newListOfMensaVisits = [...listOfMensaVisits, newMensaVisit];
  await groupDAO.update({ ...group, mensaVisits: newListOfMensaVisits });

  res.status(200).json({ ...group, mensaVisits: newListOfMensaVisits });
});

router.delete('/:groupID/:mensaVisitID', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const groupID = req.params.groupID;
  const mensaVisitID = req.params.mensaVisitID;
  const userID = res.locals.user.id;
  console.log({ groupID, mensaVisitID });

  // Check if user is member of group
  const group = await groupDAO.findOne({ id: groupID });
  const userIsMember: boolean = group?.members.includes(userID) || false;
  if (!userIsMember) {
    res.status(404).json({ message: 'Gruppe existiert nicht' });
    return;
  }

  // Check if Mensa visit exists
  const listOfMensaVisits = group?.mensaVisits ? group.mensaVisits : [];
  const mensaVisit: MensaVisit | undefined = listOfMensaVisits.find(visit => visit.id === mensaVisitID);
  if (!mensaVisit) {
    res.status(404).json({ message: 'Termin existiert nicht' });
    return;
  }

  const newListOfMensaVisits = listOfMensaVisits.filter(visit => visit.id !== mensaVisitID);

  await groupDAO.update({ ...group, mensaVisits: newListOfMensaVisits });

  res.status(200).json({ ...group, mensaVisits: newListOfMensaVisits });
});

router.patch('/:groupID/participate/:mensaVisitID', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const groupID = req.params.groupID;
  const mensaVisitID = req.params.mensaVisitID;
  const userID = res.locals.user.id;

  // Check if user is member of group
  const group = await groupDAO.findOne({ id: groupID });
  const userIsMember: boolean = group?.members.includes(userID) || false;
  if (!userIsMember) {
    res.status(404).json({ message: 'Gruppe existiert nicht' });
    return;
  }

  // Check if Mensa visit exists
  const listOfMensaVisits = group?.mensaVisits ? group.mensaVisits : [];
  const mensaVisit: MensaVisit | undefined = listOfMensaVisits.find(visit => visit.id === mensaVisitID);
  if (!mensaVisit) {
    res.status(404).json({ message: 'Termin existiert nicht' });
    return;
  }

  // Check if user is already participant
  const participants: string[] = mensaVisit.participants;
  const isParticipant: boolean = participants.includes(userID);
  if (isParticipant) {
    res.status(400).json({ message: 'Du nimmst bereits am Termin teil' });
    return;
  }

  const newParticipants: string[] = [...participants, userID];
  const newListOfMensaVisits = listOfMensaVisits.map(visit => {
    if (visit.id !== mensaVisit.id) return visit;
    return { ...visit, participants: newParticipants };
  });

  await groupDAO.update({ ...group, mensaVisits: newListOfMensaVisits });

  res.status(200).json({ ...group, mensaVisits: newListOfMensaVisits });
});

router.patch('/:groupID/leave/:mensaVisitID', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const groupID = req.params.groupID;
  const mensaVisitID = req.params.mensaVisitID;
  const userID = res.locals.user.id;

  // Check if user is member of group
  const group = await groupDAO.findOne({ id: groupID });
  const userIsMember: boolean = group?.members.includes(userID) || false;
  if (!userIsMember) {
    res.status(404).json({ message: 'Gruppe existiert nicht' });
    return;
  }

  // Check if Mensa visit exists
  const listOfMensaVisits = group?.mensaVisits ? group.mensaVisits : [];
  const mensaVisit: MensaVisit | undefined = listOfMensaVisits.find(visit => visit.id === mensaVisitID);
  if (!mensaVisit) {
    res.status(404).json({ message: 'Termin existiert nicht' });
    return;
  }

  const participants: string[] = mensaVisit.participants;
  const newParticipants: string[] = participants.filter(participant => participant !== userID);
  const newListOfMensaVisits = listOfMensaVisits.map(visit => {
    if (visit.id !== mensaVisit.id) return visit;
    return { ...visit, participants: newParticipants };
  });

  await groupDAO.update({ ...group, mensaVisits: newListOfMensaVisits });

  res.status(200).json({ ...group, mensaVisits: newListOfMensaVisits });
});

export default router;
