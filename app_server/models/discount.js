var mongoose=require('mongoose');

var disSchema = new mongoose.Schema({
    disID ={type:Number,required:true},
    //have to add restID and memberID
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant'},
    member : { type: Schema.Types.ObjectId, ref: 'Member' }
});

mongoose.model("Discount",disSchema);