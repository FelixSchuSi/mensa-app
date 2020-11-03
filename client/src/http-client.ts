import { HttpClient } from '@fhms-wi/http-client';

// local development
// export const httpClient = new HttpClient({ baseURL: 'http:' + '//' + location.hostname + ':3443/api/' });

// production
export const httpClient = new HttpClient({ baseURL: 'https://mensa-app-5jrmv.ondigitalocean.app/api/' });
