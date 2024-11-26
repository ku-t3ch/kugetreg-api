import { Elysia } from "elysia";
import cron from "node-cron";

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

// every 40 seconds
cron.schedule("*/40 * * * * *", () => {
    console.log("running a task every 50 seconds for kugetreg");
    kugetregFetch();
    kugetregApiFetch();
});

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
