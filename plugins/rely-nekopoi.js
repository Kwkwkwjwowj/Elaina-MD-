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
    conn.reply(m.chat, 'Silakan masukkan URL anime dari situs nekopoi.care.', m)
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
    let response = await axios.get(`https://api.lolhuman.xyz/api/nekopoi?apikey=${global.lolkey}&url=${encodeURIComponent(text)}`)
    let result = response.data.result
    let thumbnailBuffer = await (await fetch(result.thumbnail)).buffer()
    let caption = `
*Judul*: ${result.title}
*Produser*: ${result.producers}
*Durasi*: ${result.duration}
*Genre*: ${result.genre.join(', ')}
*Sinopsis*: ${result.sinopsis}
*Link Download*:
720p:
${Object.entries(result.link['720p']).map(([key, value]) => `${key}: ${value}`).join('\n')}

480p:
${Object.entries(result.link['480p']).map(([key, value]) => `${key}: ${value}`).join('\n')}

360p:
${Object.entries(result.link['360p']).map(([key, value]) => `${key}: ${value}`).join('\n')}
`.trim()
    conn.sendFile(m.chat, thumbnailBuffer, 'anime.jpg', caption, m)
  } catch (e) {
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    console.log(e)
  }
}

handler.help = ['nekopoi <url anime>']
handler.tags = ['premium']
handler.premium = true
handler.command = /^nekopoi$/i

module.exports = handler