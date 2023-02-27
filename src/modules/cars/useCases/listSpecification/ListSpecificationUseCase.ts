import { Specification } from "../../model/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationsRespository";

export class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute(): Specification[] {
    const specifications = this.specificationsRepository.list();

    return specifications;
  }
}
