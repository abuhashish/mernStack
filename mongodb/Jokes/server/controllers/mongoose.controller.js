const Joke=require("../models/joke.model.js")
module.exports.findAllJokes = (req, res) => {
    Joke.find()
      .then(allDaJokes => res.json({ Jokes: allDaJokes }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

module.exports.findOneSingleJoke=(req,res)=>{
    Joke.findOne({_id:req.params.id})
        .then(x=>res.json({Joke:x}))
        .cath(err=>res.json({message:"Something went wrong",error:err}))
    }
module.exports.createNewJoke=(req,res)=>{
    Joke.create(req.body)
        .then(x=>res.json({joke:x}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}
module.exports.updateExistingJoke=(req,res)=>{
    Joke.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        .then(x=>res.json({joke:x}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}
module.exports.deleteExistingJoke=(req,res)=>{
    Joke.deleteOne({ _id: req.params.id })
        .then(x=>res.json({result:x}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}
