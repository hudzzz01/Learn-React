

import jobService from "../service/job.service.js";
import ViewResponse from "../view/view.response.js";
import CryptoJS from "crypto-js";

let gagal = 200;

class JobController{
    
    static async createJob(req,res){
        try {
            const job = req.body;
          
            // const createUser = await UserService.createUser(user);
            const createJob = await jobService.create(job)

            ViewResponse.success(res,"berhasil membuat user baru",createJob,200)
        } catch (error) {
            ViewResponse.fail(res,"gagal membuat user baru",error,gagal);
        }
        
    }

   
    static async readAllJobs(req,res){
        try {
            const jobs = await jobService.readAll()
            ViewResponse.success(res,"berhasil mengambil data jobs",jobs,200);
        } catch (error) {
            ViewResponse.fail(res,"Gagal mengambil data user",error,gagal);
        }
    }

    static async readJobById(req,res){
        try {
            const user = await UserService.readById(req.params.id);
            ViewResponse.success(res,"berhasil mengambil data user",user,200);
        } catch (error) {
            ViewResponse.fail(res,"Gagal mengambil data user",error,gagal);
        }
    }
    
    static async updateJob(req,res){
        try {
            // const newUser = await UserService.updateUser(req.params.id,req.body);
            const newJob = await jobService.update(req.params.id,req.body);
            ViewResponse.success(res,"berhasil mengubah data job",newJob,200);
        } catch (error) {
            ViewResponse.fail(res,"Gagal mengubah data user",error,gagal);
        }
    }
    static async deleteJob(req,res){
        try {
            // const deleteUser = await UserService.deleteUser(req.params);
            const deleteJob = await jobService.delete(req.params.id)
            ViewResponse.success(res,"berhasil menghapus data user",deleteJob,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal memnghapus data Job", error,gagal);
        }
    }
}

export default JobController;