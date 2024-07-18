export interface Details {
  title: string;
  role?: string;
  duration?: string;
  description: string;
}

export interface AIResponse {
  textResponse?: string;
  functionResponse?: {
    name: FunctionName;
    arguments: string;
  };
}

export interface AIRequest {
  message: string;
}

export enum FunctionName {
  NAVIGATE = "navigateTo",
  GETASCIIQUOTE = "getAsciiQuote",
}
