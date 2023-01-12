import { NextRpcConfig } from 'next-rpc';
import { client } from '../../lib/client';
import { wrapMethodErrorHandling } from '../../lib/rpcErrorHandling';

export const config: NextRpcConfig = {
  rpc: true,
  wrapMethod: wrapMethodErrorHandling,
};

export async function listAccounts(token: string) {
  return (
    await client.accounts.listAccounts(
      {},
      {
        headers: {
          Accept: 'application/vnd.api+json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
  ).data;
}
