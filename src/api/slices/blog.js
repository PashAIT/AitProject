import ApiSlice from "../slice";

export default class HomeSlice extends ApiSlice {
  static baseURL = this.host + "/api/pages/blog";
  static GetBlogs(month, year) {
    return this.request({ method: "GET", url: `?month=${month}&year=${year}` });
  }
}
