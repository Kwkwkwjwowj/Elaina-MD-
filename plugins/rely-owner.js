let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
const delay = time => new Promise(res => setTimeout(res, time))
// FAKE KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
	}

if (command == 'creator') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Orlando\nNICKNAME:👑 Developer\nORG: Orlando\nTITLE:soft\nitem1.TEL;waid=${nolu}:${nolu}\nitem1.X-ABLabel:Contact Owner\nitem2.URL:https://wa.me/+6283871211368\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: dafsaha219@gmail.com\nitem3.X-ABLabel:Email\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:Lokasi\nBDAY;value=date:📮17 Agustus 1945\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fcon })
let caption = `👋 Hai *@${who.split("@")[0]}*, join group kak https://chat.whatsapp.com/D6bHVUjyGj06bb6iZeUsOI.`
    await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku, jangan di spam yah kak`,m)
}
if (command == 'owner') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${nameowner};;;\nFN:${nameowner}\nORG:${nameowner}\nTITLE:\nitem1.TEL;waid=${nolu}:${nolu}\nitem1.X-ABLabel:${nameowner}\nX-WA-BIZ-DESCRIPTION:Note: Jangan dispam yah kak\nX-WA-BIZ-NAME:${nameowner}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fcon })
await delay(1000)
conn.sendPresenceUpdate("recording", m.chat)
  let anjay = await conn.sendFile(m.chat, './mp3/Ownerku.mp3', '', null, m, true, { type: "audioMessage", ptt: true, waveform: [1,4,8,9,18,23,17,14,12,15,7,3] }, { quoted: m })
  await delay(5000)
   await conn.sendMessage(m.chat, { delete: anjay.key })
   await delay(1000)
    conn.reply(m.chat, `Ngak jadi vn nya🗿`,anjay)
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|owner)$/i

module.exports = handler