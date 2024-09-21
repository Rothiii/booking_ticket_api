import { JwtPayload } from "jsonwebtoken";

export interface UserToken extends JwtPayload {
  id_user: string;
  phone_number: string;
  role: string;
}