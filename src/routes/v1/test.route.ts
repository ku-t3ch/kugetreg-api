import Elysia from "elysia";

const testRoute = new Elysia({
    prefix: "/test",
});

testRoute.get("/", async () => {
    return {
        message: `Hello from test route ${new Date().getTime()}`,
    };
});

export default testRoute;
