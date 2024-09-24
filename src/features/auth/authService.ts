import { comparePassword, hashPassword } from "../../utils";
import { ErrorResponse } from "../../models";
import {
  LoginRequest,
  RegisterRequest,
  CurrentLoggedInRequest,
  CurrentLoggedInResponse,
} from "./authModel";
import jwt from "jsonwebtoken";
import { executeQuery } from "../../database/connection";

export class AuthService {
  static async login(data: LoginRequest) {
    const phone_number = data.phone_number;
    const password = data.password;

    const query = "CALL GetUsers(?)";
    const dataInput = [phone_number];
    const results = await executeQuery(query, dataInput);
    console.log(results);
    if (results.length === 0) {
      throw new ErrorResponse(
        "User not found",
        404,
        ["phone_number"],
        "USER_NOT_FOUND"
      );
    }

    const user = results[0][0];
    console.log(user);
    const isPasswordMatch = await comparePassword(password, user.password);

    if (!isPasswordMatch) {
      throw new ErrorResponse(
        "Password is incorrect",
        400,
        ["password"],
        "PASSWORD_INCORRECT"
      );
    }

    const token = jwt.sign(
      {
        id_user: user.id_user,
        phone_number: user.phone_number,
        role: user.role,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "24h",
      }
    );

    return {
      token,
    };
  }

  static async register(data: RegisterRequest) {
    const name = data.name;
    const password = await hashPassword(data.password);
    const address = data.address;
    const phone_number = data.phone_number;
    const balance = 0;
    const role = "user";
    const isUserExist = await executeQuery("CALL GetUsers(?)", [phone_number]);
    if (isUserExist[0][0]) {
      throw new ErrorResponse(
        "Phone Number Already Exist",
        400,
        ["phone_number"],
        "PHONE_NUMBER_ALREADY_EXIST"
      );
    }

    const query = "CALL createUser(?, ?, ?, ?, ?, ?)";
    const dataInput = [name, password, address, phone_number, balance, role];
    await executeQuery(query, dataInput);
  }

  static async createAdmin(data: RegisterRequest) {
    const name = data.name;
    const password = await hashPassword(data.password);
    const address = data.address;
    const phone_number = data.phone_number;
    const balance = 0;
    const role = "admin";
    const isUserExist = await executeQuery("CALL GetUsers(?)", [phone_number]);
    if (isUserExist[0][0]) {
      throw new ErrorResponse(
        "Phone Number Already Exist",
        400,
        ["phone_number"],
        "PHONE_NUMBER_ALREADY_EXIST"
      );
    }

    const query = "CALL createUser(?, ?, ?, ?, ?, ?)";
    const dataInput = [name, password, address, phone_number, balance, role];
    await executeQuery(query, dataInput);
  }

  static async currentLoggedIn(
    data: CurrentLoggedInRequest
  ): Promise<CurrentLoggedInResponse> {
    const phone_number = data;
    const query = "CALL GetUsers(?)";
    const dataInput = [phone_number];
    const results = await executeQuery(query, dataInput);

    if (!results) {
      throw new ErrorResponse(
        "User not found",
        404,
        ["user_id"],
        "USER_NOT_FOUND"
      );
    }

    return results[0];
  }
}
