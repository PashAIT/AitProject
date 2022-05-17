import ApiSlice from "../slice";

export default class HomeSlice extends ApiSlice {
  static baseURL = this.host + "/api/pages/home";

  static GetFeedbacks() {
    return this.request({ method: "GET", url: "/feedbacks" });
  }
}
