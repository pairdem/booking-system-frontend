import { index, type RouteConfig, route } from "@react-router/dev/routes";
import "./app.css";

export default [
  index("pages/Home.tsx"), // Home route
  route("oauth_success", "pages/OauthSuccess.tsx"),
  route("about", "pages/AboutUs.tsx"),
  route("*", "pages/NotFound.tsx"),
  route("explore", "pages/exploreMain.tsx"),
  route("book", "pages/Booking.tsx"),
] satisfies RouteConfig;
