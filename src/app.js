import express            from "express";
import nudoRoutes         from "./infrastructure/routes/nudoRoutes.js";
import { nudoController } from "./infrastructure/config/container.js";

const app = express();
app.use(express.json());

app.use("/api", nudoRoutes(nudoController));

export default app;