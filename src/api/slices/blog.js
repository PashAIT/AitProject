import ApiSlice from "../slice";

export default class BlogsSlice extends ApiSlice {
  static baseURL = this.host + "/api/pages/blog";
  static GetBlogs(month, year) {
    return this.request({ method: "GET", url: `?month=${month}&year=${year}` });
  }
  static GetBlogDetailed(id) {
    return this.request({ method: "GET", url: `/${id}` });
  }
}
