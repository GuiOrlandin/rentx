import { IUserResponseDTO } from "../dtos/IUserResponseDTO";
import { User } from "../infra/typeorm/entities/User";
import { instanceToInstance } from "class-transformer";

export class UserMap {
  static toDTO({
    name,
    avatar,
    driver_license,
    email,
    id,
    avatar_url,
  }: User): IUserResponseDTO {
    const user = instanceToInstance({
      name,
      avatar,
      driver_license,
      email,
      id,
      avatar_url,
    });
    return user;
  }
}
