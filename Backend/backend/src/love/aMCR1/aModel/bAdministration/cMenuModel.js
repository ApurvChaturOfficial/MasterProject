const mongoose = require('mongoose');
const slugify = require('slugify');

const schema = new mongoose.Schema({
  basic_info: {
    title: {
      type: String,
      required: [true, "Please enter menu title"]
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
schema.pre("save", async function() {
  const options = {
    replacement: '-', // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
    locale: 'en', // language code of the locale to use
  };

  this.basic_info.slug = slugify(this.basic_info.title, options);
})

module.exports = mongoose.model("MenuModel", schema)
