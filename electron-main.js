const { app, BrowserWindow, protocol, ipcMain, shell } = require('electron')
const path = require('path')

function createWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Electron x React',
        icon: path.join(__dirname, './public/favicon.ico'),
        center: true,
        darkTheme: true,
        minWidth: 1280,
        width: 1280,
        minHeight: 720,
        height: 720,
        autoHideMenuBar: true,
        webPreferences: {
            webSecurity: false,
            contextIsolation: true,
            devTools: true,
            preload: path.join(__dirname, 'electron-preloader.js')
        },
    })

    mainWindow.setMenuBarVisibility(false)
    mainWindow.setMenu(null)

    process.env.NODE_ENV === 'development' ? mainWindow.loadURL('http://localhost:1245/') : mainWindow.loadFile(path.join(__dirname, './dist/index.html'))
    protocol.registerFileProtocol('file', (request, callback) => callback(decodeURI(request.url.replace('file:///', ''))))
    app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors')

    app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow() })
    app.on('window-all-closed', () => process.platform !== 'darwin' ? app.quit() : null)
}

app.on('ready', () => createWindow())

ipcMain.on('open-external', (event, url) => shell.openExternal(url))
