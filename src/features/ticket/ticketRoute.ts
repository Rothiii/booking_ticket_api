import { Router } from "express";
import { JwtMiddleware } from "../../middlewares/jwt_middleware";
import { TicketController } from "./ticketController";

const ticketRoute: Router = Router();

ticketRoute.post("/", [
  JwtMiddleware.verifyToken,
  TicketController.createTicket,
]);

ticketRoute.get("/", [
  JwtMiddleware.verifyToken,
  TicketController.getTicket,
]);

// ticketRoute.get("/:movie_name", [
//   JwtMiddleware.verifyToken,
//   TicketController.getTicketByMovieName,
// ]);

ticketRoute.patch("/:id", [
  JwtMiddleware.verifyToken,
  TicketController.updateTicket,
]);

ticketRoute.delete("/:id", [
  JwtMiddleware.verifyToken,
  TicketController.deleteTicket,
]);

export default ticketRoute;
