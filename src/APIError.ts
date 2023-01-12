import { AxiosError } from 'axios';

export class APIError extends AxiosError<{
  statusCode: number;
  timestamp: string;
  message: string | string[];
  path: string;
  description?: string;
}> {}
