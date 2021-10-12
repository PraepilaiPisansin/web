const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let peopleSchema = new Schema({
    name: { type: String },
    lsname: { type: String },
    email: { type: String },
    sex: { type: String  },
    birth: { type: String  },
    age: { type: Number  },
    country: { type: String },
    region:{ type: String},
    jobs:{type: String},
    pWeight:{type: Number},
    pHeight:{type: Number}

},{
    collection:"people"
})


module.exports = mongoose.model('People', peopleSchema);

