import { HttpClient } from '@fhms-wi/http-client';

const isProd = !!process.env.ISPROD;

const baseURL: string = isProd ? 'https://mensa-app-5jrmv.ondigitalocean.app/api/' : `http://${location.hostname}:3443/api/`;

export const httpClient = new HttpClient({ baseURL });
