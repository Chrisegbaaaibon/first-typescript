import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
    /**
     * Create a new user
     * @param name
     * @param email
     * @param password
     */

    async create(name: string, email: string, password: string): Promise<User> {
        let findEmail = await this.userModel.findOne({ email });
        if(findEmail) {
            throw new Error('Email already exists');
        }
        const salt = await bcrypt.genSalt(10);
        

        const newUser = new this.userModel({name, email, password});
        return await newUser.save();
    }
}
