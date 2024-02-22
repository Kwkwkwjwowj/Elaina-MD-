/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

let axios = require('axios')

let handler = async (m, { conn }) => {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})
  try {
    let response = await axios.get(`https://api.lolhuman.xyz/api/random/blackpink?apikey=${global.lolkey}`, { responseType: 'arraybuffer' })
    let buffer = Buffer.from(response.data, 'binary')
    conn.sendFile(m.chat, buffer, 'blackpink.jpg', '', m)
  } catch (e) {
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    console.log(e)
  }
}

handler.help = ['blackpink']
handler.tags = ['internet']
handler.command = /^blackpink$/i
handler.register = true
handler.limit = true

module.exports = handler
