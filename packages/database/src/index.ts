import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

// Ré-exporte tout ce que Prisma génère (types métier, classes d'erreur, namespace Prisma...)
export * from "./generated/prisma/client";

type PrismaDb = PrismaClient;

declare global {
  // eslint-disable-next-line no-var
  var __zirodshopPrisma: PrismaDb | undefined;
}

/**
 * Client Prisma v7 : nécessite un driver adapter (ici PostgreSQL via node-postgres).
 * L'URL de connexion est lue dans process.env.DATABASE_URL — le consommateur la charge
 * (ex: apps/api fait `import 'dotenv/config'` au boot).
 *
 * Connexion paresseuse : aucun socket n'est ouvert avant la première requête.
 */
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL ?? "",
});

/**
 * Singleton en globalThis : garde une seule instance de client pendant les hot reloads
 * (tsx watch / nodemon), sinon un pool est créé à chaque rechargement.
 */
export const prisma: PrismaDb =
  globalThis.__zirodshopPrisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "prod") {
  globalThis.__zirodshopPrisma = prisma;
}

export default prisma;
