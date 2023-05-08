const cloudinary = require("cloudinary")


const handleImage = async (target, folder, type, retrieve) => {
  if (type === 'update') {
    if (target?.url?.startsWith("https://")) {
      return target
    } else {
      await cloudinary.v2.uploader.destroy(retrieve.public_id);

      const myCloud = await cloudinary.v2.uploader.upload(target.url, {
        folder: folder,
      });
  
      return {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      }   
    }
  } else if (type === 'create') {
    const myCloud = await cloudinary.v2.uploader.upload(target.url, {
      folder: folder,
      width: 150,
      crop: "scale",
    });
    
    return {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    }  
  }
}

module.exports = handleImage;
