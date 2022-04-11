[オリジナル (HeliosLauncher)](github.com/dscalzi/HeliosLauncher) [フォーク元 (沼ランチャー)](https://github.com/TeamKun/NumaLauncher)

<p align="center"><img src="./app/assets/images/SealCircle.svg" width="150px" height="150px" alt="aventium softworks"></p>

<h1 align="center">Aoi Launcher (Helios Launcher)</h1>

<p align="center">3歳でもマイクラに全自動でねこぞう参加型にアクセスすることができます</p>

![Screenshot 1](https://user-images.githubusercontent.com/70869837/161360213-06a58f9b-0eb5-42a0-b7a5-14b252c2bdbc.png)
![Screenshot 2](https://user-images.githubusercontent.com/70869837/161360193-1dc65592-b9ac-4136-979e-116a828e97d6.png)

## 機能

* 🔒 アカウント管理機能
  * 複数のマイクラフトアカウントを追加できます。
  * 暗号化通信によってMicrosoftに直接送信されトークン漏れの心配はありません。
* 📂 自動的に起動に必要なファイルの自動管理
  * マインクラフトのクライアント更新を受け取った場合すぐにダウンロードします。
  * ファイルは起動前に検証され、破損または正しくないファイルが検出した場合再ダウンロードされます。
* ☕ **Javaの自動検証**
  * そのJavaが互換性のない場合、適切なバージョンが自動的にインストールされます。
  * ランチャーがJavaを自動インストールするのでわざわざインストール必要がありません。(1.17.x（Java 17）以降除く)
* 🎭 スキンをランチャー内だけで変更可能です。
* ⚙️ 簡単な設定で管理ができます。
* たぶん全部のサーバーをサポートしてます。
  * すぐにパックを簡単に切り替えることができます。
  * パックの取得先を変更し、別のサーバーパックでプレイすることができます。
  * 選択したサーバーの参加人数がすぐに見られます
* ランチャーは自動更新され安全な状態へ更新されます。(ただし確認が必要な場合があります。)

これだけじゃないよ!ランチャーをダウンロードしてみて探してみよう!

#### ヘルプが必要ですか? [Wikiをご確認ください!][wiki]

#### このプロジェクトがすごいと思ったら⭐をこのレポジトリにつけてください!

## ダウンロード

GitHubの[リリースページ](https://github.com/TEAMNekozouneko/AoiLauncher/releases) からダウンロードできます。

#### 最新リリース

[![](https://img.shields.io/github/release/TEAMNekozouneko/AoiLauncher.svg?style=flat-square)](https://github.com/dscalzi/HeliosLauncher/releases/latest)

#### 最新プレリリース
[![](https://img.shields.io/github/release/TEAMNekozouneko/AoiLauncher/all.svg?style=flat-square)](https://github.com/dscalzi/HeliosLauncher/releases)

**サポートされたプラットフォーム**

ダウンロードはGitHubの[リリース](https://github.com/TEAMNekozouneko/AoiLauncher/releases) ページから出来ます。

| プラットフォーム| ファイル                                  |
| ------------- | --------------------------------------- |
| Windows 64bit | `AoiLauncher-setup-<VERSION>.exe`       |
| macOS 64bit   | `AoiLauncher-setup-<VERSION>-x64.dmg`   |
| macOS ARM64   | `AoiLauncher-setup-<VERSION>-arm64.dmg` |
| Linux 64bit   | `AoiLauncher-setup-<VERSION>.AppImage`  |

## コンソール

下のキーを同時押しすることでコンソールを開くことができます

```console
Ctrl + Shift + I
```

コンソールタブを開いてることを確認した上で使用してください。また必要以下の技術がない人は使用しないことをおすすめします。トークンなどが流出する危険性があります。

#### Export Output to a File

If you want to export the console output, simply right click anywhere on the console and click **Save as..**

![console example](https://i.imgur.com/T5e73jP.png)


## Development

### Getting Started

**必要な環境**

* [Node.js][nodejs] v16.x.x

---

**クローンと依存関係のインストール**

```console
> git clone https://github.com/TEAMNekozouneko/AoiLauncher.git
> cd AoiLauncher
> npm install
```

---

**起動する**

```console
> npm start
```

---

**インストーラーをビルド**

現在の環境を自動検出しビルドします。

```console
> npm run dist
```

環境を指定してビルドが可能です

| 環境               | コマンド              |
| ----------------- | -------------------- |
| Windows 64bit     | `npm run dist:win`   |
| macOS 64bit/arm64 | `npm run dist:mac`   |
| Linux 64bit       | `npm run dist:linux` |

MacOSのビルドはWindows/Linuxではできません、逆も同様できません。

---

### Visual Studio Code

All development of the launcher should be done using [Visual Studio Code][vscode].

Paste the following into `.vscode/launch.json`

```JSON
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Main Process",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "program": "${workspaceFolder}/node_modules/electron/cli.js",
      "args" : ["."],
      "outputCapture": "std"
    },
    {
      "name": "Debug Renderer Process",
      "type": "chrome",
      "request": "launch",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      },
      "runtimeArgs": [
        "${workspaceFolder}/.",
        "--remote-debugging-port=9222"
      ],
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

This adds two debug configurations.

#### Debug Main Process

This allows you to debug Electron's [main process][mainprocess]. You can debug scripts in the [renderer process][rendererprocess] by opening the DevTools Window.

#### Debug Renderer Process

This allows you to debug Electron's [renderer process][rendererprocess]. This requires you to install the [Debugger for Chrome][chromedebugger] extension.

Note that you **cannot** open the DevTools window while using this debug configuration. Chromium only allows one debugger, opening another will crash the program.

---

### Note on Third-Party Usage

You may use this software in your own project so long as the following conditions are met.

* Credit is expressly given to the original authors (Daniel Scalzi).
  * Include a link to the original source on the launcher's About page.
  * Credit the authors and provide a link to the original source in any publications or download pages.
* The source code remain **public** as a fork of this repository.

We reserve the right to update these conditions at any time, please check back periodically.

---

## Resources

* [Wiki][wiki]
* [Nebula (Create Distribution.json)][nebula]
* [v2 Rewrite Branch (WIP)][v2branch]

The best way to contact the developers is on Discord.

[![discord](https://discordapp.com/api/guilds/896668963709255680/embed.png?style=banner3)][discord]

---

### See you ingame.


[nodejs]: https://nodejs.org/en/ 'Node.js'
[vscode]: https://code.visualstudio.com/ 'Visual Studio Code'
[mainprocess]: https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes 'Main Process'
[rendererprocess]: https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes 'Renderer Process'
[chromedebugger]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome 'Debugger for Chrome'
[discord]: https://discord.gg/zNWUXdt 'Discord'
[wiki]: https://github.com/dscalzi/HeliosLauncher/wiki 'wiki'
[nebula]: https://github.com/dscalzi/Nebula 'dscalzi/Nebula'
[v2branch]: https://github.com/dscalzi/HeliosLauncher/tree/ts-refactor 'v2 branch'
