import { chatActions } from './rootTypes';

export interface Person {
  name: string;
  show: boolean;
  init?: boolean;
}

export interface ChatInterface extends Person {
  messages?: string[];
  message?: string;
  dispatchToggle?: ({ name }: { name: string }) => void;
  dispatchSendMessage?: ({ name, message }: { name: string; message: string }) => void;
}

export interface State {
  chats: ChatInterface[];
}

export interface Action {
  type: chatActions;
  payload?: ChatInterface;
}
