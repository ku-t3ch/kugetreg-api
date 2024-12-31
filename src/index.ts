import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";
import v1Route from "./routes/v1";

const app = new Elysia()
    .use(
        swagger({
            path: "/v1/swagger",
            documentation: {
                tags: [
                    { name: "Auth", description: "Authentication endpoints" },
                ],
            },
        })
    )
    .use(v1Route)
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
