import 'dotenv/config';
import multer from 'multer';
import {CloudinaryStorage,} from 'multer-storage-cloudinary'
import { v2 as cloudinary } from 'cloudinary';



    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key:process.env.API_KEY, 
        api_secret:process.env.API_SECRET // Click 'View API Keys' above to copy your API secret
    });
    
   
;

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'epicode',
      //format: ["png", "jpg"], 
      
    },
  });
   
  const uploadCloudinary = multer({ storage: storage });

  export default uploadCloudinary;
