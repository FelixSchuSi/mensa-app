import { HttpClient } from '../client-packages/http-client/http-client';

// @ts-ignore
const baseURL: string = ISPROD ? 'https://mensa-app-5jrmv.ondigitalocean.app/api/' : `http://${location.hostname}:3443/api/`;

export const httpClient = new HttpClient({ baseURL });
