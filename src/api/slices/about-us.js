import ApiSlice from "../slice";

export default class HomeSlice extends ApiSlice {
  static baseURL = this.host + "/api/pages/about";

  static GetTrainers() {
    return this.request({ method: "GET", url: "/trainers" });
  }
  static GetFaq() {
    return this.request({ method: "GET", url: "/faq" });
  }
}
