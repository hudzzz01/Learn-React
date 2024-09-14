import express from "express";
import cors from "cors"
import multer from "multer";
import auth from "../auth/auth.js";
import JobController from "../controller/job.controller.js";

const upload = multer();

const routerJob = express.Router();
routerJob.use(cors({
    origin: '*',
  }));

routerJob.get("/getAllJobs",upload.none(),async(req,res)=>{
    JobController.readAllJobs(req,res);
})
routerJob.post("/postJob",upload.none(),async(req,res)=>{
    JobController.createJob(req,res);
})
routerJob.get("/getJob/id/:id",auth,async(req,res)=>{
    // UserController.readUserById(req,res);
})
routerJob.put("/update/:id",upload.none(),async(req,res)=>{
    // UserController.updateUser(req,res);
    JobController.updateJob(req,res);
})
routerJob.delete("/deleteJob/:id",upload.none(),async(req,res)=>{
    // UserController.deleteUser(req,res);
    JobController.deleteJob(req,res);
})

export default routerJob;