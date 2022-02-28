const mongoose = require('mongoose')
const validator = require('validator')

// model for the user input collection
// this will create (or add to) a collection
// named userinputcollections
let Schema = mongoose.Schema;

let userInputSchema = new Schema ({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false 
        }
    },
    fieldname: {
        type: String,
        required: true,
        minlength: 2,
    },
    fieldDescription: {
        type: String,
        required: true,
    },
    applicableApplications: {
        type: Array,
        required: false,
    },

});

let userInputCollection = mongoose.model("userInputCollection", userInputSchema);
// // mongoose.model("UpdateModel", UpdateSchema);

module.exports = {userInputCollection};
