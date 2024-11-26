import { Elysia, t } from "elysia";
import SignInService from "../../services/signIn.service";
import { AxiosError } from "axios";

const authRoute = new Elysia({
    prefix: "/auth",
});

authRoute.post(
    "/login",
    async ({ body }) => {
        try {
            const response = await SignInService(body);
            return response;
        } catch (error) {
            if (error instanceof AxiosError) {
                return {
                    status: error.response?.status,
                    message: error.response?.data,
                };
            }
        }
    },
    {
        body: t.Object({
            username: t.String(),
            password: t.String(),
        }),
    }
);

export default authRoute;
