const fs = require('fs')
const chalk = require('chalk')
//===============>>>>> Subs YT OJIOFFC
//======================>>> Sc Masih V 1.0.4
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true
//==============>>>> Setting Bot,Own,Dll
global.ownername = 'OJI' //ini nama own
global.owner = ['6283170801193'] //ini no own
global.versionbot = "V1" //versi botmu
global.owner2 = '6283814945701' //isi ajaa
global.nobot = '6283170801193' // no bot mu
global.creator = "6283170801193" // ganti aja gpp
global.linkstore = "https://shope.ojiofficial.my.id" //link shope/bio link lu kalo ada
global.botname = 'OJIBOTZz' //ink nama bot mu
global.grouptesti = "https://shope.ojiofficial.my.id" // ubah aja
global.prefa = ['','!','.',',','🐤','🗿'] //gausah di apa apain
global.tTeks2 = '> '
global.sessionName = 'Ojisessi' //Gausah Di Ubah Nanti Erorr
global.idchannel = '1203633058282511@newsletter' //ubah id saluran mu kalo ada
global.linkgc = 'https://chat.whatsapp.com/CqwmQac1x359YhbwyLyrFC' // ubah link grup lu
global.namebot = "OJIBOTZz" // samain aja kaya yang atas
global.thumbnail = 'https://telegra.ph/file/8d5423686dfba899c12fd.jpg' // foto bot lu,buat jadiin link nya tinggal pake bot telegram atau pake bot yang ada menu tourl
global.foter1 = 'ig : @ojiwzrd_' // bebas isi
global.urlwa = "https://wa.me/6282353119669" // gantii aja
global.botname = "OJIBOTZz" // samain aja kaya yang atas hehe
global.foter2 = 'YT : @ojiofficial_' //bebas mau nama yt lu nama ortu lu atau nama tetangga lu
global.autobio = true // true buat nyalain auto bio & false buat matiin
global.autoread = false // true (menyalakan auto read / centang biru) & false untuk mematikan
global.Ghost = '`'//diemin aja
global.packname = 'Sticker By'//seterah lu ini buat sticker
global.author = 'OJIBOTZz'//lanjutan sticker atau isi dah seterahlu
global.skizo = "@ojiwzrd_" //ini sih apikey skizo lu kalo ada kalo ga ada isi apakek
global.panduan = '*Panduan Menggunakan Ojibotz WhatsApp*\nNo1. Sebelum Melihat Menu Kalian Diharuskan Untuk Mendaftar Terlebih Dahulu\nNo2.Setelah Mendaftar Kalian Bisa Melihat Semua Menu Menu Yang Ada Di Bot Nya\nNo3. Untuk Membuat Sticker Bot Whatsapp Kalian Bisa mengirimkan Foto Dengan Caption .s atau caption .sticker\nNo4 Mohon Maaf Ya Fitur Nya Masih Sedikit Soalnya Masih Baru Belajar Buat Sc Sendiri\n\n*NOTE🔖* Jangan Memperjual Belikan Script Ini,Terimakasih\n© Copyright OJIOFFICIAL. 2024 - 2025'
global.textpanel = 'Buy Panel?Cek shope.ojiofficial.my.id'


global.onlypc = false 
global.onlygc = false

//===============>>>> Buat limit & balance
global.limitawal = 10
global.balanceawal = 10000
//========================>>> Diemin Aja
global.wlcm = []
global.wlcmm = []
global.family100 = {};
global.suit = {};
global.tictactoe = {};

//=================>> Ini Message Buat Reply
global.mess = {
    premium: ('🌊 Kayanya Kamu Harus Beli Premium Dulu Atau Minta Premium langsung Ke Owner'),
    done: ('🐣 Done kak'),
    owner: ('🎀 *Loh Kamu Siapa? Khusus Owner* 🤴'),
    wait: ('🐣 *Tunggu Sebentar*'),
    group: '🔖 *Fitur Ini Khusus Grup*',
    admin: '🔖 *Fitur Ini Khusus Admin*',
    botAdmin: '🐥 *Jadiin Bot Admin Terlebih Dahulu Donggg,Buat Mengakses Fiturnya*',
    linkvalid: '🌐 *Kayanya Link Kamu Dalah Deh*', 
    error: '😿 *Kayanya Ada Yang Erorr Nih*',
    limit: `Yah Limit kamuu habis nih,Cek limit mu sekarang Dengan Cara Ketik .limit`,
    regis: (`🐣Hayoloooo\nKamu Belum Terdaftar Kedalam Database Bot,Silahkan Daftar Telebih Dahulu Dengan Cara\n\n.Daftar`),
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})