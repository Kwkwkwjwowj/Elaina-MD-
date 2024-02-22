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
let handler = async (m, { conn, args }) => {
  let name = args[0]
  if (!name) throw 'Silakan masukkan nama audio/voice note yang ingin dihapus!'
  let filename = name.endsWith('.opus') ? name : name + '.opus'
  let path = './flyaudio/' + filename
  if (!fs.existsSync(path)) throw `Audio/Voice note dengan nama ${filename} tidak ditemukan!`
  fs.unlinkSync(path)
  conn.reply(m.chat, `Audio/Voice note dengan nama ${filename} berhasil dihapus`, m)
}
handler.help = ['removevn <nama>']
handler.tags = ['premium']
handler.premium = true

handler.command = /^removevn$/i
handler.limit = true

module.exports = handler