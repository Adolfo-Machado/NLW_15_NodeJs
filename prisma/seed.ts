import { prisma } from './../src/lib/prisma';

async function seed() {
    await prisma.event.create({
        data: {
            id: '67e7b625-bced-4782-af3a-b500ca5f11a5',
            title: "unite Summit",
            slug: "unite-summit",
            details: "Um evento para Devs",
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded"');
    prisma.$disconnect();
})