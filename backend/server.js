import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/db.js';
import productRoutes from './routes/Product.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); 

app.use(express.urlencoded({}))

app.use('/api/products', productRoutes); // Use the product routes

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname,"frontend/dist")));

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend','dist','index.html'));
  })

}

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
}); 
