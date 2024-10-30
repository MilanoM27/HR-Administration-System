import { createRouter } from "./context"; // Adjust this if you have a different path
import { employeesRouter } from "./routers/employees";
import { departmentsRouter } from "./routers/departments";

export const appRouter = createRouter()
  .merge("employee.", employeesRouter)
  .merge("department.", departmentsRouter);

// Export type definition of API
export type AppRouter = typeof appRouter;
