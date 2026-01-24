export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public errors: unknown[] = [],
    public data: unknown = null,
    public success: boolean = false,
    stack?: string
  ) {
    super(message);

    this.name = this.constructor.name;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
