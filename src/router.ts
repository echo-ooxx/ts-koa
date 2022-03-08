import Router from "koa-router";
import DefaultController from "./controller/DefaultController";
import { Context } from "koa";

interface route {
  method: "get" | "post" | "delete";
  alias: string;
  path: string;
  action: (ctx: Context) => void;
}
const routes: route[] = [
  {
    method: "get",
    alias: "default/index",
    path: "/",
    action: DefaultController.index,
  },
];

const router = new Router();

routes.forEach((route) => {
  router[route.method](route.alias, route.path, route.action);
});

export default router;
