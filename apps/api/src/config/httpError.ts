
export class HttpError extends Error {
        
    constructor( public statusCode: number, message: string) {
        super(message);
        this.name = "HttpError";
        // Corrige la chaîne de prototypes
        Object.setPrototypeOf(this, new.target.prototype);
    }

    static badRequest(message = "Bad Request") {
        return new HttpError(400, message);
    }

    static unauthorized(message = "Unauthorized") {
        return new HttpError(401, message);
    }

    static forbidden(message = "Forbidden") {
        return new HttpError(403, message);
    }

    static notFound(message = "Not Found") {
        return new HttpError(404, message);
    }

    static conflict(message = "Conflict") {
        return new HttpError(409, message);
    }

    static unprocessable(message = "Unprocessable Entity") {
        return new HttpError(422, message);
    }

    static internal(message = "Internal Server Error") {
        return new HttpError(500, message);
    }
}