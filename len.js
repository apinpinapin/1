const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')

global.grup = 'https://chat.whatsapp.com/IDOfRIpCElZI2JbnJ09N1V'
global.ig = '-'
global.thumb = fs.readFileSync("./data/image/thumb.jpg")
global.email = 'selenapro2000@gmail.com'
global.region = 'Indonesia'

global.owner = ['6281231948641']
global.ownername = 'Alfin Faridh Taufiqiy'

global.keyopenai = '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'
global.ibeng = 'Yl4h5x9wiA'

global.domain = '-'
global.apikey = '-' // Plta
global.capikey = '-' // Pltc
global.eggsnya = '15'
global.location = '1'

global.lenwymenu = 'Alfin Faridh Taufiqiy'
global.botname = 'Alfin Faridh Taufiqiy'
global.packname = 'Alfin Faridh Taufiqiy'
global.author = `Whatsapp: \nBot: 6281231948641`
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'apin'
global.anticall = true

global.mess = {
    success: '☘️ *Selesai*',
    admin: '⚠️ *Fitur Khusus Admin Group!*',
    botAdmin: '⚠️ *Fitur Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group!*',
    owner: '⚠️ *Fitur Khusus Owner!*',
    prem: '⚠️ *Fitur Khusus Premium!*',
    group: '⚠️ *Fitur Ini Hanya Bisa Digunakan Di Group Chat!*',
    wait: '📦 *Dalam Proses*',
    error: '⚠️ *Kayaknya Ada Error, Coba Lagi Di Lain Waktu*',
    link: '⚠️ *Itu Bukan Link Yang Benar*',
    
    // Fitur Store & Report
    owner2: '6281231948641',
    qris: 'https://telegra.ph/file/41993d781e2d608315cc1.jpg',
    format: '🎁 *Pembayaran*\n📣 *All Payment Bisa Scan Qr Diatas*\n\n📃 *Metode Lain*\n🏷️ *Ovo : 62-*\n🏷️ *Dana : 62-*\n🏷️ *Gopay : 62-*\n\n⚠️ *Dimohon Untuk Mengirim Bukti Pembayaran*\n\n❤️ *Terimakasih*',
}

global.LenwySet = {
    free: 50,
    coin: 15,
    stamina: 30,
    kekuatan: 100,
    tahan: 80
}

global.multiplier = 1000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green(`📑  Update : ${__filename}`))
delete require.cache[file]
require(file)
})