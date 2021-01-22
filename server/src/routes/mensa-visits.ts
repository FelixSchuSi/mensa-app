import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { GenericDAO } from '../models/generic.dao';
import { Group } from '../models/group';
import { MensaVisit } from '../models/mensa-visit';
import { decrypt } from '../services/crypto.service';

const router = express.Router();

router.post('/:groupID', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const groupID = req.params.groupID;
  const userID = res.locals.user.id;

  // Check if user is member of group
  const group = await groupDAO.findOne({ id: groupID });
  const userIsMember: boolean = group?.members.includes(userID) || false;
  if (!group || !userIsMember) {
    res.status(404).json({ message: 'Gruppe existiert nicht' });
    return;
  }

  const newMensaVisit: MensaVisit = {
    id: uuidv4(),
    createdAt: new Date().getTime(),
    title: req.body.title,
    mensa: <any>req.body.mensa,
    datetime: Number(req.body.datetime),
    participants: [userID]
  };

  const listOfMensaVisits = group.mensaVisits ? group.mensaVisits : [];
  const newListOfMensaVisits = [...listOfMensaVisits, newMensaVisit];
  const newGroup = await filterAndSortMensaVisits({ ...group, mensaVisits: newListOfMensaVisits });
  await groupDAO.update(newGroup);

  res.status(200).json({ ...newGroup, name: decrypt(group?.name!) });
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
  if (!group || !userIsMember) {
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
  const newGroup = await filterAndSortMensaVisits({ ...group, mensaVisits: newListOfMensaVisits });

  await groupDAO.update(newGroup);

  res.status(200).json({ ...newGroup, name: decrypt(group?.name!) });
});

router.patch('/:groupID/participate/:mensaVisitID', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const groupID = req.params.groupID;
  const mensaVisitID = req.params.mensaVisitID;
  const userID = res.locals.user.id;

  // Check if user is member of group
  const group = await groupDAO.findOne({ id: groupID });
  const userIsMember: boolean = group?.members.includes(userID) || false;
  if (!group || !userIsMember) {
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

  const newGroup = await filterAndSortMensaVisits({ ...group, mensaVisits: newListOfMensaVisits });
  await groupDAO.update(newGroup);

  res.status(200).json({ ...newGroup, name: decrypt(group?.name!) });
});

router.patch('/:groupID/leave/:mensaVisitID', async (req, res) => {
  const groupDAO: GenericDAO<Group> = req.app.locals.groupDAO;
  const groupID = req.params.groupID;
  const mensaVisitID = req.params.mensaVisitID;
  const userID = res.locals.user.id;

  // Check if user is member of group
  const group = await groupDAO.findOne({ id: groupID });
  const userIsMember: boolean = group?.members.includes(userID) || false;
  if (!group || !userIsMember) {
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

  const newGroup = await filterAndSortMensaVisits({ ...group, mensaVisits: newListOfMensaVisits });
  await groupDAO.update(newGroup);

  res.status(200).json({ ...newGroup, name: decrypt(group?.name!) });
});

export async function filterAndSortMensaVisits(group: Group): Promise<Group> {
  const mensaVisits = group.mensaVisits;

  // Filter mensaVisits of the past
  const filteredMensaVisits = mensaVisits.filter(visit => visit.datetime >= Date.now());

  // Sort mensaVisits by timestamp
  const sordedMensaVisits = filteredMensaVisits.sort((visitA, visitB) => {
    if (visitA.datetime === visitB.datetime) {
      return 0;
    } else if (visitA.datetime > visitB.datetime) {
      return 1;
    } else {
      return -1;
    }
  });

  return { ...group, mensaVisits: sordedMensaVisits };
}

export default router;
