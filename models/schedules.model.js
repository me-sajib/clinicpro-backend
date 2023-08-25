const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    doctor_name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time1: {
        type: String,
        required: true
    },
    time2: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("doctorSchedules", scheduleSchema);
