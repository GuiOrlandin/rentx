import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ISpecificationRepository } from "../../repositories/ISpecificationsRespository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationRepository
  ) {}
  async execute({ name, description }: IRequest): Promise<void> {
    const speficiationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (speficiationAlreadyExists) {
      throw new AppError("Specification already exists!");
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}
