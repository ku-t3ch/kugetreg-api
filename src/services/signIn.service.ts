import crypto from "crypto";
import { axiosAPI } from "../utils/axiosAPI";
import { ISignInServiceResponse } from "../types/responses/ISignInServiceResponse";

const encodeString = (str: string) => {
    return crypto
        .publicEncrypt(
            {
                key: Bun.env.MYKU_PUBLIC_KEY!.replace(/\\n/gm, "\n"),
                padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            },
            new Uint8Array(Buffer.from(str, "utf8"))
        )
        .toString("base64");
};

interface ISignInServiceInput {
    username: string;
    password: string;
}

const SignInService = async (props: ISignInServiceInput) => {
    try {
        const res = await axiosAPI.post<ISignInServiceResponse>(
            "/auth/login",
            {
                username: encodeString(props.username),
                password: encodeString(props.password),
            },
            {
                headers: {
                    authority: "myapi.ku.th",
                    accept: "*/*",
                    "accept-language": "en-US,en;q=0.9,th-TH;q=0.8,th;q=0.7",
                    "app-key": "txCR5732xYYWDGdd49M3R19o1OVwdRFc",
                    "content-type": "application/json",
                    origin: "https://my.ku.th",
                    referer: "https://my.ku.th/",
                    "sec-ch-ua":
                        '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": '"macOS"',
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-site",
                    "user-agent":
                        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
                },
            }
        );
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default SignInService;
