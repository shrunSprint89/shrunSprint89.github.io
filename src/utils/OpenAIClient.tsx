import { AIResponse } from "../interfaces/ContentTypes";

export class AICompletions {
  get url(): string {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      return "http://localhost:3003/openai";
    } else {
      return "https://shrunsprint89apiserver-production.up.railway.app/openai";
    }
  }

  public async getFunctionCallFromServer(input: String): Promise<AIResponse> {
    const body = JSON.stringify({
      input,
    });
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const method = "POST";

    const resp = await fetch(this.url, {
      method,
      headers,
      body,
    });
    const json: AIResponse = await resp.json();
    return json;
  }
}
