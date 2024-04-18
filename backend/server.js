import express from "express";
import 'dotenv/config';

const app = express();
const port = 3000;

console.log(process.env.MONGO_URI);

app.listen(port, () => {
    console.log(`Server in runnig at port ${port}`);
});