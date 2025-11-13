const ImageKit = require("imagekit");
require('dotenv').config();

const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY ,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
}); 


async function uploadFile(file,fileName){
    const result = await imagekit.upload({
        file: file,//required file
        fileName: fileName//required fileName
    });
    return result; //this result is an object which contains the file url
}

module.exports = { uploadFile };
