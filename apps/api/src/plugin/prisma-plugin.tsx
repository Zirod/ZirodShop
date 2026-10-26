import fp from "fastify-plugin";
import prisma, { PrismaClient } from "@zirodshop/database";

// Augmentation de types : app.prisma est disponible et typé partout dans l'API.
declare module "fastify" {
    interface FastifyInstance {
        prisma: PrismaClient;
    }
}

export default fp(async (zirodShop) => {

    zirodShop.decorate("prisma", prisma);
    zirodShop.log.debug("Prisma client decorated on app (app.prisma)");

    /**
     * Fastify exécute les hooks onClose lors de app.close() — déjà branché sur
     * SIGINT/SIGTERM dans server.tsx. On y libère le pool de connexions Prisma
     * pour éviter toute fuite de connexion/mémoire à l'arrêt du processus.
     */
    zirodShop.addHook("onClose", async (instance) => {
        await instance.prisma.$disconnect();
        instance.log.info("Prisma client disconnected // app.prisma");
    });

});
