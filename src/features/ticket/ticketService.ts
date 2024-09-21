import { executeQuery } from "../../database/connection";
import { CreateTicketRequest, UpdateTicketRequest } from "./ticketModel";

export class TicketService {
  static async createTicket(data: CreateTicketRequest) {
    const { id_movie, price, show_date, show_time } = data;
    const query = "CALL CreateTicket(?, ?, ?, ?)";
    const results = await executeQuery(query, [
      id_movie,
      price,
      show_date,
      show_time,
    ]);
    return results;
  }

  static async getTicket() {
    const query = "CALL GetTickets()";
    const results = await executeQuery(query);
    return results;
  }

  // static async getTicketByMovieName(movie_name: string) {
  //   const query = "CALL GetTicketByMovieName(?)";
  //   const results = await executeQuery(query, [movie_name]);
  //   return results;
  // }

  static async updateTicket(data: UpdateTicketRequest) {
    const query = "CALL UpdateTicket(?, ?, ?, ?, ?)";
    const results = await executeQuery(query, [data]);
    return results;
  }

  static async deleteTicket(id_ticket: string) {
    const query = "CALL DeleteTicket(?)";
    const results = await executeQuery(query, [id_ticket]);
    return results;
  }
}
