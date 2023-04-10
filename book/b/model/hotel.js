import mongoose from 'mongoose';


const hotelSchema=new mongoose.Schema({

    name:{
        type:"string",
        required:true,
    },
     type:{
        type:"string",
        required:true,
    },
     city:{
        type:"string",
        required:true,
    },
        address:{
        type:"string",
        required:true,
    },
     distance:{
        type:"string",
        required:true,
    },
})

export default mongoose.model('hotel', hotelSchema)