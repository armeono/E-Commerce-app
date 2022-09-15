import express from "express";
import itemRoutes from './routes/items.routes';
import cartRoutes from './routes/cart.routes';
import dotenv from 'dotenv'
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}))

app.use(bodyParser.json())

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welome to E-Commerce backend!");
});

//Routes
app.use('/items', itemRoutes)
app.use('/cart', cartRoutes)

app
  .listen(PORT, () => {
    console.log(`Connected to the server!`);
  })
  .on("error", (err: any) => console.log(err));
