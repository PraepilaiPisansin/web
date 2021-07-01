const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let peopleSchema = new Schema({
    name: { type: String },
    lsname: { type: String },
    email: { type: String },
    rollno: { type: Number },
    sex: { type: String  },
    birth: { type: String  },
    age: { type: Number  },
    country: { type: String },
    region:{ type: String},
    jobs:{type: String}
},{
    collection:"people"
})


module.exports = mongoose.model('People', peopleSchema);

