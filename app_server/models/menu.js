var mongoose = require( 'mongoose' );

var chiSchema = new mongoose.Schema({ 
    chiID= {type:Number,required:true},
   chiName= {type:String,required: true}
    
});

var contSchema = new mongoose.Schema({ 
    contID= {type:Number,required:true},
   contName= {type:String,required: true}
    
});

var fastSchema = new mongoose.Schema({ 
    fastID= {type:Number,required:true},
   fastName= {type:String,required: true}
    
});

 var menuSchema = new mongoose.Schema({ 
     menuID= {type:Number,required:true},
    // locName= {type:String,required: true}
    chinese: { type: Schema.Types.ObjectId, ref: 'Chinese'},
    continental: { type: Schema.Types.ObjectId, ref: 'Continental'},
    fastfood: { type: Schema.Types.ObjectId, ref: 'Fast'}
     
 });

//  mongoose.model('member',memberSchema);
mongoose.model("Chinese", chiSchema); 
mongoose.model("Continental", contSchema); 
mongoose.model("Fast", fastSchema); 
 mongoose.model("Menu", menuSchema); 