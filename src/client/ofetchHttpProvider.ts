import { HttpProviderBase } from "../provider/httpProviderBase";
import { ofetch } from "ofetch";

export class OfetchHttpProvider implements HttpProviderBase {
  get(url: string) {
    return ofetch(url)
  }

  post<T>(url: string, data: unknown): Promise<T> {
      return ofetch(url, {
        method: "POST",
        body: JSON.stringify(data),
      })
  }
}