const electron = require('electron');
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;
const path = require ('path');
const url = require ('url');

var mainWindow;
app.on('ready',function(){
    mainWindow = new BrowserWindow({width: 800, height: 600 ,frame: false })
    // mainWindow.loadURL('https://www.youtube.com/watch?v=sJFuMKPfpfs&t=432s');
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol : 'file',
        slashes : true

    })

    )
})

