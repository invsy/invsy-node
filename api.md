# Chats

Types:

- <code><a href="./src/resources/chats.ts">Chat</a></code>
- <code><a href="./src/resources/chats.ts">Chats</a></code>
- <code><a href="./src/resources/chats.ts">ChatCreateResponse</a></code>
- <code><a href="./src/resources/chats.ts">ChatRetrieveResponse</a></code>
- <code><a href="./src/resources/chats.ts">ChatUpdateResponse</a></code>
- <code><a href="./src/resources/chats.ts">ChatListResponse</a></code>
- <code><a href="./src/resources/chats.ts">ChatDeleteResponse</a></code>
- <code><a href="./src/resources/chats.ts">ChatDeleteAllResponse</a></code>

Methods:

- <code title="post /projects/{project_id}/users/{user_id}/chats">client.chats.<a href="./src/resources/chats.ts">create</a>(projectId, userId, { ...params }) -> ChatCreateResponse</code>
- <code title="get /projects/{project_id}/users/{user_id}/chats/{chat_id}">client.chats.<a href="./src/resources/chats.ts">retrieve</a>(projectId, userId, chatId) -> ChatRetrieveResponse</code>
- <code title="put /projects/{project_id}/users/{user_id}/chats/{chat_id}">client.chats.<a href="./src/resources/chats.ts">update</a>(chatId, { ...params }) -> ChatUpdateResponse</code>
- <code title="get /projects/{project_id}/users/{user_id}/chats">client.chats.<a href="./src/resources/chats.ts">list</a>(projectId, userId) -> ChatListResponse</code>
- <code title="delete /projects/{project_id}/users/{user_id}/chats/{chat_id}">client.chats.<a href="./src/resources/chats.ts">delete</a>(projectId, userId, chatId) -> ChatDeleteResponse</code>
- <code title="delete /projects/{project_id}/users/{user_id}/chats">client.chats.<a href="./src/resources/chats.ts">deleteAll</a>(projectId, userId) -> ChatDeleteAllResponse</code>
