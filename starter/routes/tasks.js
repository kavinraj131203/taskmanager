const express=require('express')
const router =express.Router();
const {getAllTasks,getTask,createTask,deleteTask,UpdateTask}=require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(UpdateTask).delete(deleteTask);






module.exports=router