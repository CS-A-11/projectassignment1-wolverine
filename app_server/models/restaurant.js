var mongoose = require( 'mongoose' );


 var contactSchema = new mongoose.Schema({ 
     contactID= {type:Number,required:true},
     contactName= {type:String,required: true},
     contactSub={type:String,required: true},
     contactEmail={type:String,required: true},
     contactPhone={type:String,required: true},
     
 });

 var menuSchema = new mongoose.Schema({ 
    menuID= {type:Number,required:true},
   /* chinese:[chiSchema],
   continental:[contSchema],
   fastfood:[fastSchema] */
   chinese: { type: Schema.Types.ObjectId, ref: 'Chinese'},
   continental: { type: Schema.Types.ObjectId, ref: 'Continental'},
   fastfood: { type: Schema.Types.ObjectId, ref: 'Fast'}
    
});


var locationSchema = new mongoose.Schema({ 
    locID= {type:Number,required:true},
    locName= {type:String,required: true}
    
});


var restSchema=new mongoose.Schema({

    restID={type:number,required:true},
    restName={type:String,required:true},
    locations:{ type: Schema.Types.ObjectId, ref: 'Location'},
    menu:{ type: Schema.Types.ObjectId, ref: 'Menu'},
    contact:{ type: Schema.Types.ObjectId, ref: 'Contact'}
});

mongoose.model("Restaurant", restSchema); 

mongoose.model("Location", locationSchema); 
mongoose.model("Contact", contactSchema); 
mongoose.model("Menu", menuSchema); 