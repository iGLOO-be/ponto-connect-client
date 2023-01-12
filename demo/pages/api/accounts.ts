import { NextRpcConfig } from 'next-rpc';
import { createClient } from '../../lib/client';
import { wrapMethodErrorHandling } from '../../lib/rpcErrorHandling';

export const config: NextRpcConfig = {
  rpc: true,
  wrapMethod: wrapMethodErrorHandling,
};

export async function listAccounts(token: string) {
  return (await createClient(token).accounts.listAccounts()).data;
}
