# mensa-app

Informiere dich über aktuelle Gerichte der Mensen in Münster, verabrede dich zum Essen mit deinen Freunden und werde benachrichtigt, wenn dein Lieblingsgericht serviert wird.

## Entwicklung

Die Anwendung kannn entweder lokal, oder mit Docker entwickelt werden.

### Entwicklung ohne Docker

Wenn ohne Docker entwickelt wird muss das Frontend und das Backend separat gestartet werden.

#### Frontend

- `cd client`
- `npm install`
- `npm start`
- Das Frontend ist jetzt unter https://localhost:8080/mensa-app/ erreichbar.

#### Backend

- `cd server`
- `npm install`
- `npm run watch:dev` Alternativ kann die Produktionsdatenbank mit `npm run watch:prod` angesteuert werden.
- Das Backend wartet unter http://localhost:3443/app/ auf Anfragen.

### Entwicklung mit Docker

1. `docker-compose up`
2. Frontend und Backend sind unter den oben genannten Adressen verfügbar.

## Deployment und Hosting

Das Frontend wird mithilfe von Github Pages bereitgestellt. Soll ein neuer Stand des Frontends live geschaltet werden kann dies mit `cd client && npm run deploy` getätigt werden.
Das Backend wird auf DigitalOcean's app platform gehostet. Mit jedem push in diesem Repository wird automatisch der neuste Stand des Backends bereitgestellt.

Test
