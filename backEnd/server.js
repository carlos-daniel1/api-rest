import express from 'express';
import cors from 'cors';
import dotenv from "dotenv"
import productRouter from './src/routes/productRouter.js'
import userRouter from './src/routes/userRouter.js'
import mid from './src/middleWare.js'
import connectDB from './src/db/connectDB.js';
import cartRouter from './src/routes/cartRouter.js'
import purchaseRouter from './src/routes/purchaseRouter.js'

connectDB();
dotenv.config()

const app = express();
app.use(express.json())
app.use(cors())
app.use(mid)
app.use('/api/product', productRouter)
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/purchase', purchaseRouter)


app.listen(process.env.PORT, () => {
    console.log('O servidor está rodando na porta', process.env.PORT);
})


