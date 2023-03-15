import { container } from "tsyringe";

import { CategoriesRespository } from "@modules/cars/infra/typeorm/respositories/CategoriesRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/respositories/SpeficicationsRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationsRespository";
import { UsersRepository } from "@modules/accounts/infra/typeorm/respositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepository } from "@modules/cars/infra/typeorm/respositories/CarsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRespository",
  CategoriesRespository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
