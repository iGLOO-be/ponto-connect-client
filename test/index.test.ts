import * as Ponto from '../src';
import { Agent } from 'https';

describe('Ponto.Api', () => {
  it('works for init', () => {
    const httpsAgent = new Agent({
      cert: 'certificate',
      key: 'key',
      passphrase: 'passphrase',
    });
    const client = new Ponto.Api({
      httpsAgent,
      headers: {
        Accept: 'application/vnd.api+json',
        Authorization: `Bearer token`,
      },
    });

    expect(client).toBeInstanceOf(Ponto.Api);

    expect(
      client.accounts.listTransactions
    ).toBeInstanceOf(Function);
  });
});
