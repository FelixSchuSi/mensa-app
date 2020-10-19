import { HttpClient } from '@fhms-wi/http-client';

export const httpClient = new HttpClient({ baseURL: location.protocol + '//' + location.hostname + ':3000/api/' });
