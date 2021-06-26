const mongoose=require('mongoose')

const PostSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    tags:{
        type:String,
        required:true
    },
    banner:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

const PostModel = mongoose.model('posts', PostSchema);
module.exports = PostModel;