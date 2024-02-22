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

let handler = async (m, { conn }) => {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})

  axios({
    method: 'get',
    url: `https://api.lolhuman.xyz/api/random/sfw/awoo?apikey=${global.lolkey}`,
    responseType: 'arraybuffer'
  })
    .then((res) => {
      let buffer = Buffer.from(res.data, 'binary')
      conn.sendFile(m.chat, buffer, 'awo.jpg', '', m)
        .then((message) => {
          let info = ` â—¦ Nama  : rely-awoo.jpg\n` +
                     ` â—¦ Ukuran: Tidak diketahui\n` +
                     ' â—¦ Rules : Jangan spam request'
          conn.reply(m.chat, info, message)
        })
        .catch(() => {
          conn.reply(m.chat, 'Terjadi kesalahan saat mengirim gambar. Mohon coba kembali nanti.', m)
        })
    })
    .catch(() => {
      conn.reply(m.chat, 'Terjadi kesalahan saat mengambil gambar. Mohon coba kembali nanti.', m)
    })
}

handler.command = /^(awo)$/i
handler.tags = ['internet']
handler.register = true

module.exports = handler