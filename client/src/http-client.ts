import { HttpClient } from '@fhms-wi/http-client';

export const httpClient = new HttpClient({ baseURL: 'https:' + '//' + location.hostname + ':3443/api/' });
