import yts from "yt-search";

interface ISearchSongInput {
    query: string;
}

const SearchSongService = async (props: ISearchSongInput) => {
    try {
        const r = await yts(`${props.query} คาราโอเกะ`);
        return r;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default SearchSongService;
