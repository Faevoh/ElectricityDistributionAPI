import { lightModelOne,lightModelTwo } from "../MODEL/model.js";

// Adding new MeterOwner
export const newMeterOwner = async(req,res)=>{
    try{
        const meterOwner = await lightModelOne.create(req.body);
        if(meterOwner[0] == 0){
            res.status(404).json({
                message: error.message
            });
        }else{
            res.status(200).json({
                message: "New MeterOwner",
                data: meterOwner 
            });
        }
    }catch(error){
        res.status(404).json({
            message: error.message
        });
    }
};

// Displaying all meter owner
export const allmeterOwner = async(req,res)=>{
    try{
        const allMeter = await lightModelOne.findAll();
        res.status(200).json({
         message: "All meterOwners " + allMeter.length,
         data: allMeter
        });
    }catch(error){
        res.status(404).json({
            message: error.message
        });
    }
};

// displaying single meterOwner
export const singleMeterOwner = async(req,res)=>{
    try{
        const id = req.params.id;
        const singleMeter = await lightModelOne.findAll({
            where:{ 
                id: id
            }
        });
        if(singleMeter.length === 0){
            res.status(404).json({
                message: `This id: ${id} doesn't exist`
            });
        }else{
            res.status(200).json({
                message: `MeterOwner with id: ${id}`,
                data: singleMeter 
            });
        }
    }catch(err){
        res.status(404).json({
            message: err.message
        });
    }
};

//Updating an already existing meterOwner
export const updatemeterOwner = async(req,res)=>{
    try{
        const id = req.params.id;
        const updateMeter = await lightModelOne.update(req.body,{
            where: {
                id: id
            }
        });
        if(updateMeter[0] === 0){
            res.status(404).json({
                message: `Id ${id} does not exist`
            });
        }else{
            res.status(200).json({
                message: `id ${id} has been updated successfully`
            });
        }
    }catch(err){
        res.status(404).json({
            message: "theres an error"
        });
    }
};

// deleting a meterOwner
export const deletemeterOwner = async(req,res)=>{
    try{
        const id = req.params.id;
        const deleteMeter = await lightModelOne.destroy({
            where:{
                id: id
            }
        });
        if(deleteMeter === 0){
            res.status(404).json({
                message: `Id ${id} no longer exists`
            });
        }else{
            res.status(200).json({
                message: `Id ${id} has been deleted`
            });
        }
    }catch(error){
        res.status(404).json({
            message: error.message
        });
    }
};

// Adding new nonmeterOwner
export const newNonMeterOwner = async(req,res)=>{
    try{
        const newNonMeter = await lightModelTwo.create(req.body);
        if(newNonMeter === 0){
            res.status(404).json({
                message: error.message
            });
        }else{
            res.status(200).json({
                message: "New nonMeter Owner",
                data: newNonMeter
            });
        }
    }catch(error){
        res.status(404).json({
            message: error.message
        });
    }
};

//Displaying all nonmeterOwners
export const allNonMeterOwner = async(req,res)=>{
    try{
        const allNonMeter = await lightModelTwo.findAll();
        if(allNonMeter.length === 0){
            res.status(404).json({
                message: "Unknown request"
            });
        }else{
            res.status(200).json({
                message: "All Non Meter Owners " + allNonMeter.length,
                data: allNonMeter
            });
        }
    }catch(err){
        res.status(404).json({
            message: err.message
        });
    }
};

// Displaying Single nonMeterOwner
export const singleNonMeterOwner = async(req,res)=>{
    try{
        const id = req.params.id;
        const singleNonMeter = await lightModelTwo.findAll({
            where:{
                id: id
            }
        });
        if(singleNonMeter[0]===0){
            res.status(404).json({
                message: `Id ${id} is not valid`
            });
        }else{
            res.status(200).json({
                message: `Non Meter Owner of id: ${id}`,
                data: singleNonMeter
            });
        }
    }catch(err){
        res.status(404).json({
            message: err.message
        });
    }
};

// Deleting an existing nonMeterOwner
export const deleteNonMeterOwner = async(req,res)=>{
    try{
        const id = req.params.id;
        const deleteNonMeter = await lightModelTwo.destroy({
            where:{ 
                id: id
            }
        });
        if(deleteNonMeter === 0){
            res.status(404).json({
                message: `Data with id: ${id} does not exist`
            });
        }else{
            res.status(200).json({
                message: `Id ${id} has been deleted`
            });
        }
    }catch(err){
        res.status(404).json({
            message: err.message
        });
    }
};