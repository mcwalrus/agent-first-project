import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.appMeta.upsert({
    where: { key: "seed" },
    update: { value: new Date().toISOString() },
    create: { key: "seed", value: new Date().toISOString() },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
