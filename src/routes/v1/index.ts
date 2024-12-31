import Elysia from "elysia";
import searchRoute from "./searchSong";

const v1Route = new Elysia({
    prefix: "/v1",
});

v1Route.use(searchRoute);

export default v1Route;
