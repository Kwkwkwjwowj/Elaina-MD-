
const axios = require('axios')

let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '*Example*: .happymod whatsapp', m)
  let res = await axios.get(`https://api.zahwazein.xyz/webzone/happymod?query=${text}&apikey=zenzkey_93b1f8d133c7`)
  let data = res.data.result[0]
  if (!data) return conn.reply(m.chat, 'Maaf, aplikasi yang kamu cari tidak ditemukan di HappyMod', m)
  let caption = `*${data.name}*\n\nLink Download: ${data.link}`
  conn.sendFile(m.chat, data.icon, 'icon.jpg', caption, m)
}

handler.help = ['happymod <aplikasi>']
handler.tags = ['internet']
handler.command = ['happymod']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.register = true
handler.limit = true

module.exports = handler