
const orderModel = require("../models/orderModel")
const userModel=require("../models/userModel")
const productModel=require("../models/productModel")


const newOrder = async function (req, res) {
    let data = req.body;
    let user = await userModel.findById(data.userId);
    if (user) {
        let product = await productModel.findById(data.productId);
        if (product) {
            if (req.headers.isfreeappuser == 'true') {
                data['amount'] = 0;
                data['isFreeAppUser'] = req.headers.isfreeappuser;
                let newData = await orderModel.create(data);
                res.send({ msg: newData });
            }
            else {
                if (user.balance >= product.price) {
                    await userModel.findOneAndUpdate(
                        { _id: data.userId },
                        { $set: { balance: user.balance - product.price } },
                        {new:true}
                    );
                    data['amount'] = product.price;
                    data['isFreeAppUser'] = req.headers.isfreeappuser;
                    let newData = await orderModel.create(data);
                    res.send({ msg: newData });
                }
                else {
                    res.send("Insufficient Balance!")
                }
            }
        }
        else {
            res.send('Invalid ProductID!');
        }

    }
    else {
        res.send('Invalid UserID!');
    }
}






module.exports.newOrder = newOrder





































// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }






// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({ authorName: "HO" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }


// const updateBooks = async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany(
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "ABC" }, //condition
//         { $set: data }, //update in data
//         { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function (req, res) {
//     // let data = req.body
//     let allBooks = await BookModel.updateMany(
//         { authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true } ,
//     )

//     res.send({ msg: allBooks })
// }



// const totalSalesPerAuthor = async function (req, res) {
//     // let data = req.body
//     let allAuthorSales = await BookModel.aggregate(
//         [
//             { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
//             { $sort: { totalNumberOfSales: -1 } }
//         ]
//     )

//     res.send({ msg: allAuthorSales })
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook = createBook
// module.exports.getBooksData = getBooksData
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor
