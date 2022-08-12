const express = require('express');
const router = express.Router();


let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]

router.post('/players', function (req, res) {
    // LOGIC 

    for (let i = 0; i < players.length; i++) {
        if (req.body.name === players[i].name) {
            return res.send("Player already registered try different name!")

        }
    }
    let newPlayer = req.body
    players.push(newPlayer)

    // res.send({ UpdatedList: players })


    res.send(  { data: players , status: true }  )
});

//problem two(optional)

let playersId =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ],
           "BookingId" : {
            "bookingNumber": 1,
             "sportId" : "",
             "centerId"  : "" ,
            "type": "private",
            "slot": '16286598000000',
            "bookedOn": '31/08/2021',
            "bookedFor": '01/09/2021'
           }
           
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": ["soccer"],
           "BookingId" : {
            "bookingNumber": 2,
             "sportId" : "",
             "centerId"  : "" ,
            "type": "private",
            "slot": '16286598000000',
            "bookedOn": '31/08/2021',
            "bookedFor": '01/09/2021'
           }
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
           "BookingId" : []
        },
        {
            "name": "akhilesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
            "BookingId" : []
         },
         {
            "name": "raj",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
            "BookingId" : []
         }
    ]


    router.post('/players/:playerName/bookings/:bookingId', function(req, res){
        let name=req.params.playerName
        let bookingIdNumber=req.params.bookingId
        let newBooking=req.body

        for (let i=0; i<playersId.length; i++){
            if(playersId[i].name==name){
                
                if(playersId[i].BookingId !==[] && playersId[i].BookingId.bookingNumber==bookingIdNumber ){
                    return res.send('booking id exists.')
                }
                if(playersId[i].BookingId ==""){
                    playersId[i].BookingId.push(newBooking)
                    //console.log(playersId)
                    return res.send(playersId)
                }
                
            }
            //console.log(playersId)
        }return res.send('player does not exists.')

    })

  //question 3rd
  // you will be given an array of persons (1.e an array of objects)..each person will have a 
  //(name: String, age: Number, ratingStatus: true/false(Boolean)} take input in query param as votingAge..
  //and for all the people above that age, change votingStatus as true also return an array consisting of only
  // the person that can vote
  
  // WRITE A POST API TO THE ABOVE
  
  // take this as sample for array of persons: 
  let persons = [
  
      {
          nane: "PK",
  
          age: 10, votingStatus: false
      },
  
      {
          nane: "SK",
  
          age: 20,
  
          votingStatus: false
      },
  
      {
          nane: "AA", age: 70,
  
          votingStatus: false
      },
  
      {
          nane: "SC",
  
          age: 5, votingStatus: false
      },
  
      {
          name: "HO",
  
          age: 40,
  
          votingStatus: false
      }
  ]
  router.post('/persons',function voting(req,res){
    let votingAge=req.query.votingAge
    let result=[]
    for(let i=0;i<persons.length;i++){
        let id=persons[i]
        if(id.age>=18&&votingAge>=18){
            result.push(id)
            
     
        } 
    }
    res.send({Data:result,status:true})    
  })
 





router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})


router.get("/random", function (req, res) {
    res.send("hi there")
})


router.get("/test-api", function (req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2", function (req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5", function (req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6", function (req, res) {
    res.send({ a: 56, b: 45 })
})

router.post("/test-post", function (req, res) {
    res.send([23, 45, 6])
})


router.post("/test-post-2", function (req, res) {
    res.send({ msg: "hi", status: true })
})

router.post("/test-post-3", function (req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log(req.body)

    res.send({ msg: "hi", status: true })
})



router.post("/test-post-4", function (req, res) {
    let arr = [12, "functionup"]
    let ele = req.body.element
    arr.push(ele)
    res.send({ msg: arr, status: true })
})

module.exports = router;