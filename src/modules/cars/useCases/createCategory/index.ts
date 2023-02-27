import { CategoriesRespository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

export const createCategoryRepository = CategoriesRespository.getInstance();

export const createCategoryUseCase = new CreateCategoryUseCase(
  createCategoryRepository
);

export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
