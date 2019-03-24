const { app, BrowserWindow } = require('electron')
var path = require('path')

let win

function createWindow () {
  win = new BrowserWindow({
    frame: true,
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'assets/icons/png/64x64.png')
  })

  win.loadFile('./build/index.html')

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
