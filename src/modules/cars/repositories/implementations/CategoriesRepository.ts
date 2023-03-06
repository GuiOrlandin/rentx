import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

export class CategoriesRespository implements ICategoriesRepository {
  private repository: Repository<Category>;

  private static INSTANCE: CategoriesRespository;

  constructor() {
    this.repository = getRepository(Category);
  }

  // public static getInstance(): CategoriesRespository {
  //   if (!CategoriesRespository.INSTANCE) {
  //     CategoriesRespository.INSTANCE = new CategoriesRespository();
  //   }

  //   return CategoriesRespository.INSTANCE;
  // }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ where: { name } });
    return category;
  }
}