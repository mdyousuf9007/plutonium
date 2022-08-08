const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

//problem 1
router.get('/movies',function(req,res){
    let moviesList =["Rang de basanti", "The shining", "Lord of the rings"," Batman begins"]
res.send(moviesList)

})

//problem 2 and problem 3
router.get('/movies/:index',function(req,res){
    const movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins','The Shining',"Titanic","Shutter Island","Pans Labyrinth","Wrath of Titans","Edge of Tommorrow"];
    const value=req.params.index;
     
    if(value<10){
        res.send(movies[value]);
    }else{
        res.send("Index Number Does not Exist");
    }
});
//problem 4
router.get('/films',function(req,res){
   const films = [ {
        "id": 1,
        "name": "“The Shining”"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
    
    res.send(films)       

})
//problem 5
router.get("/films/:filmId",function(req,res){
    let value=req.params.filmId;
    const film=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }];
       if(value<film.length){
        res.send(film[value])
       }else{
        res.send("No movie exists with this id")
            
       }
  
       
});



module.exports = router;