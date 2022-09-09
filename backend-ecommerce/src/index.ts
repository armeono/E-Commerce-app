import express from "express";
import itemRoutes from './routes/items.routes'
import dotenv from 'dotenv'
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}))

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welome to E-Commerce backend!");
});

//Routes
app.use('/items', itemRoutes)

app
  .listen(PORT, () => {
    console.log(`Connected to the server!`);
  })
  .on("error", (err: any) => console.log(err));
