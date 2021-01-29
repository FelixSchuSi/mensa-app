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
- Das Frontend ist jetzt unter https://localhost:8080/ erreichbar.

#### Backend

**Umgebungsvariablen**  
Es sollte die Umgebungsvariable `URL` auf die Domain des Backends gesetzt werden. Für die lokale Entwicklung wäre dies `localhost:3443`. Dadurch werden die URLs des Image Service korrekt umgeschrieben. Dies ist notwendig, damit diese über den express-proxy des backends laufen. So kann der JWT inkludiert, und CORS Schwierigkeiten ([Safari blockiert alle Cross-Resource Cookies](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/)) umgangen werden.

- `cd server`
- `npm install`
- `export URL="localhost:3443"`
- `npm run watch:dev` Alternativ kann die Produktionsdatenbank mit `npm run watch:prod` angesteuert werden.
- Das Backend wartet unter http://localhost:3443/app/ auf Anfragen.

### Entwicklung mit Docker

1. `docker-compose up`
2. Frontend und Backend sind unter den oben genannten Adressen verfügbar.

## Deployment und Hosting

Der neuste Stand der Anwendung wird bei jedem push in diesem Repository live geschaltet.
Das Backend wird auf DigitalOcean's app platform gehostet, das Frontend wird mit Github pages bereitgestellt und ist unter https://mensa-app.dub-services.de/mensa-app/ erreichbar.
