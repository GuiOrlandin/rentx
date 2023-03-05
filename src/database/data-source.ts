import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "../modules/cars/model/Category";
import { CreateCategories1677984075458 } from "./migrations/1677984075458-CreateCategories";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  synchronize: false,
  logging: false,
  entities: [Category],
  migrations: [CreateCategories1677984075458],
  subscribers: [],
});

export function createConnection(host = "database"): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize();
}

export default AppDataSource;
