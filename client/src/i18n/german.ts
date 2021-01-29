import { LanguageStrings } from '../models/language-strings';
import { Languages } from '../models/languages';

export const german: LanguageStrings = {
  _LANGUAGE: Languages.GERMAN,
  // other meal info
  Rin: 'Rind',
  Sch: 'Schwein',
  Vgt: 'Vegetarisch',
  Vgn: 'Vegan',
  Fis: 'Fisch',
  Gfl: 'Geflügel',
  Alk: 'Alkohol',
  // allergenes
  A: 'Gluten',
  ADI: 'Dinkel',
  AGE: 'Gerste',
  AHA: 'Hafer',
  AKA: 'Kamut',
  ARO: 'Roggen',
  AWE: 'Weizen',
  B: 'Krebstiere',
  C: 'Ei',
  D: 'Fisch',
  E: 'Erdnüsse',
  F: 'Soja',
  G: 'Milch',
  H: 'Schalenfrüchte',
  HMA: 'Mandeln',
  HHA: 'Haselnüsse',
  HWA: 'Walnüsse',
  HCA: 'Cashewkerne',
  HPE: 'Pecannüsse',
  HPA: 'Paranüsse',
  HPI: 'Pistazien',
  HQU: 'Macadamianüsse',
  I: 'Sellerie',
  J: 'Senf',
  K: 'Sesam',
  L: 'Lupinen',
  M: 'Weichtiere',
  N: 'Schwefeloxid und Sulfite',
  // additives
  0: 'de',
  1: 'Farbstoff',
  2: 'Konservierungsstoffe',
  3: 'Antioxidationsmittel',
  4: 'Geschmacksverstärker',
  5: 'geschwefelt',
  6: 'geschwärzt',
  7: 'gewachst',
  8: 'Phosphat',
  9: 'Süßungsmitteln',
  10: 'Phenylalaninquelle',
  // names of mensas
  aasee: 'Mensa am Aasee',
  davinci: 'Mensa Da Vinci',
  denkpause: 'Bistro Denkpause',
  ring: 'Mensa am Ring',
  steinfurt: 'Mensa Steinfurt',
  aasee_short: 'Am Aasee',
  davinci_short: 'Da Vinci',
  denkpause_short: 'Denkpause',
  ring_short: 'Am Ring',
  steinfurt_short: 'Steinfurt',
  // Strings in actual app
  SWITCH_LANGUAGE: 'Sprache wechseln',
  GROUPS: 'Gruppen',
  SIGN_UP: 'Registrieren',
  SIGN_UP_NOW: 'Jetzt Registrieren',
  CREATE_ACCOUNT: 'Konto erstellen',
  SIGN_IN: 'Anmelden',
  SIGN_IN_NOW: 'Jetzt anmelden',
  SIGN_OUT: 'Abmelden',
  E_MAIL: 'E-Mail',
  PASSWORD: 'Passwort',
  PASSWORD_CONFIRM: 'Passwort bestätigen',
  NAME: 'Name',
  PASSWORD_NOT_IDENTICAL: 'Passwörter müssen gleich sein',
  SIGN_OUT_MESSAGE: 'Sie wurden erfolgreich abgemeldet',
  USER_STATUS: 'Status',
  STUDENT: 'Studierender',
  EMPLOYEE: 'Mitarbeiter',
  GUEST: 'Gast',
  CHOOSE_STATUS: 'Wähle deinen Status',
  INDIGESTIBILITIES: 'Unverträglichkeiten',
  PREFERENCE: 'Vorliebe',
  NETWORK_SYNCING: 'Synchronisiere...',
  NETWORK_OFFLINE: 'Offline',
  NETWORK_ONLINE: 'Online',
  NETWORK_SYNC_FAILURE: 'Synchronisation fehlgeschlagen',
  NETWORK_SYNC_SUCESS: 'erfolgreich synchronisiert',
  INTERNET_NEEDED_FOR_SIGN_IN: 'Du musst online sein um dich anzumelden.',
  INTERNET_NEEDED_FOR_SIGN_UP: 'Du musst online sein um dich zu registrieren.',
  INTERNET_NEEDED_TO_JOIN_GROUPS: 'Du musst online sein um einer Gruppe beitreten zu können',
  SETTINGS: 'Einstellungen',
  GERMAN: 'Deutsch',
  ENGLISH: 'Englisch',
  LANGUAGE: 'Sprache',
  APPEARANCE: 'Aussehen',
  BACK: 'Zurück',
  MEALS_TODAY: 'Heutige Gerichte',
  MEALS_FUTURE: 'Gerichte',
  CREATE_GROUP: 'Gruppe erstellen',
  EDIT_GROUP: 'Grupppe bearbeiten',
  FILTER_MEALS: 'Gerichte filtern',
  APPLY_FILTER: 'Filter anwenden',
  LOCATION: 'Mensa',
  CONTENTS: 'Inhaltsstoffe',
  CLOSE: 'Schließen',
  DIET: 'Diät',
  STANDARD_DIET: 'Standard',
  STEP_1: 'Schritt 1',
  STEP_2: 'Schritt 2',
  PERSONAL_DATA: 'Persönliche Daten',
  FOOD_PREFERENCES: 'Vorlieben',
  NEXT_STEP: 'Nächster Schritt',
  PREVIOUS_STEP: 'Vorheriger Schritt',
  STATUS: 'Status',
  JOIN: 'Beitreten',
  GROUP_DETAILS: 'Gruppendetails',
  JOINGROUP: 'Gruppe beitreten',
  SEARCH_MEALS: 'Gerichte durchsuchen',
  MEAL: 'Gericht',
  BOOKMARKED_MEAL_MSG: `Gericht gemerkt! Du wirst benachrichtigt, wenn das Gericht wieder auf der Speisekarte steht.`,
  UNBOOKMARKED_MEAL_MSG: `Gericht ist nicht mehr gemerkt.`,
  CONTINUE: 'Fortfahren',
  PLAN: 'Was gibt es heute in den Mensen?',
  PLANINFO: 'Hier findest du es heraus! Informationen über die Gerichte aller münsteraner Mensen an einem Platz.',
  EATINGTOGETHER: 'In Gesellschaft ist alles besser!',
  EATINGTOGETHERINFO: 'Verabrede dich mit deinen Freunden in einer Mensa.',
  CHOICE: 'Unverträglichkeiten oder Allergien?',
  CHOICEINFO:
    'Du bist beim Essen wählerisch oder hast einen sensiblen Magen? Dann nutze unsere Filterfunktion und lasse dir nur Gerichte anzeigen, die für dich interessant und verträglich sind.',
  HUNGRY: 'Bereits Hunger? Dann lege hier los!',
  REVIEWS: 'Reviews',
  WRITE_A_REVIEW: 'Schreibe eine Bewertung',
  ALL: 'Alle',
  TOMORROW: 'Morgen',
  THIS_WEEK: 'Diese Woche',
  NEXT_WEEK: 'Nächste Woche',
  ONE_DAY: 'Ein Tag',
  PERIOD: 'Zeitraum',
  FROM: 'Von',
  UNTIL: 'Bis',
  DAY: 'Tag',
  SELECT_DAY: 'Tag auswählen',
  SELECT_START_DATE: 'Startdatum auswählen',
  SELECT_END_DATE: 'Enddatum auswählen',
  SIGN_UP_EXPLANATION:
    'Bist du beim Essen wählerisch oder hast einen sensiblen Magen? Hinterlege Informationen zu deinen Vorlieben damit dir Gerichte angezeigt werden, die für dich interessant sind.',
  NONE: 'Keine',
  SIGN_IN_NEEDED_TO_CREATE_GROUP: 'Melde dich an um eine Gruppe zu erstellen!',
  SIGN_IN_NEEDED_TO_JOIN_GROUP: 'Melde dich an um einer Gruppe beizutreten!',
  SIGN_IN_NEEDED_TO_JOIN_AND_CREATE_GROUP: 'Melde dich an um Gruppen erstellen und beitreten zu können.',
  GROUPS_PAGE_HINT_01: 'Klicke auf das',
  GROUPS_PAGE_HINT_02: 'Symbol um eine Gruppe zu erstellen oder klicke auf das',
  GROUPS_PAGE_HINT_03: 'Symbol um einer Gruppe beizutreten.',
  WHO_WHEN_WHERE: 'Wer, Wann, Wo?',
  PLAN_MENSA_VISITS_WITH_YOUR_FRIENDS: 'Plane Mensabesuche mit deinen Freunden!',
  MEMBER: 'Mitglied',
  MEMBERS: 'Mitglieder',
  ATTENDING: 'Dabei',
  ABSENT: 'Abwesend',
  PARTICIPANT: 'Teilnehmer',
  PARTICIPANTS: 'Teilnehmer',
  MENSA_VISIT: 'Termin',
  MENSA_VISITS: 'Termine',
  CREATE_MENSA_VISIT: 'Termin hinzufügen',
  JOIN_CODE: 'Beitrittscode',
  LEAVE_GROUP: 'Gruppe verlassen',
  LEAVE: 'Verlassen',
  LEAVE_GROUP_CONFIRM_QUESTION: 'Gruppe wirklich verlassen?',
  CANCEL: 'Abbrechen',
  COPIED_TO_CLIPBOARD: 'In die Zwischenablage kopiert!',
  NEW_GROUP: 'Neue Gruppe',
  GROUP_NAME: 'Name der Gruppe',
  GROUP_INVITE_MESSAGE:
    'Hey!\nIch lade dich zu meiner Mensa-Gruppe {Group} ein! Nutze einfach den Code {Joincode} um beizutreten.',
  GROUP_INVITE_TITLE: 'Lade deine Freunde ein {Group} beizutreten',
  MEAL_SHARE_MESSAGE: 'Hey!\nSchau mal, bald gibt es {Meal} in der Mensa',
  MEAL_SHARE_TITLE: 'Teile {Meal} mit deinen Freunde',
  SHARE_GROUP: 'Gruppe teilen',
  SHARE_MEAL: 'Gericht teilen',
  COPY_TO_CLIPBOARD: 'In Zwischenablage kopieren',
  MEAL_SHARE_SUBJECT: 'Heute in der Mensa: {Meal}',
  GROUP_SHARE_SUBJECT: 'Tritt meiner Mensagruppe {Group} bei',
  TITLE: 'Titel',
  TIME: 'Zeit',
  DATE: 'Datum',
  MENSA: 'Mensa',
  GIVE_THIS_MENSA_VITIST_A_TITLE: 'Titel des Termins',
  CLICK_TO_CHOOSE_DATE: 'Klicken um Datum auszusuchen',
  CLICK_TO_CHOOSE_TIME: 'Klicken um Zeit auszusuchen',
  MENSA_VISIT_MISSING_FIELDS_MSG: 'Fülle folgende Felder:',
  MENSA_VISIT_CREATE_ERROR: 'Termin konnte nicht erstellt werden: unbekannter Fehler.',
  YOU_ARE_ALREADY_A_MEMBER_OF_THIS_GROUP: 'Du bist bereits Mitglied dieser Gruppe!',
  SUCCESSFULLY_JOINED_GROUP: 'Gruppe beigetreten!',
  DATE_OF_MENSA_VISIT_NEEDS_TO_BE_IN_THE_FUTURE: 'Der Zeitpunkt muss in der Zukunft liegen!',
  DELETE_MENSA_VISIT: 'Termin löschen',
  DELETE: 'Löschen',
  SHARE_GROUP_INVITE: 'Gruppeneinladung teilen',
  COPY_TEXT: 'Text kopieren',
  COPY: 'Kopieren',
  SHARE_VIA_EMAIL: 'Teilen via E-Mail',
  SEND: 'Senden',
  STORAGE: 'Speicher',
  CAMERA: 'Kamera',
  SELECT_SOURCE: 'Bildquelle auswählen'
};
