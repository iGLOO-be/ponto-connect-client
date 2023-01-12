import {
  Button,
  Card,
  Code,
  Divider,
  Fieldset,
  Loading,
  Text,
} from '@geist-ui/core';
type FetcherError = Error & { info?: string; status?: number };

export const FetchResult = ({
  title,
  onClick,
  mutate,
  loading,
  isValidating,
  error,
  data,
  children,
  buttonLabel,
}: {
  title: string;
  onClick?: () => void | Promise<void>;
  mutate?: () => any;
  loading?: boolean;
  isValidating?: boolean;
  error?: FetcherError;
  data?: any;
  children?: React.ReactNode;
  buttonLabel?: string;
}) => {
  return (
    <Fieldset style={{ marginBottom: 20 }}>
      <Fieldset.Content>
        <Fieldset.Title>{title}</Fieldset.Title>
        {children && <div style={{ marginTop: 15 }}>{children}</div>}
        {onClick && (
          <div style={{ marginTop: 15 }}>
            <Button
              onClick={() => {
                onClick();
              }}
            >
              {buttonLabel || 'GET'}
            </Button>
          </div>
        )}
        {mutate && (
          <div style={{ marginTop: 15 }}>
            <Button
              onClick={() => {
                mutate();
              }}
            >
              {buttonLabel || 'Fetch'}
            </Button>
          </div>
        )}
      </Fieldset.Content>
      <Divider my={0} />
      <Fieldset.Content>
        {(loading || isValidating) && <Loading />}
        {error ? (
          <Card type="warning">
            <Text style={{ whiteSpace: 'pre-wrap' }}>
              {(error.status && `${error.status} ${error.info}`) ||
                error.message}
            </Text>
          </Card>
        ) : (
          data && (
            <div
              style={{ maxHeight: 600, overflow: 'auto', resize: 'vertical' }}
            >
              <Code my={0} block>
                {JSON.stringify(data, null, 2)}
              </Code>
            </div>
          )
        )}
      </Fieldset.Content>
    </Fieldset>
  );
};
