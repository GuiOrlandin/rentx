import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { getRepository, Repository } from "typeorm";

import { CarsImages } from "../entities/CarsImages";

export class CarsImageRepository implements ICarsImagesRepository {
  private repository: Repository<CarsImages>;

  constructor() {
    this.repository = getRepository(CarsImages);
  }

  async create(car_id: string, image_name: string): Promise<CarsImages> {
    const carImage = this.repository.create({
      car_id,
      image_name,
    });

    await this.repository.save(carImage);

    return carImage;
  }
}
