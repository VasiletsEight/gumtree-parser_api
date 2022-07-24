import {Type} from '@sinclair/typebox'

const ParserFileBody = Type.Object({
    path: Type.String(),
});

const ParserAdvertisementBody = Type.Object({
    hrefs: Type.Array(Type.String()),
});

const ParserFileSchema = {schema: {body: ParserFileBody}};
const ParserAdvertisementSchema = {schema: {body: ParserAdvertisementBody}};

export default {
    ParserAdvertisementBody,
    ParserFileBody,
    ParserAdvertisementSchema,
    ParserFileSchema
};