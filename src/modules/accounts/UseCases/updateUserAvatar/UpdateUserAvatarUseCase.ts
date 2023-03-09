import { inject } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  avatar_file: string;
}

export class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({ avatar_file, user_id }: IRequest): Promise<void> {
    const user = await this.userRepository.findById(user_id);

    user.avatar = avatar_file;

    await this.userRepository.create(user);
  }
}
