const schedulesModel = require("../models/schedules.model")
const addSchedules = async (req, res) => {
    const { doctor_name, date, time1, time2, status } = req.body;
    try {
        const result = await schedulesModel.create({
            doctor_name: doctor_name,
            date: date,
            time1: time1,
            time2: time2,
            status: status
        });
        res.status(200).json({ status: true, data: result });
    } catch (err) {
        console.log("post schedules error", err)
    }
}

const allSchedules = async (req, res) => {
    try {
        const result = await schedulesModel.find();
        res.status(200).json({ status: true, data: result });
    } catch (err) {
        console.log("get schedules error", err)
    }
}

module.exports = {
    addSchedules,
    allSchedules
}