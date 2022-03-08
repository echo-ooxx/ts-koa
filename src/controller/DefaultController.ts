import BaseController from "./BaseController";
import { Context } from "koa";
class DefaultController extends BaseController {
  index(ctx: Context) {
    ctx.body = "default/index";
  }
}

export default new DefaultController