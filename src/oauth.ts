import { HttpClient } from './client/pontoConnect';

type Scope = 'ai' | 'pi' | 'name' | 'offline_access';

const qs = (params: Record<string, string>) => {
  const urlSearchParams = new URLSearchParams();
  Object.keys(params).forEach(key => {
    const value = params[key as keyof typeof params];
    if (typeof value !== 'undefined') {
      urlSearchParams.append(key, value);
    }
  });
  return urlSearchParams.toString();
};

export const generateAuthUrl = ({
  auth_uri,
  client_id,
  response_type = 'code',
  response_mode = 'query',
  scopes,
  code_challenge,
  code_challenge_method = 'S256',
  state,
  redirect_uri,
}: {
  auth_uri: string;
  client_id: string;
  response_type?: string;
  response_mode?: string;
  scopes: Scope[];
  code_challenge: string;
  code_challenge_method?: string;
  state: string;
  redirect_uri: string;
}) =>
  `${auth_uri}?${qs({
    client_id: client_id,
    response_type,
    response_mode,
    scope: scopes.join(' '),
    code_challenge,
    code_challenge_method,
    state,
    redirect_uri,
  })}`;

export const requestInitialTokens = async (
  httpClient: HttpClient<unknown>,
  {
    client_id,
    client_secret,
    code_verifier,
    code,
    redirect_uri,
  }: {
    client_id: string;
    client_secret: string;
    code_verifier: string;
    code: string;
    redirect_uri: string;
  }
) =>
  httpClient.request({
    path: '/ponto-connect/oauth2/token',
    method: 'POST',
    body: qs({
      grant_type: 'authorization_code',
      code,
      code_verifier,
      redirect_uri,
      client_id,
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/vnd.api+json',
      Authorization:
        'Basic ' +
        Buffer.from(client_id + ':' + client_secret).toString('base64'),
    },
  });
