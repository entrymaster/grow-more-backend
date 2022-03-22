const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const httpStatus = require("http-status");
const Crop = require("../../model/crop");

const spawn=require('child_process').spawn;

const process=spawn('python', ['../python/ml_model.py']);

process.stdout.on('data', data=>{
    console.log(data.toString());
})





const allcrops = async () => {
    return await Crop.find({});
}

const cropByname = async (name) => {
    return Crop.findOne({ name: name });
}


router.get('/', async (request, response) => {
    let arr=request.query;
    let size=Object.keys(arr).length;
    if (size !== 0) {
        let crop = await cropByname(request.query.name);
        if (!!crop) {
            response.status(httpStatus.FOUND).send({
                crop: crop,
            });
        } else {
            response.status(httpStatus.NOT_FOUND).send("Sorry!! crop not in database.");
        }

    } else {
        let data = await allcrops();
        if (!!data) {
            response.status(httpStatus.FOUND).send({
                crops: data,
            });
        } else {
            response.status(httpStatus.NOT_FOUND).send("Sorry!! crops not in database.");
        }
    }


})



module.exports = router;