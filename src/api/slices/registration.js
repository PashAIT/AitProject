import ApiSlice from "../slice";

export default class RegistrationSlice extends ApiSlice {
  static baseURL = this.host + "/api/pages/registration";

  static Register(body) {
    return this.request({ method: "POST", url: "" }, body);
  }
}
