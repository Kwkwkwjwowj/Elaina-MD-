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
  try {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})
    let res = await axios.get(`https://api.lolhuman.xyz/api/random/nsfw/armpits?apikey=${global.lolkey}`, { responseType: 'arraybuffer' })
    let image = Buffer.from(res.data, 'binary')
    conn.sendFile(m.chat, image, 'armpits.jpg', 'Armpits', m)
  } catch (err) {
    console.log(err)
    conn.reply(m.chat, 'Error!', m)
  }
}
handler.help = ['armpits']
handler.tags = ['internet']

handler.command = /^armpits$/i

module.exports = handler