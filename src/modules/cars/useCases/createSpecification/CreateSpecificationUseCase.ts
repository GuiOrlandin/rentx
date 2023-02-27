import { ISpecificationRepository } from "../../repositories/ISpecificationsRespository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}
  execute({ name, description }: IRequest): void {
    const speficiationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (speficiationAlreadyExists) {
      throw new Error("Specification already exists!");
    }
    this.specificationsRepository.create({
      name,
      description,
    });
  }
}
