const cloudinary = require('cloudinary');

const fileStorage = () => {
  cloudinary.config({
    cloud_name: 'dprguhpph',
    api_key: '636787975923379',
    api_secret: 'wcFaz18DjoJCW5Z7isyzUGrHP9Q'
  })
}

module.exports = fileStorage