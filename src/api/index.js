import HomeSlice from "./slices/home";
import AboutUsSlice from "./slices/about-us";
import BlogsSlice from "./slices/blog";
import ApiSlice from "./slice";

export default class Api extends ApiSlice {
  static Home = HomeSlice;
  static AboutUs = AboutUsSlice;
  static Blogs = BlogsSlice;
  static baseURL = this.host + "/api/pages/";
  static Register(body) {
    return this.request({ method: "POST", url: "registration" }, body);
  }
  static SendQuestion(body) {
    return this.request({ method: "POST", url: "contacts/send-message" }, body);
  }
}
