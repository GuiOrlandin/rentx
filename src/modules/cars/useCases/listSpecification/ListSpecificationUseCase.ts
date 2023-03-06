import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationsRespository";

@injectable()
export class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationRepository
  ) {}

  execute(): Specification[] {
    const specifications = this.specificationsRepository.list();

    return specifications;
  }
}
