const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");

//Q=1
const createBook =async function(req,res){
    let data=req.body
    let savedData=await bookModel.create(data)
    res.send({msg:savedData})
}
const createAuthor =async function(req,res){
    let data=req.body
    let savedData=await authorModel.create(data)
    res.send({msg:savedData})
}

//Q=2
const searchByID = async function (req, res) {
    let data = await authorModel.find({ author_name: "Yousuf" });
    console.log(data,data[0].author_id)

    let searchBook = await bookModel.find({author_id: data[0].author_id});
    res.send({ msg: searchBook });
  };

  
  //Q.3
const twoState = async function (req, res) {
  
    let dataPrice=req.body.price 
    let allBook = await bookModel.find({name:"Two states"});
    let bookAuthor = await authorModel.find({author_Id:allBook[0].author_id})
    let authorName = bookAuthor[0].author_name 
    await bookModel.findOneAndUpdate({name:"Two states"},{price:dataPrice},{new:true})
    res.send({ "author_name":authorName,"price":dataPrice })
  };

  //Q.4
const priceBook=async function(req,res){
    let data=await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,price:1});
    // console.log(data);
    let author=await authorModel.find({author_id:data.map(x=>x.author_id)}).select({author_name:1,_id:0});
    let price=data[0].price
    res.send({author,price});
  };




module.exports.createBook=createBook
module.exports.createAuthor=createAuthor
module.exports.searchByID=searchByID
module.exports.twoState=twoState
module.exports.priceBook=priceBook
// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
