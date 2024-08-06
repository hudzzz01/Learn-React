import app from "./app.js";

import routerUser from "./router/user.router.js";
import express from "express"
import cors from "cors"

const port = 5000;
app.use(cors({
    origin: '*',
  }));

app.use(express.static("uploadsFotoUser"));
app.use("/users",routerUser);





app.listen(port)
console.log(`listen in ${port}`)

