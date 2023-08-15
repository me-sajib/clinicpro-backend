const mongoose = require('mongoose');
const config = require('./config');

const dbURL = config.db.url;

mongoose.set('strictQuery', true);
mongoose.connect(dbURL).then(() => { console.log("Database connection successfully") }).catch((err) => {
    console.log(err);
    process.exit(1);
})