import { Request, Response, NextFunction } from "express";
import { TicketService } from "./ticketService";

export class TicketController {
  static async createTicket(req: Request, res: Response, next: NextFunction) {
    try {
      const { id_movie, price, show_date, show_time } = req.body;
      const ticket = await TicketService.createTicket({
        id_movie,
        price,
        show_date,
        show_time,
      });
      return res.status(201).json({
        success: true,
        data: { ...ticket },
        message: "Ticket created successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getTicket(req: Request, res: Response, next: NextFunction) {
    try {
      const ticket = await TicketService.getTicket();
      return res.status(200).json({
        success: true,
        data: ticket,
        message: "Ticket fetched successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  // static async getTicketByMovieName(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { movie_name } = req.params;
  //     const ticket = await TicketService.getTicketByMovieName(movie_name);
  //     return res.status(200).json({
  //       success: true,
  //       data: ticket,
  //       message: "Ticket fetched successfully",
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  static async updateTicket(req: Request, res: Response, next: NextFunction) {
    try {
      const { id_ticket } = req.params;
      const { id_movie, price, show_date, show_time } = req.body;
      const ticket = await TicketService.updateTicket({
        id_ticket: Number(id_ticket),
        id_movie,
        price,
        show_date,
        show_time,
      });
      return res.status(200).json({
        success: true,
        data: { ...ticket },
        message: "Ticket updated successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteTicket(req: Request, res: Response, next: NextFunction) {
    try {
      const { id_ticket } = req.params;
      await TicketService.deleteTicket(id_ticket);
      return res.status(200).json({
        success: true,
        message: "Ticket deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
