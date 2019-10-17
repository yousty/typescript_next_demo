/* eslint-disable import/prefer-default-export */
import { chatActions } from '../rootTypes';

export const sendMessage = params => ({
  type: chatActions.sendMessage,
  payload: { ...params },
});

export const initChat = params => ({
  type: chatActions.initChat,
  payload: { ...params },
});

export const toggle = params => ({
  type: chatActions.toggle,
  payload: { ...params },
});
