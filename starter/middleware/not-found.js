const notFound=(req,res,next)=>{
    res.status(404).send("PAGE NOT FOUND")
}

module.exports=notFound;