# mensa-app
Informiere dich über aktuelle Gerichte der Mensen in Münster, verabrede dich zum Essen mit deinen Freunden und werde benachrichtigt, wenn dein Lieblingsgericht serviert wird.
## Entwicklung
Die Anwendung kannn entweder lokal, oder mit Docker entwicklet werden.

### Entwicklung ohne Docker
- Frontend
   1. `cd client`
   2. `npm install`
   3. `npm start`
   4. Das Frontend ist jetzt unter https://localhost:8080/mensa-app/ erreichbar.
- Backend
    1. `cd server`
    2. `npm install`
    3. `npm start`
    4. Das Backend wartet unter http://localhost:3443/app/ auf Anfragen.

### Entwicklung mit Docker
1. `docker-compose up`
2. Frontend und Backend sind unter den oben genannten Adressen verfügbar.

## Deployment und Hosting
Das Frontend wird mithilfe von Github Pages bereitgestellt. Soll ein neuer Stand des Frontends live geschaltet werden kann dies mit `cd client && npm run deploy` getätigt werden.
Das Backend wird auf DigitalOcean's app platform gehostet. Mit jedem push in diesem Repository wird automatisch der neuste Stand des Backends bereitgestellt.