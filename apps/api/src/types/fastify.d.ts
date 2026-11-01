import type { FastifyJwtNamespace } from "@fastify/jwt";

declare module "@fastify/jwt" {
  interface FastifyJWT {
    namespaces: "access" | "refresh";
  }
}

declare module "fastify" {
    interface FastifyRequest {
        accessJwtVerify: () => Promise<void>;
        refreshJwtVerify: () => Promise<void>;
    }

  interface FastifyInstance
    extends FastifyJwtNamespace<{ namespace: "access" }>,
    FastifyJwtNamespace<{ namespace: "refresh" }> {}
    
}
