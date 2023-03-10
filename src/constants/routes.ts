import { IRoutes } from "./interface";

const routes: IRoutes = {
  home: "/",
  detail: "/launch",
  detailContent: "/launch/:id",

  api: "https://api.spacexdata.com/v5/launches",
};

export default routes;
