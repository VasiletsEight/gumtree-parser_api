import {Static} from "@sinclair/typebox";
import schema from "./schema";

export type RequestParserBody = Static<typeof schema.ParserBody>;

export interface ReplayParser {
    name: string;
    phone: string;
}

export interface ParserPost {
    Body: RequestParserBody;
    Replay: ReplayParser;
}



