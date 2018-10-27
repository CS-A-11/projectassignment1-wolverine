var mongoose=require('mongoose');

var loginSchema = new mongoose.Schema({
   loginID ={type:Number,required:true},
   loginEmail={type:String,required:true},
   loginPassword={type:String,required:true}
    
});

mongoose.model("Login",loginSchema);