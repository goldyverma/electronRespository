const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;
 
//Listen 
app.on('ready',function(){
    mainWindow = new BrowserWindow({});
})