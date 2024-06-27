const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    type: String,
    title: String,
    description: String,
    salary: String,
    location: String,
    cname: String,
    cdescription: String,
    cemail: String,
    cphone: String,
})

module.exports = mongoose.model('Job', jobSchema)