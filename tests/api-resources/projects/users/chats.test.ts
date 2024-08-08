// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Invsy from 'invsy';
import { Response } from 'node-fetch';

const client = new Invsy({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource chats', () => {
  test('create: only required params', async () => {
    const responsePromise = client.projects.users.chats.create('proj123', 'user123', {
      share_path: '/custom/path',
      group_id: 'group123',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.projects.users.chats.create('proj123', 'user123', {
      share_path: '/custom/path',
      group_id: 'group123',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.projects.users.chats.retrieve('proj123', 'user123', 'chat123');
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
      client.projects.users.chats.retrieve('proj123', 'user123', 'chat123', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Invsy.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.projects.users.chats.update('proj123', 'user_id', 'chat123', {
      content: 'Hello, this is a message.',
      role: 'user',
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
    const response = await client.projects.users.chats.update('proj123', 'user_id', 'chat123', {
      content: 'Hello, this is a message.',
      role: 'user',
    });
  });

  test('list', async () => {
    const responsePromise = client.projects.users.chats.list('proj123', 'user123');
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
      client.projects.users.chats.list('proj123', 'user123', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Invsy.NotFoundError);
  });
});
