// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ChatsAPI from './chats';

export class Chats extends APIResource {
  /**
   * Create a new chat in a project
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
  ): Core.APIPromise<ChatRetrieveResponse> {
    return this._client.get(`/projects/${projectId}/users/${userId}/chats/${chatId}`, options);
  }

  update(
    chatId: string,
    params: ChatUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatUpdateResponse> {
    const { path_project_id, path_user_id, body_project_id, body_user_id, ...body } = params;
    return this._client.put(`/projects/${path_project_id}/users/${path_user_id}/chats/${chatId}`, {
      body: { project_id: body_project_id, user_id: body_user_id, ...body },
      ...options,
    });
  }

  list(projectId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<ChatListResponse> {
    return this._client.get(`/projects/${projectId}/users/${userId}/chats`, options);
  }

  /**
   * Delete chat by id for a user in a project
   */
  delete(
    projectId: string,
    userId: string,
    chatId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatDeleteResponse> {
    return this._client.delete(`/projects/${projectId}/users/${userId}/chats/${chatId}`, options);
  }

  /**
   * Delete all chats and messages by user id
   */
  deleteAll(
    projectId: string,
    userId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatDeleteAllResponse> {
    return this._client.delete(`/projects/${projectId}/users/${userId}/chats`, options);
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
    /**
     * The content of the message.
     */
    content: string | Array<Message.UnionMember1>;

    role: 'user' | 'assistant' | 'tool' | 'system';

    id?: string;

    created_at?: string;
  }

  export namespace Message {
    export interface UnionMember1 {
      toolCallId: string;

      toolName: string;

      type: string;

      result?: unknown | null;
    }
  }
}

export type Chats = Array<Chat>;

export interface ChatCreateResponse {
  result: Chat;

  success: boolean;
}

export interface ChatRetrieveResponse {
  result: Chat;

  success: boolean;
}

export interface ChatUpdateResponse {
  result: Chat;

  success: boolean;
}

export interface ChatListResponse {
  result: Chats;

  success: boolean;
}

export interface ChatDeleteResponse {
  success: boolean;

  result?: unknown | null;
}

export interface ChatDeleteAllResponse {
  success: boolean;

  result?: unknown | null;
}

export type ChatCreateParams = Record<string, string>;

export interface ChatUpdateParams {
  /**
   * Path param:
   */
  path_project_id: string;

  /**
   * Path param:
   */
  path_user_id: string;

  /**
   * Body param:
   */
  id: string;

  /**
   * Body param:
   */
  created_at: string;

  /**
   * Body param:
   */
  messages: Array<ChatUpdateParams.Message>;

  /**
   * Body param:
   */
  body_project_id: string;

  /**
   * Body param:
   */
  body_user_id: string;

  /**
   * Body param: Metadata for the chat
   */
  meta?: Record<string, string>;
}

export namespace ChatUpdateParams {
  export interface Message {
    /**
     * The content of the message.
     */
    content: string | Array<Message.UnionMember1>;

    role: 'user' | 'assistant' | 'tool' | 'system';

    id?: string;

    created_at?: string;
  }

  export namespace Message {
    export interface UnionMember1 {
      toolCallId: string;

      toolName: string;

      type: string;

      result?: unknown | null;
    }
  }
}

export namespace Chats {
  export import Chat = ChatsAPI.Chat;
  export import Chats = ChatsAPI.Chats;
  export import ChatCreateResponse = ChatsAPI.ChatCreateResponse;
  export import ChatRetrieveResponse = ChatsAPI.ChatRetrieveResponse;
  export import ChatUpdateResponse = ChatsAPI.ChatUpdateResponse;
  export import ChatListResponse = ChatsAPI.ChatListResponse;
  export import ChatDeleteResponse = ChatsAPI.ChatDeleteResponse;
  export import ChatDeleteAllResponse = ChatsAPI.ChatDeleteAllResponse;
  export import ChatCreateParams = ChatsAPI.ChatCreateParams;
  export import ChatUpdateParams = ChatsAPI.ChatUpdateParams;
}
