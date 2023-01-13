import * as Ponto from '../../dist';
import https from 'https';
import fs from 'fs';
import path from 'path';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false, // (NOTE: this will disable client verification)
  cert: fs.readFileSync(path.join(process.cwd(), 'lib/certificate.pem')),
  key: fs.readFileSync(path.join(process.cwd(), 'lib/key.pem')),
  passphrase: process.env.NEXT_PONTOCONNECT_CERTIFICATEPASSPHRASE,
});

export const createClient = (token: string) =>
  new Ponto.Api({
    httpsAgent,
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
  });

export const httpClient = new Ponto.HttpClient({
  httpsAgent,
});

export const requestAccessToken = (token: string) =>
  Ponto.requestAccessToken(httpClient, {
    client_id: process.env.NEXT_PONTOCONNECT_CLIENTID || '',
    client_secret: process.env.NEXT_PONTOCONNECT_CLIENTSECRET || '',
    refresh_token: token,
  });
