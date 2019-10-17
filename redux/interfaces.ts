export interface ChatInterface {
  name: string;
  show: boolean;
  messages: [];
  message: string,
  dispatchToggle: ({}) => void;
  dispatchSendMessage: ({}) => void;
}
