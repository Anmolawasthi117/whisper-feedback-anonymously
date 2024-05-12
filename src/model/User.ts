
import mongoose, {Schema,Document} from "mongoose";

export interface Message extends Document{
    content : string;
    createdAt : Date;

}

const messageSchema : Schema<Message> = new Schema({
    content : {type : String, required : true},
    createdAt : {type : Date, required : true,
        default : Date.now
    },
});

export interface User extends Document{
    username : string;
    email : string;
    password : string;
    messages : Message[];
    verifyCode : string;
    verifyCodeExpiry: Date;
    isVerified : boolean;
    isAcceptingMessage : boolean;

}

const UserSchema : Schema<User> = new Schema({
    username : {type : String, required : [true,"username is require"],
        trim:true,
        unique: true,
    },
    email : {type : String, required : [true,"username is require"],
        unique: true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please fill a valid email address"]
    },
    password : {type : String, required : true},
    messages : [messageSchema],
    verifyCode : {type : String, required : true},
    verifyCodeExpiry : {type : Date, required : true},
    isAcceptingMessage : {type : Boolean, required : true},
    isVerified : {type : Boolean, required : true}
});

const UserModle =( mongoose.models.User as mongoose.Model<User>)|| (mongoose.model<User>("User",UserSchema));

export default UserModle;