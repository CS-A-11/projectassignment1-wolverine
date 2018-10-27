 var mongoose = require( 'mongoose' );
 var orderSchema = new mongoose.Schema({ 
     orderID: {type:Number,required: true},
    // have to add restID and locID
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant'},
    locations:{ type: Schema.Types.ObjectId, ref: 'Location'}

 });

 mongoose.model('Orders',orderSchema);