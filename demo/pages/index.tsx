import { Button, Link, Page, Spacer, Text } from '@geist-ui/core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FetchResult } from '../components/FetchResult';
import { useLazyRPC } from '../lib/rpc';
import { useTokens } from '../lib/useTokens';
import { listAccounts } from './api/accounts';

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
      <Link href="/">
        <Button htmlType="button" type="secondary">
          Logout
        </Button>
      </Link>
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
