import { ICreateRentalDTO } from "../dtos/ICreateRentalsDTO";
import { Rental } from "../infra/typeorm/entities/Rental";

export interface IRentalsRepository {
  findOpenRentalByCar(car_id: string): Promise<Rental>;
  findOpenRentalByUser(user_id: string): Promise<Rental>;
  create({
    car_id,
    expected_return_date,
    user_id,
  }: ICreateRentalDTO): Promise<Rental>;
  findById(id: string): Promise<Rental>;
  findByUSer(user_id: string): Promise<Rental[]>;
}
