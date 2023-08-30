import {
  generateAuthUrl,
  requestAccessToken,
  requestInitialTokens,
} from '../src';

describe('generateAuthUrl', () => {
  it('should be a function', () => {
    expect(typeof generateAuthUrl).toBe('function');
  });
  it('should works', () => {
    expect(
      generateAuthUrl({
        auth_uri: 'https://example.com',
        client_id: 'client_id',
        scopes: ['name'],
        code_challenge: 'code_challenge',
        state: 'state',
        redirect_uri: 'https://example.com',
      })
    ).toEqual(
      'https://example.com?client_id=client_id&response_type=code&response_mode=query&scope=name&code_challenge=code_challenge&code_challenge_method=S256&state=state&redirect_uri=https%3A%2F%2Fexample.com'
    );
  });
});

describe('requestAccessToken', () => {
  it('should be a function', () => {
    expect(typeof requestAccessToken).toBe('function');
  });
});

describe('requestInitialTokens', () => {
  it('should be a function', () => {
    expect(typeof requestInitialTokens).toBe('function');
  });
});
