const mongoose = require('mongoose');
const { Schema } = mongoose;

const CropSchema = new Schema({
    name: {type:String},
    subtitle:{type:String},
    description:{type:String},
    Image_url:{type:String},
    
});


const Crop = mongoose.model('Crop', CropSchema);

module.exports=Crop;