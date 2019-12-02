import express from "express";
import db from "../data/hubs-model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const hubs = await db.find();
    res.status(200).json(hubs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const hubData = req.body;
  try {
    let newHub = await db.add(hubData);
    res.status(201).json(newHub);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await db.remove(id);
    if (removed) {
      res.status(200).json({ message: "Hub removed" });
    } else {
      res.status(404).json({ message: "Hub not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

export default router;
