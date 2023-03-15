import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Name Car",
      brand: "Brand",
      category_id: "category",
      daily_rate: 100,
      description: "Description Car",
      fine_amount: 60,
      license_plate: "ABC-1234",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with available true by default", () => {
    expect(async () => {
      const car = await createCarUseCase.execute({
        name: "Car available",
        brand: "Brand",
        category_id: "category",
        daily_rate: 100,
        description: "Description Car",
        fine_amount: 60,
        license_plate: "ABCD-1234",
      });

      expect(car.available).toBe(true);
    });
  });
});
