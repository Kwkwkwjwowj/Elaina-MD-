/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

const fetch = require('node-fetch');

let handler = async function (m, { text }) {
  if (!text) {
    conn.reply(m.chat, '*Example*: .gimage anime', m)
    return
  }

  let apiUrl = `https://api.lolhuman.xyz/api/gimage?apikey=${global.lolkey}&query=${encodeURIComponent(text)}`

  try {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

    let response = await fetch(apiUrl)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

    let imageBuffer = await response.buffer()

    conn.sendFile(m.chat, imageBuffer, 'image.jpg', `Berikut gambar dengan command *${text}*.`, m)

  } catch (error) {
    console.error(error)
    conn.reply(m.chat, 'Maaf, terjadi kesalahan saat memproses permintaan.', m)
  }
}

handler.help = ['gimage *query*']
handler.tags = ['internet']

handler.command = /^gimage$/i
handler.limit = 4

module.exports = handler