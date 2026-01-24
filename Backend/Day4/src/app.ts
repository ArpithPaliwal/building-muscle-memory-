import express from "express"
import type { NextFunction ,Request, Response} from "express"
import router from "./routes/routes.js";
import { ApiError } from "./utils/apiError.js";
const app = express();
 
export default app;

app.use("/",router)
app.use(errorHandler);

export function errorHandler(
  err: ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const statusCode = err.statusCode ?? 500;
  return res.status(statusCode).json({
    success: err.success ?? false,
    message: err.message ?? "Internal server error",
    errors: err.errors ?? [],
    data: err.data ?? null,
  });
}
