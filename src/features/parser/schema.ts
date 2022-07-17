import {Type} from '@sinclair/typebox'

const ParserCategoryBody = Type.Object({
    path: Type.String(),
});

const ParserAdvertisementBody = Type.Object({
    hrefs: Type.Array(Type.String()),
});

const ParserFileBody = Type.Object({
    users: Type.Array(
        Type.Object({
            name: Type.String(),
            phone: Type.String()
        })
    ),
});

const ParserCategorySchema = {schema: {body: ParserCategoryBody}};
const ParserAdvertisementSchema = {schema: {body: ParserAdvertisementBody}};
const ParserFileSchema = {schema: {body: ParserFileBody}};

export default {
    ParserCategoryBody,
    ParserAdvertisementBody,
    ParserFileBody,
    ParserAdvertisementSchema,
    ParserCategorySchema,
    ParserFileSchema
};