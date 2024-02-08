import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/file/c0c8a7440635f381fe098.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'en'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
 ███▒▒▒▒▒▒▒███
بوبيزة هو بوت الشعب المغرب والمساند الرسمي لــ *6 إنوي وأورونج يمكنك عمل ملصقات وتحميل الأغاني والفيديوات فقط 
❀❀❀❀❀❀❀❀❀❀❀

أكتب *salam*
 حتى يرسل لك البوت أوديو جميل ♥

_هذه لائحة أوامر البوت_

〘 *.sᴛɪᴄᴋᴇʀ*     〙
〘 *.ᴍᴜsɪᴄ*        〙
〘 *.ᴠɪᴅᴇᴏ*         〙
〘 *.sғᴜʟʟ*         〙
〘 *.ᴀᴜᴅɪᴏ*        〙
〘 *.ᴛʀᴀɴsʟᴀᴛᴇ* 〙
〘 *.ᴊᴀᴅɪʙᴏᴛ*      〙
〘 *.ᴡᴍ*              〙
〘 *.ʏᴛs*              〙

*هذه طريقة تشغيل البوت*

https://facebook.com/657909479670152

*هذه طريقة صناعة بوت من الفيسبوك فيه ميزة التطبيقات* 
https://www.facebook.com/100063533185520/posts/654939579967142/

♥♥♥♥♥♥♥♥
 ☛  instagram.com/noureddine_ouafy

`.trim()
let buttons = [
{ buttonId:  '#donar' , buttonText: { displayText:  'صفحتى على الفيسبوك هنا انشر البوتات في البث المباشر و اجيب على أسئلة المتابعين في البثوث https://www.facebook.com/profile.php?id=100063533185520 '}, 
type: 1 },
{ buttonId:  '#owner' , buttonText: { displayText:  '🌹 إصنع مثل هذا البوت عن طريق مشاهدة هذا الفيديو https://youtu.be/nDfGFmwML28'  }, type: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: 'instagram.com/noureddine_ouafy',
body: null,
thumbnail: img,
sourceUrl: `https://www.instagram.com/noureddine_ouafy`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, 'error contact owner :  instagram.com/noureddine_ouafy', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|bobiz|sir|comandos|yallah |bobiza|go|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
