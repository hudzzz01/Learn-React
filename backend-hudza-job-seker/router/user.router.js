import express from "express";
import UserController from "../controller/user.controller.js";
import cors from "cors"
import multer from "multer";
import auth from "../auth/auth.js";

const upload = multer();

const routerUser = express.Router();
routerUser.use(cors({
    origin: '*',
  }));
routerUser.post("/cek-token",upload.none(),async(req,res)=>{
    UserController.cekToken(req,res);
})
routerUser.post("/login",upload.none(),async(req,res)=>{
    UserController.login(req,res);
})
routerUser.get("/read/all",auth,async(req,res)=>{
    UserController.readAllUser(req,res);
})
routerUser.get("/read/id/:id",auth,async(req,res)=>{
    UserController.readUserById(req,res);
})
routerUser.get("/read/email/:email",auth,async(req,res)=>{
    UserController.readUserByEmail(req,res);
})
routerUser.post("/create/",upload.none(),async(req,res)=>{
    UserController.createUser(req,res);
})
routerUser.put("/update/:id",auth,upload.none(),async(req,res)=>{
    UserController.updateUser(req,res);
})
routerUser.delete("/delete/:id",auth,upload.none(),async(req,res)=>{
    UserController.deleteUser(req,res);
})

export default routerUser;