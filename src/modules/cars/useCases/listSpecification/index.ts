import { SpecificationsRepository } from "../../repositories/implementations/SpeficicationsRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationsUseCase } from "./ListSpecificationUseCase";

const specificationsRepository = null;

const listSpecificatationsUseCase = new ListSpecificationsUseCase(
  specificationsRepository
);

export const listSpecificationsController = new ListSpecificationController(
  listSpecificatationsUseCase
);