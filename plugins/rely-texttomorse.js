/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) {
    conn.reply(m.chat, `Silakan masukkan teks yang ingin diubah menjadi kode morse.`, m)
    return
  }
  m.reply('Tunggu sebentar...')
  let query = encodeURIComponent(text)
  let res = await fetch(`https://api.lolhuman.xyz/api/morse/encrypt?apikey=${global.lolkey}&text=${query}`)
  let json = await res.json()

  conn.reply(m.chat, json.result, m)
}

handler.help = ['textmorse <teks>']
handler.tags = ['tools']
handler.command = /^textmorse/i
handler.register = true
handler.limit = true

module.exports = handler