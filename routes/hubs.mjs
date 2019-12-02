import express from "express";
import db from "../data/hubs-model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let hubs = await db.find();
    res.json(hubs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

export default router;
