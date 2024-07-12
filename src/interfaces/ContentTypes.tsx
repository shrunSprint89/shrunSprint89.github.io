export interface Details {
  title: string;
  role?: string;
  duration?: string;
  description: string;
}

export interface AIResponse {
  textResponse?: string;
  functionResponse?: {
    name: string;
    arguments: string;
  };
}

export interface AIRequest {
  message: string;
}
