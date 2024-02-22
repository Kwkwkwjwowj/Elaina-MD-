/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

const axios = require('axios')

let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '*Example*: .pixiv anime', m)

  conn.chatRead(m.chat)
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  })

  let url = `https://api.lolhuman.xyz/api/pixiv?apikey=${global.lolkey}&query=${encodeURIComponent(text)}`
  axios.get(url)
    .then(function (response) {
      let images = response.data.result
      if (images.length == 0) {
        conn.reply(m.chat, 'Tidak ada gambar yang ditemukan.', m)
      } else {
        let index = Math.floor(Math.random() * images.length)
        let image = images[index]
        conn.sendFile(m.chat, image.image, 'pixiv.jpg', image.title, m)
      }
    })
    .catch(function (error) {
      console.log(error)
      conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan. Coba lagi nanti.', m)
    })
}

handler.help = ['pixiv <kata kunci>']
handler.tags = ['internet']
handler.command = /^pixiv$/i
handler.register = true

module.exports = handler