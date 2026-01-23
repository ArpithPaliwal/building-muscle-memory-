class apiError extends Error {
    public success: boolean
    constructor(public statusCode: number, public message: string = "something went wrong", public errors: unknown[] = [],  stack?: string, public data = null) {
        super(message);
        this.statusCode = statusCode;
        // this.message = message;
        this.success = false;
        this.errors = errors;
        this.data = null;


        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default apiError