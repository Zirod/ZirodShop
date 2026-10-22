import buildZirodShop from "./app";
import config from "./config/config";

const ZirodShop = buildZirodShop();


const start = async () =>  {

    try{

        await ZirodShop.listen({
            port:config.server.port,
            host: config.server.host
        });
        
        ZirodShop.log.info(`ZirodShop Server running on port ${config.server.port}`);

    }catch(error){

        ZirodShop.log.error(error);
        process.exit(1);

    }
}

const shutDown = async (signal: string) => {

    ZirodShop.log.info(`Received ${signal}. Shutting down...`);

    try{

        await ZirodShop.close();
        ZirodShop.log.info("Server closed successfully");
        process.exitCode = 0;

    }catch(error){

        ZirodShop.log.error(error, "Error during shutdown");
        process.exitCode = 1;

    }
}

process.once("SIGINT", () => {
    void shutDown("SIGINT");
})

process.once("SIGTERM", () => {
    void shutDown("SIGTERM");
})


void start();