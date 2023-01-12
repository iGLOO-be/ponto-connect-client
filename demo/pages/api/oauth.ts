import { NextApiRequest, NextApiResponse } from 'next';
import CryptoJS from 'crypto-js';

export const pontoConnectConfig = {
  client_id: process.env.NEXT_PONTOCONNECT_CLIENTID || '',
  client_secret: process.env.NEXT_PONTOCONNECT_CLIENTSECRET || '',
  auth_uri: 'https://sandbox-authorization.myponto.com/oauth2/auth',
  scopes: ['ai', 'pi', 'name', 'offline_access'],
  challenge: process.env.NEXT_PONTOCONNECT_CHALLENGE || '',
};

const base64URLEncode = (str: any) => {
  return CryptoJS.enc.Base64.stringify(str)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
};
// const getVerifier = () => base64URLEncode(CryptoJS.lib.WordArray.random(32));
const getChallenge = (verifier: string) =>
  base64URLEncode(CryptoJS.SHA256(verifier));

const generateAuthUrl = () => {
  const params = {
    client_id: pontoConnectConfig.client_id,
    response_type: 'code',
    redirect_uri: 'http://localhost:3000/api/oauth-callback',
    response_mode: 'query',
    scope: pontoConnectConfig.scopes.join(' '),
    code_challenge: getChallenge(pontoConnectConfig.challenge),
    code_challenge_method: 'S256',
    state: 'pontoConnect',
  };
  return `${pontoConnectConfig.auth_uri}?${Object.keys(params)
    .map(p => `${p}=${encodeURIComponent(params[p as keyof typeof params])}`)
    .join('&')}`;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const uri = generateAuthUrl();
  res.redirect(uri);
}
