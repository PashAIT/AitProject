import HomeSlice from "./slices/home";
import AboutUsSlice from "./slices/about-us";
import BlogsSlice from "./slices/blog";
import RegistrationSlice from "./slices/registration";
export default class Api {
  static Home = HomeSlice;
  static AboutUs = AboutUsSlice;
  static Blogs = BlogsSlice;
  static Registration = RegistrationSlice;
}
