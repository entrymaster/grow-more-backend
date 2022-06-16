var express = require('express');
const router = express.Router();
const auth=require('../../middleware/auth');
const User=require("../../model/User")
const httpStatus = require("http-status");


async function callbackfxn(req, res) {
   
        let userElem = await User.findOne({email: req.user.email});
        let obj = {details: req.body.details, cropSuggested: req.body.cropSuggested}
        await userElem.history.push(obj);
        userElem.save()

        res.status(httpStatus.CREATED).send({
            message: 'success'
            
        })
   
}

async function newcallback(req, res){
    let userElem=await User.findOne({email:req.user.email});
    let hist=await userElem.history;
    console.log(hist);
    res.status(httpStatus.FOUND).json({history:hist});
}


router.post('/history', auth(), callbackfxn);
router.get('/history', auth(), newcallback);

module.exports = router;
