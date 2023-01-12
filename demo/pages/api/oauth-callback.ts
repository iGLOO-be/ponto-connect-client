import { NextApiRequest, NextApiResponse } from 'next';
import { pontoConnectConfig } from './oauth';
import { httpClient } from '../../lib/client';
import { stringify } from 'querystring';

// Request Initial Tokens
// https://documentation.ibanity.com/ponto-connect/2/api/curl#request-initial-tokens
const getToken = async (code: string) => {
  const params = {
    grant_type: 'authorization_code',
    code,
    code_verifier: pontoConnectConfig.challenge,
    redirect_uri: 'http://localhost:3000/api/oauth-callback',
    client_id: pontoConnectConfig.client_id,
  };

  const urlSearchParams = new URLSearchParams();
  Object.keys(params).forEach(key => {
    const value = params[key as keyof typeof params];
    if (typeof value !== 'undefined') {
      urlSearchParams.append(key, value);
    }
  });

  try {
    const res = await httpClient.request({
      baseURL: 'https://api.ibanity.com',
      path: '/ponto-connect/oauth2/token',
      method: 'POST',
      body: urlSearchParams,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/vnd.api+json',
        Authorization:
          'Basic ' +
          Buffer.from(
            pontoConnectConfig.client_id +
              ':' +
              pontoConnectConfig.client_secret
          ).toString('base64'),
      },
    });

    return res.data;
  } catch (error) {
    return {
      error: (error as any).message,
      errorData: (error as any).response?.data,
    };
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code /*, state, scope*/ } = req.query;

  if (!code) {
    res.status(400).send('Missing codes');
    return;
  }

  const tokens = await getToken(code.toString());

  res.redirect(`/?${stringify({ tokens: JSON.stringify(tokens) })}`);
}
