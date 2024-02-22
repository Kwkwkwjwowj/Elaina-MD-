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

let handler = async(m, { conn, usedPrefix }) => {
  m.reply('Wait a moment..')
  let res = await fetch(`https://api.lolhuman.xyz/api/random/people?apikey=${global.lolkey}`)
  let json = await res.json()

  let name = json.result.name.first + " " + json.result.name.last
  let gender = json.result.gender
  let address = json.result.location.street.number + " " + json.result.location.street.name + ", " + json.result.location.city + ", " + json.result.location.state + ", " + json.result.location.country
  let age = null
  let email = null
  let phone = null
  let cell = null
  let picture = null

  let caption = `• Nama: ${name}\n• Jenis Kelamin: ${gender}\n• Alamat: ${address}`

  conn.reply(m.chat, caption, m)
}

handler.help = ['nama']
handler.tags = ['fun']
handler.command = /^nama$/i
handler.register = true
handler.limit = true

module.exports = handler