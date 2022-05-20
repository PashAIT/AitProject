import { HOST } from "src/providers/constants";
import axios from "axios";

export default class ApiSlice {
  static host = HOST;
  static baseURL = HOST + `/api`;
  static defaultAuth = false;

  static redirectToLogin = null;

  static async request(destination, payload = null, options = null) {
    let headers = {};

    if (this.defaultAuth || options?.auth) {
      headers.token = localStorage.getItem("token") || ``; // for most of requests;
    }

    if (options) {
      if (options.headers) {
        headers = { ...headers, ...options.headers };
      }
    }

    try {
      const rsp = (
        (await axios({
          method: destination.method,
          url:
            (`useBaseUrl` in destination && !destination.useBaseUrl
              ? ""
              : this.baseURL) + destination.url,
          headers,
          data: payload || {},
        })) || {}
      ).data;
      // console.log(`end loading`);
      return rsp;
    } catch (err) {
      if (err?.response?.status === 401) {
        localStorage.removeItem(`token`);
        if (this.redirectToLogin) {
          return this.redirectToLogin();
        }
      }

      return err.response?.data || err;
    }
  }
}
