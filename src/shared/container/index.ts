import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRespository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpeficicationsRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationsRespository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRespository",
  CategoriesRespository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);
