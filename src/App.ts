import express from 'express'
import morgan from 'morgan'
import { router } from './routes/email'
import cors, { CorsOptions } from "cors"

const app = express()

// const corsOptions: CorsOptions = {
//   origin: [
//     'https://fray.vercel.app',
//     //'http://localhost:5173'
//   ]
// };

const whitelist = ["https://fray.vercel.app"];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin!) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan("dev"))

app.use(router)


export {
  app
}



