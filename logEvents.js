const { format } = require('date-fns');
const uuid = require('uuid');
const uuidv4 = uuid.v4();
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuidv4}\t${message}\n`;
    console.log(logItem);
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', logName), logItem);
    } catch (err) {
        console.log(err);
    }
};

module.exports = logEvents;



