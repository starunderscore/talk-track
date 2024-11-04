const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

let processId = uuidv4(); // Unique identifier for each session run

const talkTrack = {
  log: function({ role, message }) {
    const timestamp = new Date().toISOString();
    const logEntry = { timestamp, processId, role, message };

    // Define the path in @spirit-riddle/talk-track with timestamp
    const logDir = path.resolve(__dirname, '..', '@spirit-code', 'talk-track');
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    const filePath = path.join(logDir, `${timestamp}.json`);
    fs.writeFileSync(filePath, JSON.stringify(logEntry, null, 2), 'utf8');
  }
};

module.exports = talkTrack;
