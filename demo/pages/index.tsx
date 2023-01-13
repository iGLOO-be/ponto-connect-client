import { Button, Code, Link, Page, Spacer, Text } from '@geist-ui/core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FetchResult } from '../components/FetchResult';
import { useLazyRPC, useRPCMutate } from '../lib/rpc';
import { useTokens } from '../lib/useTokens';
import { listAccounts } from './api/accounts';
import { refreshToken } from './api/refresh-token';
import { stringify } from 'querystring';

const Home: NextPage = () => {
  return (
    <Page>
      <Text h1>Ponto Connect</Text>
      <Spacer h={3} />
      <Login />
      <Spacer h={3} />
      <ListAccounts />
    </Page>
  );
};

export default Home;

const Login = () => {
  const tokens = useTokens();
  if (tokens) {
    return (
      <>
        <div>
          <Link href="/">
            <Button htmlType="button" type="secondary">
              Logout
            </Button>
          </Link>

          <RefreshTokenButton style={{ marginLeft: 15 }} />
        </div>
        <Code block name="Tokens">
          {JSON.stringify(tokens, null, 2)}
        </Code>
      </>
    );
  }

  return (
    <Link href="/api/oauth">
      <Button htmlType="button" type="success">
        Login
      </Button>
    </Link>
  );
};

const ListAccounts = () => {
  const tokens = useTokens();
  return (
    <FetchResult
      title="List accounts"
      {...useLazyRPC([listAccounts, tokens?.access_token || ''])}
    />
  );
};

const RefreshTokenButton = ({ style }: { style?: React.CSSProperties }) => {
  const tokens = useTokens();
  const { mutate, error } = useRPCMutate('refreshToken', refreshToken);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <Button
        loading={loading}
        htmlType="button"
        type="warning"
        style={style}
        onClick={async () => {
          setLoading(true);
          const res = await mutate(tokens?.refresh_token || '');
          setLoading(false);
          if (res?.access_token) {
            window.location.replace(
              `/?${stringify({ tokens: JSON.stringify(res) })}`
            );
          }
        }}
      >
        Refresh Token
      </Button>
      {!!error && (
        <Text span type="error" style={{ marginLeft: 15 }}>
          {error.message}
        </Text>
      )}
    </>
  );
};
