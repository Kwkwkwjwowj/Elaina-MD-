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

let handler = async (m, { text }) => {

    if (!text) {
        return m.reply('*Example*: .kbbi sabar')
      }

  let res = await fetch(`https://api.lolhuman.xyz/api/kbbi?apikey=${global.lolkey}&query=${encodeURIComponent(text)}`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (json.result) {
    let { nama, makna } = json.result[0]
    let text = `Kata: ${nama}\n\n`
    for (let i = 0; i < makna.length; i++) {
      let { submakna, contoh } = makna[i]
      text += `Makna ${i + 1}: ${submakna.join(', ')}\n`
      if (contoh && contoh.length) {
        text += `Contoh: ${contoh.join(', ')}\n\n`
      } else {
        text += '\n'
      }
    }
    let img = `${flythumb}`
    await conn.sendFile(m.chat, img, 'kbbi.jpg', text, m, false, { thumbnail: Buffer.alloc(0) })
  } else throw json.message
}

handler.help = ['kbbi <teks>']
handler.tags = ['internet']
handler.command = /^kbbi$/i
handler.register = true
handler.limit = true

module.exports = handler
