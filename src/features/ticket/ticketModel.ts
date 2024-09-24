export type CreateTicketRequest = {
  id_movie: number
  price: number
  show_date: Date
  show_time: Date
};

export type UpdateTicketRequest = {
  id_ticket: number
  id_movie: number
  price: number
  show_date: Date
  show_time: Date
};