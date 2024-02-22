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
let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) {
    conn.reply(m.chat, 'Silakan masukkan kata kunci pencarian doujinshi.', m)
    return
  }

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})
  try {
    let response = await axios.get(`https://api.lolhuman.xyz/api/doujindesusearch?apikey=${global.lolkey}&query=${encodeURIComponent(text)}`)
    let result = response.data.result[0]
    let thumbnailBuffer = await (await fetch(result.thumbnail)).buffer()
    let caption = `
*Judul*: ${result.title}
*Jenis*: ${result.type}
*Link*: ${result.link}
`.trim()
    conn.sendFile(m.chat, thumbnailBuffer, 'doujin.jpg', caption, m)
  } catch (e) {
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    console.log(e)
  }
}

handler.help = ['doujinsearch <kata kunci>']
handler.tags = ['premium']
handler.premium = true
handler.command = /^doujinsearch$/i

module.exports = handler