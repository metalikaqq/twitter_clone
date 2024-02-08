import { NextResponse } from "next/server";
import UserModel from "../models/user-model";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import MailService from "./mail-service";
import UserDto from "../dtos/user-dto";
import TokenService from "./token-service";
import { JwtPayload } from "jsonwebtoken";

class UserService {
  async registration(username: string, email: string, password: string) {
    try {
      console.log("name2", username, "email2", email, "password2", password);

      const candidate = await UserModel.findOne({ email, isActivated: true });

      if (candidate) {
        return {
          status: 400,
          message: "User with this email already exists in the database",
        };
      }

      const candidateByUsername = await UserModel.findOne({ username });

      if (candidateByUsername) {
        return {
          status: 400,
          message: "User with this username already exists in the database",
        };
      }

      const candidateNotActivated = await UserModel.findOne({
        email,
        isActivated: false,
      });

      if (candidateNotActivated) {
        UserModel.deleteOne({ email, isActivated: false });
      }

      const hashPassword = await bcrypt.hash(password, 3);
      const activationLink = uuidv4();
      const user = await UserModel.create({
        username,
        email,
        password: hashPassword,
        activationLink,
      });
      await MailService.sendActivationMail(
        email,
        `${process.env.API_URL}/api/activate/${activationLink}`
      );

      const userDto = new UserDto(user);

      const tokens = TokenService.generateToken({ ...userDto });
      await TokenService.saveToken(userDto.id, tokens.refreshToken);

      return { status: 200, data: { ...tokens, user: userDto } };
    } catch (e: any) {
      console.error("Ошибка при регистрации пользователя", e);
      return { status: 500, message: "An error occurred during registration" };
    }
  }

  async login(email: string, password: string) {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return { status: 400, message: "User with this email does not exist" };
    }

    const isPassEquals = await bcrypt.compare(password, user.password);

    if (!isPassEquals) {
      return { status: 400, message: "Incorrect password" };
    }

    const userDto = new UserDto(user);
    const tokens = TokenService.generateToken({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    if (!user.isActivated) {
      return {
        ...tokens,
        user: {
          ...userDto,
          isActivated: false,
        },
      };
    }

    return { ...tokens, user: userDto };
  }

  async activate(activationLink: string) {
    const user = await UserModel.findOne({ activationLink });
    const existingUser = await UserModel.findOne({
      email: user.email,
      isActivated: true,
    });

    if (!user) {
      return { status: 400, message: "Incorrect activation link" };
    }

    if (existingUser) {
      return {
        status: 400,
        message: "User with this email already exists in the database",
      };
    }

    user.isActivated = true;
    await user.save();

    return "User successfully activated";
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      console.log("refreshToken", refreshToken);
      return { status: 401, message: "User is not authorized" };
    }

    const userData = TokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await TokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) {
      console.log("refreshToken", refreshToken);
      return { status: 401, message: "User is not authorized" };
    }

    const user = await UserModel.findById((userData as JwtPayload).id);

    if (!user.isActivated) {
      return user.email;
    }

    const userDto = new UserDto(user);
    const tokens = TokenService.generateToken({ ...userDto });
    await TokenService.saveToken(userDto.id, refreshToken);

    return { ...tokens, user: userDto };
  }
}

const userService = new UserService();
export default userService;
