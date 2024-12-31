import { Elysia, t } from "elysia";
import { AxiosError } from "axios";
import SearchSongService from "../../../services/searchSong.service";

const searchRoute = new Elysia({
    prefix: "/search",
});

searchRoute.post(
    "/song",
    async ({ body }) => {
        try {
            const response = await SearchSongService(body);
            return response;
        } catch (error) {
            if (error instanceof AxiosError) {
                return {
                    status: error.response?.status,
                    message: error.response?.data ?? error.message,
                };
            }
        }
    },
    {
        body: t.Object({
            query: t.String({
                minLength: 1,
            }),
        }),
        detail: {
            tags: ["Auth"],
        },
    }
);

export default searchRoute;
