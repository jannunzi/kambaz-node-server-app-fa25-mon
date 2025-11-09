import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import PathParameters from "./Lab5/PathParameters.js";
import WorkingWithObjects from "./Lab5/WorkingWithObjects.js";
import WorkingWithArrays from "./Lab5/WorkingWithArrays.js";
import cors from "cors";

const app = express(); // create instance
app.use(cors());
app.use(express.json());

Hello(app);
Lab5(app);
PathParameters(app);
WorkingWithObjects(app);
WorkingWithArrays(app);
app.listen(process.env.PORT || 4000); // listen at port 4000
