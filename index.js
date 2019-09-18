const electron = require('electron');
const {app, BrowserWindow} = electron

let mainWindow;

app.on ('ready', () => {
    mainWindow = new BrowserWindow ({
        height: 400,
        width: 250,
        frame: false,
    })

    mainWindow.loadURL (`file://${__dirname}/src/index.html`)
})

app.on ('close', () => {
    mainWindow = null;
})