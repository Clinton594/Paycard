import { IRoutes } from "./interface";

const routes: IRoutes = {
  home: "/",
  detail: "/detail",

  api: process.env.REACT_APP_API + "/process/custom",
};

export default routes;
