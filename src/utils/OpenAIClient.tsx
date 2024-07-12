import { AIResponse } from "../interfaces/ContentTypes";

export class AICompletions {
  private url =
    "https://shrunsprint89apiserver-production.up.railway.app/openai";

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
