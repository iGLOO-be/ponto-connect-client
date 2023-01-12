import { WrapMethod } from 'next-rpc';
import { APIError } from '../../dist';

export const wrapMethodErrorHandling: WrapMethod = (method, meta) => {
  return async (...args) => {
    console.log(
      `Calling "${meta.name}" on "${meta.pathname}" with`,
      JSON.stringify(args, null, 2)
    );
    try {
      const result = await method(...args);
      console.log(`Result: `, result);
      return result;
    } catch (error) {
      console.error(error);
      if (error instanceof APIError) {
        const message = error.response?.data.message;
        if (message) {
          error.message += `\nMessage: ${message}`;
        }
        if (error.response?.data.description) {
          error.message += ` ${error.response?.data.description}`;
        }
      }
      throw error;
    }
  };
};
