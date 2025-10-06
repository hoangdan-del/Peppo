// routes/index.js
import AdminRoutes from "./AdminRouter";
import GuestRouters from "./GuestRouter";

export const routeConfig = [...AdminRoutes, ...GuestRouters];
