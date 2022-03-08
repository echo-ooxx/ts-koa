import Koa from "koa";
import router from "./src/router";
import { PORT } from "./src/config/env";

const app = new Koa();

app.use(router.routes());

app.listen(PORT);
