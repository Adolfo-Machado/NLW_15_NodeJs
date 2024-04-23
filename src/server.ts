import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from 'fastify-type-provider-zod'
import { checkIn, createEvent, getAttendeeBadge, getEvent, getEventAttendees, registerForEvent } from "./routes"
import { errorHandler } from "./error-handler";

const PORT = parseInt(process.env['SERVER_PORT'] || '3333');

export const app = fastify();

app.register(fastifyCors, {
    origin: '*',
});

app.register(fastifySwagger, {
    swagger: {
        consumes: ['application/json'],
        produces: ['application/json'],
        info: {
            title: "pass-in",
            description: "Api construida na NLW 15",
            version: "1.0.0"
        }
    },
    transform: jsonSchemaTransform
});

app.register(fastifySwaggerUi, {
    routePrefix: '/docs'
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);

app.setErrorHandler(errorHandler);

app.listen({ port: PORT }).then(() => {
    console.log(`Http server running on port:${PORT}`);
});