const mongoose=require('mongoose');
const {Schema}=mongoose;

const TaskSchema=new Schema(
    {name:
        {type:String,
        required:[true,'name should not be empty'],
        maxlength:[20,'name should not be greater than 20 characters'],
        trim:true,
        },
    Completed:{type:Boolean,
               default:false,

    }})

module.exports=mongoose.model('Task',TaskSchema)

