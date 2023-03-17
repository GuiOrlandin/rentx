import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
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
    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car Brand",
      category_id: "8d6ce597-e7dd-4a1d-9782-93b049ecc7f5",
      daily_rate: 110.0,
      description: "Car Description",
      fine_amount: 40,
      license_plate: "DEF-1234",
      name: "Audi A2",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_Brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_Brand_test",
      category_id: "category_id",
      daily_rate: 110.0,
      description: "Car Description",
      fine_amount: 40,
      license_plate: "DEF-123478",
      name: "Car2",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car2",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_Brand_test",
      category_id: "12345",
      daily_rate: 110.0,
      description: "Car Description",
      fine_amount: 40,
      license_plate: "DEF-123478",
      name: "Car2",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
