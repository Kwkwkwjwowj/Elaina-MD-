let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text!'
  m.reply('Tunggu Sebentar...')
  let res = `https://api.lolhuman.xyz/api/gtapassed?apikey=${global.lolhuman}&text1=${response[0]}&text2=${response[1]}&apikey=gunturganteng`
  conn.sendFile(m.chat, res, 'gta.jpg', wm, m, false)
}
handler.help = ['gta'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(gta)$/i
handler.limit = true
handler.premium = true

module.exports = handler