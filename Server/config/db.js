const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.blue.bold);
}

module.exports = { connectDB };
