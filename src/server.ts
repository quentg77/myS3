import "reflect-metadata";
import express, { Express } from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", routes);

app.get("/", (req, res) => res.end("Use '/api' to use the api."));

export default app;
