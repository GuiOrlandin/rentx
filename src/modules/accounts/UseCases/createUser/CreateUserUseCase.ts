import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({
    name,
    driver_license,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExist = await this.userRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new AppError("User already exists");
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      name,
      driver_license,
      email,
      password: passwordHash,
    });
  }
}
