const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const validator = require('validator')
const {Schema,model} = mongoose

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
userSchema.statics.signup = async function(email,password){

    if(!email || !password){
        throw Error('all fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('must be valid email')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('enter a strong password')
    }
    const exists = await this.findOne({email})
    if(exists){
        throw Error('email already use')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    const user = await this.create({email,password:hash})
    return user
}

userSchema.statics.login = async function(email,password){
    if(!email || !password){
        throw Error('all fields must be filled')
    }
    const user = await this.findOne({email})
    if(!user){
        throw Error('invalid email')
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('invalid password')
    }
    return user
}

module.exports = model('User',userSchema)