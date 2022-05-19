[オリジナル/Original (HeliosLauncher)](github.com/dscalzi/HeliosLauncher) [フォーク元 (沼ランチャー)](https://github.com/TeamKun/NumaLauncher)

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
  * ランチャーがJavaを自動インストールするのでわざわざインストール必要がありません。(1.17以降除く)
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

GitHubの[リリースページ](https://github.com/TEAMNekozouneko/AoiLauncher/releases)からダウンロードできます。

#### 最新リリース

[![](https://img.shields.io/github/release/TEAMNekozouneko/AoiLauncher?display_name=tag&label=%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9&style=flat-square)](https://github.com/TEAMNekozouneko/AoiLauncher/releases/latest)

#### 最新プレリリース
[![](https://img.shields.io/github/release/TEAMNekozouneko/AoiLauncher/all.svg?style=flat-square&display_name=tag&label=%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9)](https://github.com/TEAMNekozouneko/AoiLauncher/releases)

**サポートされたプラットフォーム**

ダウンロードはGitHubの[リリース](https://github.com/TEAMNekozouneko/AoiLauncher/releases) ページから出来ます。

| プラットフォーム | ファイル                                  |
| -------------- | --------------------------------------- |
| Windows 64bit  | `AoiLauncher-setup-<VERSION>.exe`       |
| macOS 64bit    | `AoiLauncher-setup-<VERSION>-x64.dmg`   |
| macOS ARM64    | `AoiLauncher-setup-<VERSION>-arm64.dmg` |
| Linux 64bit    | `AoiLauncher-setup-<VERSION>.AppImage`  |

## コンソール

下のキーを同時押しすることでコンソールを開くことができます

```console
Ctrl + Shift + I
```

コンソールタブを開いてることを確認した上で使用してください。また必要以下の技術がない人は使用しないことをおすすめします。トークンなどが流出する危険性があります。

#### コンソールファイルをエクスポートする。

コンソールをログを保存したい場合、ログを右クリックして`Save as...`をクリックして保存ができます。

![console example](https://i.imgur.com/T5e73jP.png)


## 開発する

### 開発を始める

**必要な環境**

* [Node.js][nodejs] v16以降

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

### サードパーティラインセス

> ※誤訳がある可能性があります。おかしい場合は[Issues][issues]にお願いします。<br>
> ※There may be some mistranslations. If it is not correct, please contact the [Issues][issues].

以下の条件を満たす限り、本ソフトウェアをご自身のプロジェクトで使用することができます。

* 原作者 (Daniel Scalzi) のクレジットを記入する。
  * オリジナルのソースコード ([HeliosLauncher](https://github.com/dscalzi/HeliosLauncher))のGitHubのURLを詳細/Aboutのページに貼る
  * 原作者達のクレジットをダウンロードページや公開ページのどれかに記入する。
* ソースコードを**公開**として改造してください。

[原作者](https://github.com/dscalzi/)は、これらの条件をいつでも更新できる権利があるため、定期的に確認してください。

---

## リソースやリンク

* [Wiki][wiki]
* [AoiModPacks (distribution.json)][amp]

なにか問題が合った場合はDiscordまで

[![discord](https://discordapp.com/api/guilds/896668963709255680/embed.png?style=banner4)][discord]

---

### ゲームで会おう!

[issues]: https://github.com/TEAMNekozouneko/AoiLauncher/issues
[nodejs]: https://nodejs.org/ja/ 'Node.js'
[vscode]: https://code.visualstudio.com/ 'Visual Studio Code'
[discord]: https://nekozouneko.ddns.net/discord 'Discord'
[wiki]: https://github.com/TEAMNekozouneko/AoiLauncher/wiki 'wiki'
[amp]: https://github.com/TEAMNekozouneko/AoiModPacks 'AoiModPacks'
