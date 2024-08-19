// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Invsy from 'invsy';
import { Response } from 'node-fetch';

const client = new Invsy({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource chats', () => {
  test('create: only required params', async () => {
    const responsePromise = client.projects.users.chats.create(
      '7240303bcfc8a079bf67c2caa08b5d29',
      '3db648cbb7f933aeb705b821c47c0e39',
      { share_path: '/custom/path', group_id: 'group123' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.projects.users.chats.create(
      '7240303bcfc8a079bf67c2caa08b5d29',
      '3db648cbb7f933aeb705b821c47c0e39',
      { share_path: '/custom/path', group_id: 'group123' },
    );
  });

  test('retrieve', async () => {
    const responsePromise = client.projects.users.chats.retrieve(
      '7240303bcfc8a079bf67c2caa08b5d29',
      '3db648cbb7f933aeb705b821c47c0e39',
      '1febfa740898c02b25897949bf6961ad',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.users.chats.retrieve(
        '7240303bcfc8a079bf67c2caa08b5d29',
        '3db648cbb7f933aeb705b821c47c0e39',
        '1febfa740898c02b25897949bf6961ad',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Invsy.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.projects.users.chats.update('1febfa740898c02b25897949bf6961ad', {
      path_project_id: '7240303bcfc8a079bf67c2caa08b5d29',
      path_user_id: '3db648cbb7f933aeb705b821c47c0e39',
      id: '1febfa740898c02b25897949bf6961ad',
      created_at: '2024-08-08T21:19:38.855Z',
      messages: [
        {
          id: '9f07c436ad3ecb7cb446e5e66400e1e3',
          content: 'Hello, this is a message.',
          created_at: '2024-08-08T21:19:38.855Z',
          role: 'user',
        },
        {
          id: '9f07c436ad3ecb7cb446e5e66400e1e3',
          content: 'Hello, this is a message.',
          created_at: '2024-08-08T21:19:38.855Z',
          role: 'user',
        },
        {
          id: '9f07c436ad3ecb7cb446e5e66400e1e3',
          content: 'Hello, this is a message.',
          created_at: '2024-08-08T21:19:38.855Z',
          role: 'user',
        },
      ],
      body_project_id: '7240303bcfc8a079bf67c2caa08b5d29',
      body_user_id: '3db648cbb7f933aeb705b821c47c0e39',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.projects.users.chats.update('1febfa740898c02b25897949bf6961ad', {
      path_project_id: '7240303bcfc8a079bf67c2caa08b5d29',
      path_user_id: '3db648cbb7f933aeb705b821c47c0e39',
      id: '1febfa740898c02b25897949bf6961ad',
      created_at: '2024-08-08T21:19:38.855Z',
      messages: [
        {
          id: '9f07c436ad3ecb7cb446e5e66400e1e3',
          content: 'Hello, this is a message.',
          created_at: '2024-08-08T21:19:38.855Z',
          role: 'user',
        },
        {
          id: '9f07c436ad3ecb7cb446e5e66400e1e3',
          content: 'Hello, this is a message.',
          created_at: '2024-08-08T21:19:38.855Z',
          role: 'user',
        },
        {
          id: '9f07c436ad3ecb7cb446e5e66400e1e3',
          content: 'Hello, this is a message.',
          created_at: '2024-08-08T21:19:38.855Z',
          role: 'user',
        },
      ],
      body_project_id: '7240303bcfc8a079bf67c2caa08b5d29',
      body_user_id: '3db648cbb7f933aeb705b821c47c0e39',
      meta: { share_path: '/custom/path', group_id: 'group123' },
    });
  });

  test('list', async () => {
    const responsePromise = client.projects.users.chats.list(
      '7240303bcfc8a079bf67c2caa08b5d29',
      '3db648cbb7f933aeb705b821c47c0e39',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.users.chats.list(
        '7240303bcfc8a079bf67c2caa08b5d29',
        '3db648cbb7f933aeb705b821c47c0e39',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Invsy.NotFoundError);
  });
});
