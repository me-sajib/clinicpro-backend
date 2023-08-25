const app = require("./app");
const config = require("./config/config");
const schedulesRouter = require("./routes/schedules.route");
const userRouter = require("./routes/user.route");


app.use("/users", userRouter);
app.use("/schedules", schedulesRouter)

app.use("/", (_, res) => {
    res.send("Hello World");
});


app.listen(config.app.port, () => {
    console.log(`Server is running on port ${config.app.port}`);
})