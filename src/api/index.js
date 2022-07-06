import HomeSlice from "./slices/home";
import AboutUsSlice from "./slices/about-us";
import BlogsSlice from "./slices/blog";

export default class Api {
  static Home = HomeSlice;
  static AboutUs = AboutUsSlice;
  static Blogs = BlogsSlice;
}
