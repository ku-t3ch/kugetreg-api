import Elysia from "elysia";
import authRoute from "./auth";

const v1Route = new Elysia({
    prefix: "/v1",
});

v1Route.use(authRoute);

export default v1Route;
