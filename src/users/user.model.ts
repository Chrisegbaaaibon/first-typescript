import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';


export const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 3,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        min: 6,
    }
},{
    timestamps: true
});

export interface User extends mongoose.Document {
    name: string;
    email: string;
    password: string;
}