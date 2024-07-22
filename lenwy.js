require('./len')
require('./lib/LenwyMenu')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, interactiveMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { color, bgcolor } = require('./lib/color')
const { ssweb } = require('./lib/ssweb')
const { quote } = require('./lib/quote')
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const { remini } = require('./lib/remini')
const { TelegraPh } = require('./lib/uploader')
const uploadImage = require('./lib/uploadImage')
const primbon = new Primbon()
const hxz = require('hxz-api')
const jsobfus = require('javascript-obfuscator')
const cheerio = require('cheerio')
const ytdl = require("ytdl-core")
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { exec, spawn, execSync } = require("child_process")
const { mediafireDl } = require('./database/mediafire.js')
const { smsg, tanggal, getTime, formatp, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { addRespons, checkRespons, deleteRespons } = require('./lib/respon');


// read database
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})
}
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let reminders = {};

const authorr = "6283829814737"
const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const thumbnail = fs.readFileSync ('./data/image/thumb.jpg')
const thumb = fs.readFileSync ('./data/image/thumb.jpg')
const kalimage = fs.readFileSync ('./data/image/thumb.jpg')
const { antispam } = require('./lib/antispam')
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const owner = JSON.parse(fs.readFileSync('./premium.json'))
const author = JSON.parse(fs.readFileSync('./author.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const chatbot = JSON.parse(fs.readFileSync("./lib/chatbot.json"))
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const banned = JSON.parse(fs.readFileSync('./data/db/banned.json'))
const imagenya = JSON.parse(fs.readFileSync('./database/Lenwytesti.json'))
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))

// Get Database
const isContacts = contacts.includes(m.sender)

module.exports = lenwy = async (lenwy, m, chatUpdate, store) => {
 try {
var body = ( m.mtype === 'conversation' ? m.message.conversation : m.mtype === 'imageMessage' ? m.message.imageMessage.caption : m.mtype === 'videoMessage' ? m.message.videoMessage.caption : m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text : m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id : m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'messageContextInfo' ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.message.InteractiveResponseMessage.NativeFlowResponseMessage || m.text : '');
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix


const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
//Kalau Mau Single Prefix Kamu Ganti Command Diatas Pakai Ini : const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()


const args = body.trim().split(/ +/).slice(1)
const full_args = body.replace(command, '').slice(1).trim()
const spychat = body.replace().slice().trim()
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const botNumber = await lenwy.decodeJid(lenwy.user.id)
const isCreator = [botNumber, ...author].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPrem = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await lenwy.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const ChatBot = m.isGroup ? chatbot.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const isBan = banned.includes(m.sender)
const isUser = pengguna.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = '☘️ Selamat Malam'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = '☘️ Selamat Petang'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = '☘️ Selamat Sore'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = '☘️ Selamat Siang'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = '☘️ Selamat Pagi'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = '☘️ Selamat Subuh'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = '☘️ Selamat Tengah Malam'
        }
        
        if (!lenwy.public) {
if (!m.key.fromMe && !isPrem) return
}

const cap = 'LEN'
try {
pplu = await lenwy.profilePictureUrl(anu.id, 'image')
} catch {
pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
const len = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Lenwy,;;;\nFN: Lenwy V2.0\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': pplu,
                    thumbnail: pplu,
                    sendEphemeral: true
                }   
            }
        }

const len2 = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "extendedTextMessage": {
            "text": ucapanWaktu,
            "title": ``,
            "thumbnailUrl": pplu
        }
    }
}

const lenwyreply = (teks) => {
lenwy.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `☘️ Halo Aku Lenwy`,"body": `Hai kak ${pushname} Jangan Spam Ya`, "previewType": "PHOTO","thumbnail": thumb,"sourceUrl": `https://whatsapp.com/channel/0029VaGdzBSGZNCmoTgN2K0u`}}}, { quoted: len })}
// Tanpa ContextInfo : lenwy.sendMessage(from, { text: teks, }, { quoted: len })}

const onlygc = () => {
lenwy.sendMessage(m.chat, {
    text: `☘️ *Hello Im Lenwy*\n⚠️ *Fitur Bot Hanya Bisa Digunakan Didalam Grup*\n\n🎁 *Mau Sc? Ketik Lenwy Di Grup*\n\n☘️ *Information :*\n *⨠ Version : 2.0*\n *⨠ Author : Lenwy*\n *⨠ Author :* wa.me/6283829814737\n🎁 *Telegram Author :* t.me/ilenwy`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu}`,
        body: "Lenwy",
        thumbnailUrl: "https://telegra.ph/file/846e7e790c4548710c553.jpg",
        sourceUrl: "https://chat.whatsapp.com/LJViMFtwsTqLRSIY8aklKP",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   } 

// Tanpa Chat : const onlygc = () => {} 

try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = global.LenwySet.free
            let coinUser = global.LenwySet.coin
            let staminaUser = global.LenwySet.stamina
            let kekuatanUser = global.LenwySet.kekuatan
            let tahanUser = global.LenwySet.tahan
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
                if (!isNumber(user.coin)) user.coin = coinUser
                if (!isNumber(user.stamina)) user.stamina = staminaUser  
                if (!isNumber(user.kekuatan)) user.kekuatan = kekuatanUser 
                if (!isNumber(user.tahan)) user.tahan = tahanUser 
                if (!isNumber(user.level)) user.level = 0
                if (!('autolevelup' in user)) user.autolevelup = true
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
                coin: coinUser,
                stamina: staminaUser,
                kekuatan: kekuatanUser,
                tahan: tahanUser,
                level: 0,
                autolevelup: true
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wlcm' in chats)) chats.wlcm = true
                if (!('antitoxic' in chats)) chats.antitoxic = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
                if (!('antilinktt' in chats)) chats.antilinktt = false
                if (!('antivirtex' in chats)) chats.antivirtex = true
                if (!('antipanel' in chats)) chats.antipanel = false
                if (!('antilinkv2' in chats)) chats.antilinkv2 = false
                if (!('antiwame' in chats)) chats.antiwame = false
                if (!('notification' in chats)) chats.notification = {}
            } else global.db.data.chats[m.chat] = {
                mute: false,
                wlcm: true,
                antitoxic: false,
                antilink: false,
                antilinkyt: false,
                antilinktt: false,
                antivirtex: true,
                antipanel: false,
                antiwame: false,
                antilinkv2: false,
                notification: {
                     status: false,
                     text_left: '',
                     text_welcome:''
                  }
            }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('autoread' in setting)) setting.autoread = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }

        } catch (err) {
            console.error(err)
        }

let cron = require('node-cron')
        cron.schedule('02 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = global.LenwySet.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })

const totalfitur = () =>{
            var mytext = fs.readFileSync("./lenwy.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }

if(m.mtype === "interactiveResponseMessage"){  
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , // SET RANDOME MESSAGE ID  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return lenwy.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }        

function cwr(tMatch, tWr, wrReq) {
    let tLose = tMatch * (100 - tWr) / 100;
    let seratusPersen = tLose * (100 / (100 - wrReq));
    let final = seratusPersen - tMatch;
    return Math.round(final);
  } 

function LenTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " Jam " + minutes + " Menit " + seconds + " Detik"
}                 
        
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

async function jarak(dari, ke) {
    let html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
    let $ = cheerio.load(html), obj = {}
    let img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
    obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
    obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
    return obj
}

function pinterest(querry){
    return new Promise(async(resolve,reject) => {
         axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
            headers: {
            "cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
        }
            }).then(({ data }) => {
        const $ = cheerio.load(data)
        const result = [];
        const hasil = [];
         $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
        });
        result.forEach(v => {
         if(v == undefined) return
         hasil.push(v.replace(/230/g,'730'))
            })
            hasil.shift();
        resolve(hasil)
        })
    })
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

if (m.sender.startsWith('212')) return lenwy.updateBlockStatus(m.sender, 'block')

if (m.message) {
if (global.db.data.settings[botNumber].autoread) {
lenwy.readMessages([m.key])
}
}

if (command) {
if (!isCreator && !m.isGroup) return onlygc()
}

if (spychat) {
if (!isCreator && !m.isGroup) return
const { color } = require('./lib/color')
const moment = require("moment-timezone")
let levelling = require('./lib/levelling')
        let user = global.db.data.users[m.sender]
        if (!user.autolevelup) return !0
        let before = user.level * 1
        while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
        if (before !== user.level) {
            let chating = `🥳 Congratulations ${pushname}, you have leveled up!
*${before}* -> *${user.level}*
Use *Profile* To Check`
            lenwyreply(chating)
            console.log(color(chating, 'pink'))
        }
    }

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await lenwy.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
lenwyreply(`${err}`)
}
}

function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await lenwy.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
lenwyreply(`${err}`)
}
}

async function LenwyLD () {
var leni = [
"☘️ *Hello Im Lenwy*",
"📑 *Author : Lenwy*",
"🎁 *Sending Results...*",
]
let { key } = await lenwy.sendMessage(from, {text: '☘️ *Loading*'},  { quoted: len })

for (let i = 0; i < leni.length; i++) {
await sleep(100)
await lenwy.sendMessage(from, {text: leni[i], edit: key }, { quoted: len });
}
}

if (autodelete) {
lenwy.sendMessage(m.chat, { delete: m.key })
}

if (m.isBaileys && m.fromMe) {
          lenwyreply(`*Bot Lain Terdeteksi*\n\n*Bot Akan Di Keluarkan, Karena Admin Mengaktifkan Anti Bot*`)
    await lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
if (m.message) {
lenwy.sendPresenceUpdate(from)
console.log(chalk.yellow.bgCyan.bold(botname), color(`⨠ Pesan`, `${randomcolor}`), color(`Dari`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(` :`, `${randomcolor}`), color(`${body}`, `white`))
}

if (isCmd && !isUser) {
pengguna.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
}

if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
lenwy.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
lenwy.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}

if (db.data.chats[m.chat].lenwy_antitoxic) {
const isToxic = /(ewe|bangsad|mmk|koncol|puki|kojtol|kintil|momok|nigga|ajg|ewean|yatim|anjing|kontol|memek|bangsat|babi|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|ktl|ngentot|ngewe|bokep|bkp)/i;
    if (!m.isGroup) return
    const isAntiToxic = isToxic.exec(m.text)
    if (isAntiToxic && !isCreator) {
    lenwy.sendMessage(m.chat, { delete: m.key })
    await lenwy.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/toxic.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: len })
    }}

 if (db.data.chats[m.chat].antispam) {
if (m.isGroup && m.message && antispam.isFiltered(from)) {
console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await lenwy.sendMessage(m.chat, { delete: m.key })
}}   

// Anti Link
if (db.data.chats[m.chat].lenwy_antigc) {
            if (budy.match(`chat.whatsapp.com`)) {
                let gclink = (`https://chat.whatsapp.com/` + await lenwy.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return lenwyreply(`☘️ *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return lenwyreply(`☘️ *Ehh Halo Admin*`)
                if (isCreator) return lenwyreply(`☘️ *Ehh Halo Owner*`)
                lenwy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        if (db.data.chats[m.chat].lenwy_antigc2) {
            if (budy.match(`chat.whatsapp.com`)) {
                lenwyreply(`*☘️ Anti Link Gc Whatsapp*\n⚠️ *Kamu Terdeteksi Mengirim Link Group*`)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await lenwy.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return lenwyreply(`☘️ *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return lenwyreply(`☘️ *Ehh Halo Admin*`)
                if (isCreator) return lenwyreply(`☘️ *Ehh Halo Owner*`)
                lenwy.sendMessage(m.chat, { delete: m.key })
            }
        }

        if (db.data.chats[m.chat].lenwy_antiwame) {
            if (budy.includes('https://wa.me') || budy.includes('wa.me') || budy.includes('Https://wa.me') || budy.includes('Wa.me') ) {
                lenwyreply(`*☘️ Anti Wame Whatsapp*\n⚠️ *Kamu Terdeteksi Mengirim Chat Wame*`)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await lenwy.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return lenwyreply(`☘️ *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return lenwyreply(`☘️ *Ehh Halo Admin*`)
                if (isCreator) return lenwyreply(`☘️ *Ehh Halo Owner*`)
                lenwy.sendMessage(m.chat, { delete: m.key })
            }
        }

        if (db.data.chats[m.chat].lenwy_antilink) {
            if (budy.includes('https:') || budy.includes('http') || budy.includes('Https:') || budy.includes('Http') ) {
                lenwyreply(`*☘️ Anti Link Whatsapp*\n⚠️ *Kamu Terdeteksi Mengirim Link*`)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await lenwy.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return lenwyreply(`☘️ *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return lenwyreply(`☘️ *Ehh Halo Admin*`)
                if (isCreator) return lenwyreply(`☘️ *Ehh Halo Owner*`)
                lenwy.sendMessage(m.chat, { delete: m.key })
            }
        }

        if (db.data.chats[m.chat].lenwy_antipanel) {
            if (budy.includes('PANEL') || budy.includes('Panel') || budy.includes('panel') || budy.includes('pnel') ) {
                lenwyreply(`☘️ *Anti Promosi Panel*\n⚠️ *Kamu Terdeteksi Mengirim Promosi Panel*`)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await lenwy.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return lenwyreply(`☘️ *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return lenwyreply(`☘️ *Ehh Halo Admin*`)
                if (isCreator) return lenwyreply(`☘️ *Ehh Halo Owner*`)
                lenwy.sendMessage(m.chat, { delete: m.key })
            }
        }

        if (db.data.chats[m.chat].lenwy_antitiktok) {
            if (budy.match(`https://vt.tiktok.com`)) {
                lenwyreply(`☘️ *Anti Link Tiktok*\n⚠️ *Kamu Terdeteksi Mengirim Link Tiktok*`)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await lenwy.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return lenwyreply(`☘️ *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return lenwyreply(`☘️ *Ehh Halo Admin*`)
                if (isCreator) return lenwyreply(`☘️ *Ehh Halo Owner*`)
                lenwy.sendMessage(m.chat, { delete: m.key })
            }
        }

        if (db.data.chats[m.chat].lenwy_antiyoutube) {
            if (budy.match(`https://youtu.be`)) {
                lenwyreply(`☘️ *Anti Link Youtube*\n⚠️ *Kamu Terdeteksi Mengirim Link Youtube*`)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await lenwy.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return lenwyreply(`☘️ *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return lenwyreply(`☘️ *Ehh Halo Admin*`)
                if (isCreator) return lenwyreply(`☘️ *Ehh Halo Owner*`)
                lenwy.sendMessage(m.chat, { delete: m.key })
            }
        }

                if (db.data.chats[m.chat].lenwy_antich) {
            if (budy.includes('https://whatsapp.com/channel/') || budy.includes('https://whatsapp.com/channel/') || budy.includes('https://whatsapp.com/channel/') || budy.includes('https://whatsapp.com/channel/') ) {
                lenwyreply(`*☘️ Anti Channel Whatsapp*\n⚠️ *Kamu Terdeteksi Mengirim Link Channel Wa*`)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await lenwy.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isAdmins) return lenwyreply(`☘️ *Follow Saluran Lenwy Yaa*`)
                if (isCreator) return lenwyreply(`☘️ *Follow Saluran Lenwy Yaa*`)
                lenwy.sendMessage(m.chat, { delete: m.key })
            }
        }

let list = []
for (let i of owner) {
list.push({
displayName: await lenwy.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await lenwy.getName(i + '@s.whatsapp.net')}\n
FN:${await lenwy.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:FakeLenwy@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:Youtube : Lenwy\n
item3.X-ABLabel:Grup WangSaff\n
item4.ADR:;;Mars Area 51;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: lenwy.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, lenwy.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
lenwy.ev.emit('messages.upsert', msg)
}

if (budy.startsWith('©️')) {
try {
return lenwyreply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
lenwyreply(e)
}
}

async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await lenwy.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Lenwy`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

async function aigpt(prompt) {
  try {
   const response = await axios.get("https://tools.revesery.com/ai/ai.php?query=" + prompt, {
     headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.999 Safari/537.36'
      }
    });
    const res = response.data
    const evaled = res.result
    /*
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
lenwyreply(evaled)
*/
  } catch (error) {
  console.error(error)
  }
}

async function ttslide(text) {
    let response = await axios.get(`https://dlpanda.com/id?url=${text}&token=G7eRpMaa`)
    const html = response.data
    const $ = cheerio.load(html)
    let asd = []
    let imgSrc = []
    let creator = 'Jikarinka'
    $('div.col-md-12 > img').each((index,
        element) => {
        imgSrc.push($(element).attr('src'))
    })
    asd.push({
        creator,
        imgSrc
    })
    let fix = imgSrc.map((e,
        i) => {
        return {
            img: e,
            creator: creator[i]
        }
    })
    for (let i of asd) {
        return i
    }
}

async function cai(query) {
        let token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVqYmxXUlVCWERJX0dDOTJCa2N1YyJ9.eyJnaXZlbl9uYW1lIjoiUkNTIiwiZmFtaWx5X25hbWUiOiJYWiIsIm5pY2tuYW1lIjoicmNzeHo2NDkiLCJuYW1lIjoiUkNTIFhaIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lYbGpRdW11SWlQTjdwLUoxUk1HNjZ0ODZzTzJhMG9DcW93RTlZVDFzaj1zOTYtYyIsImxvY2FsZSI6ImlkIiwidXBkYXRlZF9hdCI6IjIwMjMtMTEtMDVUMTQ6NTM6NDkuNjM0WiIsImVtYWlsIjoicmNzeHo2NDlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vY2hhcmFjdGVyLWFpLnVzLmF1dGgwLmNvbS8iLCJhdWQiOiJkeUQzZ0UyODFNcWdJU0c3RnVJWFloTDJXRWtucVp6diIsImlhdCI6MTY5OTE5NjAzNCwiZXhwIjoxNzAyNzk2MDM0LCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMDY5MjA2MTkzMTI0MTU4NTgwNSIsInNpZCI6IjVhaklfSlRJeFBZWGpzU0piWmdzRnQ4MXhaTHRhRERyIiwibm9uY2UiOiJUQzE0V2xvMVNGSmlkVU5FWVVSbFJXb3dTV3RJU25acVRtVTRVR3hoUldReU0xQm5Rbk0yYjAwNWJ3PT0ifQ.jduu283Aycw7GwUL270EkwoF71bINRrLnFzVJGpoG9uOO4A-jxtZ07XRZIr_t4lT_gt2N19BWXg7SGxRR_coFbCJLfyUHLzxx6ZaDGMqUnCPhJ6WXBHABsTsqnlQIJs1sQPJyLKw01-FU5FoB8atW3OIyjt0nJayJtMSm4NzKkGR2gBWZSNR3FIqX7r4NY_wUSc-1Za50FaMiLg3XdGkfE59wxs_NdlxxdPVVG4G4uKBWQCIy6ofRDnnb22Wfw1knt8yXMjGfq8RtSsAkGMmjp_KVICSRDCqy0cCOtUdmih5LCRyEQagIRBl90SP753C7ehiue_ucidCYh9XrxP7HQ";
    return new Promise(async (resolve, reject) => {
    try {
        const request = await axios({
            method: "POST",
            url: "https://beta.character.ai/chat/streaming/",
            body: JSON.stringify(query),
            headers: {
            "authorization": "Token " + token,
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
            client: "Token " + token
            }
            })

        if (request.status() === 200) {
            const response = await JSON.parse(request);
            const replies = response.replies;

            const messages = []

            for (let i = 0; i < replies.length; i++) {
                lenwy.sendMessage(i, {text: `${text}`}, {quoted:m})
            }
            resolve(i);
            }
        } catch (error) {
      reject(error);
    }
})
}

function setReminder(time, reminder, sender) {
    let reminderTime = time * 60000;

    let reminderDate = new Date(Date.now() + reminderTime);

    reminders[sender] = {
        time: reminderTime,
        message: reminder,
        reminderDate: reminderDate
    };

    setTimeout(() => {
        delete reminders[sender];
    }, reminderTime);
}

async function tiktoks(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/feed/search',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: {
          keywords: query,
          count: 50,
          cursor: 0,
          HD: 1
        }
      });
      const videos = response.data.data.videos;
      if (videos.length === 0) {
        reject("*Tidak Ada Video Yang Ditemukan* 😥");
      } else {
        const gywee = Math.floor(Math.random() * videos.length);
        const videorndm = videos[gywee]; 

        const result = {
          title: videorndm.title,
          cover: videorndm.cover,
          origin_cover: videorndm.origin_cover,
          no_watermark: videorndm.play,
          watermark: videorndm.wmplay,
          music: videorndm.music
        };
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  });
}

async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n");
  return data.replace(regex, "");
};

async function shortener(url) {
  return url;
}

async function tiktok11(query) {
  let response = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query })),
  });

  result = {};

  result.creator = "YNTKTS";
  result.title = clean(response.data.desc);
  result.author = clean(response.data.author);
  result.nowm = await shortener(
    (response.data.links[0].a || "").replace("https", "http")
  );
  result.watermark = await shortener(
    (response.data.links[1].a || "").replace("https", "http")
  );
  result.audio = await shortener(
    (response.data.links[2].a || "").replace("https", "http")
  );
  result.thumbnail = await shortener(response.data.cover);
  return result;
}

async function filterValidImages(images, limit) {
  const validImages = [];
  for (const image of images) {
    if (await isImageURL(image)) {
      validImages.push(image);
      if (validImages.length >= limit) {
        break; // Hentikan jika sudah mencapai jumlah gambar yang diminta
      }
    }
  }
  return validImages;
}

async function isImageURL(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    const contentType = res.headers.get('content-type');
    return contentType && contentType.startsWith('image'); // Memeriksa apakah tipe file adalah gambar
  } catch (error) {
    return false; // Jika terjadi kesalahan dalam memeriksa URL, mengembalikan false
  }
}

var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await lenwy.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await lenwyreply(`☘️ *Kuis Matematika*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik Math Mode*`)
 delete kuismath[m.sender.split('@')[0]]
} else lenwyreply('☘️ *Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `☘️ *Tebak Gambar*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Gambar*`}, {quoted:m})
 delete tebakgambar[m.sender.split('@')[0]]
} else lenwyreply('☘️ *Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `☘️ *Tebak Kata*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Kata*`}, {quoted:m})  
 delete tebakkata[m.sender.split('@')[0]]
} else lenwyreply('☘️ *Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `☘️ *Tebak Lontong*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Lontong*`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else lenwyreply('☘️ *Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `☘️ *Tebak Kalimat*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Kalimat*`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else lenwyreply('☘️ *Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `☘️ *Tebak Lirik*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Lirik*`}, {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else lenwyreply('☘️ *Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `☘️ *Tebak Tebakan*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Tebakan*`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else lenwyreply('☘️ *Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// lenwyreply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
lenwyreply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await lenwy.sendText(room.x, str, m, { mentions: parseMention(str) } )
await lenwy.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
lenwy.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
lenwy.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) lenwy.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) lenwy.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) lenwy.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
lenwy.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
lenwyreply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) lenwy.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
lenwyreply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) lenwy.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
lenwy.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
lenwyreply(`⚠️ *Jangan Tag Dia!*
⚠️ *Dia Sedang AFK* ${reason ? '*Dengan Alasan : ' + reason : 'tanpa alasan*'}
🕒 *Selama : ${clockString(new Date - afkTime)}*
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
lenwyreply(`
☘️ *${pushname} Kembali Dari Afk*\n⚠️ ${user.afkReason ? '*Dengan Alasan :  ' + user.afkReason : ''}*\n🕒 *Selama : ${clockString(new Date - user.afkTime)}*
`.trim())
user.afkTime = -1
user.afkReason = ''
}

switch(command) { 
/*case 'menu': 
case 'mainmenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
let anu = `*Hello Im Lenwy* 👋
*WhatsApp Bot To Solve Your Problems* 🙌
*Please Dont Call Bots Or Your May Get Blocked* 🚫

☘️ *Info Bot*  
 *⨠ Creator : ${authorr}*
 *⨠ Runtime : ${runtime(process.uptime())}*
 *⨠ Mode Bot : ${lenwy.public ? `Public Mode` : `Self Mode`}*

📃 *Info User*
 *⨠ Name : ${pushname}*
 *⨠ Number : ${m.sender.split('@')[0]}*
 *⨠ Status : ${isCreator ? '☘️ Creator' : isPrem ? '🎁 Premium' : "🏷️ User"}*

📣 *Keterangan*
 *⨠ Help : Menunjukkan Panduan*
 *⨠ Menu : Menunjukkan Simple Menu*
 *⨠ Allmenu : Menunjukkan Semua Menu*

📦 *Menu Bot*
 *⨠ AiMenu ( Menu Ai )*
 *⨠ Downmenu ( Menu Download )*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`
lenwy.sendMessage(m.chat, {
    video: fs.readFileSync('./data/video/menu.mp4'),
    caption: anu,
    gifPlayback: true,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "Lenwy",
        thumbnailUrl: "https://telegra.ph/file/846e7e790c4548710c553.jpg",
        sourceUrl: "https://whatsapp.com/channel/0029VaGdzBSGZNCmoTgN2K0u",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
   })
}
break*/ 

case 'almenu': 
case 'allmenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
let anu = `*Hello Im Lenwy* 👋
*WhatsApp Bot To Solve Your Problems* 🙌
*Please Dont Call Bots Or Your May Get Blocked* 🚫

☘️ *Info Bot*  
 *⨠ Creator : ${authorr}*
 *⨠ Runtime : ${runtime(process.uptime())}*
 *⨠ Mode Bot : ${lenwy.public ? `Public Mode` : `Self Mode`}*

📃 *Info User*
 *⨠ Name : ${pushname}*
 *⨠ Number : ${m.sender.split('@')[0]}*
 *⨠ Status : ${isCreator ? '☘️ Creator' : isPrem ? '🎁 Premium' : "🏷️ User"}*

📣 *Keterangan*
 *⨠ Help : Menunjukkan Panduan*
 *⨠ Menu : Menunjukkan Simple Menu*
 *⨠ Allmenu : Menunjukkan Semua Menu*

📦 *Store Menu*
 *⨠ Sc*
 *⨠ Pay*
 *⨠ Panel*
 *⨠ Order*
 *⨠ Tambah*
 *⨠ Kurang*
 *⨠ Kali*
 *⨠ Bagi*
 *⨠ List*
 *⨠ Addtesti*
 *⨠ Deltesti*
 *⨠ Listtesti*
 *⨠ Testimoni* 
 *⨠ Addlist*
 *⨠ Dellist*
 *⨠ Payment*
 *⨠ Pesanan*
 *⨠ Updatelist*

📦 *Ai Menu*
 *⨠ Ai*
 *⨠ Ask*
 *⨠ Bing*
 *⨠ GPT4*
 *⨠ OpenAi*
 *⨠ Remini*
 *⨠ Gemini*

📦 *Fun Menu*
 *⨠ Truth*
 *⨠ Dare*
 *⨠ Rate*
 *⨠ Apakah*
 *⨠ Kapankah*
 *⨠ Bisakah*
 *⨠ Bagaimanakah* 
 *⨠ Gantengcek*
 *⨠ Cekganteng*
 *⨠ Cantikcek*
 *⨠ Cekcantik*

📦 *Rpg Menu*
 *⨠ Koin*
 *⨠ Bonus*
 *⨠ Claim*
 *⨠ Status* 
 *⨠ Stamina*  

📦 *Game Menu*
 *⨠ TTC*
 *⨠ Deltc*
 *⨠ Tebak Kata*
 *⨠ Tebak Gambar*
 *⨠ Tebak Lirik*
 *⨠ Tebak Kalimat*
 *⨠ Tebak Lontong*
 *⨠ Kuismath Noob*
 *⨠ Kuismath Easy*
 *⨠ Kuismath Medium*
 *⨠ Kuismath Hard*
 *⨠ Kuismath Extreme*
 *⨠ Kuismath Imposibble*
 *⨠ Kuismath Imposibble2*

📦 *Group Menu*
 *⨠ Saran*
 *⨠ Reportbug*
 *⨠ Antilinkgc on / off*
 *⨠ Antitoxic on / off*
 *⨠ Bcgc (textnya)*
 *⨠ Share (textnya)*
 *⨠ Hidetag (textnya)*
 *⨠ Kick (628xx)*
 *⨠ Add (628xx)*
 *⨠ Group close / open*
 *⨠ Promote (628xx)*
 *⨠ Demote (628xx)*
 *⨠ Sendlinkgc (628xx)*
 *⨠ Editgroup close / open*
 *⨠ Editinfo on / off*
 *⨠ Join (linknya)*
 *⨠ Editsubjek (textnya)*
 *⨠ Editdesk (textnya)*
 *⨠ Tagall (textnya)*
 *⨠ Inspect (linknya)*
 *⨠ Linkgroup*
 *⨠ Resetlinkgc*

 📦 *Berita Menu*
 *⨠ Inews*
 *⨠ Kontan*
 *⨠ KompasNews*
 *⨠ DetikNews*
 *⨠ DailyNews*

📦 *Random Menu*
 *⨠ Qc*
 *⨠ Afk*
 *⨠ Cwr* 
 *⨠ Owner*
 *⨠ Nickff*
 *⨠ Puisi*
 *⨠ Pantun*
 *⨠ Qckode*
 *⨠ Sticker*
 *⨠ Sewa*
 *⨠ Reminder*  
 *⨠ Faktaunik*
 *⨠ Couple*
 *⨠ Meme*
 *⨠ Setmenu* 
 *⨠ Getname*
 *⨠ Getpic*
 *⨠ Confess*
 *⨠ Menfess*
 *⨠ Stalktiktok*

📦 *Download Menu*
 *⨠ Fbdl (linknya)*
 *⨠ Igdl (linknya)*
 *⨠ Igslide (linknya)*
 *⨠ Tiktok (linknya)*
 *⨠ Ttslide (linknya)*
 *⨠ Ytmp3 (linknya)*
 *⨠ Ytmp4 (linknya)*

📦 *Weebs Menu*
 *⨠ Neko*
 *⨠ Waifu* 
 *⨠ Pat*
 *⨠ Cry*
 *⨠ Hug*
 *⨠ Nom*
 *⨠ Awoo*
 *⨠ Kiss*
 *⨠ Kill*
 *⨠ Lick*
 *⨠ Bite*
 *⨠ Yeet*
 *⨠ Bonk*
 *⨠ Wink*
 *⨠ Poke*
 *⨠ Slap*
 *⨠ Bully*
 *⨠ Smile*
 *⨠ Wave*
 *⨠ Blush*
 *⨠ Smug*
 *⨠ Glomp*
 *⨠ Happy*
 *⨠ Dance*
 *⨠ Cuddle*
 *⨠ Cringe*
 *⨠ Highfive*
 *⨠ Handhold*

📦 *Islami Menu*
 *⨠ Doa*
 *⨠ Asmaulhusna*
 *⨠ Ayatkursi* 

📦 *Quotes Menu*
 *⨠ FML*
 *⨠ Bucin*
 *⨠ Quotes*
 *⨠ Motivasi*
 *⨠ Katabijak*
 *⨠ Katacinta*
 *⨠ Katagalau*
 *⨠ Katahacker*
 *⨠ Katailham*
 *⨠ Katasenja*
 *⨠ Katasindiran*
 *⨠ Quotesanime*
 *⨠ Quotespubg*
 *⨠ Quotesislamic*

📦 *Search Menu*
 *⨠ Ai*
 *⨠ Imdb*
 *⨠ Play*
 *⨠ Song*
 *⨠ Chord* 
 *⨠ Lirik*
 *⨠ Cuaca*
 *⨠ Jarak*
 *⨠ Google*
 *⨠ OpenAi*
 *⨠ Mcserver* 
 *⨠ Apksearch*
 *⨠ Otakudesu* 
 *⨠ Drakorsearch*
 *⨠ Kodebahasa*

📦 *Convert Menu*
 *⨠ Wm*
 *⨠ Tourl*
 *⨠ Remini*
 *⨠ Img2Txt*
 *⨠ Img2Promt*  
 *⨠ Removebg*

📦 *Favorite Menu*
 *⨠ Ai*
 *⨠ Wm*
 *⨠ S*
 *⨠ Hd*
 *⨠ Play*
 *⨠ Remini*
 *⨠ Ig (Linknya)*
 *⨠ Tiktok (Linknya)*
 *⨠ Ttsearch (Teks)*
 *⨠ Ytmp3 (Linknya)*
 *⨠ Ytmp4 (linknya)*

📦 *Push Menu*   
 *⨠ Cekidgc*
 *⨠ Savekontak*
 *⨠ Pushkontak*
 *⨠ Pushkontak2*

📦 *Anti Menu*
 *⨠ Antich*   
 *⨠ Antiwame*
 *⨠ Antilink*
 *⨠ Antipanel*
 *⨠ Antitoxic*
 *⨠ Antilinktt*
 *⨠ Antilinkyt*
 *⨠ Antilinkgc*
 *⨠ Antilinkgcv1*

📦 *Panel Menu*
 *⨠ 1Gb*
 *⨠ 2Gb* 
 *⨠ 3Gb* 
 *⨠ 4Gb* 
 *⨠ 5Gb* 
 *⨠ 6Gb* 
 *⨠ 7Gb* 
 *⨠ 8Gb* 
 *⨠ 9Gb* 
 *⨠ 10Gb*   
 *⨠ Unli*
 *⨠ Delsrv*
 *⨠ Delusr* 
 *⨠ Listsrv*
 *⨠ Listusr*

📦 *Photooxy Menu*
 *⨠ Flaming*   
 *⨠ Stars*
 *⨠ Shadow*
 *⨠ Burnpaper*
 *⨠ Grass*
 *⨠ Underwater*
 *⨠ Whitecube*
 *⨠ Smokyneon*
 *⨠ Fabric*
 *⨠ Glowing*
 *⨠ Honey*
 *⨠ Vintage*
 *⨠ Gradient*
 *⨠ Fur*
 *⨠ Striking*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`
lenwy.sendMessage(m.chat, {
    video: fs.readFileSync('./data/video/menu.mp4'),
    caption: anu,
    gifPlayback: true,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "Lenwy",
        thumbnailUrl: "https://telegra.ph/file/846e7e790c4548710c553.jpg",
        sourceUrl: "https://whatsapp.com/channel/0029VaGdzBSGZNCmoTgN2K0u",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
   })
}
break

case 'menu': 
case 'mainmenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
let LenwyBTm = `*Hello Im Lenwy* 👋
*WhatsApp Bot To Solve Your Problems* 🙌

☘️ *Info Bot*  
 *⨠ Creator :* ${authorr}
 *⨠ Runtime : ${runtime(process.uptime())}*
 *⨠ Mode Bot : ${lenwy.public ? `Public Mode` : `Self Mode`}*

📃 *Info User*
 *⨠ Name : ${pushname}*
 *⨠ Number :* ${m.sender.split('@')[0]}
 *⨠ Status : ${isCreator ? '☘️ Creator' : isPrem ? '🎁 Premium' : "🏷️ User"}*`

let LenwyORIm = `*Hello Im Lenwy* 👋
*WhatsApp Bot To Solve Your Problems* 🙌
*Please Dont Call Bots Or Your May Get Blocked* 🚫

☘️ *Info Bot*  
 *⨠ Creator :* ${authorr}
 *⨠ Runtime : ${runtime(process.uptime())}*
 *⨠ Mode Bot : ${lenwy.public ? `Public Mode` : `Self Mode`}*

📃 *Info User*
 *⨠ Name : ${pushname}*
 *⨠ Number :* ${m.sender.split('@')[0]}
 *⨠ Status : ${isCreator ? '☘️ Creator' : isPrem ? '🎁 Premium' : "🏷️ User"}*

📣 *Keterangan*
 *⨠ Help : Menunjukkan Panduan*
 *⨠ Menu : Menunjukkan Simple Menu*
 *⨠ Allmenu : Menunjukkan Semua Menu*\n\n${LenwyORI(prefix)}`
if (lenwymenu === 'LenwyORI') {
lenwy.sendMessage(m.chat, {
video: fs.readFileSync('./data/video/menu.mp4'),
caption: LenwyORIm,
gifPlayback: true,
contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `${ucapanWaktu} ${pushname}`,
body: "Lenwy",
thumbnailUrl: "https://telegra.ph/file/846e7e790c4548710c553.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VaGdzBSGZNCmoTgN2K0u",
mediaType: 1,
renderLargerThumbnail: false
                            }
                        }
                    }, {
                        quoted: m
                    })
                        } else if (lenwymenu === 'Button') {
let sections = [{
        title: '📦 List Produk',
        highlight_label: 'Favorit',
        rows: [{
        header: '🛍️ Beli Script',
        title: 'Script Lenwy',
        description: `Beli Script Lenwy`,
        id: `script`
        },
        {
        header: '🛍️ Beli Panel',
        title: 'Panel Pterodactyl',
        description: "Beli Panel Pterodactyl",
        id: `panel`
        },
        {    
        header: '🛍️ Sewa Bot',
        title: 'Sewa Bot',
        description: "Sewa Bot Lenwy",
        id: `sewa`
        }]
        },
        {
        title: '☘️ List Menu', 
        rows: [{
        header: '📑 Allmenu',
        title: 'Allmenu Bot',
        description: "Menampilkan Seluruh Menu", 
        id: `allmenu`
        },
        {
        header: '📑 Storemenu',
        title: 'Menu Store', 
        description: "Menampilkan Menu Store", 
        id: `store`
        },
        {
        header: '📑 Aimenu',
        title: 'Menu AI', 
        description: "Menampilkan Menu AI", 
        id: `aimenu`
        },
        {
        header: '📑 Funmenu',
        title: 'Menu Fun', 
        description: "Menampilkan Menu Fun", 
        id: `funmenu`
        },
        {
        header: '📑 Rpgmenu',
        title: 'Menu Rpg', 
        description: "Menampilkan Menu Rpg", 
        id: `rpgmenu`
        },
        {
        header: '📑 Gamemenu',
        title: 'Menu Game', 
        description: "Menampilkan Menu Game", 
        id: `gamemenu`
        },
        {
        header: '📑 Groupmenu',
        title: 'Menu Group', 
        description: "Menampilkan Menu Group", 
        id: `groupmenu`
        },
        {
        header: '📑 Beritamenu',
        title: 'Menu Berita', 
        description: "Menampilkan Menu Berita", 
        id: `beritamenu`
        },
        {
        header: '📑 Randommenu',
        title: 'Menu Random', 
        description: "Menampilkan Menu Random", 
        id: `randommenu`
        },
        {
        header: '📑 Downmenu',
        title: 'Menu Download', 
        description: "Menampilkan Menu Download", 
        id: `${prefix}groupmenu`
        },
        {
        header: '📑 Weebsmenu',
        title: 'Menu Weebs',
        description: "Menampilkan Menu Weebs", 
        id: `weebsmenu`
        },
        {
        header: '📑 Islamimenu',
        title: 'Menu Islami', 
        description: "Menampilkan Menu Islami", 
        id: `islamimenu`
        },
        {
        header: '📑 Quotesmenu',
        title: 'Menu Quotes',
        description: 'Menampilkan Menu Quotes',
        id: `quotesmenu`
        },
        {
        header: '📑 Searchmenu',
        title: 'Menu Search', 
        description: "Menampilkan Menu Search", 
        id: `searchmenu`
        },
        {
        header: '📑 Convertmenu',
        title: 'Menu Convert',
        description: "Menampilkan Menu Convert", 
        id: 'convertmenu'
        },
        {
        header: '📑 Favmenu',
        title: 'Menu Favorit', 
        description: "Menampilkan Menu Favorit", 
        id: `favmenu`
        },
        {
        header: '📑 Pushmenu',
        title: 'Menu Push Kontak', 
        description: "Menampilkan Menu Push Kontak", 
        id: `pushmenu`
        },
        {
        header: '📑 Antimenu',
        title: 'Menu Anti', 
        description: "Menampilkan Menu Anti", 
        id: `antimenu`
        },
        {
        header: '📑 Panelmenu',
        title: 'Menu Panel',
        description: "Menampilkan Menu Panel", 
        id: `panelmenu`
        },
        {
        header: '📑 Photomenu',
        title: 'Menu Photooxy', 
        description: "Menampilakn Menu Photooxy", 
        id: `photomenu`
        }]
        },
        {   
        title: '📣 Saluran WhatsApp',
        highlight_label: 'Informasi',
        rows: [{
        header: '🎁 Saluran',
        title: 'Saluran Lenwy',
        description: `Link Download Sc Lenwy`,
        id: `lenwy`
        }]
     }]
let listMessage = {
title: 'Menu', 
sections
};
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
         contextInfo: { 
            isForwarded: true, 
        },
          body: proto.Message.InteractiveMessage.Body.create({
            text: LenwyBTm
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false,...(await prepareWAMessageMedia({ image : fs.readFileSync('./data/image/thumb2.png')}, { upload: lenwy.waUploadToServer})), 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [              
              {
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(listMessage)
              },
              {
              "name": "quick_reply",
              "buttonParamsJson": "{\"display_text\":\"Owner\",\"id\":\".owner\"}"
              }
           ],
          })
        })
    }
  }
}, { quoted: m })

lenwy.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: m.key.id
})
}
}
break

case 'setmenu':
if (!isPrem) return lenwyreply(mess.prem)
if ((args[0]) === 'Lenwy'|| (args[0]) === 'lenwy' ){
lenwymenu = "LenwyORI"
lenwyreply(`📑 *Berhasil Beralih Kedalam Menu Lenwy*`)
} else if ((args[0]) === 'Button'|| (args[0]) === 'button' ){
lenwymenu = "Button"
lenwyreply(`📑 *Berhasil Beralih Kedalam Menu Button*`)
}  else if (!q) {
lenwyreply(`☘️ *Menu Yang Tersedia*
 *⨠ Lenwy*
 *⨠ Button*

📑 *Contoh : Setmenu Lenwy* `)

} else {
lenwyreply("⚠️ *Menu Tidak Ditemukan*")
}
break 

case 'antimenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Anti Menu*
 *⨠ Antich*   
 *⨠ Antiwame*
 *⨠ Antilink*
 *⨠ Antipanel*
 *⨠ Antitoxic*
 *⨠ Antilinktt*
 *⨠ Antilinkyt*
 *⨠ Antilinkgc*
 *⨠ Antilinkgcv1*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'groupmenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Group Menu*
 *⨠ Saran*
 *⨠ Reportbug*  
 *⨠ Antilinkgc on / off*
 *⨠ Antitoxic on / off*
 *⨠ Bcgc (textnya)*
 *⨠ Share (textnya)*
 *⨠ Hidetag (textnya)*
 *⨠ Kick (628xx)*
 *⨠ Add (628xx)*
 *⨠ Group close / open*
 *⨠ Promote (628xx)*
 *⨠ Demote (628xx)*
 *⨠ Sendlinkgc (628xx)*
 *⨠ Editgroup close / open*
 *⨠ Editinfo on / off*
 *⨠ Join (linknya)*
 *⨠ Editsubjek (textnya)*
 *⨠ Editdesk (textnya)*
 *⨠ Tagall (textnya)*
 *⨠ Inspect (linknya)*
 *⨠ Linkgroup*
 *⨠ Resetlinkgc*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'downmenu': case 'downloadmenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Download Menu*
 *⨠ Fbdl (linknya)*
 *⨠ Igdl (linknya)*
 *⨠ Igslide (linknya)*
 *⨠ Tiktok (linknya)*
 *⨠ Ttslide (linknya)*
 *⨠ Ytmp3 (linknya)*
 *⨠ Ytmp4 (linknya)*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'panelmenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Panel Menu*
 *⨠ 1Gb*
 *⨠ 2Gb* 
 *⨠ 3Gb* 
 *⨠ 4Gb* 
 *⨠ 5Gb* 
 *⨠ 6Gb* 
 *⨠ 7Gb* 
 *⨠ 8Gb* 
 *⨠ 9Gb* 
 *⨠ 10Gb*          
 *⨠ Unli*
 *⨠ Delsrv*
 *⨠ Delusr* 
 *⨠ Listsrv*
 *⨠ Listusr*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'islammenu': case 'islamimenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Islami Menu*
 *⨠ Doa*    
 *⨠ Asmaulhusna*
 *⨠ Ayatkursi* 

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'favmenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Favorite Menu*
 *⨠ Ai*
 *⨠ Wm*
 *⨠ S*
 *⨠ Hd*
 *⨠ Play*
 *⨠ Remini*
 *⨠ Confess*
 *⨠ Menfess*
 *⨠ Ig (Linknya)*
 *⨠ Tiktok (Linknya)*
 *⨠ Ttsearch (Teks)*
 *⨠ Ytmp3 (Linknya)*
 *⨠ Ytmp4 (linknya)*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'convertmenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Convert Menu*
 *⨠ Wm*
 *⨠ Tourl*
 *⨠ Remini*
 *⨠ Img2Txt*
 *⨠ Img2Promt*  
 *⨠ Removebg*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'photomenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Photooxy Menu*
 *⨠ Flaming*   
 *⨠ Stars*
 *⨠ Shadow*
 *⨠ Burnpaper*
 *⨠ Grass*
 *⨠ Underwater*
 *⨠ Whitecube*
 *⨠ Smokyneon*
 *⨠ Fabric*
 *⨠ Glowing*
 *⨠ Honey*
 *⨠ Vintage*
 *⨠ Gradient*
 *⨠ Fur*
 *⨠ Striking*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'pushmenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
const y11 = `📦 *Push Menu*
 *⨠ Cekidgc*
 *⨠ Savekontak*
 *⨠ Pushkontak*
 *⨠ Pushkontak2*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`
lenwyreply(y11)
}
break

case 'randommenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Random Menu*
 *⨠ Qc*
 *⨠ Afk*
 *⨠ Cwr* 
 *⨠ Owner*
 *⨠ Nickff*
 *⨠ Puisi*
 *⨠ Pantun*
 *⨠ Qckode*
 *⨠ Sticker*
 *⨠ Sewa*
 *⨠ Reminder* 
 *⨠ Faktaunik*
 *⨠ Couple*
 *⨠ Meme*
 *⨠ Setmenu* 
 *⨠ Getname*
 *⨠ Getpic*
 *⨠ Confess*
 *⨠ Menfess*
 *⨠ Stalktiktok*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'aimenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Ai Menu*
 *⨠ Ai*
 *⨠ Ask*
 *⨠ Bing* 
 *⨠ GPT4*
 *⨠ OpenAi*
 *⨠ Gemini*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'searchmenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Search Menu*
 *⨠ Ai*
 *⨠ Imdb*
 *⨠ Play*
 *⨠ Song*
 *⨠ Chord* 
 *⨠ Lirik*
 *⨠ Cuaca*
 *⨠ Jarak*
 *⨠ Google*
 *⨠ OpenAi*
 *⨠ Mcserver* 
 *⨠ Apksearch*
 *⨠ Otakudesu*
 *⨠ Drakorsearch*
 *⨠ Kodebahasa*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'gassmenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Gass Menu*
 *⨠ Sc*
 *⨠ Autoread on/off*
 *⨠ Getdb (database)*
 *⨠ Getuser (database user)*
 *⨠ Setppbot*
 *⨠ Setppgroup*
 *⨠ Block*
 *⨠ Unblock*
 *⨠ Createqr*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'weebsmenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Weebs Menu*
 *⨠ Neko*
 *⨠ Waifu*     
 *⨠ Pat*
 *⨠ Cry*
 *⨠ Hug*
 *⨠ Nom*
 *⨠ Awoo*
 *⨠ Kiss*
 *⨠ Kill*
 *⨠ Lick*
 *⨠ Bite*
 *⨠ Yeet*
 *⨠ Bonk*
 *⨠ Wink*
 *⨠ Poke*
 *⨠ Slap*
 *⨠ Bully*
 *⨠ Smile*
 *⨠ Wave*
 *⨠ Blush*
 *⨠ Smug*
 *⨠ Glomp*
 *⨠ Happy*
 *⨠ Dance*
 *⨠ Cuddle*
 *⨠ Cringe*
 *⨠ Highfive*
 *⨠ Handhold*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'beritamenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Berita Menu*
 *⨠ Inews*
 *⨠ Kontan*
 *⨠ KompasNews*
 *⨠ DetikNews*
 *⨠ DailyNews*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'quotesmenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Quotes Menu*
 *⨠ FML*
 *⨠ Bucin*
 *⨠ Quotes*
 *⨠ Motivasi*
 *⨠ Katabijak*
 *⨠ Katacinta*
 *⨠ Katagalau*
 *⨠ Katahacker*
 *⨠ Katailham*
 *⨠ Katasenja*
 *⨠ Katasindiran*
 *⨠ Quotesanime*
 *⨠ Quotespubg*
 *⨠ Quotesislamic*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'rpgmenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Rpg Menu*
 *⨠ Koin*   
 *⨠ Bonus* 
 *⨠ Claim*
 *⨠ Status* 
 *⨠ Stamina* 

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'gamemenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Game Menu*
 *⨠ TTC*
 *⨠ Deltc*
 *⨠ Tebak Kata*
 *⨠ Tebak Gambar*
 *⨠ Tebak Lirik*
 *⨠ Tebak Kalimat*
 *⨠ Tebak Lontong*
 *⨠ Kuismath Noob*
 *⨠ Kuismath Easy*
 *⨠ Kuismath Medium*
 *⨠ Kuismath Hard*
 *⨠ Kuismath Extreme*
 *⨠ Kuismath Imposibble*
 *⨠ Kuismath Imposibble2*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'funmenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Fun Menu*
 *⨠ Truth*
 *⨠ Dare*
 *⨠ Rate*
 *⨠ Apakah*
 *⨠ Kapankah*
 *⨠ Bisakah*
 *⨠ Bagaimanakah* 
 *⨠ Gantengcek*
 *⨠ Cekganteng*
 *⨠ Cantikcek*
 *⨠ Cekcantik*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'toko': case 'tokomenu': case 'shop': case 'shopmenu': case 'store': case 'storemenu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
await sleep(1000)
lenwyreply(`📦 *Store Menu*
 *⨠ Sc*
 *⨠ Pay*
 *⨠ Panel*
 *⨠ Order*
 *⨠ Tambah*
 *⨠ Kurang*
 *⨠ Kali*
 *⨠ Bagi*
 *⨠ List*
 *⨠ Addtesti*
 *⨠ Deltesti*
 *⨠ Listtesti*
 *⨠ Testimoni*  
 *⨠ Addlist*
 *⨠ Dellist*
 *⨠ Payment*
 *⨠ Pesanan*
 *⨠ Updatelist*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'help': {
lenwyreply(`☘️ *Panduan Untuk Menggunakan Fitur Bot*

*#1 Membuat Sticker Whatsapp*
*#2 Membuat Sticker Video*
*#3 Mengubah Watermark Sticker*
*#4 Meningkatkan Kualitas Gambar*
*#5 Mengunduh Foto/Video Dari Link*
*#6 Mengunduh Audio/Video Youtube*
*#7 Mengunduh Lagu/Musik*
*#8 Bertanya Kepada Bot*
*#9 Mencari Berita*
*#10 Mengubah Gambar Menjadi Link*
*#11 Mengetahui Jarak Kota*
*#12 Menghapus Pesan Bot*

🎁 *Untuk Menampilkan Panduan Ketik Sesuai Nomor, Contoh : NO1* 

⚠️ *Kalo Ada Error Bisa Chat Owner Ya* 😄
`)
}
break

case '#1': case 'no1': {
lenwyreply(`☘️ *Membuat Sticker Whatsapp*

🎁 *Untuk Membuat Sticker Whatsapp Kirim Foto/Video Dengan Caption S, Stiker, Sticker*
🎁 *Untuk Membuat Sticker Dengan Caption Gunakan Smeme : Contoh Smeme Lenwy*`)
}
break

case 'no2': {
lenwyreply(`☘️ *Membuat Sticker Video*

🎁 *Untuk Membuat Sticker Video Kirim Video Minimal 9 Detik Dengan CAption S*`)
}
break

case 'no3': {
lenwyreply(`☘️ *Mengubah Watermark Sticker*

🎁 *Untuk Mengubah Watermark Sticker Balas Sticker Dengan Mengetik : Wm (Teks)*
🎁 *Contoh : Wm Lenwy*`)
}
break

case 'no4': {
lenwyreply(`☘️ *Meningkatkan Kualitas Gambar*

🎁 *Untuk Meningkatkan Kualitas Gambar Kirim Gambar/Foto Dengan Caption Hd, Remini*`)
}
break

case 'no5': {
lenwyreply(`☘️ *Mengunduh Foto/Video Dari Link*

🎁 *Untuk Mengunduh Foto/Video Dari Link Ketik : Tiktok (Link Tiktok)*
🎁 *Lebih Lengkapnya Ketik Downmenu*

⚠️ *Pastikan Link Sesuai Dengan Perintah*`)
}
break

case 'no6': {
lenwyreply(`☘️ *Mengambil Audio/Video Dari Youtube*

🎁 *Untuk mengambil Audio/Video Dari Youtube Ketik : Ytmp4 (Link)*
🎁 *Ytmp3 Untuk Audio | Ytmp4 Untuk Video*

⚠️ *Audio/Video Lebih Dari 5 Menit Kemungkinan Gagal Dikirim*`)
}
break

case 'no7': {
lenwyreply(`☘️ *Mengunduh Lagu/Musik*

🎁 *Untuk Mengunduh Lagu ketik : Play (Nama Lagu)*
🎁 *Contoh : Play Boa - Duvet*`)
}
break

case 'no8': {
lenwyreply(`☘️ *Bertanya Kepada Bot*

🎁 *Untuk Bertanya kepada Bot Ketik : Ask (Pertanyaan)*
🎁 *Contoh : Ask Sejarah Indonesia*`)
}
break

case 'no9': {
lenwyreply(`☘️ *Mencari Berita*

🎁 *Untuk Mencari Berita Ketik : Inews*
🎁 *Lebih Lengkapnya Ketik Beritamenu*`)
}
break

case 'no10': {
lenwyreply(`☘️ *Mengubah Gambar Menjadi Link*

🎁 *Untuk Mengubah Gambar Menjadi Link Kirim Gmbar Dengan caption Tourl*`)
}
break

case 'no11': {
lenwyreply(`☘️ *Mengetahui Jarak Kota*

🎁 *Untuk Mengetahui Jarak Kota ketik : Jarak (Nama Kota)|(Nama Kota)*
🎁 *Contoh : Jarak Bandung|Jakarta*`)
}
break

case 'no12': {
lenwyreply(`☘️ *Menghapus Pesan Bot*

🎁 *Untuk Menghapus Pesan Bot Balas Pesan Bot Dengan Mengetik : Del*`)
}
break

case 'kodebahasa': {
lenwyreply(`📦 *Kode Bahasa*

 *⨠ Af: Afrikaans* 
 *⨠ Sq: Albanian*
 *⨠ Ar: Arabic*
 *⨠ Hy: Armenian*
 *⨠ Ca: Catalan* 
 *⨠ Zh: Chinese*
 *⨠ Zh-Cn: Chinese (Mandarin/China)*
 *⨠ Zh-Tw: Chinese (Mandarin/Taiwan)*
 *⨠ Zh-Yue: Chinese (Cantonese)*
 *⨠ Hr: Croatian*
 *⨠ Cs: Czech*
 *⨠ Da: Danish*
 *⨠ Nl: Dutch*
 *⨠ En: English*    
 *⨠ En-Au: English (Australia)*
 *⨠ En-Uk: English (United Kingdom)*
 *⨠ en-Us: English (United States)* 
 *⨠ Eo: Esperanto* 
 *⨠ Fi: Finnish* 
 *⨠ Fr: French*
 *⨠ De: German*
 *⨠ El: Greek* 
 *⨠ Ht: Haitian Creole* 
 *⨠ Hi: Hindi* 
 *⨠ Hu: Hungarian* 
 *⨠ Ss: Icelandic* 
 *⨠ Id: Indonesian* 
 *⨠ It: Italian*
 *⨠ Ja: Japanese*
 *⨠ Ko: Korean*
 *⨠ La: Latin*
 *⨠ Lv: Latvian*
 *⨠ Mk: Macedonian*
 *⨠ No: Norwegian*
 *⨠ Pl: Polish*
 *⨠ Pt: Portuguese*
 *⨠ Pt-Br: Portuguese (Brazil)*
 *⨠ Ro: Romanian*
 *⨠ Ru: Russian*
 *⨠ Sr: Serbian*
 *⨠ Sk: Slovak*
 *⨠ Es: Spanish* 
 *⨠ Es-Es: Spanish (Spain)*
 *⨠ Es-Us: Spanish (United States)*
 *⨠ Sw: Swahili*
 *⨠ Sv: Swedish*
 *⨠ Ta: Tamil*
 *⨠ Th: Thai*
 *⨠ Tr: Turkish*
 *⨠ Vi: Vietnamese* 
 *⨠ Cy: Welsh*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'sc':
case 'script': {
let buy = `☘️ *Script Bot Lenwy : 20K*
📑 *No Enc, Free Apikey, Pairing Code*
📦 *Males Edit Sc? Ketik : Jedit*

🎁 *Beli? :* wa.me/6283829814737
🎁 *Langsung Ke Tele :* t.me/ilenwy
`
lenwy.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 20000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: buy,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
break

case 'list': case 'listmenu':{ 
if (db_respon_list.length === 0) return lenwyreply(`☘️ *Belum Ada List Yang Ditambahkan*`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return lenwyreply(`☘️ *Belum Ada List Yang Terdaftar Di Grup Ini*`)
let teks = `☘️ *Halo @${m.sender.split("@")[0]}*\n📦 *Berikut Adalah List Item Yang Terdaftar Dalam Group :*\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += ` *⨠ ${i.key.toUpperCase()}*\n`
}
}
teks += `\n📃 *Silahkan Ketik Nama Item Diatas Untuk Melihatnya Secara Detail*`
lenwy.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}
break

case'addlist': 
if (!m.isGroup) return lenwyreply(mess.group)
if (!isAdmins) return lenwyreply(mess.admin)
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return lenwyreply(`☘️ *Cara Pengunaan : Addlist Item|Respon*\n🎁 *Contoh : Addlist Lenwyy|Subscribe Lenwy*`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return lenwyreply(`⚠️ *Nama Item ${args1} Sudah Terdaftar Dalam Group Ini*`)
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
lenwyreply(`📦 *Sukses Menambahkan Item Dengan Kode : ${args1}*`)
break

case 'dellist': 
if (!m.isGroup) return lenwyreply(mess.group)
if (!isAdmins) return lenwyreply(mess.admin)
if (db_respon_list.length === 0) return lenwyreply(`☘️ *Belum Ada List Yang Ditambahkan*`)
if (!text) return lenwyreply(`☘️ *Ketik Nama Item Yang Ingin Dihapus*`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return lenwyreply(`⚠️ *Nama Item ${q} Tidak Terdaftar*`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
lenwyreply(`⚠️ *Sukses Menghapus Item Dengan kode : ${q}*`)
break

case 'updatelist':
if (!m.isGroup) return lenwyreply(mess.group)
if (!isAdmins) return lenwyreply(mess.admin)
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return lenwyreply(`☘️ *Cara Pengunaan : Updatelist Item|Respon*\n🎁 *Contoh : Updatelist Lenwyy|Subscribe Lenwy*`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return lenwyreply(`⚠️ *Nama Item ${args1} Sudah Terdaftar Dalam Group Ini*`)
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
lenwyreply(`📑 *Sukses Memperbarui Item Dengan Kode : ${args1}*`)
break

case 'addtesti':{
if (!isCreator) return lenwyreply(mess.owner)
if (!/image/.test(mime)) return lenwyreply(`☘️ *Mana Fotonya?*`)    
if (args.length < 1) return lenwyreply('☘️ *Berikan Nama Pada Image*')
if (imagenya.includes(q)) return lenwyreply("⚠️ *Nama Tersebut Sudah Tersedia*")
let TestiLenwy = await lenwy.downloadAndSaveMediaMessage(quoted)
imagenya.push(q)
await fsx.copy(TestiLenwy, `./database/Testilenwy/${q}.jpg`)
fs.writeFileSync('./database/Lenwytesti.json', JSON.stringify(imagenya))
fs.unlinkSync(TestiLenwy)
lenwyreply(`📦 *Sukses Menambahkan ${q} Kedalam Database*`)
}
break

case 'testi':
case 'testimoni':
if (!q) return lenwyreply(`☘️ *Masukkan Nama Testimoni Yang Tersedia*`)
let LenwyTesti = `📑 *Testimoni Dalam Database Berhasil Dikirimkan*`     
lenwy.sendMessage(m.chat, {
image: fs.readFileSync(`./database/Testilenwy/${q}.jpg`), caption: LenwyTesti }, { quoted: m
})
break

case 'listtesti':
case 'listtestimoni':{
let teks = '📦 *List Testimoni*\n'
for (let LenTesti of imagenya) {
teks += ` *⨠ ${LenTesti}*\n`
}
teks += `\n*📑 Total : ${imagenya.length} Testimoni*`
lenwyreply(teks)
}
break

case 'deltesti':{
if (!isCreator) return lenwyreply(mess.owner)
if (args.length < 1) return lenwyreply('☘️ *Masukkan Nama Imagenya*')
if (!imagenya.includes(q)) return lenwyreply(`⚠️ *${q} Tidak Ditemukan Dalam Database*`)
let wanu = imagenya.indexOf(q)
imagenya.splice(wanu, 1)
fs.writeFileSync('./database/Lenwytesti.json', JSON.stringify(imagenya))
fs.unlinkSync(`./database/Testilenwy/${q}.jpg`)
lenwyreply(`⚠️ *Sukses Menghapus ${q} Dalam Database*`)
}
break 

case 'tambah':{
if (!text.includes('+')) return lenwyreply(`☘️ *Contoh : 10.000 + 20.000*`)
arg = args.join(' ')
lenwy1 = arg.split('+')[0]
lenwy2 = arg.split('+')[1]
var lenwy_1 = Number(lenwy1)
var lenwy_2 = Number(lenwy2)
lenwyreply(`🎁 *Hasil :* ${lenwy_1 + lenwy_2}`)}
break

case 'kurang':{
if (!text.includes('-')) return lenwyreply(`☘️ *Contoh : 20 - 10*`)
arg = args.join(' ')
lenwy1 = arg.split('-')[0]
lenwy2 = arg.split('-')[1]
var lenwy_1 = Number(lenwy1)
var lenwy_2 = Number(lenwy2)
lenwyreply(`🎁 *Hasil :* ${lenwy_1 - lenwy_2}`)}
break

case 'kali':{
if (!text.includes('*')) return lenwyreply(`☘️ *Contoh : 5 * 10*`)
arg = args.join(' ')
lenwy1 = arg.split('*')[0]
lenwy2 = arg.split('*')[1]
var lenwy_1 = Number(lenwy1)
var lenwy_2 = Number(lenwy2)
lenwyreply(`🎁 *Hasil :* ${lenwy_1 * lenwy_2}`)}
break

case 'bagi':{
if (!text.includes('/')) return lenwyreply(`☘️ *Contoh : 10 / 2*`)
arg = args.join(' ')
lenwy1 = arg.split('/')[0]
lenwy2 = arg.split('/')[1]
var lenwy_1 = Number(lenwy1)
var lenwy_2 = Number(lenwy2)
lenwyreply(`🎁 *Hasil :* ${lenwy_1 / lenwy_2}`)}
break

case 'order':
case 'pesanan': {
let lenwy_txt = args[0]
if (!text) return lenwyreply('☘️ *Mana Teksnya?*')
if (text.length > 15) return lenwyreply(`☘️ *Maksimal 15 Karakter*`)    
lenwyreply('📦 *Pesanan Berhasil Terkirim*\n🎁 *Pesanan Anda Akan Dibalas Secepatnya, Terimakasih*')
lenwy.sendMessage(`${mess.owner2}@s.whatsapp.net`, { text: `📣 *Pesanan Nih*\n🎁 *Dari :* @${sender.split('@')[0]}\n📄 *Nomor :* ${sender.split('@')[0]}\n📑 *Pemesan :* wa.me/${sender.split('@')[0]}\n📦 *Order :* ${q}\n\n 📣 *Pesanan Ini Dikirim Oleh Bot Lenwy*`, mentions: [sender]}, { quoted: m })
}
break

case 'pay':
case 'payment':{
lenwy.sendMessage(m.chat, { image: { url: `${mess.qris}` }, caption: `${mess.format}` }, { quoted: m })
}
break

case 'saran':{
let lenwy_txt = args[0]
if (!text) return lenwyreply('☘️ *Mana Teksnya?*')
if (text.length > 300) return lenwyreply(`☘️ *Maksimal 300 Karakter*`)    
lenwyreply('☘️ *Saran Berhasil Terkirim, Terimakasih*')
lenwy.sendMessage(`${mess.owner2}@s.whatsapp.net`, { text: `📦 *Saran / Masukan*\n🎁 *Dari :* @${sender.split('@')[0]}\n📃 *Pesan :* ${q}\n\n 📣 *Saran Ini Dikirim Oleh Bot Lenwy*`, mentions: [sender]}, { quoted: m })
}
break

case 'reportbug':{
let lenwy_txt = args[0]
if (!text) return lenwyreply('☘️ *Mana Teksnya?*')
if (text.length > 100) return lenwyreply(`☘️ *Maksimal 100 Karakter*`)    
lenwyreply('⚠️ *Report Berhasil Terkirim, Terimakasih*')
lenwy.sendMessage(`${mess.owner2}@s.whatsapp.net`, { text: `⚠️ *Report Bug*\n🎁 *Dari :* @${sender.split('@')[0]}\n📃 *Pesan :* ${q}\n\n 📣 *Laporan Ini Dikirim Oleh Bot Lenwy*`, mentions: [sender]}, { quoted: m })
}
break

case 'bot': {
lenwyreply(`☘️ *Bot Lenwy Aktif*
🎁 *Author :* wa.me/6283829814737\n🎁 *Telegram Author :* t.me/ilenwy`)
}
break

case 'lenwy': {
lenwyreply(`📣 *Link Sc Lenwy Ada Di Deskripsi Saluran Wa :* https://whatsapp.com/channel/0029VaGdzBSGZNCmoTgN2K0u`)
}
break

case 'malas': {
if (!isCreator) return 
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case "assalamu'alaikum": case 'assalamualaikum': {
lenwyreply(`☘️ *Waalaikumussalam*`)
}
break

case 'hi': case 'hai': case 'halo': case 'hallo': case 'helo': case 'hello': case 'haii': case 'hii': case 'hlo': case 'haloo': case 'hiii': {
lenwyreply(`☘️ *Halo Juga*`)
}
break

case 'jedit': {
lenwyreply(`☘️ *Jasa Edit Script*\n☘️ *Malas Edit Sc? Chat Aja Harga Menyesuaikan*\n🎁 *Chat Nomor : wa.me/6283829814737*\n🎁 *Langsung Ke Tele : t.me/ilenwy*`)
}
break

case 'bokep': {
lenwyreply(`☘️ *Haduhh Otak Mesum*`)
}
break

case 'panel': {
lenwyreply(`☘️ *Halo Ini List Harga panelnya Ya*

📦 *Panel Unlimited : 10K/Bulan*
⚠️ *Garansi 10 Hari*

📦 *Panel Unlimited : 15K/Bulan*
⚠️ *Garansi 30 Hari*

📣 *Benefit :*
*Script Kalian Terjamin Aman Karna Saya Langsung Yang Mengurusnya, Tidak Ada Admin Panel Ataupun Reseller* 

☘️ *Mau Beli? Bisa Chat :*
🎁 *Chat :* wa.me/6283829814737
🎁 *Langsung Ke Tele :* t.me/ilenwy`)
}
break

case 'huft': {
if (!isCreator) return 
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break


case 'rate': {
if (!q) return lenwyreply(`☘️ *Contoh: ${prefix + command} Penampilan Lenwy*`)
if (text.length > 40) return lenwyreply(`☘️ *Maksimal 40 Karakter*`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
lenwyreply(`☘️ *Rate : ${q}*\n🎁 *Jawaban : ${te}%*`)
}
break

case 'apakah': {
if (!q) return lenwyreply(`☘️ *Contoh: ${prefix + command} Lenwy Marah*`)
if (text.length > 40) return lenwyreply(`☘️ *Maksimal 40 Karakter*`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
lenwyreply(`☘️ *Pertanyaan : Apakah ${q}*\n🎁 *Jawaban : ${kah}*`)
}
break

case 'kapankah': {
if (!q) return lenwyreply(`☘️ *Contoh: ${prefix + command} Lenwy Marah*`)
if (text.length > 40) return lenwyreply(`☘️ *Maksimal 40 Karakter*`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
lenwyreply(`☘️ *Pertanyaan : Kapankah ${q}*\n🎁 *Jawaban : ${kapankah}*`)
}
break

case 'bisakah': {
if (!q) return lenwyreply(`☘️ *Contoh: ${prefix + command} Lenwy Marah*`)
if (text.length > 40) return lenwyreply(`☘️ *Maksimal 40 Karakter*`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Awokawok', 'TENTU KAMU PASTI BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
lenwyreply(`☘️ *Pertanyaan : Bisakah ${q}*\n🎁 *Jawaban : ${ga}*`)
}
break

case 'bagaimanakah': {
if (!q) return lenwyreply(`☘️ *Contoh: ${prefix + command} Lenwy Marah*`)
if (text.length > 40) return lenwyreply(`☘️ *Maksimal 40 Karakter*`)
const gimana = ['Ya Begitulah', 'Gak Normal', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'Kayaknya Lanjut Part 2', 'Kepo Kamu', 'Gimana Aja']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
lenwyreply(`☘️ *Pertanyaan : Bagaimanakah ${q}*\n🎁 *Jawaban : ${ya}*`)
}
break

case 'gantengcek': case 'cekganteng': {
if (!q) return lenwyreply(`☘️ *Contoh: ${prefix + command} Lenwy*`)
if (text.length > 40) return lenwyreply(`☘️ *Maksimal 40 Karakter*`)
const gan = ['Normal','Ganteng Njir','Ganteng Amat Bang','Jaga Penampilan Ya','Kurang :c','Lumayan','Boleh Juga']
const teng = gan[Math.floor(Math.random() * gan.length)]
lenwyreply(`☘️ *Nama ${q}*\n🎁 *Jawaban : ${teng}*`)
}
break

case 'cantikcek': case 'cekcantik': {
if (!q) return lenwyreply(`☘️ *Contoh: ${prefix + command} Lenwy*`)
if (text.length > 40) return lenwyreply(`☘️ *Maksimal 40 Karakter*`)
const can = ['Normal','Cantik Njir','Cantik Amat Sih','Jaga Penampilan Ya','Kurang :c','Lumayan','Boleh Juga']
const tik = can[Math.floor(Math.random() * can.length)]
lenwyreply(`☘️ *Nama ${q}*\n🎁 *Jawaban : ${tik}*`)
}
break

case 'createqr': {
if (!isCreator) return lenwyreply(mess.owner)
LenwyLD()
const qrcode = require('qrcode')
if (!text) return lenwyreply(`☘️ *Contoh : Createqr Lenwy*`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
lenwy.sendMessage(from, { image: data, caption: mess.success }, { quoted: m })
}
break
case 'detectqr': {
if (!isCreator) return lenwyreply(mess.owner)
LenwyLD()
try {
mee = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
lenwyreply(util.format(data[0]))
} catch (err) {
lenwyreply(`☘️ *Mana Qrnya?*`)
}
}
break

case "1gb": {
if (!isCreator) return lenwyreply(mess.owner)
let t = text.split(',');
if (t.length < 2) return lenwyreply(`📑 *Format :  Username,Nomor*`)
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];    
let username = t[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "20"
let disk = "1024"
let email = username + "05lenwy@gmail.com"
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "#Lenwy"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return lenwyreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
lenwyreply(mess.wait)
LenwyPanel = `☘️ *Login Panel :* ${domain}
🎁 *Username : ${user.username}*
🔒 *Password : ${password}*
🕒 *Expired :* 
🛒 *Tipe : 1Gb*
📑 *Garansi : -*
⚠️ *Tolong Jaga Informasi Akun Anda*

📣 *Beli Panel Chat Lenwy :* wa.me/6283829814737`
lenwy.sendMessage(u,{image: {url: 'https://telegra.ph/file/54ff237913e8fdf5774b1.png'}, caption: LenwyPanel }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return lenwyreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
}
break

case "2gb": {
if (!isCreator) return lenwyreply(mess.owner)
let t = text.split(',');
if (t.length < 2) return lenwyreply(`📑 *Format :  Username,Nomor*`)
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];    
let username = t[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "60"
let disk = "2048"
let email = username + "05lenwy@gmail.com"
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "#Lenwy"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return lenwyreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
lenwyreply(mess.wait)
LenwyPanel = `☘️ *Login Panel :* ${domain}
🎁 *Username : ${user.username}*
🔒 *Password : ${password}*
🕒 *Expired :* 
🛒 *Tipe : 2Gb*
📑 *Garansi : -*
⚠️ *Tolong Jaga Informasi Akun Anda*

📣 *Beli Panel Chat Lenwy :* wa.me/6283829814737`
lenwy.sendMessage(u,{image: {url: 'https://telegra.ph/file/54ff237913e8fdf5774b1.png'}, caption: LenwyPanel }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return lenwyreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
}
break

case "3gb": {
if (!isCreator) return lenwyreply(mess.owner)
let t = text.split(',');
if (t.length < 2) return lenwyreply(`📑 *Format :  Username,Nomor*`)
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];    
let username = t[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "80"
let disk = "3072"
let email = username + "05lenwy@gmail.com"
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "#Lenwy"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return lenwyreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
lenwyreply(mess.wait)
LenwyPanel = `☘️ *Login Panel :* ${domain}
🎁 *Username : ${user.username}*
🔒 *Password : ${password}*
🕒 *Expired :* 
🛒 *Tipe : 3Gb*
📑 *Garansi : -*
⚠️ *Tolong Jaga Informasi Akun Anda*

📣 *Beli Panel Chat Lenwy :* wa.me/6283829814737`
lenwy.sendMessage(u,{image: {url: 'https://telegra.ph/file/54ff237913e8fdf5774b1.png'}, caption: LenwyPanel }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return lenwyreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
}
break

case "4gb": {
if (!isCreator) return lenwyreply(mess.owner)
let t = text.split(',');
if (t.length < 2) return lenwyreply(`📑 *Format :  Username,Nomor*`)
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];    
let username = t[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "4096"
let cpu = "100"
let disk = "4096"
let email = username + "05lenwy@gmail.com"
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "#Lenwy"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return lenwyreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
lenwyreply(mess.wait)
LenwyPanel = `☘️ *Login Panel :* ${domain}
🎁 *Username : ${user.username}*
🔒 *Password : ${password}*
🕒 *Expired :* 
🛒 *Tipe : 4Gb*
📑 *Garansi : -*
⚠️ *Tolong Jaga Informasi Akun Anda*

📣 *Beli Panel Chat Lenwy :* wa.me/6283829814737`
lenwy.sendMessage(u,{image: {url: 'https://telegra.ph/file/54ff237913e8fdf5774b1.png'}, caption: LenwyPanel }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return lenwyreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
}
break

case "5gb": {
if (!isCreator) return lenwyreply(mess.owner)
let t = text.split(',');
if (t.length < 2) return lenwyreply(`📑 *Format :  Username,Nomor*`)
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];    
let username = t[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "5120"
let cpu = "120"
let disk = "5120"
let email = username + "05lenwy@gmail.com"
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "#Lenwy"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return lenwyreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
lenwyreply(mess.wait)
LenwyPanel = `☘️ *Login Panel :* ${domain}
🎁 *Username : ${user.username}*
🔒 *Password : ${password}*
🕒 *Expired :* 
🛒 *Tipe : 5Gb*
📑 *Garansi : -*
⚠️ *Tolong Jaga Informasi Akun Anda*

📣 *Beli Panel Chat Lenwy :* wa.me/6283829814737`
lenwy.sendMessage(u,{image: {url: 'https://telegra.ph/file/54ff237913e8fdf5774b1.png'}, caption: LenwyPanel }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return lenwyreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
}
break

case "6gb": {
if (!isCreator) return lenwyreply(mess.owner)
let t = text.split(',');
if (t.length < 2) return lenwyreply(`📑 *Format :  Username,Nomor*`)
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];    
let username = t[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "6144"
let cpu = "140"
let disk = "6144"
let email = username + "05lenwy@gmail.com"
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "#Lenwy"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return lenwyreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
lenwyreply(mess.wait)
LenwyPanel = `☘️ *Login Panel :* ${domain}
🎁 *Username : ${user.username}*
🔒 *Password : ${password}*
🕒 *Expired :* 
🛒 *Tipe : 6Gb*
📑 *Garansi : -*
⚠️ *Tolong Jaga Informasi Akun Anda*

📣 *Beli Panel Chat Lenwy :* wa.me/6283829814737`
lenwy.sendMessage(u,{image: {url: 'https://telegra.ph/file/54ff237913e8fdf5774b1.png'}, caption: LenwyPanel }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return lenwyreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
}
break

case "7gb": {
if (!isCreator) return lenwyreply(mess.owner)
let t = text.split(',');
if (t.length < 2) return lenwyreply(`📑 *Format :  Username,Nomor*`)
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];    
let username = t[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "7168"
let cpu = "150"
let disk = "7168"
let email = username + "05lenwy@gmail.com"
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "#Lenwy"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return lenwyreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
lenwyreply(mess.wait)
LenwyPanel = `☘️ *Login Panel :* ${domain}
🎁 *Username : ${user.username}*
🔒 *Password : ${password}*
🕒 *Expired :* 
🛒 *Tipe : 7Gb*
📑 *Garansi : -*
⚠️ *Tolong Jaga Informasi Akun Anda*

📣 *Beli Panel Chat Lenwy :* wa.me/6283829814737`
lenwy.sendMessage(u,{image: {url: 'https://telegra.ph/file/54ff237913e8fdf5774b1.png'}, caption: LenwyPanel }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return lenwyreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
}
break

case "8gb": {
if (!isCreator) return lenwyreply(mess.owner)
let t = text.split(',');
if (t.length < 2) return lenwyreply(`📑 *Format :  Username,Nomor*`)
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];    
let username = t[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "8192"
let cpu = "170"
let disk = "8192"
let email = username + "05lenwy@gmail.com"
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "#Lenwy"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return lenwyreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
lenwyreply(mess.wait)
LenwyPanel = `☘️ *Login Panel :* ${domain}
🎁 *Username : ${user.username}*
🔒 *Password : ${password}*
🕒 *Expired :* 
🛒 *Tipe : 8Gb*
📑 *Garansi : -*
⚠️ *Tolong Jaga Informasi Akun Anda*

📣 *Beli Panel Chat Lenwy :* wa.me/6283829814737`
lenwy.sendMessage(u,{image: {url: 'https://telegra.ph/file/54ff237913e8fdf5774b1.png'}, caption: LenwyPanel }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return lenwyreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
}
break

case "9gb": {
if (!isCreator) return lenwyreply(mess.owner)
let t = text.split(',');
if (t.length < 2) return lenwyreply(`📑 *Format :  Username,Nomor*`)
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];    
let username = t[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "9216"
let cpu = "190"
let disk = "9216"
let email = username + "05lenwy@gmail.com"
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "#Lenwy"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return lenwyreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
lenwyreply(mess.wait)
LenwyPanel = `☘️ *Login Panel :* ${domain}
🎁 *Username : ${user.username}*
🔒 *Password : ${password}*
🕒 *Expired :* 
🛒 *Tipe : 9Gb*
📑 *Garansi : -*
⚠️ *Tolong Jaga Informasi Akun Anda*

📣 *Beli Panel Chat Lenwy :* wa.me/6283829814737`
lenwy.sendMessage(u,{image: {url: 'https://telegra.ph/file/54ff237913e8fdf5774b1.png'}, caption: LenwyPanel }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return lenwyreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
}
break

case "10gb": {
if (!isCreator) return lenwyreply(mess.owner)
let t = text.split(',');
if (t.length < 2) return lenwyreply(`📑 *Format :  Username,Nomor*`)
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];    
let username = t[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "10240"
let cpu = "200"
let disk = "10240"
let email = username + "05lenwy@gmail.com"
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "#Lenwy"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return lenwyreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
lenwyreply(mess.wait)
LenwyPanel = `☘️ *Login Panel :* ${domain}
🎁 *Username : ${user.username}*
🔒 *Password : ${password}*
🕒 *Expired :* 
🛒 *Tipe : 10Gb*
📑 *Garansi : -*
⚠️ *Tolong Jaga Informasi Akun Anda*

📣 *Beli Panel Chat Lenwy :* wa.me/6283829814737`
lenwy.sendMessage(u,{image: {url: 'https://telegra.ph/file/54ff237913e8fdf5774b1.png'}, caption: LenwyPanel }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return lenwyreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
}
break

case "unli": {
if (!isCreator) return lenwyreply(mess.owner)
let t = text.split(',');
if (t.length < 2) return lenwyreply(`📑 *Format :  Username,Nomor*`)
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];    
let username = t[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "90"
let disk = "0"
let email = username + "05lenwy@gmail.com"
if (!u) return
let d = (await lenwy.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "#Lenwy"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return lenwyreply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
lenwyreply(mess.wait)
LenwyPanel = `☘️ *Login Panel :* ${domain}
🎁 *Username : ${user.username}*
🔒 *Password : ${password}*
🕒 *Expired :* 
🛒 *Tipe : Unlimited*
📑 *Garansi : -*
⚠️ *Tolong Jaga Informasi Akun Anda*

📣 *Beli Panel Chat Lenwy :* wa.me/6283829814737`
lenwy.sendMessage(u,{image: {url: 'https://telegra.ph/file/54ff237913e8fdf5774b1.png'}, caption: LenwyPanel }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return lenwyreply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
}
break

case "listsrv": {
if (!isCreator) return lenwyreply(mess.owner)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "📑 *Berikut Adalah Daftar Server Pengguna :*\n\n";
  
for (let server of servers) {
let s = server.attributes;
    
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});
    
let data = await f3.json();

messageText += `*Nama : ${s.name}*\n`;    
messageText += `*ID Server : ${s.id}*\n\n`;
messageText += `====================\n\n`;
}
  
messageText += `📖 *Halaman : ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}*\n`;
messageText += `🛍️ *Total : ${res.meta.pagination.count} Server*`;
  
await lenwy.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
lenwyreply(`☘️ *Gunakan Perintah Listsrv ${res.meta.pagination.current_page + 1} Untuk Melihat Halaman Selanjutnya*`);
}
}
break

case "delsrv": {
if (!isCreator) return lenwyreply(mess.owner)
let srv = args[0]
if (!srv) return lenwyreply('☘️ *Masukkan ID Server*')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return lenwyreply('⚠️ *Server Tidak Ditemukan*')
lenwyreply('📑 *Server Berhasil Dihapus*')
}
break

case "listusr": {
if (!isCreator) return lenwyreply(mess.owner)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "📑 *Berikut Adalah Daftar Server User :*\n\n";
  
for (let user of users) {
let u = user.attributes;
messageText += `*User ID : ${u.id}*\n`;
messageText += `*Username : ${u.username}*\n`;
messageText += `*Status : ${u.attributes?.user?.server_limit === null ? 'Tidak Aktif' : 'Aktif'}*\n\n`;
messageText += `====================\n\n`;
}
  
messageText += `📖 *Halaman : ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}*\n`;
messageText += `🛍️ *Total : ${res.meta.pagination.count} User*`;
  
await lenwy.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
lenwyreply(`☘️ *Gunakan Perintah Listsrv ${res.meta.pagination.current_page + 1} Untuk Melihat Halaman Selanjutnya*`);
}
}
break

case "delusr": {
if (!isCreator) return lenwyreply(mess.owner)
let usr = args[0]
if (!usr) return lenwyreply('☘️ *Masukkan ID USer*')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return lenwyreply('⚠️ *User Tidak Ditemukan*')
lenwyreply('📑 *User Berhasil Dihapus*')
}
break

case 'cekidgc': {
if (!isCreator) return lenwyreply(mess.owner)
lenwyreply('☘️ *Sabar Yaa*')
let getGroups = await lenwy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `☘️ *List Grup Yang Dimasuki Bot Lenwy*\n🎁 *Total Group : ${anu.length} Group*\n\n`
for (let x of anu) {
let metadata2 = await lenwy.groupMetadata(x)
teks += `☘️ *Nama Group : ${metadata2.subject}*\n🎁 *ID Group : ${metadata2.id}*\n📦 *Total Member Group : ${metadata2.participants.length}*\n\n────────────────────────\n\n`
}
lenwyreply(teks + `☘️ *Cara Penggunaan : Pushkontak ID Group|Teks*\n🎁 *Contoh : Pushkontak ID Group|Save Lenwy*`)
}
break
case 'push':
case 'pushkontak':{
if (!isCreator) return lenwyreply(mess.owner)
if (m.isGroup) return lenwyreply(mess.private)
if (!text) return lenwyreply(`☘️ *Contoh : Pushkontak ID Group|Teks*\n🎁 *Untuk Mengetahui Id Group Ketik : Cekidgc*`)
global.idgcns = text.split("|")[0]
global.tekspushkon = text.split("|")[1]
const groupMetadataa = !m.isGroup? await lenwy.groupMetadata(global.idgcns).catch(e => {}) : ""
const participants = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
if (isContacts) return
for (let mem of halls) {
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await lenwy.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await lenwy.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(2000)
} else {
await lenwy.sendMessage(mem, { text: global.tekspushkon })
await sleep(2000)
}
}
lenwy.sendMessage("6283829814737@s.whatsapp.net", {text:`☘️ *Selesai*`})
}
break
case 'push2':
case 'pushkontak2':{
if (!isCreator) return lenwyreply(mess.owner)
if (!m.isGroup) return lenwyreply(mess.group)
if (!text) return lenwyreply(`☘️ *Contoh : Pushkontak2 ID Group|Teks*\n🎁 *Untuk Mengetahui Id Group Ketik : Cekidgc*`)
global.tekspushkonv2 = text
const groupMetadata = m.isGroup? await lenwy.groupMetadata(from).catch(e => {}) : ""
const participantts = m.isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await lenwy.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(3000)
} else {
await lenwy.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(3000)
}
}
lenwy.sendMessage("6283829814737@s.whatsapp.net", {text:`☘️ *Selesai*`})
}
break
case 'savekontak': {
if (!isCreator) return lenwyreply(mess.owner)
lenwyreply(mess.wait)
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA [${index}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
lenwyreply(util.format(err))
} finally {
await lenwy.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "☘️ *Selesai*", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break

case 'public': {
if (!isCreator) return lenwyreply(mess.owner) 
lenwy.public = true
lenwyreply('Sukses Change To Public')
}
break

case 'self': {
if (!isCreator) return lenwyreply(mess.owner) 
lenwy.public = false
lenwyreply('Sukses Change To Self')
}
break

case 'enc': {
            if (!isCreator) return lenwyreply(mess.owner)
            if (!q) return lenwyreply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            lenwyreply(`${meg.result}`)
        }
        break

case 'addprem':
if (!isCreator) return 
if (!args[0]) return lenwyreply(`☘️ *Mana Nomornya?`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await lenwy.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return lenwyreply(`⚠️ *Nomor Tidak Valid!*`)
owner.push(bnnd)
fs.writeFileSync('./premium.json', JSON.stringify(owner))
lenwyreply(`🎁 *Nomor ${bnnd} Ditambahkan Kedalam Daftar Premium*`)
break

case 'delprem':
if (!isCreator) return 
if (!args[0]) return lenwyreply(`☘️ *Mana Nomornya?*`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./premium.json', JSON.stringify(owner))
lenwyreply(`✉️ *Nomor ${yaki} Di Hapus Dari Daftar Premium*`)
break

case 'listprem':
 teksooo = '📦 *List Premium*\n'
for (let i of owner) {
teksooo += `✉️ ${i}\n`
}
teksooo += `\n📑 *Total : ${owner.length}*`
lenwy.sendMessage(from, { text: teksooo.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": owner } })
break

case 'ban':  {
if (!isCreator) return lenwyreply(mess.owner)
if (!args[0]) return lenwyreply(`*Contoh : ${command} add 6283829814737*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return lenwyreply('*Pengguna Ini telah Di Ban*')
banned.push(orgnye)
lenwyreply(`Succes ban Pengguna Ini`)
} else if (args[0] === "del") {
if (!isBane) return lenwyreply('*Pengguna Ini Telah Di hapus Dari Ban*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
lenwyreply(`*Berhasil Menghapus Pengguna yang Di Ban*`)
} else {
lenwyreply("Error")
}
}
break

case 'listban':
if (isBan) return lenwyreply('*Lu Di Ban Owner*')
 teksooop = `📦 *List Ban*\n`
for (let ii of banned) {
teksooop += `   ⨠  ${ii}\n`
}
lenwyreply(teksooop)
break

case 'owner': case 'creator': {
await lenwy.sendContact(m.chat, author.map( i => i.split("@")[0]), m)
await lenwy.sendMessage(m.chat, {text: `🎁 *Halo Ini Kontak Ownerku Yaa*`}, {quoted: m})
}
break

case 'limit':{
if (isPrem) return lenwyreply('☘️ *Limit Kamu : Unlimited*')   
lenwyreply('☘️ *Sisa Limit Kamu :* ' + (db.data.users[m.sender].limit) + ' Limit*')
}
break

case 'koin': case 'money': {
lenwyreply('💰 *Sisa Koin Kamu : ' + (db.data.users[m.sender].coin) + ' Koin Emas*')
}
break

case 'stamina': {
lenwyreply('🍖 *Sisa Stamina Kamu : ' + (db.data.users[m.sender].stamina) + ' Stamina*')
}
break

case 'stat': case 'status': {
{
lenstat = '📑 *Rpg Status*\n\n'
lenstat += '⚔️ *Kekuatan : ' + (db.data.users[m.sender].kekuatan) + ' Kekuatan*\n'
lenstat += '🛡️ *Daya Tahan : ' + (db.data.users[m.sender].tahan) + ' Ketahanan*\n'
lenstat += '🍖 *Stamina : ' + (db.data.users[m.sender].stamina) + ' Stamina*\n'
lenstat += '💰 *Kekayaan : ' + (db.data.users[m.sender].coin) + ' Koin Emas*'
}    
lenwyreply(lenstat)
}
break

case 'resetlimit': {
if (!isCreator) return lenwyreply(mess.owner)
let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 50 : isNumber(args[0]) ? parseInt(args[0]) : 50
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.limit = lim)))
		lenwy.sendMessage(m.chat, {text: `📑 *Limit Setiap User Berhasil Direset*`}, { quoted: len })
		}
break

case 'resetkoin': {
if (!isCreator) return lenwyreply(mess.owner)
let list = Object.entries(global.db.data.users)
    let lim = !args || !args[0] ? 15 : isNumber(args[0]) ? parseInt(args[0]) : 15
    lim = Math.max(1, lim)
    list.map(([user, data], i) => (Number(data.coin = lim)))
        lenwy.sendMessage(m.chat, {text: `📑 *Koin Emas Setiap User Berhasil Direset*`}, { quoted: len })
        }
break

case 'addlimit': {
if (!isCreator) return lenwyreply(mess.owner)
if (!text) return lenwyreply('☘️ *Masukkan Jumlah Limit Yang Akan Diberi*')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '☘️ *Tag Orangnya*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw '☘️ *Hanya Angka*'
    let poin = parseInt(txt)
    let limit = poin
    if (limit < 1) throw '☘️ *Minimal 1*'
    let user = global.db.data.users
    user[who].limit += poin
    if (limit > 9999999) return lenwyreply('☘️ *Kebanyakan*') 
    lenwy.sendMessage(m.chat, {text: `🎁 *Sukses Menambahkan +${poin} Limit!*`}, {quoted:m})
    }
break

case 'dellimit': {
if (!isCreator) return lenwyreply(mess.owner)
if (!text) return lenwyreply('☘️ *Masukkan Jumlah Limit Yang Akan Dihapus*')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '☘️ *Tag Orangnya*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw '☘️ *Hanya Angka*'
    let poin = parseInt(txt)
    let limit = poin
    if (limit < 1) throw '☘️ *Minimal 1*'
    let user = global.db.data.users
    user[who].limit -= poin
    if (limit > 9999999) return lenwyreply('☘️ *Kebanyakan*') 
    lenwy.sendMessage(m.chat, {text: `📑 *Sukses Menghapus -${poin} Limit!*`}, {quoted:m})
    }
break

case 'addkoin': {
if (!isCreator) return lenwyreply(mess.owner)
if (!text) return lenwyreply('☘️ *Masukkan Jumlah Koin Yang Akan Diberi*')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '☘️ *Tag Orangnya*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw '☘️ *Hanya Angka*'
    let poin = parseInt(txt)
    let coin = poin
    if (coin < 1) throw '☘️ *Minimal 1*'
    let user = global.db.data.users
    user[who].coin += poin
    if (coin > 9999999) return lenwyreply('☘️ *Kebanyakan*') 
    lenwy.sendMessage(m.chat, {text: `🎁 *Sukses Menambahkan +${poin} koin Emas!*`}, {quoted:m})
    }
break

case 'delkoin': {
if (!isCreator) return lenwyreply(mess.owner)
if (!text) return lenwyreply('☘️ *Masukkan Jumlah Koin Yang Akan Diberi*')
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '☘️ *Tag Orangnya*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw '☘️ *Hanya Angka*'
    let poin = parseInt(txt)
    let coin = poin
    if (coin < 1) throw '☘️ *Minimal 1*'
    let user = global.db.data.users
    user[who].coin -= poin
    if (coin > 9999999) return lenwyreply('☘️ *Kebanyakan*') 
    lenwy.sendMessage(m.chat, {text: `📑 *Sukses Menghapus -${poin} koin Emas!*`}, {quoted:m})
    }
break

case 'hd': case 'hdr': case 'remini': {
if (!quoted) return lenwyreply(`Fotonya Mana?`)
if (!/image/.test(mime)) return lenwyreply(`☘️ *Fotonya Mana?*`)
if (global.db.data.users[m.sender].limit < 1) return lenwyreply('⚠️ *Limit Kamu Habis*')
lenwyreply('☘️ *5 Limit Digunakan*')
let media = await quoted.download()
let proses = await remini(media, "enhance");
lenwy.sendMessage(m.chat, { image: proses, caption: '☘️ *Selesai*'}, { quoted: m})
}
if (!isPrem) return db.data.users[m.sender].limit -= 5
break

case 'removebg': case 'nobg':{
if (!quoted) return lenwyreply(`Fotonya Mana?`)
if (!/image/.test(mime)) return lenwyreply(`☘️ *Mana Fotonya?*`)
if (global.db.data.users[m.sender].limit < 1) return lenwyreply('⚠️ *Limit Kamu Habis*')
lenwyreply('☘️ *5 Limit Digunakan*')
let media = await quoted.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
await lenwy.sendFile(m.chat, data.url.result, 'Lenwy.jpg', '🎁 *Removebg Selesai*', { quoted: m})
}
if (!isPrem) return db.data.users[m.sender].limit -= 5
break

case 'toanime': case 'jadianime': {
if (!isPrem) return lenwyreply(mess.prem)
if (!quoted) return lenwyreply(`Fotonya Mana?`)
if (!/image/.test(mime)) return lenwyreply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
lenwyreply(mess.wait)
const media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
lenwy.sendMessage(m.chat, { image: { url: `https://aemt.me/toanime?url=${anu}` }, caption: 'Selesai'}, { quoted: m})
}
break

case 'qc': {
if (!q) return lenwyreply(`☘️ *Contoh : Qc White Lenwy*\n🎁 *Kode Warna Ketik : Qckode*`)
if (text.length > 400) return lenwyreply(`☘️ *Maksimal 400 Karakter*`)
const isToxic = /(ewe|bangsad|mmk|koncol|kontol|k0ntl|k0ntol|kont0l|k0nt0l|kontoI|puki|kojtol|kintil|momok|nigga|ajg|ewean|yatim|anjing|kontol|memek|bangsat|babi|gblk|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|ktl|ngentot|ngewe|bokep|bkp|lonte|lont|bh|perawan|prawan|tolol|tlol|itil|tobrut|tobrud|tbrut|tbrud)/i;
const Lenwyguard = isToxic.exec(m.text)
if (Lenwyguard) return lenwyreply('⚠ *Lenwy Melarang Penggunaan Bahasa Kotor Pada Fitur Qc*')     
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return lenwyreply('☘️ *Kode Warna Tidak Ditemukan*\n🎁 *Contoh : Qc White Lenwy*\n⚠️ *Tolong Gunakan Huruf Kecil Pada Kode Warna*')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await lenwy.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
lenwy.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break

case 'qckode': {
lenwyreply(`📦 *Kode Warna Qc*
 *⨠ Pink*
 *⨠ Blue*
 *⨠ Red*
 *⨠ Green*
 *⨠ Yellow*
 *⨠ Purple*
 *⨠ Darkblue*
 *⨠ Lightblue*
 *⨠ Ash*
 *⨠ Orange*
 *⨠ Black*
 *⨠ White*
 *⨠ Teal*
 *⨠ Lightpink*
 *⨠ Chocolate*
 *⨠ Salmon*
 *⨠ Magenta*
 *⨠ Tan*
 *⨠ Wheat*
 *⨠ Deeppink*
 *⨠ Fire*
 *⨠ Skyblue*
 *⨠ Safron*
 *⨠ Brightskyblue*
 *⨠ Hotpink*
 *⨠ Lightskyblue*
 *⨠ Seagreen*
 *⨠ Darkred*
 *⨠ Orangered*
 *⨠ Cyan*
 *⨠ Violet*
 *⨠ Mossgreen*
 *⨠ Darkgreen*
 *⨠ Navyblue*
 *⨠ Darkorange*
 *⨠ Darkpurple*
 *⨠ Fuchsia*
 *⨠ Darkmagenta*
 *⨠ Darkgray*
 *⨠ Peachpuff*
 *⨠ Blackishgreen*
 *⨠ Darkishred*
 *⨠ Goldenrod*
 *⨠ Darkishgray*
 *⨠ Darkishpurple*
 *⨠ Gold*
 *⨠ Silver*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`)
}
break

case 'fitur': case 'totalfitur': {
lenwyreply(`📑 *Total Fitur Bot Lenwy : ${totalfitur()} Fitur*`)
}
break

case 'ai': case 'openai': {
if (!q) return lenwyreply(`☘️ *Mau Nanya Apa Sama AI?*`)
if (text.length > 500) return lenwyreply(`☘️ *Maksimal 500 Karakter*`)    
lenwyreply('☘️ *Sabar Yaa*')
var lenwyai = await fetchJson(`https://widipe.com/turbo?text=${q}`)
var lenai = lenwyai.result
await lenwyreply(lenai)
}
break

case 'ask': {
if (!q) return lenwyreply(`☘️ *Mau Nanya Apa Sama Ask?*`)
if (text.length > 500) return lenwyreply(`☘️ *Maksimal 500 Karakter*`)
lenwyreply('☘️ *Sabar Yaa*')
var lenwyai = await fetchJson(`https://widipe.com/turbo?text=${q}`)
var lenai = lenwyai.result
await lenwyreply(lenai)
}
break

/*case 'aili': {
if (!q) return lenwyreply(`☘️ *Mau Nanya Apa Sama AILI?*`)
if (text.length > 500) return lenwyreply(`☘️ *Maksimal 500 Karakter*`)    
lenwyreply('☘️ *Sabar Yaa*')
var lenwyai = await fetchJson(`https://aemt.me/prompt/gpt?prompt=Lenwy&text=${q}`)
var lenai = lenwyai.result
await lenwyreply(lenai)
}
break*/

case 'gpt4': {
if (!q) return lenwyreply(`☘️ *Mau Nanya Apa Sama GPT4?*`)
if (text.length > 500) return lenwyreply(`☘️ *Maksimal 500 Karakter*`)    
lenwyreply('☘️ *Sabar Yaa*')
var lenwyai = await fetchJson(`https://widipe.com/gpt4?text=${q}`)
 var lenai = lenwyai.result
await lenwyreply(lenai)
}
break

case 'bing': {
if (!isPrem) return lenwyreply(mess.prem)    
if (!q) return lenwyreply(`☘️ *Mau Nanya Apa Sama Bing?*`)
if (text.length > 500) return lenwyreply(`☘️ *Maksimal 500 Karakter*`)    
lenwyreply('☘️ *Sabar Yaa*')
var lenwyai = await fetchJson(`https://widipe.com/bingai?text=${q}`)
var lenai = lenwyai.result
await lenwyreply(lenai)
}
break

case 'gemini': {
if (!q) return lenwyreply(`☘️ *Mau Nanya Apa Sama Gemini?*`)
if (text.length > 500) return lenwyreply(`☘️ *Maksimal 500 Karakter*`)    
lenwyreply('☘️ *Sabar Yaa*')
var lenwyai = await fetchJson(`https://widipe.com/gemini?text=${q}`)
var lenai = lenwyai.result
await lenwyreply(lenai)
}
break

/*case 'simi': {
if (!q) return lenwyreply(`☘️ *Mau Nanya Apa Sama Simi?*`)
if (text.length > 200) return lenwyreply(`☘️ *Maksimal 200 Karakter*`)
var lenwyai = await fetchJson(`https://itzpire.com/ai/simi-chat?text=${q}&lang=id&toxic=false`)
var lenai = lenwyai.result
await lenwyreply(lenai)
}
break*/

case 'img2txt':
if (!/image/.test(mime)) return lenwyreply(`☘️ *Gambarnya Mana?*`)
if (/image/.test(mime)) {
lenwyreply(mess.wait)
let mee = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await TelegraPh(mee)
let len = await (await fetch(`https://itzpire.com/tools/img2text?url=${mem}`)).json()
let result = len.result
lenwy.sendMessage(m.chat,{image:{url: mem}, caption:`${result}`},{quoted: m})
}
break

case 'img2promt':
if (!/image/.test(mime)) return lenwyreply(`☘️ *Gambarnya Mana?*`)
if (/image/.test(mime)) {
lenwyreply(mess.wait)
let mee = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await TelegraPh(mee)
let len = await (await fetch(`https://itzpire.com/tools/img2prompt?url=${mem}`)).json()
let result = len.result
lenwy.sendMessage(m.chat,{image:{url: mem}, caption:`${result}`},{quoted: m})
}
break

case 'gemini-img':{
if (!quoted) return lenwyreply('☘️ *Mana Gambarnya?*')
lenwyreply('☘️ *Sabar Yaa*')
if (!/image/.test(mime)) return lenwyreply("⚠️ *Hanya Support Gambar*")
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
let { data } = await axios.get("https://gmni.vercel.app/api/img?imageUrl="+ anu +"&prompt=" + text)
lenwyreply(data.text)
}
break

case'lirik': case 'liriklagu':{
if (!text) return lenwyreply(`☘️ *Masukan Judul Lagu*`)
if (text.length > 30) return lenwyreply(`☘️ *Maksimal 30 Karakter*`)    
lenwyreply(mess.wait)
try{
let anu = await fetchJson('http://song-lyrics-api-o0m8tth8t-azharimm.vercel.app/search?q=' + text)
if(!anu.data) return lenwyreply('⚠️ *Server Error*')
let anuu = await fetchJson (anu.data[0].songLyrics)
let { artist, songTitle, songLyrics} = anuu.data
lenwyreply('☘️ *Lirik Lagu*\n📃 *Judul* : ' + songTitle + '\n📣 *Artis :* ' + artist + '\n\n🎁 *Lirik* :\n' + songLyrics)
}catch (error) {
lenwyreply(`⚠️ *Lirik Lagu Tidak Ditemukan*`);
}
}
break

case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return lenwyreply(mess.group)
if (!isBotAdmins) return lenwyreply(mess.botAdmin)
let response = await lenwy.groupInviteCode(from)
lenwy.sendText(from, `☘️ *Name Group : ${groupMetadata.subject}*\n\n🎁 *Link Group : https://chat.whatsapp.com/${response}*`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isAdmins) return lenwyreply(mess.admin)
if (!m.isGroup) return lenwyreply(mess.group)
if (!isBotAdmins) return lenwyreply(mess.botAdmin)
lenwy.groupRevokeInvite(from)
break

case 'sendlinkgc': {
if (!isCreator) return lenwyreply(mess.owner)
if (!m.isGroup) return lenwyreply(mess.group)
if (!isBotAdmins) return lenwyreply(mess.botAdmin)
if (!args[0]) return lenwyreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283829814737`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await lenwy.groupInviteCode(from)
lenwy.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, len, { detectLink: true })

}
break

case 'kick': {
if (!m.isGroup) return lenwyreply(mess.group)
if (!isBotAdmins) return lenwyreply(mess.botAdmin)
if (!isAdmins) return lenwyreply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(from, [users], 'remove')
}
break

case 'add': {
if (!isCreator) return lenwyreply(mess.owner)
if (!m.isGroup) return lenwyreply(mess.group)
if (!isBotAdmins) return lenwyreply(mess.botAdmin)
if (!isAdmins) return lenwyreply(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(from, [users], 'add')
}
break

case 'promote': {
if (!m.isGroup) return lenwyreply(mess.group)
if (!isBotAdmins) return lenwyreply(mess.botAdmin)
if (!isAdmins) return lenwyreply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(from, [users], 'promote')
}
break

case 'demote': {
if (!m.isGroup) return lenwyreply(mess.group)
if (!isBotAdmins) return lenwyreply(mess.botAdmin)
if (!isAdmins) return lenwyreply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.groupParticipantsUpdate(from, [botNumber], 'demote')
}
break

case 'hidetag': {
if (!m.isGroup) return lenwyreply(mess.group)
if (!isAdmins) return lenwyreply(mess.admin)
lenwy.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:len})
}
break

case 'grup':
case 'group': {   
if (!m.isGroup) return lenwyreply(mess.group)
if (!isAdmins) return lenwyreply(mess.admin)
if (args[0] === 'close'){
await lenwy.groupSettingUpdate(from, 'announcement').then((res) => lenwyreply(`Sukses Menutup Group 🫡`)).catch((err) => lenwyreply(jsonformat(err)))
} else if (args[0] === 'open'){
await lenwy.groupSettingUpdate(from, 'not_announcement').then((res) => lenwyreply(`Sukses Membuka Group 🫡`)).catch((err) => lenwyreply(jsonformat(err)))
} else {
lenwy.sendMessage(m.chat, { image: ppnyauser, caption: `☘️ *Silahkan Ketik*
Group open
Group close`}, {quoted:m}) 
 }
}
break

case 'editinfo': {
if (!m.isGroup) return lenwyreply(mess.group)
if (!isAdmins) return lenwyreply(mess.admin)
 if (args[0] === 'open'){
await lenwy.groupSettingUpdate(from, 'unlocked').then((res) => lenwyreply(`Sukses Membuka Edit Info Group 🫡`)).catch((err) => lenwyreply(jsonformat(err)))
 } else if (args[0] === 'close'){
await lenwy.groupSettingUpdate(from, 'locked').then((res) => lenwyreply(`Sukses Menutup Edit Info Group 🫡`)).catch((err) => lenwyreply(jsonformat(err)))
 } else {
 lenwy.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Editinfo Open
Editinfo Close`}, {quoted:m}) 

}
}
break

case 'join': {
if (!isCreator) return lenwyreply(mess.owner)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid! 🤔'
lenwyreply('☘️ *Sabar Yaa*')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await lenwy.groupAcceptInvite(result).then((res) => lenwyreply(jsonformat(res))).catch((err) => lenwyreply(jsonformat(err)))
}
break

case 'leave': {
                if (!isCreator) return lenwyreply(mess.owner)
                lenwyreply("Selamat Tinggal 😥")
                await lenwy.groupLeave(m.chat).then((res) => lenwyreply(jsonformat(res))).catch((err) => lenwyreply(jsonformat(err)))
        }
        break

case 'editsubjek': {
if (!m.isGroup) return lenwyreply(mess.group)
if (!isBotAdmins) return lenwyreply(mess.botAdmin)
if (!isAdmins) return lenwyreply(mess.admin)
if (!text) throw 'Text nya ?'
await lenwy.groupUpdateSubject(from, text).then((res)).catch((err) => lenwyreply(jsonformat(err)))
}
break

    case 'delgc':

  if (!isCreator) return lenwyreply(mess.owner)

    if (!isGroup) return lenwyreply(`Khusus Group`)

var ini = pler.indexOf(m.chat)

pler.splice(ini, 1)

fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))

lenwyreply(`${command} Sukses Menonaktifkan Fitur Domain Di Grup Ini`)

break

       case 'addgc':

    if (!isGroup) return lenwyreply(`Khusus Group`)         

if (!isCreator) return lenwyreply(mess.owner)

pler.push(m.chat)

fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))

lenwyreply(`${command} Sukses Mengaktifkan Fitur Domain Di Grup Ini`)

           break

case 'editdesk':{
if (!m.isGroup) return lenwyreply(mess.group)
if (!isBotAdmins) return lenwyreply(mess.botAdmin)
if (!isAdmins) return lenwyreply(mess.admin)
if (!text) throw 'Text Nya ?'
await lenwy.groupUpdateDescription(from, text).then((res)).catch((err) => lenwyreply(jsonformat(err)))
}
break

case 'tagall': {
if (!m.isGroup) return lenwyreply(mess.group)
if (!isAdmins) return lenwyreply(mess.admin)
let teks = `☘️ *Tag All*
🎁 *Pesan : ${q ? q : 'Kosong'}*\n\n`
for (let mem of participants) {
teks += `⨠ @${mem.id.split('@')[0]}\n`
}
lenwy.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break

case 'sewa':
if (isBan) return lenwyreply('*Lu Di Ban Owner*')
lenwyreply(`☘️ *Harga Sewa Bot Lenwy*

📦 *1 Minggu = 10k*
📦 *1 Bulan = 20k*

🎁 *Chat : wa.me/6283829814737*
🎁 *Langsung Ke Tele : t.me/ilenwy*`)
break

case 'produk': {
lenwyreply(mess.wait)    
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
         contextInfo: {
            mentionedJid: [m.sender], 
            isForwarded: true, 
            forwardedNewsletterMessageInfo: {
            serverMessageId: -1
            },
        },
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: `🎁 *Halo @${m.sender.split('@')[0]}*\n*Silahkan Pilih List Item Di Bawah Ini!*`
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          hasMediaAttachment: false
        }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: [
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: ' *⨠ Update Sc : 10.000*\n *⨠ Buy Script : 20.000*\n\n📑 *Benefit Item*\n *⨠ No Enc*\n *⨠ Free Apikey*\n *⨠ Pairing Code & Scan*'
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '📦 *Sc Lenwy v2.0*',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/54ff237913e8fdf5774b1.png' } }, { upload: lenwy.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"Order Here!","url":"https://wa.me/6283829814737?text=Mau+Beli+Sc+Lenwy+Dong","merchant_url":"https://wa.me/6283829814737?text=Mau+Beli+Sc+Lenwy+Dong"}`
                  }
                  ]
              })
            },
            {
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: ' *⨠ Unlimited : 10.000*\n *⨠ Unlimited : 15.000*\n\n📑 *Benefit Item*\n *⨠ Script Aman*\n *⨠ Garansi 10 Hari*\n *⨠ Garansi 30 Hari*'
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '📦 *Panel Pterodactyl*',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/75423430873080dabc110.png' } }, { upload: lenwy.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"Order Here!","url":"https://wa.me/6283829814737?text=Mau+Beli+Panel+Unlimited+Dong","merchant_url":"https://wa.me/6283829814737?text=Mau+Beli+Panel+Unlimited+Dong"}`
                  }
                  ]
              })
            },
            {
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: ' *⨠ 7 Hari : 10.000*\n *⨠ 1 Bulan : 20.000*\n\n📑 *Benefit Item*\n *⨠ Auto Kick*\n *⨠ Auto Welcome*\n *⨠ Akses Fitur Lainnya*'
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '📦 *Sewa Bot*',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/39651c7da90ca67c76fdc.png' } }, { upload: lenwy.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"Order Here!","url":"https://wa.me/6283829814737?text=Mau+Sewa+Bot+Lenwy+Dong","merchant_url":"https://wa.me/6283829814737?text=Mau+Sewa+Bot+Lenwy+Dong"}`
                  }
                  ]
              })
            }
          ]
        })
      })
    }
  }
}, { userJid: m.chat, quoted: m })
lenwy.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
}
break

case 'sewabot':
if (isBan) return lenwyreply('*Lu Di Ban Owner*')
if (!isCreator) return lenwyreply(mess.owner)
if (!text) return lenwyreply(`*Contoh* :\n#sewabot 1 minggu `)
let cret = await lenwy.groupCreate(args.join(" "), [])
let response = await lenwy.groupInviteCode(cret.id)
lenwy.sendMessage(m.chat, { text: `☘️ *Create Group Sewa Bot*

☘️ *Sewa Bot Selama ${text} Telah Di Proses, Silahkan Masuk Group Melalui Link Yang Sudah Di Sediakan*

☘️ *Bot : ${botname}*
☘️ *Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}*
`, m})
lenwyreply('🎁 *Link Group Khusus Berhasil Dikirim Melalui Chat Pribadi Anda*')
break

case 'stiker': case 'sticker': case 's': case 'stickers': case 'sgif': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
 if (!quoted) lenwyreply `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await lenwy.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return lenwyreply('⚠️ *Maksimal 10 Detik!*')
let media = await quoted.download()
let encmedia = await lenwy.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
lenwyreply(`☘️ *Kirim Gambar/Video Yang Ingin Dijadikan Sticker*\n⚠️ *Durasi VIdeo Minimal 1 - 9 Detik*`)
}
}
break

case 'inspect': {
if (isBan) return lenwyreply('*Lu Di Ban Owner*')
LenwyLD()
if (!args[0]) return lenwyreply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return lenwyreply("Link Invalid 🤔")
lenwy.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `☘️ *Group Link Yang Di Inspect*

 *⨠ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}*
 *⨠ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}*
 *⨠ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}*
 *⨠ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}*
 *⨠ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member*

*⨠ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}*
🎁 *By ${botname}*`
try {
pp = await lenwy.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
lenwy.sendFile(from, pp, "", m, { caption: tekse, mentions: await lenwy.parseMention(tekse) })

})
}
break

case 'ping': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, {
length
}) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
🕒 *Kecepatan Respon : ${latensi.toFixed(4)} Detik* \n🕒 *${oldd - neww} Milidetik*\n*🕒 Runtime : ${runtime(process.uptime())}*

📦 *Info Server*
 *⨠ RAM : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}*

${cpus[0] ? `⚠️ *Total Cpu Usage*\n *⨠ ${cpus[0].model.trim()} (${cpu.speed} MHZ)*\n${Object.keys(cpu.times).map(type => ` *⨠ ${(type + '*').padEnd(6)}: *${(100 * cpu.times[type] / cpu.total).toFixed(2)}%*`).join('\n')}
 *⨠ CPU Core(s) Usage (${cpus.length} Core CPU)*` : ''}
`.trim()
await lenwy.sendMessage(m.chat, {
text: respon,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: 'Kecepatan Bot',
body: `${latensi.toFixed(4)} Second`,
thumbnailUrl: 'https://telegra.ph/file/846e7e790c4548710c553.jpg',
sourceUrl: global.link,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: len
})
}
break

case 'bcgc': case 'bcgroup': {
if (!isCreator) return lenwyreply(mess.owner)
LenwyLD()
if (!text) lenwyreply `☘️ *Contoh : ${prefix + command} Subscribe Lenwy*`
let getGroups = await lenwy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (let i of anu) {
await sleep(1500)
lenwy.sendMessage(i, {text: `${text}`}, {quoted:len})
    }
lenwyreply(`☘️ Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case 'bcimg': case 'bcvid': case 'bcvideo': case 'share': {
if (!isCreator) return lenwyreply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
if (m.isGroup) return lenwyreply(mess.private)
if (!text) return lenwyreply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks\n\nlenwyReply Gambar Untuk Mengirim Gambar Ke Semua Group`)
lenwyreply(mess.wait)
let getGroups = await lenwy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
global.teksjpm = text
for (let xnxx of anu) {
let metadat72 = await lenwy.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await lenwy.sendMessage(xnxx, { image: { url: mem }, caption: global.teksjpm, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: len })
await sleep(2000)
} else {
if(/video/.test(mime)){
media1 = await lenwy.downloadAndSaveMediaMessage(quoted)
mem1 = await uptotelegra(media1)
await lenwy.sendMessage(xnxx, { video: { url: mem1 }, caption: global.teksjpm, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: len })
await sleep(2000)
} else {
await lenwy.sendMessage(xnxx, { text: global.teksjpm, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: len })
await sleep(2000)
}}
}
}
break            
            case 'antitoxic': {
                if (!m.isGroup) return lenwyreply(mess.group)
                if (!isAdmins && !isCreator) return lenwyreply(mess.admin)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].lenwy_antitoxic) return lenwyreply(`📣 *Anti Toxic Sudah Aktif*`)
                    db.data.chats[m.chat].lenwy_antitoxic = true
                    lenwyreply(`📣 *Anti Toxic Diaktifkan Didalam Group*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].lenwy_antitoxic) return lenwyreply(`⚠️ *Anti Toxic Sudah Dinonaktifkan*`)
                    db.data.chats[m.chat].lenwy_antitoxic = false
                    lenwyreply(`⚠️ *Anti Toxic Dinonaktifkan Didalam Group*`)
                } else {
                    lenwyreply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break
            
            case 'antilinkgcv1': {
                if (!m.isGroup) return lenwyreply(mess.group)
                if (!isAdmins && !isCreator) return lenwyreply(mess.admin)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].lenwy_antigc) return lenwyreply(`☘️ *Autokick Link Gc Aktif*`)
                    db.data.chats[m.chat].lenwy_antigc = true
                    lenwyreply(`☘️ *Autokick Link Gc Aktif*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].lenwy_antigc) return lenwyreply(`☘️ *Autokick Link Gc Di Nonatifkan*`)
                    db.data.chats[m.chat].lenwy_antigc = false
                    lenwyreply(`☘️ *Autokick Nonaktif*`)
                } else {
                    lenwyreply(`☘️ *Ketik Antilinkgcv1 on/off*`)
                }
            }
            break

            case 'antilinkgc':
                if (!m.isGroup) return lenwyreply(mess.group)
                if (!isAdmins && !isCreator) return lenwyreply(mess.admin)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                if (args.length < 1) return lenwyreply(`☘️ *Contoh ${prefix + command} on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].lenwy_antigc2 = true
                    lenwyreply(`☘️ *Berhasil Mengaktifkan Anti Link Group*\n🎁 *Ketik Antilinkgcv1 Untuk Mengaktifkan Autokick*`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].lenwy_antigc2 = false
                    lenwyreply(`☘️ *Berhasil Mematikan Anti Link Group *`)
                }
            break

            case 'antiwame':
                if (!m.isGroup) return lenwyreply(mess.group)
                if (!isAdmins && !isCreator) return lenwyreply(mess.admin)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                if (args.length < 1) return lenwyreply(`☘️ *Contoh ${prefix + command} on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].lenwy_antiwame = true
                    lenwyreply(`☘️ *Berhasil Mengaktifkan Anti Chat Wame*`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].lenwy_antiwame = false
                    lenwyreply(`☘️ *Berhasil Mematikan Anti Chat Wame*`)
                }
            break

            case 'antilink':
                if (!m.isGroup) return lenwyreply(mess.group)
                if (!isAdmins && !isCreator) return lenwyreply(mess.admin)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                if (args.length < 1) return lenwyreply(`☘️ *Contoh ${prefix + command} on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].lenwy_antilink = true
                    lenwyreply(`☘️ *Berhasil Mengaktifkan Anti Link*`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].lenwy_antilink = false
                    lenwyreply(`☘️ *Berhasil Mematikan Anti Link*`)
                }
            break

            case 'antipanel':
                if (!m.isGroup) return lenwyreply(mess.group)
                if (!isAdmins && !isCreator) return lenwyreply(mess.admin)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                if (args.length < 1) return lenwyreply(`☘️ *Contoh ${prefix + command} on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].lenwy_antipanel = true
                    lenwyreply(`☘️ *Berhasil Mengaktifkan Anti Promosi Panel*`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].lenwy_antipanel = false
                    lenwyreply(`☘️ *Berhasil Mematikan Anti Promosi Panel*`)
                }
            break

            case 'antilinktt':
                if (!m.isGroup) return lenwyreply(mess.group)
                if (!isAdmins && !isCreator) return lenwyreply(mess.admin)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                if (args.length < 1) return lenwyreply(`☘️ *Contoh ${prefix + command} on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].lenwy_antitiktok = true
                    lenwyreply(`☘️ *Berhasil Mengaktifkan Anti Link Tiktok*`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].lenwy_antitiktok = false
                    lenwyreply(`☘️ *Berhasil Mematikan Anti Link Tiktok*`)
                }
            break

            case 'antilinkyt':
                if (!m.isGroup) return lenwyreply(mess.group)
                if (!isAdmins && !isCreator) return lenwyreply(mess.admin)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                if (args.length < 1) return lenwyreply(`☘️ *Contoh ${prefix + command} on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].lenwy_antiyoutube = true
                    lenwyreply(`☘️ *Berhasil Mengaktifkan Anti Link Youtube*`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].lenwy_antiyoutube = false
                    lenwyreply(`☘️ *Berhasil Mematikan Anti Link Youtube*`)
                }
            break

            case 'antich':
                if (!m.isGroup) return lenwyreply(mess.group)
                if (!isAdmins && !isCreator) return lenwyreply(mess.admin)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                if (args.length < 1) return lenwyreply(`☘️ *Contoh ${prefix + command} on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].lenwy_antich = true
                    lenwyreply(`☘️ *Berhasil Mengaktifkan Anti Link Channel Wa*`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].lenwy_antich = false
                    lenwyreply(`☘️ *Berhasil Mematikan Anti Link Channel Wa*`)
                }
            break

            case 'lenwypro':
                if (!m.isGroup) return lenwyreply(mess.group)
                if (!isAdmins && !isCreator) return lenwyreply(mess.admin)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
                if (args.length < 1) return lenwyreply(`☘️ *Contoh LenwyPro on/off*`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].lenwy_antich = true
                    global.db.data.chats[m.chat].lenwy_antigc2 = true
                    db.data.chats[m.chat].lenwy_antigc = true
                    lenwyreply(`☘️ *LenwyPro Berhasil Diaktifkan Didalam Group*`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].lenwy_antich = false
                    global.db.data.chats[m.chat].lenwy_antigc2 = false
                    db.data.chats[m.chat].lenwy_antigc = false
                    lenwyreply(`⚠️ *LenwyPro Dinonaktifkan Dalam Group!*`)
                }
            break

            case 'antispam':{
                if (!m.isGroup) return lenwyreply(mess.group)
                if (!isAdmins && !isCreator) return lenwyreply(mess.admin)
                if (!isBotAdmins) return lenwyreply(mess.botAdmin)
               if (args.length < 1) return lenwyreply('☘️ *Contoh AntiSpam on/off*')
               if (args[0] === 'on') {
                  db.data.chats[from].antispam = true
                  lenwyreply(`☘️ *AntiSpam Berhasil Diaktifkan Didalam Group*`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antispam = false
                  lenwyreply(`⚠️ *AntiSpam Dinonaktifkan Dalam Group!*`)
               }
               }
            break

            case 'autoread':
            if (!isCreator) return lenwyreply(mess.owner)
            if (args.length < 1) return lenwyreply(`Contoh ${prefix + command} on/off`)
            if (q === 'on'){
            global.db.data.settings[botNumber].autoread = true
            lenwyreply(`Berhasil mengubah autoread ke ${q}`)
            } else if (q === 'off'){
            global.db.data.settings[botNumber].autoread = false
            lenwyreply(`Berhasil mengubah autoread ke ${q}`)
            }
            break

case 'flaming':{
if (args.length == 0) return lenwyreply(`☘️ *Mana Teksnya?*`)
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)    
lenwyreply(mess.wait)
let lenwy_txt = args.join(" ")
var lenwyhasil = `https://api.loviecho.biz.id/api/photooxy/realistic-flaming-text-effect?api_key=sk-qpic1vg2czjkv0pto&text=${lenwy_txt}`
lenwy.sendMessage(from, {image: {url:lenwyhasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => lenwyreply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'stars':{
if (args.length == 0) return lenwyreply(`☘️ *Mana Teksnya?*`)
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)    
lenwyreply(mess.wait)
let lenwy_txt = args.join(" ")
var lenwyhasil = `https://api.loviecho.biz.id/api/photooxy/write-stars-text-on-the-night-sky?api_key=sk-qpic1vg2czjkv0pto&text=${lenwy_txt}`
lenwy.sendMessage(from, {image: {url:lenwyhasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => lenwyreply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'shadow':{
if (args.length == 0) return lenwyreply(`☘️ *Mana Teksnya?*`)
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)    
lenwyreply(mess.wait)
let lenwy_txt = args.join(" ")
var lenwyhasil = `https://api.loviecho.biz.id/api/photooxy/shadow-text-effect-in-the-sky?api_key=sk-qpic1vg2czjkv0pto&text=${lenwy_txt}`
lenwy.sendMessage(from, {image: {url:lenwyhasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => lenwyreply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'burnpaper':{
if (args.length == 0) return lenwyreply(`☘️ *Mana Teksnya?*`)
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)    
lenwyreply(mess.wait)
let lenwy_txt = args.join(" ")
var lenwyhasil = `https://api.loviecho.biz.id/api/photooxy/write-text-on-burn-paper?api_key=sk-qpic1vg2czjkv0pto&text=${lenwy_txt}`
lenwy.sendMessage(from, {image: {url:lenwyhasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => lenwyreply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'grass':{
if (args.length == 0) return lenwyreply(`☘️ *Mana Teksnya?*`)
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)    
lenwyreply(mess.wait)
let lenwy_txt = args.join(" ")
var lenwyhasil = `https://api.loviecho.biz.id/api/photooxy/make-quotes-under-grass?api_key=sk-qpic1vg2czjkv0pto&text=${lenwy_txt}`
lenwy.sendMessage(from, {image: {url:lenwyhasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => lenwyreply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'underwater':{
if (args.length == 0) return lenwyreply(`☘️ *Mana Teksnya?*`)
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)    
lenwyreply(mess.wait)
let lenwy_txt = args.join(" ")
var lenwyhasil = `https://api.loviecho.biz.id/api/photooxy/creating-an-underwater-ocean?api_key=sk-qpic1vg2czjkv0pto&text=${lenwy_txt}`
lenwy.sendMessage(from, {image: {url:lenwyhasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => lenwyreply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'whitecube':{
if (args.length == 0) return lenwyreply(`☘️ *Mana Teksnya?*`)
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)    
lenwyreply(mess.wait)
let lenwy_txt = args.join(" ")
var lenwyhasil = `https://api.loviecho.biz.id/api/photooxy/3d-text-effect-under-white-cube?api_key=sk-qpic1vg2czjkv0pto&text=${lenwy_txt}`
lenwy.sendMessage(from, {image: {url:lenwyhasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => lenwyreply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'smokyneon':{
if (args.length == 0) return lenwyreply(`☘️ *Mana Teksnya?*`)
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)    
lenwyreply(mess.wait)
let lenwy_txt = args.join(" ")
var lenwyhasil = `https://api.loviecho.biz.id/api/photooxy/make-smoky-neon-glow-effect?api_key=sk-qpic1vg2czjkv0pto&text=${lenwy_txt}`
lenwy.sendMessage(from, {image: {url:lenwyhasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => lenwyreply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'fabric':{
if (args.length == 0) return lenwyreply(`☘️ *Mana Teksnya?*`)
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)    
lenwyreply(mess.wait)
let lenwy_txt = args.join(" ")
var lenwyhasil = `https://api.loviecho.biz.id/api/photooxy/army-camouflage-fabric-text-effect?api_key=sk-qpic1vg2czjkv0pto&text=${lenwy_txt}`
lenwy.sendMessage(from, {image: {url:lenwyhasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => lenwyreply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'glowing':{
if (args.length == 0) return lenwyreply(`☘️ *Mana Teksnya?*`)
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)    
lenwyreply(mess.wait)
let lenwy_txt = args.join(" ")
var lenwyhasil = `https://api.loviecho.biz.id/api/photooxy/create-a-3d-glowing-text-effect?api_key=sk-qpic1vg2czjkv0pto&text=${lenwy_txt}`
lenwy.sendMessage(from, {image: {url:lenwyhasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => lenwyreply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'honey':{
if (args.length == 0) return lenwyreply(`☘️ *Mana Teksnya?*`)
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)    
lenwyreply(mess.wait)
let lenwy_txt = args.join(" ")
var lenwyhasil = `https://api.loviecho.biz.id/api/photooxy/honey-text-effect?api_key=sk-qpic1vg2czjkv0pto&text=${lenwy_txt}`
lenwy.sendMessage(from, {image: {url:lenwyhasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => lenwyreply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'vintage':{
if (args.length == 0) return lenwyreply(`☘️ *Mana Teksnya?*`)
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)    
lenwyreply(mess.wait)
let lenwy_txt = args.join(" ")
var lenwyhasil = `https://api.loviecho.biz.id/api/photooxy/vintage-text-style?api_key=sk-qpic1vg2czjkv0pto&text=${lenwy_txt}`
lenwy.sendMessage(from, {image: {url:lenwyhasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => lenwyreply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'gradient':{
if (args.length == 0) return lenwyreply(`☘️ *Mana Teksnya?*`)
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)    
lenwyreply(mess.wait)
let lenwy_txt = args.join(" ")
var lenwyhasil = `https://api.loviecho.biz.id/api/photooxy/gradient-avatar-text-effect?api_key=sk-qpic1vg2czjkv0pto&text=${lenwy_txt}`
lenwy.sendMessage(from, {image: {url:lenwyhasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => lenwyreply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'fur':{
if (args.length == 0) return lenwyreply(`☘️ *Mana Teksnya?*`)
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)    
lenwyreply(mess.wait)
let lenwy_txt = args.join(" ")
var lenwyhasil = `https://api.loviecho.biz.id/api/photooxy/fur-text-effect-generator?api_key=sk-qpic1vg2czjkv0pto&text=${lenwy_txt}`
lenwy.sendMessage(from, {image: {url:lenwyhasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => lenwyreply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'striking':{
if (args.length == 0) return lenwyreply(`☘️ *Mana Teksnya?*`)
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)    
lenwyreply(mess.wait)
let lenwy_txt = args.join(" ")
var lenwyhasil = `https://api.loviecho.biz.id/api/photooxy/striking-3d-text-effect?api_key=sk-qpic1vg2czjkv0pto&text=${lenwy_txt}`
lenwy.sendMessage(from, {image: {url:lenwyhasil}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => lenwyreply('⚠️ *Kayaknya Ada Yang Error*'))
}
break

case 'cuaca':{
if (!text) return lenwyreply('☘️ *Mana Lokasinya?*')
    lenwyreply('☘️ *Sabar Yaa*')
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=id`
            );
            let Lenwy_txt = ""
            Lenwy_txt += `☘️ *Cuaca Dari : ${text}*\n`
            Lenwy_txt += `☁️ *Cuaca :* *${wdata.data.weather[0].main}*\n`
            Lenwy_txt += `🧾 *Deskripsi :* *${wdata.data.weather[0].description}*\n`
            Lenwy_txt += `🌡️ *Suhu Rata Rata :* *${wdata.data.main.temp}*\n`
            Lenwy_txt += `💨 *Tekanan :* *${wdata.data.main.pressure}*\n`
            Lenwy_txt += `🧴 *kelembapan :* *${wdata.data.main.humidity}*\n`
            Lenwy_txt += `🛳️ *Garis Bujur :* *${wdata.data.coord.lat}*\n`
            Lenwy_txt += `🌏 *Negara :* *${wdata.data.sys.country}*\n`

           lenwy.sendMessage(
                m.chat, {
                    text: Lenwy_txt,
                }, {
                    quoted: m,
                }
           )
           }
           break

case 'imdb':
if (!text) return lenwyreply(`☘️ *Masukan Judul Filmnya*`)
lenwyreply('☘️ *Sabar Yaa*')
if (text.length > 20) return lenwyreply(`☘️ *Maksimal 20 Karakter*`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let Lenwy_txt = ""
            console.log(fids.data)
            Lenwy_txt += "☘️ *IMDB Search*\n"
            Lenwy_txt += "📖 *Judul :* *" + fids.data.Title + "*\n"
            Lenwy_txt += "📅 *Tahun :* *" + fids.data.Year + "*\n"
            Lenwy_txt += "📦 *Rilis :* *" + fids.data.Released + "*\n"
            Lenwy_txt += "🕒 *Durasi :* *" + fids.data.Runtime + "*\n"
            Lenwy_txt += "📰 *Genre :* *" + fids.data.Genre + "*\n"
            Lenwy_txt += "📋 *Direktur :* *" + fids.data.Director + "*\n"
            Lenwy_txt += "📝 *Penulis :* *" + fids.data.Writer + "*\n"
            Lenwy_txt += "👤 *Aktor :* *" + fids.data.Actors + "*\n"     
            Lenwy_txt += "💬 *Bahasa :* *" + fids.data.Language + "*\n"
            Lenwy_txt += "🌏 *Negara :* *" + fids.data.Country + "*\n"
            Lenwy_txt += "🏆 *Penghargaan :* *" + fids.data.Awards + "*\n"
            Lenwy_txt += "🪙 *Keuntungan :* *" + fids.data.BoxOffice + "*\n"
            Lenwy_txt += "🏷️ *Nilai :* *" + fids.data.imdbRating + "*\n"
            Lenwy_txt += "📣 *Pemungutan Suara :* *" + fids.data.imdbVotes + "*\n\n"
            Lenwy_txt += "📃 *Plot :*\n" + fids.data.Plot + ""
           lenwy.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: Lenwy_txt,
            }, {
                quoted: m,})
            .catch(console.error)
            break

case 'asmaulhusna': {
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'ayatkursi': {
let lenwycap = `🎁 *Ayat Kursi*

✉️ *Arab :*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

✉️ *Latin :*
*“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”*

✉️ *Artinya:*
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
*(QS. Al Baqarah: 255)*`
lenwy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/afb17800d56775ad1791d.png' }, caption: lenwycap}, { quoted: m });
}

break

case 'kisahnabi':{
if (!text) return lenwyreply(`☘️ *Tolong Masukkan Nama Nabi*`) 
try{
let ilenwy = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/kisahnabi?apikey=QIO8xicLNkEV43Y&nabi=${text}`)
const namanabi = ilenwy.result.name
const kelahiran = ilenwy.result.birth
const wafat = ilenwy.result.death_age
const asal = ilenwy.result.country_from
const ceritanabi = ilenwy.result.story
var lenwy_result = `☘️ *Kisah Nabi*
🎁 *Nama Nabi : ${namanabi}*
🗓️ *Hari Kelahiran : ${kelahiran}*
🕒 *Wafat Pada Umur : ${wafat}*
🌏 *Asal : ${asal}*

📑 *Kisah Dari Nabi ${namanabi} :*
${ceritanabi}`
lenwyreply(lenwy_result) 
} catch (error) {
    return lenwyreply(mess.error);
}
}
break

case 'doa':{
if (!text) return lenwyreply(`☘️ *Tolong Masukkan Doa Yang Ingin Dicari*`) 
try{
lenwyreply(mess.wait)
let ilenwy = await fetchJson(`https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/${text}`)
const namadoa = ilenwy.doa
const ayat = ilenwy.ayat
const latin = ilenwy.latin
var lenwy_result = `☘️ *Pencarian : ${namadoa}*

*${ayat}*

*${latin}*`
lenwyreply(lenwy_result) 
} catch (error) {
    return lenwyreply(mess.error);
}
}
break

case 'play':
case 'song': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
if (!text) return lenwyreply(`☘️ *Contoh: ${prefix + command} Boa - Duvet*`)
if (text.length > 40) return lenwyreply(`☘️ *Maksimal 40 Karakter*`)
LenwyLD()
let res = await yts(text)
let url = res.all;
let result = url[Math.floor(Math.random() * url.length)]
teks = `☘️ *Playing*
 *⨠ Judul : ${result.title}*
 *⨠ Upload : ${result.ago}*
 *⨠ Url :* ${result.url}

⚠️ *Audio Akan Dikirim Dalam 1 - 5 Menit*
`
lenwy.sendMessage(m.chat, { image: { url: result.thumbnail },  caption: teks }, { quoted: m })
await downloadMp3(result.url)
}
break

case 'chord':{
if (!isPrem) return lenwyreply(mess.prem)    
if (!text) return lenwyreply(`☘️ *Tolong Masukkan judul Lagu*`)
lenwyreply(mess.wait) 
try{
let lenwy_chord = await fetchJson(`https://aemt.me/chord?query=${text}`)
const judul = lenwy_chord.result.title
const chordlagu = lenwy_chord.result.chord
var lenwy_result = `☘️ *Chord Lagu*
🎁 *Nama Lagu : ${judul}*
📑 *Chord Lagu :*\n${chordlagu}`
lenwyreply(lenwy_result) 
}catch (error) {
lenwyreply(`⚠️ *Nama Lagu Tidak Ditemukan*`);
}
}
break

case 'ytmp3': case 'youtubemp3': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
if (!q) return lenwyreply(`☘️ *Kirim Link Youtube*`)
if (!isUrl(args[0])) return lenwyreply(mess.link)
lenwyreply(mess.wait)
downloadMp3(text)
}
break

case 'yt': case 'ytmp4': {
const lenwyvid = require('./lib/ytdl')
if (args.length < 1 || !isUrl(text) || !lenwyvid.isYTUrl(text)) lenwyreply(`☘️ *Link Youtubenya Mana?*`)
if (!isUrl(args[0])) return lenwyreply(mess.link)
const vid=await lenwyvid.mp4(text)
lenwyreply(mess.wait)
const lenwycap=`🎁 *Youtube Selesai*
🕒 *Durasi : ${vid.duration} Detik*
📦 *Kualitas : ${vid.quality}*`
await lenwy.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: lenwycap
},{quoted:m}).catch((err) => lenwyreply(mess.error))
}
break

case 'git': case 'gitclone':
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
                if (!args[0]) return lenwyreply(`Mana link nya?`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return lenwyreply(`Link invalid!! 🤔`)
                LenwyLD()
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                lenwy.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m }).catch((err) => lenwyreply(mess.error))
            .catch(console.error)
            break

case 'tt':
case 'tiktok': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
if (args.length == 0) return lenwyreply(`☘️ *Link Tiktoknya Mana?*`)
if (!isUrl(args[0])) return lenwyreply(mess.link)
lenwyreply(mess.wait)
let lenwycap = `🎁 *Tiktok Selesai*`
let res = await tiktok2(`${args[0]}`)
lenwy.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: lenwycap, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
lenwy.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
}
break

case'ttsearch':{
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
if (args.length == 0) return lenwyreply(`☘️ *Link Tiktoknya Mana?*`)
lenwyreply(mess.wait)
try{
let anu = await fetchJson(`https://api.junn4.my.id/search/tiktoksearch?query=${text}`)
let lenwycap = `🎁 *Tiktok Search*`
await lenwy.sendMessage(m.chat, { video: { url: anu.result.no_watermark}, caption: `${lenwycap}`}, {quoted: m})
}catch (error) {
lenwyreply(mess.error);
}
}
break

case 'ttslide':
case 'tiktokslide': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
if (!text) return lenwyreply(`☘️ *Link Tiktoknya Mana?`)
if (!isUrl(args[0])) return lenwyreply(mess.link)
lenwyreply(mess.wait)
try{
let anu = await fetchJson(`https://rest.dimasbotzz.my.id/api/downloader/tiktokSlide?url=${text}`)
for (let slide of anu.result.image) {
await sleep(1500)
await lenwy.sendFile(m.chat, slide, ``, m)
}
await lenwy.sendMessage(m.chat, {text: `🎁 *Tiktok Slide Selesai*`}, {quoted: m})
} catch (error) {
    return lenwyreply(mess.error);
}
}
break

case 'ig':
case 'igdl': {
if (!text) return lenwyreply(`☘️ *Link Instagramnya Mana?*`)
if (!isUrl(args[0])) return lenwyreply(mess.link)
lenwyreply(mess.wait)
try{   
let anu = await fetchJson(`https://widipe.com/download/igdl?url=${text}`)
let lenwycap = `🎁 *Instagram Selesai*`
lenwy.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: lenwycap }, { quoted: m })
} catch (error) {
    return lenwyreply(mess.error)
}
}
break


/*case 'ig':
case 'igdl': {
if (!text) return lenwyreply(`☘️ *Link Instagramnya Mana?*`)
if (!isUrl(args[0])) return lenwyreply(mess.link)
lenwyreply(mess.wait)
const { igdl, igdl2 } = require('./lib/igdl.js')
const res = await igdl(args[0])
const url = res.data[0]
let lenwycap = `🎁 *Instagram Selesai*`
lenwy.sendMessage(m.chat, {video: { url: url}, mimetype: 'video/mp4', caption : lenwycap}, {quoted: m}).catch((err) => lenwyreply(mess.error))
}
break*/


/*case 'ig':
case 'igdl':
case 'igslide': {
    if (!text) return lenwyreply("☘️ *Link Instagramnya Mana?*")
        if (!isUrl(args[0])) return lenwyreply(mess.link)
lenwyreply(mess.wait)
try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
} catch (error) {
    return lenwyreply(mess.error)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return lenwyreply(`*⚠️ Kayaknya Ada Yang Error*`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let lenwycap = `🎁 *Instagram Selesai*`
    if (mediaType === 'video') {
      lenwy.sendMessage(m.chat, {video: {url: mediaURL}, caption: lenwycap}, {quoted: m})
    } else if (mediaType === 'image') {
      lenwy.sendMessage(m.chat, { image: {url: mediaURL}, caption: lenwycap}, {quoted: m})
    }
  }
}
break*/

case 'fb': case 'fbdl':{
if (!text) return lenwyreply(`☘️ *Link Facebooknya Mana?*`)
if (!isUrl(args[0])) return lenwyreply(mess.link)
lenwyreply(mess.wait)  
try{
let anu = await fetchJson(`https://widipe.com/download/fbdown?url=${text}`)
let lenwycap = `🎁 *Facebook Selesai*`
lenwy.sendMessage(m.chat, { video: { url: anu.result.url.urls[0].hd }, caption: lenwycap}, { quoted: m })  
} catch (error) {
    return lenwyreply(mess.error) 
}
}
break

/*case 'mediafire':
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
                if (!q) return lenwyreply('☘️ *Link Mediafirenya Mana?*')
                if (!isUrl(args[0])) return lenwyreply(mess.link)
                lenwyreply('☘️ *Sabar Yaa*')
                let lenwy_dl = await fetchJson(`https://aemt.me/mediafire?link=${q}`)
                lenwy.sendMessage(m.chat, {
                    document: {
                        url: lenwy_dl.result.link
                    },
                    minetype: 'Lenwy'
                }, {
                    quoted: m
                })
                break*/

case 'ssweb':{
if (!q) return lenwyreply(`☘️ *Contoh ${prefix+command} Link Kamu*`)
lenwyreply(mess.wait)
global.sh = q
let krt = await ssweb(global.sh)
lenwy.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: m })
}
break

case 'wm': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
let teks = `${text}`
try {
 if (!quoted) lenwyreply `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await lenwy.sendImageAsSticker(from, media, m, { packname: `${teks}`, author: global.author })
await fs.unlinkSync(encmedia)
}
} catch (e) {
lenwyreply(mess.error)
}
}
break

/*case 'pin': case 'pinterest':{
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
if (!isPrem) return lenwyreply(mess.prem)
if (!text) return lenwyreply(`☘️ *Contoh ${prefix+command} Anime*`)
    if (global.db.data.users[m.sender].limit < 1) return lenwyreply('⚠️ *Limit Kamu Habis*')
                db.data.users[m.sender].limit -= 10
lenwyreply('☘️ *10 Limit Digunakan*')
let anu = await pinterest(text)
let result = anu[Math.floor(Math.random() * anu.length)]
lenwy.sendMessage(m.chat, { image: { url: result }, caption: '☘️ *Selesai*'}, { quoted: m })
}
break*/

case 'pinterest': case 'pin': {
if (!text) return reply(`☘️ *Contoh : Pin Minecraft*`);
const isToxic = /(ewe|bangsad|mmk|koncol|kontol|k0ntl|k0ntol|kont0l|k0nt0l|kontoI|puki|kojtol|kintil|momok|nigga|ajg|ewean|yatim|anjing|kontol|memek|bangsat|babi|gblk|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|ktl|ngentot|ngewe|bokep|bkp|lonte|lont|bh|perawan|prawan|tolol|tlol|itil|tobrut|tobrud|tbrut|tbrud|Telanjang|telanjang|tljang|sexy|sex|Sexy)/i;
const Lenwyguard = isToxic.exec(m.text)
if (Lenwyguard) return lenwyreply('⚠ *Lenwy Melarang Penggunaan Bahasa Kotor Pada Fitur Pin*') 
if (global.db.data.users[m.sender].limit < 1) return lenwyreply('⚠️ *Limit Kamu Habis*')
lenwyreply('☘️ *5 Limit Digunakan*')
async function createImage(url) {
const { imageMessage } = await generateWAMessageContent({
image: {url}}, {upload: lenwy.waUploadToServer});
return imageMessage;
}
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
}  
let push = [];
let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
let res = data.resource_response.data.results.map(v => v.images.orig.url);  
shuffleArray(res);
let ult = res.splice(0, 10);
let i = 1;
for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `📑 *Pencarian : ${text}*`
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `🎁 *Gambar ${i++}*`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Pinterest","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }
  
  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `📑 *Berhasil Memuat 10 Gambar*`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {})
  
  await lenwy.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  }).catch((err) => lenwyreply(mess.error))
}
if (!isPrem) return db.data.users[m.sender].limit -= 5
break

case 'enka':
            case 'profilgi':
            if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
			if (args.length == 0) return lenwyreply(`☘️ *Contoh: ${prefix + command}* 800000001`)
            lenwyreply('☘️ *Sabar Yaa*')
			global.sh = `https://enka.network/u/${args[0]}`
let krt = await ssweb(global.sh)
			axios.get(`https://enka.network/api/uid/${args[0]}?info`).then(({ data }) => {
				var caption = `☘️ *Profile Genshin*\n\n  *⨠ Nickname* : *${data.playerInfo.nickname}*\n`
				caption += `  *⨠ Adventure Rank* : *${data.playerInfo.level}*\n`
				caption += `  *⨠ Signature* : *${data.playerInfo.signature}*\n`
				caption += `  *⨠ World Level* : *${data.playerInfo.worldLevel}*\n\n`
				caption += `  *⨠ Achievement* : *${data.playerInfo.finishAchievementNum}*\n`
				caption += `  *⨠ Abyss* : *Floor ${data.playerInfo.towerFloorIndex} Chamber ${data.playerInfo.towerLevelIndex}*\n\n`
				caption += `🎁 *Lebih Lengkap Cek Disini :* https://enka.network/u/${args[0]}\n`
				lenwy.sendMessage(from ,{ image: krt.result, caption: caption },{ quoted: m })
			})
			.catch(console.error)
			break           

case 'neko':
case 'waifu': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
let res = await fetch(`https://waifu.pics/api/sfw/${command}`)
let json = await res.json()
let cap = `*Sukses* 😋`
lenwy.sendMessage(from, {image: { url: json.url },caption:`*Alamak* 😋`},{ quoted:m }).catch(err => {
 return('Error!')
})
}
break

case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'handhold':
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
lenwy.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
break

case 'bucin': case 'dare': case 'faktaunik': case 'fml': case 'katabijak': case 'katacinta': case 'katagalau': case 'katahacker': case 'katailham': case 'katasenja': case 'katasindiran': case 'motivasi': case 'nickff': case 'pantun': case 'puisi': case 'quotesislamic': case 'quotespubg': case 'truth': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
const t3xt = require(`./database/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'quotes':
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
var resi = await Quotes()
teks = `\n☘️ *Author: ${resi.author}*\n`
teks = `\n🎁 *Quotes:*\n`
teks = `☘️ *${resi.quotes}*\n`
lenwyreply(teks)
break

case 'quotesanime': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
const an1 = JSON.parse(fs.readFileSync("./data/quotesanime.json"))
const r4ndan1 = an1[Math.floor(Math.random() * an1.length)]
const tgt99 = `*☘️ Random Quotes Anime*

☘️ *Nama Anime : ${r4ndan1.anime}*
🍁 *Nama Character : ${r4ndan1.character}*
🍁 *Episode : ${r4ndan1.episode}*

🎁 *Quotes : ${r4ndan1.quotes}*`
lenwy.sendMessage(from, { text: tgt99 }, { quoted: len })
}
break

case 'kompasnews':
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n☘️ *Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Upload: ${i.berita_diupload}*\n`
teks += ` *⨠ Jenis: ${i.berita_jenis}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
lenwy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'detiknews':
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n☘️ *Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Upload: ${i.berita_diupload}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
lenwy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'dailynews':
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n☘️ *Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
lenwy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'inews':
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n☘️ *Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Upload: ${i.berita_diupload}*\n`
teks += ` *⨠ Jenis: ${i.berita_jenis}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
lenwyreply(teks) 
})
break

case 'kontan':
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n☘️ *Berita ${no.toString()}*\n`
teks += ` *⨠ Berita: ${i.berita}*\n`
teks += ` *⨠ Jenis: ${i.berita_jenis}*\n`
teks += ` *⨠ Link:* ${i.berita_url}\n`
}
teks += ""
lenwy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
break

case 'meme':
var reis = await JalanTikusMeme()
teks = ""
teks += "☘️ *Random Meme*\n\n"
teks += `🎁 *Source Meme :* ${reis}`
teks += ""
lenwy.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
break

case 'tourl': {
lenwyreply(mess.wait)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
lenwyreply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
lenwyreply(util.format(anu))
}
await fs.unlinkSync(media)
}
break

case 'confes':
case 'confess':
case 'menfes':
case 'menfess':
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
if (!isCreator) return lenwyreply("⚠️ *Fitur Ini Dinonaktifkan Oleh Lenwy*")
if (!text) return lenwyreply(`☘️ *Format : Menfess Nomor|Pengirim|Pesan*\n\n📑 *Contoh : Menfes 6283829814737|Naee|Semangat Yah*`)
let nomor = q.split('|')[0] ? q.split('|')[0] : q
let lenwy_nama = q.split('|')[1] ? q.split('|')[1] : q
let lenwychat = q.split('|')[2] ? q.split('|')[2] : ''
if (lenwychat.length < 1) return lenwyreply(`⚠️ *Tolong Isi Semua Data Dengan Baik*`)
let lenwy_txt = `☘️ *Halo Ada Menfess Nih*\n🎁 *Dari : ${lenwy_nama}* \n📃 *Pesan :*\n${lenwychat}\n\n⚠️ *Menfess Ini Dikirim Oleh Bot Lenwy*`
lenwy.sendMessage(`${nomor}@s.whatsapp.net`, { caption: lenwy_txt, image: {url: `https://telegra.ph/file/f76287ac4c1968857cf1e.png`}})
lenwyreply(`☘️ *Sukses Mengirim Menfess*`)     
break

case 'reminder': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
if (!args[0] || !args[1] || !args[2]) return lenwyreply('☘️ *Format : Reminder Waktu Detik/Menit/Jam Pesan*\n\n📑 *Contoh : Reminder 30 Menit Jangan Lupa Sholat*')
const time = parseInt(args[0]) * (args[1].match(/(m|minute)/i) ? 60 : args[1].match(/(h|hour)/i) ? 3600 : 1) * 1000
const message = args.slice(2).join(' ')
setTimeout(() => {
lenwy.sendMessage(from, { text : `☘️ *Reminder Untuk @${sender.split("@")[0]}*\n\n📑 *Dengan Pesan :* ${message}`, contextInfo:{mentionedJid:[sender]}}, { quoted: m })}, time)
lenwyreply(`📑 *Berhasil Mengatur Reminder Untuk ${args[0]} ${args[1]} Ke Depan*`)
}
break

case 'google': {
if (!isPrem) return lenwyreply(mess.prem)
if (!q) return lenwyreply(`☘️ *Contoh : ${prefix + command} Youtube Lenwy*`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `☘️ *Google Search From : ${text}*\n\n`
for (let g of res) {
teks += ` *⨠ Title* : ${g.title}\n`
teks += ` *⨠ Description* : ${g.snippet}\n`
teks += ` *⨠ Link* : ${g.link}\n\n────────────────────────\n\n`
} 
lenwyreply(teks)
})
}
break

case 'mc': case 'mcserver': 
            if (args.length == 0) return lenwyreply(`📦 *Java / Bedrock*`)
            if (args[0] === 'bedrock') {
                lenwyreply(mess.wait)
axios.get(`https://api.mcstatus.io/v2/status/bedrock/${args[1]}`).then(({ data }) => {
                var caption = `📑 *Minecraft Bedrock Server*\n`
                caption += ` *⨠ IP : ${data.host}*\n`
                caption += ` *⨠ Port : ${data.port}*\n`
                caption += ` *⨠ IP Address : ${data.ip_address}*\n\n`
                caption += `📊 *Server Information*\n`
                caption += ` *⨠ Gamemode : ${data.gamemode}*\n`
                caption += ` *⨠ Player Online : ${data.players.online}/${data.players.max}*\n`
                caption += ` *⨠ Version : ${data.version.name}*\n`
                caption += ` *⨠ Edition : ${data.edition}*\n`
                lenwy.sendMessage(from , {image: { url: `https://telegra.ph/file/54ff237913e8fdf5774b1.png` }, caption: caption },{ quoted: m })
            })
} else if (args[0] === 'java') {
    lenwyreply(mess.wait)
axios.get(`https://api.mcstatus.io/v2/status/java/${args[1]}`).then(({ data }) => {
                var caption = `📑 *Minecraft Java Server*\n`
                caption += ` *⨠ IP : ${data.host}*\n`
                caption += ` *⨠ Port : ${data.port}*\n`
                caption += ` *⨠ IP Address : ${data.ip_address}*\n\n`
                caption += `📊 *Server Information*\n`
                caption += ` *⨠ Player Online : ${data.players.online}/${data.players.max}*\n`
                caption += ` *⨠ Mods : ${data.mods.name}*\n`
                caption += ` *⨠ Plugins : ${data.plugins.name}*\n`
                caption += ` *⨠ Version : ${data.version.name_clean}*\n`
                lenwy.sendMessage(from , {image: { url: `https://telegra.ph/file/54ff237913e8fdf5774b1.png` }, caption: caption },{ quoted: m })
            })
} else {
lenwyreply('⚠️ *Nama Server Tidak Ditemukan*')
}
            break

case 'jarak':{
if (!text) return lenwyreply(`☘️ *Contoh: ${prefix + command} Jakarta|Bandung*`)
if (text.length > 80) return lenwyreply(`☘️ *Maksimal 80 Karakter*`)    
lenwyreply(mess.wait)
let [from, to] = text.split(/[^\w\s]/g)
    if (!(from && to)) return lenwyreply (`☘️ *Contoh: ${prefix + command} Jakarta|Bandung*`) 
    let data = await jarak(from, to)
    if (data.img) return lenwy.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
    else lenwyreply(data.desc)
}
break

case 'apksearch': {
if (!text) return lenwyreply(`⚠️ *Masukkan Nama Apk*`)
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`)
lenwyreply(mess.wait)
var json = await js.json()
var lenwycap = `
📑 *Nama :* ${json[0].title}
📦 *Developer :* ${json[0].developer}
🛒 *Rating :* ${json[0].rating}
📣 *Link Download :* 
${json[0].url}
`;
await lenwy.sendMessage(m.chat, { image: { url: json[0].thumbnail }, caption: lenwycap }, { quoted: m })
}
break

case 'drakorsearch': {
if (!text) return lenwyreply(`⚠️ *Masukkan Nama Drakor*`)
var js = await fetch(`https://dikaardnt.com/api/search/drakor?q=${q}`)
lenwyreply(mess.wait)
var json = await js.json()
var lenwycap = `
📑 *Judul :* ${json[0].title}
📦 *Genre :* ${json[0].genres}
📣 *Link :* ${json[0].url}
`;
await lenwy.sendMessage(m.chat, { image: { url: json[0].thumbnail }, caption: lenwycap }, { quoted: m })
}
break

case 'otakudesu': {
if (!text) return lenwyreply(`⚠️ *Masukkan Nama Anime*`)
var js = await fetch(`https://otakudesu-anime-api.vercel.app/api/v1/search/${q}`)
lenwyreply(mess.wait)
var json = await js.json()
var lenwycap = `
📑 *Judul :* ${json[0].title}
📦 *Genre :* ${json[0].genres}
📊 *Status :* ${json[0].status}
🏷️ *Nilai :* ${json[0].rating}
📣 *Link :* ${json[0].url}
`;
await lenwy.sendMessage(m.chat, { image: { url: json[0].image }, caption: lenwycap }, { quoted: m })
}
break

case 'couple': {
if (!isPrem) return lenwyreply(mess.prem)
lenwyreply(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
lenwy.sendMessage(from, { image: { url: random.male }, caption: `🎁 *Couple Male*` }, {quoted:m})
lenwy.sendMessage(from, { image: { url: random.female }, caption: `🎁 *Couple Female*` }, {quoted:m})
}
break

case 'getname': {
if (qtod === "true") {
namenye = await lenwy.getName(m.quoted.sender)
lenwyreply(namenye)
} else if (qtod === "false") {
lenwy.sendMessage(from, {text:"✉️ *Reply Orangnya*"}, {quoted:m})
}
}
break

case 'getpic': {
if (!isPrem) return lenwyreply(mess.prem)
if (qtod === "true") {
try {
pporg = await lenwy.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
lenwy.sendMessage(from, { image : { url : pporg }, caption:`☘️ *Selesai*` }, {quoted:m})
} else if (qtod === "false") {
try {
pporgs = await lenwy.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
lenwy.sendMessage(from, { image : { url : pporgs }, caption:`☘️ *Selesai*` }, {quoted:m})
}
}
break



case 'setppbot': {
if (!isCreator) return lenwyreply(mess.owner)
if (!quoted) return lenwyreply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return lenwyreply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return lenwyreply(`Kirim/Balas Image Dengan Caption ${prefix + command}`)
var medis = await lenwy.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await lenwy.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
lenwyreply(`Sukses`)
} else {
var memeg = await lenwy.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
lenwyreply(`Sukses`)
}
}
break

case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return lenwyreply(mess.group)
if (!isAdmins) return lenwyreply(mess.admin)
if (!/image/.test(mime)) lenwyreply `Kirim/Balas Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) lenwyreply `Kirim/Balas Image Dengan Caption ${prefix + command}`
let media = await lenwy.downloadAndSaveMediaMessage(m)
await lenwy.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
lenwyreply('done')
}
break

case 'block': {
if (!isCreator) return lenwyreply(mess.owner)
LenwyLD()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.updateBlockStatus(users, 'block').then((res) => lenwyreply(jsonformat(res))).catch((err) => lenwyreply(jsonformat(err)))
}
break

case 'unblock': {
if (!isCreator) return lenwyreply(mess.owner)
LenwyLD()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lenwy.updateBlockStatus(users, 'unblock').then((res) => lenwyreply(jsonformat(res))).catch((err) => lenwyreply(jsonformat(err)))
}
break

case 'cwr': {
if (!text) return lenwyreply('☘️ *Format : Cwr [Total Match] [Winrate Saat Ini] [Target Winrate]*\n\n📑 *Contoh : Cwr 1200 67% 89%*')
var cwl = text.split(' ')
if (!cwl || cwl.length !== 3) return lenwyreply('☘️ *Format : Cwr [Total Match] [Winrate Saat Ini] [Target Winrate]*\n\n📑 *Contoh : Cwr 1200 67% 89%*')          
const tMatch = parseFloat(cwl[0])
const tWr = parseFloat(cwl[1])
const wrReq = parseFloat(cwl[2])          
if (isNaN(tMatch) || isNaN(tWr) || isNaN(wrReq)) {
return lenwyreply('⚠️ *Pastikan Semuanya Berupa Angka*');
}          
const resultNum = cwr(tMatch, tWr, wrReq);
const tekl = `☘️ *Winrate Calc Mobile Legend*

📑 *Data Yang Diberikan*
 *⨠ Total Petandingan : ${tMatch}*
 *⨠ Winrate Saat Ini : ${tWr}%*
 *⨠ Target Winrate : ${wrReq}%*

🎁 *Hasil :*
*Butuh ${resultNum} Pertandingan Tanpa Kalah Untuk Mencapai ${wrReq}% Winrate*`;
lenwyreply(tekl);
}
break

case 'stalktiktok':
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
LenwyLD()
if (args.length == 0) return lenwyreply(`Contoh: ${prefix + command} bulansutena`)
axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=haikalgans`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Followings : ${data.result.followings}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
lenwy.sendMessage(from, { image: { url: data.result.user_picture }, caption })
})
break

case 'listdb':
if (!isCreator) return lenwyreply(mess.owner)
lenwy_user = '📦 *Database User*'
lenwy_user += `\n📑 *Total : ${pengguna.length} User*`
lenwy.sendMessage(from, { text: lenwy_user.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": pengguna } })
break

case 'getdb': {
if (!isCreator) return lenwyreply(mess.owner)
lenwyreply(mess.wait)
let sesi = await fs.readFileSync('./src/database.json')
lenwy.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: len })
}
break

case 'getuser': {
if (!isCreator) return lenwyreply(mess.owner)
lenwyreply(mess.wait)
let sesi = await fs.readFileSync('./database/user.json')
lenwy.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'user.json' }, { quoted: len })
}
break

case 'tebak': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
 if (args[0] === "gambar") {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) lenwyreply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendImage(from, result.img, `☘️ *Silahkan Jawab Soal Di Atas Ini*\n\n📑 *Deskripsi :* ${result.deskripsi}\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/846e7e790c4548710c553.jpg' }, caption: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakgambar[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Gambar*`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) lenwyreply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `☘️ *Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *${result.soal}*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/846e7e790c4548710c553.jpg' }, caption: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakkata[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Kata*` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) lenwyreply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `☘️ *Silahkan Jawab Pertanyaan Berikut :*\n\n📦 *Pertanyaan :* ${result.soal}\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/846e7e790c4548710c553.jpg' }, caption:`🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebakkalimat[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Kalimat*`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) lenwyreply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `☘️ *Ini Adalah Lirik Dari Lagu? :* \n\n📦 *${result.soal}?*\n\n🕒 *Waktu : 60s*`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/846e7e790c4548710c553.jpg' }, caption: `🕒 *Waktu Habis*\n🎁 *Jawaban : ${tebaklirik[m.sender.split('@')[0]]}*\n\n📣 *Ingin Bermain Lagi? Ketik Tebak Lirik*`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) lenwyreply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 lenwy.sendText(from, `☘️ *Jawablah Pertanyaan Berikut :*\n📦 *${result.soal}*\n🕒 *Waktu : 60s*`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwy.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/846e7e790c4548710c553.jpg' }, caption:`🕒 *Waktu Habis*\n🎁 *Jawaban : ${caklontong[m.sender.split('@')[0]]}*\n\n📑 *Deskripsi : ${caklontong_desk[m.sender.split('@')[0]]}* \n\n📣 *Ingin Bermain Lagi? Ketik Tebak Lontong*`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break

case 'kuismath': case 'math': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) lenwyreply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
 let { genMath, modes } = require('./src/math')
 if (!text) lenwyreply `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
 let result = await genMath(text.toLowerCase())
 lenwy.sendText(from, `☘️ *Berapa Hasil Dari : ${result.soal.toLowerCase()}*?\n\n🕒 *Waktu : ${(result.waktu / 1000).toFixed(2)} detik*`, m).then(() => {
 kuismath[m.sender.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 lenwyreply("🕒 *Waktu Habis*\n🎁 *Jawaban :* " + kuismath[m.sender.split('@')[0]])
 delete kuismath[m.sender.split('@')[0]]
 }
}
break

case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return lenwyreply('⚠️ *Kamu Di Ban Owner*')
 let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '⚠️ *Kamu Masih Didalam Permainan*'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
lenwyreply('☘️ *Lawan Bermain Ditemukan*')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await lenwy.sendText(room.x, str, m, { mentions: parseMention(str) } )
await lenwy.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
lenwyreply('☘️ *Menunggu Lawan Bermain*' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break

case 'claim': {
if (!m.isGroup) return lenwyreply(mess.group)
let user = db.data.users[m.sender]
let time = user.lenlimit + 86400000
if (new Date - user.lenlimit < 86400000) return lenwyreply(`⚠️ *Kamu Sudah Mengambil Limit Harian*\n🕒 *Tunggu Selama ${LenTime(time - new Date())}*`)
let LenwyL = 50
user.limit += LenwyL * 1
user.lenlimit = new Date * 1
lenwyreply(`🎁 *Kamu Mendapatkan : ${LenwyL} Limit Dari Claim Harian*`)
}
break

case 'bonus': {
if (!m.isGroup) return lenwyreply(mess.group)
let user = db.data.users[m.sender]
let time = user.lenbonus + 86400000
if (new Date - user.lenbonus < 86400000) return lenwyreply(`⚠️ *Kamu Sudah Mengambil Bonus Harian*\n🕒 *Tunggu Selama ${LenTime(time - new Date())}*`)
let LenwyC = 5
user.coin += LenwyC * 1
user.lenbonus = new Date * 1
lenwyreply(`🎁 *Kamu Mendapatkan : ${LenwyC} Koin Emas Dari Bonus Harian*`)
}
break

case 'del':
case 'delete':{
lenwy.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break

default:
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
lenwy.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
console.log(util.format(err))
let e = String(err)
lenwy.sendMessage('6283829814737' + "@s.whatsapp.net", { text: `⚠️ *Ada Yang Error Nih! Di Bagian :* ` + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green(`📑  Update : ${__filename}`))
delete require.cache[file]
require(file)
})
