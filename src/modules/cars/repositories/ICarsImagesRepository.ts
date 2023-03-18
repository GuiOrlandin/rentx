import { CarsImages } from "../infra/typeorm/entities/CarsImages";

export interface ICarsImagesRepository {
  create(car_id: string, image_name: string): Promise<CarsImages>;
}
