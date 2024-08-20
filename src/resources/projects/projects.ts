// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as UsersAPI from './users/users';

export class Projects extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

export namespace Projects {
  export import Users = UsersAPI.Users;
}
