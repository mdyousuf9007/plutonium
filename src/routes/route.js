const express = require('express');

const router = express.Router();



let lodash = require('lodash')

router.get('/hello', function (req, res){
    // problem a)

    let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    console.log(lodash.chunk(months,3))

    // problem B
    let arrays=[1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(arrays))

    //problem c
    let a = [1, 2, 5, 6]
    let b = [1, 1, 5, 9]
    let c = [9, 5, 6, 8]
    let d = [1, 2, 5,6]
    let e = [5, 7, 3, 5]
    console.log(lodash.union(a,b,c,d))

    //problem d
    let object = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    console.log(lodash.fromPairs(object))
})


module.exports = router;
// adding this comment for no reason
