import express from "express";

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Welome to E-Commerce backend!')
})

app.listen(PORT, () => {
  console.log(`Connected!`);
}).on('error', (err: any) => console.log(err));
