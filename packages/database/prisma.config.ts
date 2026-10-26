import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

/**
 * Configuration Prisma v7 (lue par la CLI : migrate, db push, studio...).
 * L'URL de la base vit ici — le bloc datasource du schema.prisma n'en contient plus.
 * Chargée depuis le .env adjacent (dotenv) si DATABASE_URL absent de l'environnement.
 *
 * NB : à l'exécution, c'est le client généré via l'adaptateur pg (src/index.ts)
 * qui consomme process.env.DATABASE_URL — l'app (apps/api) charge son propre .env.
 */
export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
})
