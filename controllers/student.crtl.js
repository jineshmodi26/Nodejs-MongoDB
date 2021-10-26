const Student = require('../models/Student');

module.exports = {
    getStudent : async (req, res) => {
        try {
            await Student.find({}).then((result) => {
                res.json({
                    students : result
                })            
            }).catch((err) => {
                res.json({
                    error : err
                })
            })
        } catch(err) {
            res.json({
                error : err
            })
        }
    },
    addStudent : async (req, res) => {
        const {name, email, mobile, location, city, state, pincode} = req.body;
        const student = new Student({
            name : name,
            email : email,
            mobile : mobile,
            address : {
                location : location,
                city : city,
                state : state,
                pincode : pincode
            }
        });
        try {
            await student.save();
            res.json({
                msg : 'added successfully',
                data : student
            })
        } catch(err){
            res.json({
                error : err
            })
        }
    },
    editStudent : async (req, res) => {
        const {id} = req.params;
        const {name,email,mobile,location,city,state,pincode} = req.body
        try{
            await Student.findByIdAndUpdate(id, {
                name,email,mobile,location,city,state,pincode
            }).then((result)=>{
                res.json({
                    msg : 'updated successfully'
                })
            }).catch((err) =>{
                res.json({
                    error : err
                })
            })
        } catch(err) {
            res.json({
                error : err
            })
        }
    },
    deleteStudent : async (req, res) => {
        const {id} = req.params;
        await Student.findByIdAndDelete(id).then((result) => {
            res.json({
                msg : 'deleted successfully'
            })
        }).catch((err) => {
            res.json({
                error : err
            })
        })
    }
}