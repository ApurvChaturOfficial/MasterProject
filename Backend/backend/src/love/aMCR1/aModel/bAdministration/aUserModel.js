const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require("crypto");


const schema = new mongoose.Schema({
  critical_info: {
    first_name: {
      type: String,
      required: [true, "Please enter first name"],
      max_length: [25, "Name cannot exceed 25 characters"],
      min_length: [5, "Name cannot subceed 5 characters"],
      trim: true
    },
    last_name: {
      type: String,
      required: [true, "Please enter last name"],
      max_length: [25, "Name cannot exceed 25 characters"],
      min_length: [5, "Name cannot subceed 5 characters"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      validate: [validator.isEmail, "Please enter valid email"],
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
      max_length: [16, "Name cannot exceed 16 characters"],
      min_length: [8, "Name cannot subceed 8 characters"],
      select: false
    },
    image: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    reset_password_token: String,
    reset_password_token_expire: Date,
  },
  basic_info: {
    title: {
      type: String,
      required: [true, "Please enter base title"]
    },
    sub_title: {
      type: String
    },
    slug: {
      type: String
    },
    status: {
      is_active: {
        type: Boolean,
        default: true
      }
    },
    image: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },  
  },

  personal_info: {
    created_at: {
      type: Date,
      default: Date.now(),
    },    
    created_by: {
      type: Object,
    },    
    updated_at: {
      type: Date,
    },          
    updated_by: {
      type: Object,
    },    
  },
})

// Pre Save
// Slugify Title
schema.pre("save", async function(next) {
  if (!this.isModified("critical_info.password")) next();
  this.critical_info.password = await bcryptjs.hash(this.critical_info.password, 10);

  const options = {
    replacement: '-', // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
    locale: 'en', // language code of the locale to use
  };
  this.basic_info.slug = slugify(this.critical_info.email, options);
})

// Methods
// Compare Password
schema.methods.comparePassword = async function(enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.critical_info.password)
}

// Get Authentication Token
schema.methods.getAuthenticationToken = function() {
  return jsonwebtoken.sign(
    { id: this._id },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE}
  )
}

// Get Reset Password Token
schema.methods.getResetPasswordToken = async function() {
  // Generate Token
  const resetToken = crypto.randomBytes(20).toString("hex")

  // Hash Token
  this.critical_info.reset_password_token = crypto.createHash("sha256").update(resetToken).digest("hex")
  this.critical_info.reset_password_token_expire = Date.now() + 15*60*1000;

  return resetToken;
}

module.exports = mongoose.model("UserModel", schema)
