import prisma from "../prisma/client/client.js";
import CryptoJS from "crypto-js";
import { customAlphabet } from "nanoid";
import dotenv from 'dotenv';
import { Prisma } from "@prisma/client";
dotenv.config();
const tabelUser = process.env.TABEL_USER;
const nanoid = customAlphabet('12345678',8);


class UserService{
    static async createUser(user){
        const ciperPassword = CryptoJS.HmacSHA256(user.password,"kamu kenapa sini cerita").toString();
        //console.log(ciperPassword)
        const newId = nanoid();
        
        if((await prisma.$queryRaw`SELECT * FROM ${Prisma.sql([tabelUser])} WHERE email = ${user.email}`).length>0){
            throw new Error ("email tidak dapat digunakan, sudah ada yang menggunakan")
        }
        
        const createUser = await prisma.$queryRaw`
        
        INSERT INTO ${Prisma.sql([tabelUser])} 
        (id, 
        nama_user, 
        alamat, 
        role, 
        email, 
        password
        
        ) VALUES (
        
        ${newId}, 
        ${user.nama}, 
        ${user.alamat}, 
        ${user.role}, 
        ${user.email}, 
        ${ciperPassword}
        )`

        user.id = newId;
        user.password = ciperPassword

        return user

    }
    static async readAllUser(){
        return await prisma.$queryRaw`SELECT * FROM ${Prisma.sql([tabelUser])}`
    }
    static async readById(id){
        const data = await prisma.$queryRaw`SELECT * FROM ${Prisma.sql([tabelUser])} WHERE id = ${id}`
        console.log(data)
        if(data.length < 1){
            throw new Error("Data tidak di temukan");
        }
        return data
    }
    
    static async readByEmail(email){
        const data = await prisma.$queryRaw`SELECT * FROM ${Prisma.sql([tabelUser])} WHERE email = ${email}`
        if(data.length<1){
            throw new Error("email tidak ditemukan");
        }
        return data
    }

    static async updateUser(id,user){
        const ciperPassword = CryptoJS.HmacSHA256(user.password,"kamu kenapa sini cerita").toString();

        // UPDATE `user` SET `id` = '2', `nama_user` = 'hudza1', `alamat` = 'jakarta1', `role` = 'admin1', `email` = 'asdas@asdas1', `password` = '1231' WHERE `user`.`id` = ''

        if((await  prisma.$queryRaw`SELECT * FROM ${Prisma.sql([tabelUser])} WHERE id = ${id}`).length<1){
            throw new Error ("Id tidak di temukan")
        }

        const data = await prisma.$queryRaw`UPDATE ${Prisma.sql([tabelUser])} SET 
        nama_user = ${user.nama},
        alamat = ${user.alamat},
        role = ${user.role},
        email = ${user.email},
        password = ${ciperPassword}
        
        WHERE
        ${Prisma.sql([tabelUser])}.id = ${id}
        `

        user.id = id
        user.password = ciperPassword
        return user
        
    }
    static async deleteUser({id}){

        
        if((await  prisma.$queryRaw`SELECT * FROM ${Prisma.sql([tabelUser])} WHERE id = ${id}`).length<1){
            throw new Error ("Id tidak di temukan")
        }
        const user = await prisma.$queryRaw`SELECT * FROM ${Prisma.sql([tabelUser])} WHERE id = ${id}`
        
        const deleteUser = await prisma.$queryRaw`DELETE FROM ${Prisma.sql([tabelUser])} WHERE id = ${id}`

        return user
        

    }
}

export default UserService;