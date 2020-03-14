const ServiceResponse = require("../BaseClasses/ServiceResponse").serviceResponse;
const appConstants = require("../utils/constants").appConstants;
const dbVars = require("../loaders/dbInitializer").dbVars;
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname,"../temp"));
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now());
    }
});

var upload = multer({ storage: storage }).array('postImages', 5);

const uploadPromise = (req,res) => {
    return new Promise((resolve,reject)=>{
        upload(req,res,function(err) {
            //console.log(req.body);
            //console.log(req.files);
            if(err) {
                console.log("Upload Err",err)
                reject(false);
            }
            resolve(true)
        });
    })
}

const createPost = async (req, res) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    const mongoDb = dbVars.db;
    if (token) {
        let result = await mongoDb.collection("users").find({ token: token }).toArray();
        if (result && result.length > 0) {
            let reqData = req.body;
            let createPostObj = {
                userId: result[0]._id,
                postComent: reqData.postComment,
                images: [],
                createDate: new Date(),
                updateDate: new Date()
            }
            let uploadRes = await uploadPromise(req,res);
            console.log("Upload res",uploadRes)
            let insertRes = await mongoDb.collection("posts").insertOne(createPostObj);
            if (insertRes && insertRes.insertedCount > 0) {
                console.log("RES", insertRes)
                let sr = new ServiceResponse(true, appConstants.POST_CREATED);
                return sr.getServiceResponse();
            }
            let sr = new ServiceResponse(false, appConstants.POST_NOT_CREATED);
            return sr.getServiceResponse();

        } else {
            let sr = new ServiceResponse(false, appConstants.NOT_VALID_TOKEN);
            return sr.getServiceResponse();
        }
    } else {
        let sr = new ServiceResponse(false, appConstants.TOKEN_MISSING);
        return sr.getServiceResponse();
    }
}

module.exports = {
    createPost: createPost
}

