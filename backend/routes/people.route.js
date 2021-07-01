let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();


//people model
let peopleSchema = require('../models/People')




//Create people
router.route('/create').post((req,res,next) =>{
    peopleSchema.create(req.body, (error,data) => {
        if (error) {
            return next(error);
        } else{
            console.log(data);
            res.json(data);
        }
    })
})

//Read people
router.route('/').get((req, res) => {
    peopleSchema.find((error, data) => {
        if (error){
            return next(error);
        } else {
            res.json(data);
        }
    })
})

//Get single people
router.route('/edit/:id').get((req,res) => {
    peopleSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        } 
    })
})

//Update people
router.route('/update/:id').put((req,res,next) => {
    peopleSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error,data) => {
        if (error){
            return next(error);
            console.log(error);
        } else {
            res.json(data);
            console.log('Updated Successfully');
        }
    })
})

//Delete people
router.route('/delete/:id').delete((req,res,next) => {
    peopleSchema.findByIdAndRemove(req.params.id, (error,data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})



module.exports = router;









