import { ChatInterface, State, Action } from '../interfaces';
import { chatActions } from '../rootTypes';
import { replaceArrayItem } from '../helpers';

const INITIAL_STATE: State = {
  chats: [],
};

const chatState = (state = INITIAL_STATE, action: Action): State => {
  switch (action.type) {
    case chatActions.initChat: {
      const { name }: ChatInterface = action.payload;
      const init = [...state.chats].find(el => el.name === name) === undefined;
      const newChats = init ? (
        [...state.chats, {
          ...action.payload, init: true, messages: [],
        }]
      )
        : (
          [...state.chats]
        );

      return {
        chats: newChats,
      };
    }
    case chatActions.sendMessage: {
      const {
        name,
        message,
      }: ChatInterface = action.payload;
      const foundChatIndex = state.chats.findIndex(chat => chat.name === name);
      const newChat = {
        ...state.chats[foundChatIndex],
        messages: [...state.chats[foundChatIndex].messages, message],
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
    case chatActions.toggle: {
      const { name }: ChatInterface = action.payload;
      const foundChatIndex = state.chats.findIndex(chat => chat.name === name);
      const newChat = { ...state.chats[foundChatIndex], show: !state.chats[foundChatIndex].show };

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
