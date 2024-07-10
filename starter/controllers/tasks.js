const  Task=require('../model/Tasks')
const getAllTasks=async (req,res)=>{
    
        try{
    
            const tasks=await Task.find({});
            res.status(201).json({tasks});
    
            
    
        }
        catch(err){
            res.status(500).json({msg:err})
    
        }
        
        
    }
   
    

const getTask=async (req,res)=>{
    try{
        const{id:taskId}=req.params;
        const tasks=await Task.findOne({_id:taskId})
        if(!tasks){
            return res.status(404).json({msg:` NO TASK FOUND WITH ID ${taskId}`})
        }
        res.status(201).json({tasks})


    }
    catch(err){
        res.status(500).json({msg:err})

    }
   
    
}

const createTask=async (req,res)=>{
    try{const tasks=
        await Task.create(req.body)
    res.status(201).json({tasks});
    }catch(err){
        res.status(500).json({msg:err})
    }
    
}

const deleteTask=async (req,res)=>{
    try{
        const{id:taskId}=req.params;
        const tasks=await Task.findOneAndDelete({_id:taskId})
        if(!tasks){
            return res.status(404).json({msg:` NO TASK FOUND WITH ID ${taskId}`})
        }
        res.status(201).json({tasks})


    }
    catch(err){
        res.status(500).json({msg:err})

    }
 
    
}

const UpdateTask=async (req,res)=>{
    try{
        const { id: taskID } = req.params

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })


    }
    catch(err){
        res.status(500).json({msg:err})
    }
    
    
}

module.exports={getAllTasks,getTask,createTask,deleteTask,UpdateTask}