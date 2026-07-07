
const { Book } = require("../model/book.model");
const handleBookStoreController = async (req, res) => {
    try {
        const body = req.body;

        if (!body.BookName || !body.BookTitle || !body.Author || !body.SellingPrice) {
            return res.status(400).json({ Message: "All Fields Required", Success: false })

        }

        const bookAdd = await Book.create(body);

        if(bookAdd){
            return res.status(201).json({ Message:"Book Created Successfully", Success:true,  Id:bookAdd?._id ,  })
        }


        console.log("bookadd", bookAdd)
    } catch (error) {
        return res.status(500).json({ Message: error.message, Success: false })
    }
};

const handleBookListController = async (req , res)=>{
    try {
        const bookList =  await Book.find({});
        return res.status(200).json({ Message: "all books fetched successfully", Success: true , TotalCount:bookList.length , bookList:bookList})
        console.log(req.body);
    } catch (error) {
         return res.status(400).json({ Message: error.message, Success: false })
        
    }
};
const handleBookDeleteController = async (req,res)=>{
    const body = req.body
    try {
        const deleted = await Book.deleteOne({_id:body.Id})
        console.log("deleted" , deleted);
        if(deleted.acknowledged){
           return res.json({ Message:"Book Deleted successfully",
                 Success: true , 
                 })

        }
    } catch (error) {
        return res.status(400).json({ Message: error.message, Success: false })
    }
}
const handleBookUpdateController = async (req, res) => {
    try {
        const { Id, ...updateData } = req.body;

        const updating = await Book.updateOne(
            { _id: Id },
            { $set: updateData }
        );

        if (updating.modifiedCount > 0) {
            return res.json({
                Message: "Book Updated Successfully",
                Success: true,
            });
        }

        return res.json({
            Message: "Book not found or no changes made",
            Success: false,
        });

    } catch (error) {
        return res.status(400).json({
            Message: error.message,
            Success: false,
        });
    }
};

module.exports = {handleBookStoreController , handleBookListController , handleBookDeleteController , handleBookUpdateController} ;