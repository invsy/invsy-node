// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ChatsAPI from './chats';

export class Chats extends APIResource {
  /**
   * Create a new chat within a project
   */
  create(
    projectId: string,
    userId: string,
    body: ChatCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatCreateResponse> {
    return this._client.post(`/projects/${projectId}/users/${userId}/chats`, { body, ...options });
  }

  retrieve(
    projectId: string,
    userId: string,
    chatId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Chat> {
    return this._client.get(`/projects/${projectId}/users/${userId}/chats/${chatId}`, options);
  }

  update(
    projectId: string,
    userId: string,
    chatId: string,
    body: ChatUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Chat> {
    return this._client.put(`/projects/${projectId}/users/${userId}/chats/${chatId}`, { body, ...options });
  }

  list(projectId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<Chats> {
    return this._client.get(`/projects/${projectId}/users/${userId}/chats`, options);
  }
}

export interface Chat {
  id: string;

  created_at: string;

  messages: Array<Chat.Message>;

  project_id: string;

  user_id: string;

  /**
   * Metadata for the chat
   */
  meta?: Record<string, string>;
}

export namespace Chat {
  export interface Message {
    id: string;

    content: string;

    created_at: string;

    role: 'user' | 'assistant';
  }
}

export type Chats = Array<Chat>;

export interface ChatCreateResponse {
  id: string;

  created_at: string;

  project_id: string;

  user_id: string;
}

export type ChatCreateParams = Record<string, string>;

export interface ChatUpdateParams {
  content: string;

  role: 'user' | 'assistant' | 'tool';
}

export namespace Chats {
  export import Chat = ChatsAPI.Chat;
  export import Chats = ChatsAPI.Chats;
  export import ChatCreateResponse = ChatsAPI.ChatCreateResponse;
  export import ChatCreateParams = ChatsAPI.ChatCreateParams;
  export import ChatUpdateParams = ChatsAPI.ChatUpdateParams;
}
