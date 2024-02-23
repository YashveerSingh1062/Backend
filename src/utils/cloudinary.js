import {v2 as cloudinary} from "cloudinary";
import ds from "fs";

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null;

        cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        console.log("file is uplaoded cloudinary ",response.url);

        return response;


    } catch (error)
    {
        fstat.unlinkSync(localFilePath);
        return null
    }
}

export {uploadOnCloudinary}