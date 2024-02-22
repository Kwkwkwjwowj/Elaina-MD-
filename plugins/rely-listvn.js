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
let handler = async (m, { conn }) => {
  let files = fs.readdirSync('./flyaudio')
  if (!files.length) {
    conn.reply(m.chat, 'Tidak ada audio/voice note yang tersimpan', m)
    return
  }
  let vnList = files.filter(file => file.endsWith('.opus')).map(file => `◦ ${file.replace('.opus', '')}`).join('\n')
  let caption = 'List Audio/Voice Note:\n\n' + vnList
  conn.reply(m.chat, caption, m)
}
handler.help = ['listvn']
handler.tags = ['tools']

handler.command = /^listvn$/i

module.exports = handler