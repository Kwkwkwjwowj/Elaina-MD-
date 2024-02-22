/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

const fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '*Example*: .kisahnabi muhammad', m)
  
  let res = await fetch(`https://api.lolhuman.xyz/api/kisahnabi/${text}?apikey=${global.lolkey}`)
  let json = await res.json()

  if (json.error) return conn.reply(m.chat, json.error, m)

  let message = `
*Nama Nabi:* ${json.result.name}
*Tahun Kelahiran:* ${json.result.thn_kelahiran}
*Usia:* ${json.result.age}
*Tempat Lahir:* ${json.result.place}
*Kisah:* ${json.result.story}
`

  let img = `${flythumb}`
  
  conn.sendFile(m.chat, img, 'kisahnabi.jpg', message.trim(), m)
}

handler.help = ['kisahnabi <nama nabi>']
handler.tags = ['islam']
handler.command = /^(kisahnabi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.limit = true

module.exports = handler