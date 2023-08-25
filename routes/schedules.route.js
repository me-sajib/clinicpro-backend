const { addSchedules, allSchedules } = require('../controllers/schedules.controller');

const schedulesRouter = require('express').Router();

schedulesRouter.post("/add", addSchedules);
schedulesRouter.get("/all", allSchedules);

module.exports = schedulesRouter;