# Backend With javascript

This Code is for backend

- [Mode Link](https://app.pitch.com/app/presentation/e8e95357-7514-4f5d-9b8f-4876a949b4c3/43234999-8e34-448a-b1c9-870184ed8664)

* utils - cloudinary

##### _Upload file on cloudinary_

[cloudinary-acc](https://console.cloudinary.com/pm/c-0037c2250b94119ab1ba346faf96f7/getting-started)

```js
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been uploaded successfully
    console.log("file is uploaded on cloudinary ", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved temporary file as the upload opeartion got failed
    return null;
  }
};

export { uploadOnCloudinary };
```

- _middleware - multer_

```js
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
```
