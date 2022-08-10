const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} 」 ──*
	
_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

 *INFO BOT*
 Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
 *WIB* : ${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')}
 *WITA* : ${moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')}
 *WIT* : ${moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')}

 *INFO USER*
 Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
 Balance : $${toCommas(getBalance(sender, balance))}
 ${readmore}
  *MAIN MENU*
  ${prefix}menu
  ${prefix}owner
  ${prefix}donasi
  ${prefix}speed
  ${prefix}runtime
  ${prefix}cekprem
  ${prefix}listprem
  ${prefix}listban
  ${prefix}listsewa
  ${prefix}join
  ${prefix}sewabot
  ${prefix}delete
  ${prefix}sourcecode
  ${prefix}tagme
  ${prefix}infobalance
  ${prefix}tukarprem

  *CONVERTER & TOOLS*
  ${prefix}sticker
  ${prefix}toimg
  ${prefix}tovid
  ${prefix}blur
  ${prefix}attp
  ${prefix}ttp
  ${prefix}ttp2
  ${prefix}ttp3
  ${prefix}ttp4
  ${prefix}ttp5
  ${prefix}ttp6
  ${prefix}urltoimg
  ${prefix}randomstick
  ${prefix}patrick
  ${prefix}amongus
  ${prefix}gurastick
  ${prefix}anjingstick
  ${prefix}bucinstick

  *DOWNLOADER*
  ${prefix}play
  ${prefix}tiktok
  ${prefix}ytmp4
  ${prefix}ytmp3
  ${prefix}getvideo
  ${prefix}getmusic
  ${prefix}instagram
  ${prefix}mediafire

  *SHORTLINK MENU*
  ${prefix}shortlink
  ${prefix}cuttly
  ${prefix}bitly
  ${prefix}tinyurl
  ${prefix}tinyurlprem
  
  *RANDOM MENU*
  ${prefix}quote
  ${prefix}galau
  ${prefix}bucin
  ${prefix}gombal
  ${prefix}cecan
  ${prefix}cogan
  ${prefix}artinama
  ${prefix}artimimpi
  ${prefix}darkjokes
  ${prefix}quotesmaker
  ${prefix}asupan
  ${prefix}jadwalsholat

  *EDUCATION MENU*
  ${prefix}persegipanjang
  ${prefix}perkalian
  ${prefix}kuadrat
  ${prefix}kubik
  ${prefix}brainly

  *STORE MENU*
  ${prefix}listff
  ${prefix}iklan
  proses
  done
  
  *SEARCH MENU*
  ${prefix}lirik
  ${prefix}grupwa
  ${prefix}ytsearch
  ${prefix}gsmarena
  ${prefix}wallsearch
  ${prefix}googleimage
  ${prefix}playstore
  ${prefix}gimage

  *SPAM MENU*
  ${prefix}spamcall
  ${prefix}spamsms
  ${prefix}spamsms2
  ${prefix}spamsms3
  ${prefix}spamsms4
  ${prefix}spamsms5
  ${prefix}spamsms6
  ${prefix}spamsms7
  ${prefix}spamsms8
 
  *SERTIFIKAT MENU*
  ${prefix}tololserti
  ${prefix}fuckboy
  ${prefix}fuckgirl
  ${prefix}bucinserti
  ${prefix}pacarserti
  ${prefix}goodboy
  ${prefix}goodgirl
  ${prefix}badboy
  ${prefix}badgirl

  *TEXT PRO MENU*
  ${prefix}berry
  ${prefix}blackpink
  ${prefix}neon
  ${prefix}logobear
  ${prefix}christmas
  ${prefix}box3d
  ${prefix}glitchtiktok
  ${prefix}videogame
  ${prefix}marvel
  ${prefix}ninjalogo
  ${prefix}greenhorror
  ${prefix}magma
  ${prefix}neon3d
  ${prefix}orangejuice
  ${prefix}chococake
  ${prefix}strawberry
  ${prefix}pencil
  ${prefix}thunder
  ${prefix}thunder2
  ${prefix}glitch
  ${prefix}glitch2
  ${prefix}greenneon
  ${prefix}skeleton
 
  *PHOTOOXY MENU*
  ${prefix}flaming
  ${prefix}shadowsky
  ${prefix}narutomaker
  ${prefix}pubg
  ${prefix}undergrass
  ${prefix}harrypotter
  ${prefix}typography
  ${prefix}poflove
  ${prefix}coffecup
  ${prefix}nightsky
  ${prefix}carvedwood
  ${prefix}illuminated
  ${prefix}sweetcandy
 
  *EPHOTO 360 MENU*
  ${prefix}randomcerti
  ${prefix}gplaybutton
  ${prefix}splaybutton
  ${prefix}igcertificate
  ${prefix}ffbanner
  ${prefix}cgravity
  ${prefix}hacker
  ${prefix}mlwall
  ${prefix}pubgmaskot
  ${prefix}aovwall
  ${prefix}gaminglogo
  ${prefix}fpslogo
  ${prefix}avatarlolnew
  ${prefix}lolbanner
  ${prefix}avatardota
  ${prefix}bflowera
  ${prefix}royaltext
  ${prefix}galaxystyle
  ${prefix}birthdaycake
  ${prefix}lighttext
  ${prefix}watercolor
  ${prefix}multicolor
  ${prefix}wetglass
  ${prefix}luxurygold
  ${prefix}heartshaped
  ${prefix}hologram3d
  ${prefix}gchrome
  ${prefix}greenbush
  ${prefix}metallogo
  ${prefix}starsnight
 
  *ANIME MENU*
  ${prefix}naruto
  ${prefix}yaoi
  ${prefix}loli
  ${prefix}waifu
  ${prefix}husbu
 
  *STALK MENU*
  ${prefix}ghstalk
  ${prefix}igstalk
  ${prefix}tiktokstalk
  ${prefix}stalkml
  ${prefix}stalkff
  ${prefix}stalkgenshin
  ${prefix}stalkcod
  ${prefix}stalkdomino
  ${prefix}stalkpubg
  ${prefix}stalksausage
 
  *GAME & FUN MENU*
  ${prefix}duithoki
  ${prefix}tictactoe
  ${prefix}delttc
  ${prefix}tebakgambar
  ${prefix}caklontong
  ${prefix}asahotak
  ${prefix}tebakjenaka
  ${prefix}tebakbendera
  ${prefix}siapakahaku
  ${prefix}susunkata
  ${prefix}dadu
  
  *PAYMENT & BANK*
  ${prefix}buylimit
  ${prefix}buyglimit
  ${prefix}transfer
  ${prefix}limit
  ${prefix}balance
  
  *GROUP MENU*
  ${prefix}groupsetting
  ${prefix}antilink
  ${prefix}welcome
  ${prefix}linkgrup
  ${prefix}setppgrup
  ${prefix}setnamegc
  ${prefix}setdesc
  ${prefix}group
  ${prefix}revoke
  ${prefix}hidetag
  ${prefix}tagall
  ${prefix}listadmin
  ${prefix}infogc
  ${prefix}promote
  ${prefix}demote
  ${prefix}add
  ${prefix}kick
  ${prefix}mute
  
  *OWNER MENU*
 > evalcode
 x evalcode-2
 $ executor
  ${prefix}addbalance
  ${prefix}addlimit
  ${prefix}addglimit
  ${prefix}textchat
  ${prefix}chatprem
  ${prefix}setprefix
  ${prefix}masuk
  ${prefix}broadcast
  ${prefix}setppbot
  ${prefix}exif
  ${prefix}leave
  ${prefix}addprem
  ${prefix}delprem
  ${prefix}ban
  ${prefix}unban
  ${prefix}mode
  ${prefix}addsewa
  ${prefix}delsewa
  ${prefix}block
  ${prefix}unblock

 *OTHER MENU*
  ${prefix}readmore
  ${prefix}getpp
  ${prefix}tts
  ${prefix}ppcp
  ${prefix}kontak
  ${prefix}covidglobal
  ${prefix}infogempa
  ${prefix}profile

\`\`\`${setting.botName} By ${setting.ownerName}\`\`\`
`
}
exports.sewabot = (pushname, ownerName) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

*── 「 SEWA BOT 」 ──*

*Harga Sewa*
7 Hari = 5.000
30 Hari = 15.000
Permanen = 25.000

*Keuntungan :*
- Bot Masuk Sesuai Waktu Sewa
- Gratis Premium 3 Hari
- Antilink
- On 24 Jam
- Fitur Banyak
- Welcome
- Dan Lainnya

*_Minat Chat : wa.me/${setting.ownerNum}_*
`
}
exports.iklana = (pushname, ownerName) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

*Fitur Ini Dalam Proses Pengembangan Mohon Maaf Ketidaknyamanan nya*
`
}
exports.iklanb = (pushname, ownerName) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

*Fitur Ini Dalam Proses Pengembangan Mohon Maaf Ketidaknyamanan nya*
`
}
exports.iklanc = (pushname, ownerName) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

*Fitur Ini Dalam Proses Pengembangan Mohon Maaf Ketidaknyamanan nya* 
`
}
exports.mainmenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

  *MAIN MENU*
  ${prefix}menu
  ${prefix}owner
  ${prefix}donasi
  ${prefix}speed
  ${prefix}runtime
  ${prefix}cekprem
  ${prefix}listprem
  ${prefix}listban
  ${prefix}listsewa
  ${prefix}join
  ${prefix}sewabot
  ${prefix}delete
  ${prefix}sourcecode
  ${prefix}tagme
  ${prefix}infobalance
  ${prefix}tukarprem
`
}
exports.convertmenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

  *CONVERTER & TOOLS*
  ${prefix}sticker
  ${prefix}toimg
  ${prefix}tovid
  ${prefix}blur
  ${prefix}attp
  ${prefix}ttp
  ${prefix}ttp2
  ${prefix}ttp3
  ${prefix}ttp4
  ${prefix}ttp5
  ${prefix}ttp6
  ${prefix}urltoimg
  ${prefix}randomstick
  ${prefix}patrick
  ${prefix}amongus
  ${prefix}gurastick
  ${prefix}anjingstick
  ${prefix}bucinstick
`
}
exports.downloadmenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

  *DOWNLOADER MENU*
  ${prefix}play
  ${prefix}tiktok
  ${prefix}ytmp4
  ${prefix}ytmp3
  ${prefix}getvideo
  ${prefix}getmusic
  ${prefix}instagram
  ${prefix}mediafire
`
}
exports.shortlinkmenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

  *SHORTLINK MENU*
  ${prefix}shortlink
  ${prefix}cuttly
  ${prefix}bitly
  ${prefix}tinyurl
  ${prefix}tinyurlprem
`
}
exports.randommenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

  *RANDOM MENU*
  ${prefix}quote
  ${prefix}galau
  ${prefix}bucin
  ${prefix}gombal
  ${prefix}cecan
  ${prefix}cogan
  ${prefix}artinama
  ${prefix}artimimpi
  ${prefix}darkjokes
  ${prefix}quotesmaker
  ${prefix}asupan
  ${prefix}jadwalsholat
`
}
exports.edumenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

  *EDUCATION MENU*
  ${prefix}persegipanjang
  ${prefix}perkalian
  ${prefix}kuadrat
  ${prefix}kubik
  ${prefix}brainly
`
}
exports.storemenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

  *STORE MENU*
  ${prefix}listff
  ${prefix}iklan
  proses
  done
`
}
exports.searchmenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

  *SEARCH MENU*
  ${prefix}lirik
  ${prefix}grupwa
  ${prefix}ytsearch
  ${prefix}gsmarena
  ${prefix}wallsearch
  ${prefix}googleimage
  ${prefix}playstore
  ${prefix}gimage
`
}
exports.spammenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
  *SPAM MENU*
  ${prefix}spamcall
  ${prefix}spamsms
  ${prefix}spamsms2
  ${prefix}spamsms3
  ${prefix}spamsms4
  ${prefix}spamsms5
  ${prefix}spamsms6
  ${prefix}spamsms7
  ${prefix}spamsms8
`
}
exports.sertimenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
  *SERTIFIKAT MENU*
  ${prefix}tololserti
  ${prefix}fuckboy
  ${prefix}fuckgirl
  ${prefix}bucinserti
  ${prefix}pacarserti
  ${prefix}goodboy
  ${prefix}goodgirl
  ${prefix}badboy
  ${prefix}badgirl
`
}
exports.textpromenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
  *TEXT PRO MENU*
  ${prefix}berry
  ${prefix}blackpink
  ${prefix}neon
  ${prefix}logobear
  ${prefix}christmas
  ${prefix}box3d
  ${prefix}glitchtiktok
  ${prefix}videogame
  ${prefix}marvel
  ${prefix}ninjalogo
  ${prefix}greenhorror
  ${prefix}magma
  ${prefix}neon3d
  ${prefix}orangejuice
  ${prefix}chococake
  ${prefix}strawberry
  ${prefix}pencil
  ${prefix}thunder
  ${prefix}thunder2
  ${prefix}glitch
  ${prefix}glitch2
  ${prefix}greenneon
  ${prefix}skeleton
`
}
exports.photooxymenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

  *PHOTOOXY MENU*
  ${prefix}flaming
  ${prefix}shadowsky
  ${prefix}narutomaker
  ${prefix}pubg
  ${prefix}undergrass
  ${prefix}harrypotter
  ${prefix}typography
  ${prefix}poflove
  ${prefix}coffecup
  ${prefix}nightsky
  ${prefix}carvedwood
  ${prefix}illuminated
  ${prefix}sweetcandy
`
}
exports.ephotomenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

  *EPHOTO 360 MENU*
  ${prefix}randomcerti
  ${prefix}gplaybutton
  ${prefix}splaybutton
  ${prefix}igcertificate
  ${prefix}ffbanner
  ${prefix}cgravity
  ${prefix}hacker
  ${prefix}mlwall
  ${prefix}pubgmaskot
  ${prefix}aovwall
  ${prefix}gaminglogo
  ${prefix}fpslogo
  ${prefix}avatarlolnew
  ${prefix}lolbanner
  ${prefix}avatardota
  ${prefix}bflowera
  ${prefix}royaltext
  ${prefix}galaxystyle
  ${prefix}birthdaycake
  ${prefix}lighttext
  ${prefix}watercolor
  ${prefix}multicolor
  ${prefix}wetglass
  ${prefix}luxurygold
  ${prefix}heartshaped
  ${prefix}hologram3d
  ${prefix}gchrome
  ${prefix}greenbush
  ${prefix}metallogo
  ${prefix}starsnight
`
}
exports.animemenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
  *ANIME MENU*
  ${prefix}naruto
  ${prefix}yaoi
  ${prefix}loli
  ${prefix}waifu
  ${prefix}husbu
  ${prefix}hentai
`
}
exports.stalkmenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
  *STALK MENU*
  ${prefix}ghstalk
  ${prefix}igstalk
  ${prefix}tiktokstalk
  ${prefix}stalkml
  ${prefix}stalkff
  ${prefix}stalkgenshin
  ${prefix}stalkcod
  ${prefix}stalkdomino
  ${prefix}stalkpubg
  ${prefix}stalksausage
`
}
exports.gamemenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
  *GAME & FUN MENU*
  ${prefix}duithoki
  ${prefix}tictactoe
  ${prefix}delttc
  ${prefix}tebakgambar
  ${prefix}caklontong
  ${prefix}asahotak
  ${prefix}tebakjenaka
  ${prefix}tebakbendera
  ${prefix}siapakahaku
  ${prefix}susunkata
  ${prefix}dadu
`
}
exports.bankmenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
  *PAYMENT & BANK*
  ${prefix}buylimit
  ${prefix}buyglimit
  ${prefix}transfer
  ${prefix}limit
  ${prefix}balance
`
}
exports.groupmenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
  *GROUP MENU*
  ${prefix}groupsetting
  ${prefix}antilink
  ${prefix}welcome
  ${prefix}linkgrup
  ${prefix}setppgrup
  ${prefix}setnamegc
  ${prefix}setdesc
  ${prefix}group
  ${prefix}revoke
  ${prefix}hidetag
  ${prefix}tagall
  ${prefix}listadmin
  ${prefix}infogc
  ${prefix}promote
  ${prefix}demote
  ${prefix}add
  ${prefix}kick
  ${prefix}mute
`
}
exports.ownermenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
  *OWNER MENU*
 > evalcode
 x evalcode-2
 $ executor
  ${prefix}addbalance
  ${prefix}addlimit
  ${prefix}addglimit
  ${prefix}textchat
  ${prefix}chatprem
  ${prefix}setprefix
  ${prefix}masuk
  ${prefix}broadcast
  ${prefix}setppbot
  ${prefix}exif
  ${prefix}leave
  ${prefix}addprem
  ${prefix}delprem
  ${prefix}ban
  ${prefix}unban
  ${prefix}mode
  ${prefix}addsewa
  ${prefix}delsewa
  ${prefix}block
  ${prefix}unblock
`
}
exports.othermenu = (prefix, pushname) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_
 
  *OTHER MENU*
  ${prefix}readmore
  ${prefix}getpp
  ${prefix}tts
  ${prefix}ppcp
  ${prefix}kontak
  ${prefix}covidglobal
  ${prefix}infogempa
  ${prefix}profile
`
}
