const { app, BrowserWindow } = require("electron");
const path = require("path");
const express = require("express");
const http = require("http");

// Create an Express app
const appExpress = express();
const server = http.createServer(appExpress);

// Serve static files from your React build directory
appExpress.use(express.static(path.join(__dirname, "build")));

// Define a route for your API
appExpress.get("/api/data", (req, res) => {
  res.json({ message: "This is data from your Node.js server!" });
});

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
};

app.on("ready", () => {
  // Start the Node.js server
  server.listen(3000, "127.0.0.1", () => {
    console.log("Node.js server is running on http://127.0.0.1:3000");
    createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
