var mongoose=require('mongoose');

var managementSchema =new mongoose.Schema(
    {
        mangID={type:Number,required:true},
        posts={type:String},
        member : { type: Schema.Types.ObjectId, ref: 'Member' }
    }
);

mongoose.model("Management",managementSchema);