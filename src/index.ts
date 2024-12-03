import { Elysia } from "elysia";
import cron from "node-cron";
import swagger from "@elysiajs/swagger";
import v1Route from "./routes/v1";

const kugetregFetch = async () => {
    const response = await fetch("https://kugetreg.teerut.com");
    if (response.ok) {
        console.log("kugetreg is running");
    } else {
        console.log("kugetreg is not running");
    }
};

const kugetregApiFetch = async () => {
    const response = await fetch("https://kugetreg-api-latest.onrender.com");
    if (response.ok) {
        console.log("kugetreg api is running");
    } else {
        console.log("kugetreg api is not running");
    }
};

// every 20 seconds
cron.schedule("*/20 * * * * *", () => {
    console.log(`[${new Date().toLocaleString("th-TH")}] running a task every 20 seconds for kugetreg`);
    kugetregFetch();
    kugetregApiFetch();
});

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
