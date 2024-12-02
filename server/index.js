import express from 'express'
import {connection} from './config/database.js';
import userRoutes from './routes/User.js'
import authRoutes from './routes/Auth.js'
import cors from 'cors'

const app = express();

// require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})


connection();

app.use(express.json());
app.use(cors({
    origin:"*"
}))


app.use("/users", userRoutes);
app.use("/auth", authRoutes);