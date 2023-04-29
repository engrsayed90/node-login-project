const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const schema = mongoose.Schema;
const userSchema = new schema({
    name: {
        type:String,
        require:true
    },
    number: {
        type:Number,
        require:true
    },
    email: {
        type:String,
        unique:true,
        require:true
    },
    password: {
        type:String,
        require:true
    },
})

module.exports= mongoose.model('Student',userSchema)