import axios from "axios";

export class PokeAdapter {
  private readonly _axios = axios;
  async post(url: string, data: any) {
    return this._axios.post(`${url}`, data);
  }

  async patch(url: string, id: number, data: any) {
    return this._axios.patch(`${url}/${id}`, data);
  }

  async get<T>(url: string) {
    return await this._axios.get<T>(`${url}`);
  }
}
