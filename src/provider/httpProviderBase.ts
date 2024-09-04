export interface HttpProviderBase {
  get<T>(url: string, opts?: { query?: {[key: string]: any }}): Promise<T>;
  post<T>(url: string, data: unknown): Promise<T>;
}
