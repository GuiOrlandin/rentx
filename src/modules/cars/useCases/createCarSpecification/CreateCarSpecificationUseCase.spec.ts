import { SpecificationsRepository } from "@modules/cars/infra/typeorm/respositories/SpeficicationsRepository";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";
import { SpecificationsRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificificationRepositoryInMemory: SpecificationsRepositoryInMemory;

describe("Create car Specification", () => {
  beforeEach(() => {
    specificificationRepositoryInMemory =
      new SpecificationsRepositoryInMemory();
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificificationRepositoryInMemory
    );
  });

  it("should be able to add a new specification to a now-existent car", async () => {
    await expect(async () => {
      const car = await carsRepositoryInMemory.create({
        name: "Car available",
        brand: "Brand",
        category_id: "category",
        daily_rate: 100,
        description: "Description Car",
        fine_amount: 60,
        license_plate: "ABCD-1234",
      });
      const specification_id = ["5432342"];

      await createCarSpecificationUseCase.execute({
        car_id: car.id,
        specification_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to add a new specification to the car", async () => {
    const car_id = "1234";
    const specification_id = ["5432342"];
    await createCarSpecificationUseCase.execute({
      car_id,
      specification_id,
    });
  });
});
