/* eslint-disable import/prefer-default-export */
import { chatActions } from '../rootTypes';
import { ChatInterface } from '../interfaces';

export const sendMessage = (params: ChatInterface): object => ({
  type: chatActions.sendMessage,
  payload: { ...params },
});

export const initChat = (params: ChatInterface): object => ({
  type: chatActions.initChat,
  payload: { ...params },
});

export const toggle = (params: ChatInterface): object => ({
  type: chatActions.toggle,
  payload: { ...params },
});
