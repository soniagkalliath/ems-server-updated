const users = require('../models/userSchema');

//register request logic define
exports.userregister = async (req,res)=>{
    const file = req.file.filename;
    
    const { fname, lname,  mobile, gender, location, status,email } = req.body;
    if (!fname || !lname || !email || !mobile || !gender || !location || !status || !file) {
        res.status(404).json("All Inputs are required")
    }
    try {
        const preuser = await users.findOne({ email: email });

        if (preuser) {
            res.status(403).json("This user already exist in our databse")
        } else {

            // const datecreated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

            const userData = new users({
                fname, lname, email, mobile, gender, location, status, profile: file
            });
            await userData.save();
            res.status(200).json(userData);
        }
    } catch (error) {
        res.status(401).json(error);
        console.log("catch block error")
    }  
}

// uget all users
exports.getallusers = async (req, res) => {

    const search = req.query.search

    const query = {
        fname:{$regex:search,$options:"i"}
    }

    try {
        const usersdata = await users.find(query)
        res.status(200).json({
            usersdata
        })
    } catch (error) {
        res.status(401).json(error)
    }
}

//get aparticualr user
exports.viewUser = async (req,res)=>{
    const {id}= req.params

    try{
        const userDetails = await users.findOne({_id:id})
        res.status(200).json({
            userDetails
        })
    }catch (error) {
        res.status(401).json(error)
    }
}