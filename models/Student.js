const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    mobile : {
        type : String,
        required : true
    },
    address : {
        location : {
            type : String,
            required : true
        },
        city : {
            type : String,
            required : true
        },
        state : {
            type : String,
            required : true
        },
        pincode : {
            type : String,
            required : true
        }
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;