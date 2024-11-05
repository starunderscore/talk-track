const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Define project root and log directory paths
const projectRoot = process.cwd();
const logDir = path.join(projectRoot, '.spirit-code', 'talk-track');

// Create a cleaner timestamp format: YYYY_MM_DD_HH_MM_SS_ms
const timestamp = new Date().toISOString().replace(/[^0-9]/g, '_');
const logFilePath = path.join(logDir, `${timestamp}.json`);
const processId = uuidv4();

// Initialize configuration with default values
let config = {
  debug: false,
};

// Ensure the log directory exists
function ensureDirectorySync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    try {
      fs.mkdirSync(dirPath, { recursive: true });
      if (config.debug) console.log(`Directory created: ${dirPath}`);
    } catch (error) {
      console.error(`Failed to create directory: ${dirPath}`, error);
      throw error;
    }
  } else if (config.debug) {
    console.log(`Directory already exists: ${dirPath}`);
  }
}

// Ensure the log file exists; create it only if it doesn’t
function ensureLogFileExists(filePath) {
  if (!fs.existsSync(filePath)) {
    try {
      fs.writeFileSync(filePath, '[]');
      if (config.debug) console.log(`File created: ${filePath}`);
    } catch (error) {
      console.error(`Failed to create file: ${filePath}`, error);
      throw error;
    }
  } else if (config.debug) {
    console.log(`File already exists: ${filePath}`);
  }
}

// Main talkTrack object
const talkTrack = {
  // Configure debug option asynchronously
  config: async function (options) {
    config = { ...config, ...options };
    if (config.debug) console.log('Debug mode enabled');
  },

  log: function ({ role, message }) {
    const logEntry = { timestamp, processId, role, message };

    // Ensure directory and file existence
    ensureDirectorySync(logDir);
    ensureLogFileExists(logFilePath);

    // Read the current log content
    let existingLog = [];
    try {
      const data = fs.readFileSync(logFilePath, 'utf8');
      existingLog = JSON.parse(data);
    } catch (error) {
      console.error(`Failed to read from file: ${logFilePath}`, error);
    }

    // Append new log entry to the array
    existingLog.push(logEntry);

    // Write the updated log array back to the file
    try {
      fs.writeFileSync(logFilePath, JSON.stringify(existingLog, null, 2), 'utf8');
      if (config.debug) console.log(`Log entry written to file: ${logFilePath}`);
    } catch (error) {
      console.error(`Failed to write to file: ${logFilePath}`, error);
    }
  }
};

module.exports = talkTrack;
