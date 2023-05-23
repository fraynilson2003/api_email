import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import EmailRegister from '../models/EmailRegister';

// Importar los modelos

const {
  DB_USER,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_HOST,
} = process.env;

// Configurar la conexión con la base de datos
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  schema: "public"
});

// Asociar los modelos con la conexión
EmailRegister.initialize(sequelize)

console.log("***********************");
console.log(sequelize.models);







export { 
    sequelize as conn
};
