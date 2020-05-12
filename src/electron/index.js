import { app, Menu, BrowserWindow } from "electron";

app.on("ready", (e) => {
  const template = [
    {
      label: "編集",
      submenu: [
        {
          label: "戻る",
          accelerator: "Ctrl+Z",
          role: "undo",
        },
        {
          label: "進む",
          accelerator: "Ctrl+Y",
          role: "redo",
        },
        {
          label: "コピー",
          accelerator: "Ctrl+C",
          role: "copy",
        },
        {
          label: "貼り付け",
          accelerator: "Ctrl+V",
          role: "paste",
        },
      ],
    }, // 編集
    {
      label: "表示",
      submenu: [
        {
          label: "ウィンドウ最小化",
          role: "minimize",
        },
        {
          label: "ウィンドウを閉じる",
          role: "close",
        },
        {
          label: "フルスクリーン",
          role: "togglefullscreen",
        },
        {
          label: "再読み込み",
          accelerator: "F5",
          role: "reload",
        },
      ],
    }, // 表示
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  const windSetting = { window: 800, height: 600 };
  const mainWindow = new BrowserWindow(windSetting);
  mainWindow.loadFile("public/index.html");
  mainWindow.webContents.openDevTools();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
