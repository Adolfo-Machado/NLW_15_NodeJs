import fastify from "fastify";

const app = fastify();
const PORT = parseInt(process.env['SERVER_PORT'] || '3333');

app.get('/', () => {
    return 'Hello World';
})

app.get('/teste', () =>{
    return "Hello teste";
})

app.listen({ port: PORT }).then(() => {
    console.log(`Http server running on port:${PORT}`);
});