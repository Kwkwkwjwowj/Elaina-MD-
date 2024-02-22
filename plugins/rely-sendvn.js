/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/
const fs = require('fs')
const path = require('path')

let handler = async (m, { conn, text }) => {
  let audioFolder = './flyaudio'
  let audioName = `${text}.opus`
  let audioPath = path.join(audioFolder, audioName)

  if (!fs.existsSync(audioPath)) {
    let audioFiles = fs.readdirSync(audioFolder)
    let audioFile = audioFiles.find(file => file.toLowerCase() === audioName.toLowerCase())
    if (!audioFile) return conn.reply(m.chat, `Audio dengan nama ${text} tidak ditemukan.`, m)
    audioName = audioFile
    audioPath = path.join(audioFolder, audioName)
  }

  let audioBuffer = fs.readFileSync(audioPath)
  await conn.sendPresenceUpdate("recording", m.chat)
  conn.sendFile(m.chat, audioBuffer, audioName, '', m, true, { type: "audioMessage", ptt: true, waveform: [1,4,8,9,18,23,17,14,12,15,7,3] }, { quoted: m }) 

}

handler.help = ['send <nama_audio>']
handler.tags = ['fun']
handler.command = /^send$/i

module.exports = handler