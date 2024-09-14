import prisma from "../prisma/client/client.js";
import CryptoJS from "crypto-js";
import { customAlphabet } from "nanoid";
import dotenv from 'dotenv';
import { Prisma } from "@prisma/client";
dotenv.config();
const tabelJob = process.env.TABEL_JOB;
const nanoid = customAlphabet('12345678', 8);


class jobService {
    static async create(job) {


        const newId = nanoid();

        // if((await prisma.$queryRaw`SELECT * FROM ${Prisma.sql([tabelJob])} WHERE email = ${user.email}`).length>0){
        //     throw new Error ("email tidak dapat digunakan, sudah ada yang menggunakan")
        // }

        const createJob = await prisma.$queryRaw`
        
        INSERT INTO ${Prisma.sql([tabelJob])} 
        (
        id, 
        nj, 
        np, 
        su, 
        dp, 
        lj,
        tj,
        s,
        mk
        
        ) VALUES (
        
        ${newId}, 
        ${job.nama_job}, 
        ${job.nama_perusahaan}, 
        ${job.status_urgent}, 
        ${job.deskripsi_perusahaan}, 
        ${job.level_job},
        ${job.type_job},
        ${job.salary},
        ${job.masa_kerja}

        )`

        job.id = newId;

        // console.log(createJob)
        const job2 = {
            id : job.id,
            nj : job.nama_job,
            np : job.nama_perusahaan,
            su : job.status_urgent,
            dp : job.deskripsi_perusahaan,
            lj : job.level_job,
            tj : job.type_job,
            s : job.salary,
            mk : job.masa_kerja
        }

        return job2

    }
    static async readAll() {
        return await prisma.$queryRaw`SELECT * FROM ${Prisma.sql([tabelJob])}`
    }
    static async readById(id) {
        const data = await prisma.$queryRaw`SELECT * FROM ${Prisma.sql([tabelJob])} WHERE id = ${id}`
        console.log(data)
        if (data.length < 1) {
            throw new Error("Data tidak di temukan");
        }
        return data
    }


    static async update(id, job) {
        console.log(id,job)

        // UPDATE `user` SET `id` = '2', `nama_user` = 'hudza1', `alamat` = 'jakarta1', `role` = 'admin1', `email` = 'asdas@asdas1', `password` = '1231' WHERE `user`.`id` = ''

        if ((await prisma.$queryRaw`SELECT * FROM ${Prisma.sql([tabelJob])} WHERE id = ${id}`).length < 1) {
            throw new Error("Id tidak di temukan")
        }

        const data = await prisma.$queryRaw`UPDATE ${Prisma.sql([tabelJob])} SET
    
        nj = ${job.nama_job}, 
        np =  ${job.nama_perusahaan}, 
        su = ${job.status_urgent}, 
        dp = ${job.deskripsi_perusahaan}, 
        lj = ${job.level_job},
        tj = ${job.type_job},
        s = ${job.salary},
        mk = ${job.masa_kerja}
        
        
        WHERE
        ${Prisma.sql([tabelJob])}.id = ${id}
        `

        job.id = id

        const job2 = {};
        job2.id  = id;
        job2.nj = job.nama_job;
        job2.np = job.nama_pekerjaan;
        job2.dp = job.deskripsi_perusahaan;
        job2.lj = job.level_job;
        job2.tj = job.type_job;
        job2.s = job.salary;
        job2.mk = job.masa_kerja;

        return job2

    }

    static async delete(id) {



        if ((await prisma.$queryRaw`SELECT * FROM ${Prisma.sql([tabelJob])} WHERE id = ${id}`).length < 1) {
            throw new Error("Id tidak di temukan")
        }
        const job = await prisma.$queryRaw`SELECT * FROM ${Prisma.sql([tabelJob])} WHERE id = ${id}`

        const deleteJob = await prisma.$queryRaw`DELETE FROM ${Prisma.sql([tabelJob])} WHERE id = ${id}`

        return job


    }
}

export default jobService;