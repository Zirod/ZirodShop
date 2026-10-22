import Fastify from "fastify";

export default function buildZirodShop(){

    const app = Fastify({
        logger: true
    })

    app.get("/health", async () => {
        return{
            code : 200,
            message : "Api run ok"
        }
    })

    return app;
    
}