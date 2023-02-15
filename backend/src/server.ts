import "reflect-metadata";
import  express  from "express";
import cors from "cors";

import "./database"
import { routes } from "./routes";

export const app = express();

app.use(express.json());

app.use(cors()); 

app.use(routes);

app.listen(3001, () => console.log("server is running"))

