import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import { ErrorMiddleware } from "./middlewares";
import { authRoute } from "./features/auth";
import { ticketRoute } from "./features/ticket";
import { movieRoute } from "./features/movie";
import { transactionRoute } from "./features/transaction";
import { discountRoute } from "./features/discount";

dotenv.config();
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/ticket", ticketRoute);
app.use("/api/v1/movie", movieRoute);
app.use("/api/v1/transaction", transactionRoute);
app.use("/api/v1/discount", discountRoute);


app.use(ErrorMiddleware.notFound);
app.use(ErrorMiddleware.returnError);

export default app;
