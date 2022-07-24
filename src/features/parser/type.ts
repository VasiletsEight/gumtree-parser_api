import {Static} from "@sinclair/typebox";
import schema from "./schema";

export type RequestParserFileBody = Static<typeof schema.ParserFileBody>;

export interface UserData {
    name: string;
    phone: string;
}

export interface ParserFilePost {
    Body: RequestParserFileBody;
}



