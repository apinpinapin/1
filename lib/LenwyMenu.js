const chalk = require('chalk')
const fs = require('fs')

global.LenwyORI = (prefix) => {
return `📦 *Menu Bot*
 *⨠ Store ( Menu Store )* 
 *⨠ AiMenu ( Menu Ai )*
 *⨠ Funmenu ( Menu Fun )*
 *⨠ Rpgmenu ( Menu Rpg )* 
 *⨠ Gamemenu ( Menu Game )*
 *⨠ Groupmenu ( Menu Grup )*
 *⨠ Beritamenu ( Menu Berita )*
 *⨠ Randommenu ( Menu Random )*
 *⨠ Downmenu ( Menu Download )*
 *⨠ Weebsmenu ( Menu Wibu )*
 *⨠ Islamimenu ( Menu Islami )*
 *⨠ Quotesmenu ( Menu Quotes )*
 *⨠ Searchmenu ( Menu Search )*
 *⨠ Convertmenu ( Convert Media )*
 *⨠ Favmenu ( Menu Favorite )*
 *⨠ Pushmenu ( Menu Push )*
 *⨠ Antimenu ( Menu Anti )*
 *⨠ Panelmenu ( Menu Cpanel )* 
 *⨠ Photomenu ( Menu Photooxy )*

⚠️ *Kalo Ada Error Bisa Chat Owner Ya*
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})