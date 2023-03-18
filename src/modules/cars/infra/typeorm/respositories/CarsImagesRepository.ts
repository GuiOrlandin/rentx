import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { getRepository, Repository } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { CarsImages } from "../entities/CarsImages";

export class CarsImageRespository implements ICarsImagesRepository {
  private respository: Repository<CarsImages>;

  constructor() {
    this.respository = getRepository(CarsImages);
  }

  async create(car_id: string, image_name: string): Promise<CarsImages> {
    const carImage = this.respository.create({
      car_id,
      image_name,
    });

    console.log(carImage);

    await this.respository.save(carImage);

    return carImage;
  }
}
