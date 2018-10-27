var mongoose = require( 'mongoose' );

var reviewSchema=new mongoose.Schema({
    reviewID={type:Number,required:true},
    rating={type:Number, required:true, min:0,max:5},
    comments={type:String},
    restID:{ type: Schema.Types.ObjectId, ref: 'Restaurant'}
});

mongoose.model("Review", reviewSchema); 