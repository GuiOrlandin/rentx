import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createSpecificationController = container.resolve(
      CreateSpecificationUseCase
    );

    await createSpecificationController.execute({ name, description });

    return response.status(201).send();
  }
}
