export interface ChatInterface {
  name: string;
  show: boolean;
  messages: string[];
  message: string;
  dispatchToggle: ({ name }: { name: string }) => void;
  dispatchSendMessage: ({ name, message }: { name: string; message: string }) => void;
}
