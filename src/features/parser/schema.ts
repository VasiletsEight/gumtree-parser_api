import {Type} from '@sinclair/typebox'

const ParserBody = Type.Object({
    path: Type.String(),
});

const ParserSchema = {schema: {body: ParserBody}};

export default {
    ParserBody,
    ParserSchema
};