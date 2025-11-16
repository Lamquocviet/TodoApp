import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import taskRoute from "./routes/taskRouters.js";
import cors from "cors";
import path from "path";

dotenv.config(); //  load biến môi trường sớm

const app = express();
const __dirname = path.resolve();
if(process.env.NODE_ENV !== 'production')
{
  app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // nếu bạn dùng cookie/session sau này
  })
);
}

// middleware & route
app.use(express.json());
app.use("/api/tasks", taskRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
// app.use(cors({ origin: "http://localhost:5173" }));
// app.use(cors());

// app.use(express.json());
//  // kết nối DB truoc khi chạy server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
