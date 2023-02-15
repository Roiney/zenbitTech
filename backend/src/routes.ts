import { Router } from "express";
import { CreateUserControllers } from "./controllers/CreateUserControllers";

const routes = Router();

routes.post("/forms", new CreateUserControllers().handle);

export { routes }