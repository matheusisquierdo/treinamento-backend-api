import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./interfaces/user.interface";
import { UserDocument } from "./user.schema";
import { Model } from 'mongoose';

@Injectable()
export class UserService{

    

    constructor(@InjectModel('USER') private userModel : Model<UserDocument>){
        
    }

    async list() : Promise<User[]> {
        return this.userModel.find({}).exec();
    }

    async create(user : User) : Promise<User> {

        //find Ve se existe
        //Se existir return Exception
        const userData = new this.userModel(user);
        return userData.save();
    }

    async change(user : User) {
        const {email, name, isActive} = user;
        await this.userModel.updateOne({email}, {name, isActive}, {upsert : true});
    }

    async delete(email :string){
        await this.userModel.remove({email});
    }

}