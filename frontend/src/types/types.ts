export interface User {
    id: string;
    name: string;
    email?: string;
    avatar: string;
    online: boolean;
    lastSeen?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}


export interface Message {
  from: string;
  text: string;
  time: string;
}

export interface Conversation {
  id: string;
  lastMessage: string;
  lastTime: string;
  unread: number;
  participants: string[];
  messages: Message[];
}
