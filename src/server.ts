import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'
import { createEvent } from "./routes/create-even";
import { registerForEvent } from "./routes/register-for-event";
import { getEvent } from "./routes/get-event";

export const app = fastify();
const PORT = parseInt(process.env['SERVER_PORT'] || '3333');

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);

app.listen({ port: PORT }).then(() => {
    console.log(`Http server running on port:${PORT}`);
});