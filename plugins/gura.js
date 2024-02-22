let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text!'
  let res = `https://oni-chan.my.id/api/canvas/gura?name=${response[0]}&apikey=`
  conn.sendFile(m.chat, res, 'dann.jpg', wm, m, false)
}
handler.help = ['gura']
handler.tags = ['maker']
handler.command = /^(gura)$/i
handler.register = false

handler.limit = true

module.exports = handler