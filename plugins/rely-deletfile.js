/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

let fs = require('fs')
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '*Example*: .df plugins/rely.js', m)
  let path = require('path')
  let filePath = path.join(process.cwd(), text)
  if (!fs.existsSync(filePath)) {
    return conn.reply(m.chat, 'Maaf, file atau folder yang dimaksud tidak ditemukan.', m)
  }
  if (fs.statSync(filePath).isDirectory()) {
    fs.rmdirSync(filePath, { recursive: true })
  } else {
    fs.unlinkSync(filePath)
  }
  conn.reply(m.chat, `Sukses delete ${text}`, m)
}
handler.help = ['df *<name file / folder>*']
handler.tags = ['owner']
handler.owner = true
handler.command = /^(df|deletefile)$/i

module.exports = handler