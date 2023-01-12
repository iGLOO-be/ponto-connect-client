import { useRouter } from 'next/router';

export type Tokens = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
};

export const useTokens = (): Tokens | undefined => {
  const router = useRouter();
  const { tokens } = router.query;

  if (tokens) {
    try {
      return JSON.parse(tokens.toString());
    } catch (error) {
      console.error(error);
      return;
    }
  }
};
