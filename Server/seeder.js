const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
const dataModel = require('./models/data');


// Load env vars
dotenv.config({ path: './config/config.env' });
// Connect to DB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
    // useFindAndModify: false
});

// Read JSON files
const data = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/data.json`, 'utf-8')
);



// Import into DB
const importData = async () => {
    try {
        await dataModel.insertMany(data);
        console.log('Data Imported...'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
}


// Delete data
const deleteData = async () => {
    try {
        await dataModel.deleteMany({});
        console.log('Data Destroyed...'.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
}


if (process.argv[2] === '-i') {
    importData();
}
else if (process.argv[2] === '-d') {
    deleteData();
}