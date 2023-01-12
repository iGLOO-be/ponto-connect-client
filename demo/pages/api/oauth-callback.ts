import { NextApiRequest, NextApiResponse } from 'next';
import { pontoConnectConfig } from './oauth';
import { httpClient } from '../../lib/client';
import { stringify } from 'querystring';
import { requestInitialTokens } from '../../../dist';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code /*, state, scope*/ } = req.query;

  if (!code) {
    res.status(400).send('Missing codes');
    return;
  }

  try {
    const tokens = (
      await requestInitialTokens(httpClient, {
        client_id: pontoConnectConfig.client_id,
        client_secret: pontoConnectConfig.client_secret,
        code_verifier: pontoConnectConfig.challenge,
        code: code.toString(),
        redirect_uri: 'http://localhost:3000/api/oauth-callback',
      })
    ).data;
    res.redirect(`/?${stringify({ tokens: JSON.stringify(tokens) })}`);
  } catch (error) {
    console.error((error as any).response?.data);
    res.json({
      error: (error as any).message,
      errorData: (error as any).response?.data,
    });
  }
}
