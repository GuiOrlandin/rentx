import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Car } from "./Car";

@Entity("cars_image")
export class CarsImages {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Car, (car) => car.cars_image)
  @JoinColumn({ name: "car_id" })
  car: Car;

  @Column()
  car_id: string;

  @Column()
  image_name: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
