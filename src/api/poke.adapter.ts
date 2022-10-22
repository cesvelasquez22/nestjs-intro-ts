import axios from "axios";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

export class PokeFetchAdapter implements HttpAdapter {
  async get<T>(url: string) {
    const res = await fetch(`${url}`);
    const data: T = await res.json();
    return data;
  }
}

export class PokeAdapter implements HttpAdapter {
  private readonly _axios = axios;
  async post(url: string, data: any) {
    return this._axios.post(`${url}`, data);
  }

  async patch(url: string, id: number, data: any) {
    return this._axios.patch(`${url}/${id}`, data);
  }

  async get<T>(url: string) {
    const { data } = await this._axios.get<T>(`${url}`);
    return data;
  }
}
