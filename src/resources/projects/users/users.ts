// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ChatsAPI from './chats';

export class Users extends APIResource {
  chats: ChatsAPI.Chats = new ChatsAPI.Chats(this._client);
}

export namespace Users {
  export import Chats = ChatsAPI.Chats;
  export import Chat = ChatsAPI.Chat;
  export import ChatCreateResponse = ChatsAPI.ChatCreateResponse;
  export import ChatRetrieveResponse = ChatsAPI.ChatRetrieveResponse;
  export import ChatUpdateResponse = ChatsAPI.ChatUpdateResponse;
  export import ChatListResponse = ChatsAPI.ChatListResponse;
  export import ChatCreateParams = ChatsAPI.ChatCreateParams;
  export import ChatUpdateParams = ChatsAPI.ChatUpdateParams;
}
