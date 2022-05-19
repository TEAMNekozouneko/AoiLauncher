const builder = require('electron-builder')
const Platform = builder.Platform

function getCurrentPlatform(){
    switch(process.platform){
        case 'win32':
            return Platform.WINDOWS
        case 'darwin':
            return Platform.MAC
        case 'linux':
            return Platform.linux
        default:
            console.error('Cannot resolve current platform!')
            return undefined
    }
}

builder.build({
    targets: (process.argv[2] != null && Platform[process.argv[2]] != null ? Platform[process.argv[2]] : getCurrentPlatform()).createTarget(),
    config: {
        appId: 'aoilauncher',
        productName: 'AoiLauncher',
        artifactName: '${productName}-setup-${version}.${ext}',
        copyright: 'Copyright (c) 2018-2020 Daniel Scalzi, 2020 Kamesuta, 2022 Taitaitatata, runq_JP',
        directories: {
            buildResources: 'build',
            output: 'dist'
        },
        win: {
            target: [
                {
                    target: 'nsis',
                    arch: 'x64'
                }
            ]
        },
        nsis: {
            oneClick: false,
            perMachine: false,
            allowElevation: true,
            allowToChangeInstallationDirectory: true
        },
        mac: {
            target: 'dmg',
            category: 'public.app-category.games'
        },
        linux: {
            target: 'AppImage',
            maintainer: 'Daniel Scalzi, Kamesuta, Taitaitatata, Runq_JP',
            vendor: 'Daniel Scalzi, Kamesuta, Taitaitatata, Runq_JP',
            synopsis: '3歳でも使えるMinecraftランチャー',
            description: '3歳でもマイクラが簡単に全自動で起動できるランチャーです。',
            category: 'Game'
        },
        compression: 'maximum',
        files: [
            '!{dist,.gitignore,.vscode,docs,dev-app-update.yml,.travis.yml,.nvmrc,.eslintrc.json,build.js,numa_skins.json,skinSetting.json}'
        ],
        extraResources: [
            'libraries'
        ],
        asar: true
    }
}).then(() => {
    console.log('Build complete!')
}).catch(err => {
    console.error('Error during build!', err)
})
