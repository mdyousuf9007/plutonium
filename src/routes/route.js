const express = require('express');
// const abc = require('../introduction/intro')
const router = express.Router();
const externalModule = require('../logger/logger')
const myHelper=require("../util/helper")
const stringNew=require("../validator/formatter")

router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()
    myHelper.date();
    myHelper.month();
    myHelper.batch();
    stringNew.trim();
    stringNew.lower();
    stringNew.upper();
    externalModule.welcome();
    res.send("‘Welcome to my application. I am yousuf khan and a part of FunctionUp Plutonium cohort")
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason