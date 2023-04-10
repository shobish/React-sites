import express from 'express';
import Hotel from '../model/hotel.js'
const router=express.Router();

//create
router.post('/',async (req,res)=>{
    const newhotel=new Hotel(req.body);
    try{
        const savehotel=await newhotel.save();
        res.send(200).json(savehotel);

    }catch(err){
        res.json(err)
    }
})
router.put('/:id',async (req,res)=>{
    
    try{
        const updatehotel=await Hotel.findByIdAndUpdate(req.params.id ,{$set:req.body},{new:true});
        res.status(200).json(updatehotel);

    }catch(err){
        res.json(err)
    }
})
router.delete('/:id',async (req,res)=>{
    
    try{
       await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("deleted");

    }catch(err){
        res.json(err)
    }
})
router.get('/:id',async (req,res)=>{
    
    try{
        const hotel=await Hotel.findById(req.params.id );
        res.status(200).json(hotel);

    }catch(err){
        res.json(err)
    }
})
router.get('/',async (req,res)=>{
    
    try{
        const hotels=await Hotel.find();
        res.status(200).json(hotels);

    }catch(err){
        res.json(err)
    }
})

export default router; 