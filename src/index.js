const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);
//question 1-   // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
app.get("/sol1", function (req, res) {
    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];        
    }
  
    let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= consecutiveSum - total

  
    res.send(  { data: missingNumber  }  );
  });
  //question 2-// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
  app.get("/sol2", function (req, res) {
   const arr=[33,34,35,37,38]
let missingNumber=0
for(let i=0; i<arr.length; i++){
    if(arr[i+1]-arr[i]!=1 && arr[i+1]!=undefined){
        missingNumber= arr[i]+1

    }
}

res.send({data:missingNumber})
})
 
 

app.listen(process.env.PORT || 3002, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3002))
});

