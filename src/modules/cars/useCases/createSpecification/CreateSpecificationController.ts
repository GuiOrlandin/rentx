import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const createSpecificationController = container.resolve(
      CreateSpecificationUseCase
    );

    createSpecificationController.execute({ name, description });

    return response.status(201).send();
  }
}
