import path from 'node:path'
import { BrowserWindow, app } from 'electron'

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
    win.webContents.openDevTools()
  }
  else { win.loadFile(path.join(process.env.VITE_PUBLIC!, 'index.html')) }
}

app.whenReady().then(() => {
  createWindow()
})
