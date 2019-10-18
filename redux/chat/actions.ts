/* eslint-disable import/prefer-default-export */
import { chatActions } from '../rootTypes';
import { Action, Person } from '../interfaces';

export const sendMessage = (params: Person): Action => ({
  type: chatActions.sendMessage,
  payload: { ...params },
});

export const initChat = (params: Person): Action => ({
  type: chatActions.initChat,
  payload: { ...params },
});

export const toggle = (params: Person): Action => ({
  type: chatActions.toggle,
  payload: { ...params },
});
