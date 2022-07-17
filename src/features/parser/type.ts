import {Static} from "@sinclair/typebox";
import schema from "./schema";

export type RequestParserCategoryBody = Static<typeof schema.ParserCategoryBody>;
export type RequestParserAdvertisementBody = Static<typeof schema.ParserAdvertisementBody>;
export type RequestFileBody = Static<typeof schema.ParserFileBody>;
export type UserData = RequestFileBody["users"][number];

export interface ParserCategoryPost {
    Body: RequestParserCategoryBody;
}

export interface ParserAdvertisementPost {
    Body: RequestParserAdvertisementBody;
}

export interface ParserFilePost {
    Body: RequestFileBody;
}


