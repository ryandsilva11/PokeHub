const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Cria uma nova janela de navegador de 1000px de largura por 700px de altura
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    title: "PokeHub",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Permite usar recursos do Node.js diretamente no frontend (simples para o MVP)
    },
  });

  // Carrega a URL do servidor local do React/Vite
  win.loadURL('http://127.0.0.1:5173');
}

// Quando o Electron terminar de inicializar, ele cria a janela
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // No macOS, é comum recriar uma janela quando o ícone da doca é clicado
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Fecha o aplicativo quando todas as janelas forem fechadas (exceto no macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
