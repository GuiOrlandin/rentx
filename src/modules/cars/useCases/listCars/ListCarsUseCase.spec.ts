import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car Brand",
      category_id: "8d6ce597-e7dd-4a1d-9782-93b049ecc7f5",
      daily_rate: 110.0,
      description: "Car Description",
      fine_amount: 40,
      license_plate: "DEF-1234",
      name: "Audi A2",
    });
    const cars = await listCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car Brand",
      category_id: "8d6ce597-e7dd-4a1d-9782-93b049ecc7f5",
      daily_rate: 110.0,
      description: "Car Description",
      fine_amount: 40,
      license_plate: "DEF-1234",
      name: "Audi A2",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car_Brand_test",
    });

    expect(car).toEqual([cars]);
  });
});
