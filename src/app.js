import express from "express"
import "dotenv/config"
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"
import bookRoutes from "./routes/bookRoutes.js"
import { connectDB } from "./lib/db.js";


const app = express();
const PORT = process.env.PORT || 6000;

app.use(express.json());
app.use(cors());

app.use("/", ( req, res )=>{ res.send("Server is running fine") })
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, ()=> {
    console.log(`Server is running on the port ${PORT}`)
    connectDB();
})