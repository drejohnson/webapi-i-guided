import express from "express";

import hubsRoute from "./routes/hubs.mjs";

const port = 4000;

const app = express();

app.use("/api/hubs", hubsRoute);

app.get("/", (req, res) => {
  res.send({ api: "Up and running" });
});

app.listen(port, () => console.log(`Server running on port: ${port}`));
