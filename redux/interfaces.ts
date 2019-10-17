export interface ChatInterface {
  name: string;
  show: boolean;
  messages: string[];
  message: string;
  dispatchToggle: () => void;
  dispatchSendMessage: () => void;
}
