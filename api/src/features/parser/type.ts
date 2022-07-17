import {Static} from "@sinclair/typebox";
import schema from "./schema";

export interface ParserPost {
    Body: RequestParserBody;
}

export type RequestParserBody = Static<typeof schema.ParserBody>;
