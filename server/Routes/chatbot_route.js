import express from "express";
import { message } from "../Controlers/chatbot.js";

const router=express.Router();
router.post("/message",message);
export default router;