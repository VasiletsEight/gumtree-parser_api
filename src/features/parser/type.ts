import {Static} from "@sinclair/typebox";
import schema from "./schema";

export interface UserData {
    name: string;
    phone: string;
}

export interface ParserPost {
    Body: RequestParserBody;
}

export type RequestParserBody = Static<typeof schema.ParserBody>;
