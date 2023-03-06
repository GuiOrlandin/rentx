import { SpecificationsRepository } from "../../repositories/implementations/SpeficicationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = null;

const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);

export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);
