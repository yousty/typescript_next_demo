import { chatActions } from '../rootTypes';
import { replaceArrayItem } from '../helpers';

export const INITIAL_STATE = {
  // chats: []
};

const chatState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case chatActions.initChat:
      return {
        chats: [...state.chats, { ...action.payload, messages: [] }],
      };
    case chatActions.sendMessage: {
      const { name, message } = action.payload;
      const foundChatIndex = state.chats.findIndex(chat => chat.name === name);
      const newChat = {
        ...state.chats[foundChatIndex],
        messages: [...state.chats[foundChatIndex], { ...message }],
      };
      const newChats = replaceArrayItem(
        [...state.chats],
        foundChatIndex,
        newChat,
      );

      return {
        chats: newChats,
      };
    }
    default:
      return state;
  }
};

export default chatState;
