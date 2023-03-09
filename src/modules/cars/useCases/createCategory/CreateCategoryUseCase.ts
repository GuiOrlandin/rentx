import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface Irequest {
  name: string;
  description: string;
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRespository")
    private categoriesRepository: ICategoriesRepository
  ) {}
  async execute({ name, description }: Irequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists!");
    }
    this.categoriesRepository.create({ description, name });
  }
}
