const multer = require('multer')
// storage config
// call back - A callback is a function that is passed as an argument to another function, and is called after the main function has finished its execution. The main function is called with a callback function as its argument, and when the main function is finished, it calls the callback function to provide a result. Callbacks allow you to handle the results of an asynchronous operation in a non-blocking manner, which means that the program can continue to run while the operation is being executed.
const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        const filename = `image-${Date.now()}.${file.originalname}`
        callback(null,filename)
    }
})

// filter optional
const filefilter = (req,file,callback)=>{
    if(file.mimetype === "image/png" ||file.mimetype === "image/jpg" ||file.mimetype === "image/jpeg"  ){
        callback(null,true)
    }else{
        callback(null,false)
        return callback(new Error("Only .png .jpg & .jpeg formatted Allowed"))
    }
}

const upload = multer({
    storage:storage,
    fileFilter:filefilter
});

module.exports = upload;