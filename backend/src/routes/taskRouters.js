import express from 'express'
import { createTask, deleteTask, getAllTasks, updateTask } from '../controller/taskControllers.js';


const routers = express.Router();

routers.get("/", getAllTasks)

routers.post("/", createTask)
routers.put("/:id", updateTask)
routers.delete("/:id", deleteTask)
export default routers;