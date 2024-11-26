import Elysia from "elysia";
import authRoute from "./auth";
import testRoute from "./test.route";

const v1Route = new Elysia({
    prefix: "/v1",
});

v1Route.use(authRoute);
v1Route.use(testRoute);

export default v1Route;
