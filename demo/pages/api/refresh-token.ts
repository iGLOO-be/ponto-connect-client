import { NextRpcConfig } from 'next-rpc';
import { TokenResource } from '../../../dist';
import { requestAccessToken } from '../../lib/client';
import { wrapMethodErrorHandling } from '../../lib/rpcErrorHandling';

export const config: NextRpcConfig = {
  rpc: true,
  wrapMethod: wrapMethodErrorHandling,
};

export async function refreshToken(token: string) {
  return (await requestAccessToken(token)).data;
}
