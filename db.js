const mongoose = require('mongoose');

const connectMongo = async (mongoURI) => {
    try {
        console.log("URL -> ", mongoURI)
        await mongoose.connect(mongoURI);
        console.log("Db Connected")
    } catch (error) {
        console.log("Connection issue: ", error);
    }
}

module.exports = connectMongo;