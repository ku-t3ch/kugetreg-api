import crypto from "crypto";
import { axiosAPI } from "../utils/axiosAPI";
import { ISignInServiceResponse } from "../types/responses/ISignInServiceResponse";

const encodeString = (str: string) => {
    return crypto
        .publicEncrypt(
            {
                key: process.env.MYKU_PUBLIC_KEY!.replace(/\\n/gm, "\n"),
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
        const res = await axiosAPI.post<ISignInServiceResponse>("/auth/login", {
            username: encodeString(props.username),
            password: encodeString(props.password),
        });

        console.log(res.data);
        

        return res.data;
    } catch (error) {
        throw error;
    }
};

export default SignInService;
