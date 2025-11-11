// electron/main.ts
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── ...
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist');
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? path.join(process.env.DIST, '../public')
  : process.env.DIST;

const DIST = path.join(__dirname, '../dist');
const VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? path.join(DIST, '../public')
  : DIST;

let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(VITE_PUBLIC, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    // Set frame to false to create a frameless window
    frame: false,
  });

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(DIST, 'index.html'));
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
    win = null;
  }
});

app.whenReady().then(createWindow);

ipcMain.on('minimize-window', () => {
  win?.minimize();
});

ipcMain.on('maximize-window', () => {
  if (win?.isMaximized()) {
    win?.unmaximize();
  } else {
    win?.maximize();
  }
});

ipcMain.on('close-window', () => {
  win?.close();
});