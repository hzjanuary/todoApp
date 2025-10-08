import express from 'express';
import { createTasks, updateTasks, deleteTasks, getAllTasks } from '../controllers/tasksControllers';

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", createTasks);

router.put("/:id", updateTasks);

router.delete("/:id", deleteTasks);

export default router;