import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../lib/prisma";

export async function checkIn(app: FastifyInstance) {
    app
        .withTypeProvider<ZodTypeProvider>()
        .get('/attendees/:attendeeId/check-in', {
            schema: {
                params: z.object({
                    attendeeId: z.coerce.number().int()
                }),
                response: {
                    201: z.null()
                }
            }
        }, async (request, reply) =>{

            const { attendeeId } = request.params;

            const attendee = await prisma.attendee.findUnique({
                where: {
                    id: attendeeId
                }
            });

            console.log('attendee: ', attendee);

            if (attendee == null) {
                throw new Error("Participante não encontrado.");
            }

            const attendeeCheckIn = await prisma.checkIn.findUnique({
                where: {
                    attendeeId
                }
            });

            if (attendeeCheckIn !== null) {
                throw new Error("Participante já fez check-in!");
            }

            await prisma.checkIn.create({
                data: {
                    attendeeId
                }
            })

            return reply.status(201).send()
        })
}