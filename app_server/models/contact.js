var mongoose = require( 'mongoose' );


 var contactSchema = new mongoose.Schema({ 
     contactID= {type:Number,required:true},
     contactName= {type:String,required: true},
     contactSub={type:String,required: true},
     contactEmail={type:String,required: true},
     contactPhone={type:String,required: true},
     
 });

 mongoose.model("Contact", contactSchema); 