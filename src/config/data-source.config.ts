import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

console.log(process.env.DATABASE_HOST);

export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../migrations/*.{js,ts}'],
  logging: true,
  ssl: JSON.parse(process.env.DATABASE_SSL),
});
