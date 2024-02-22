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
  if (!text) return conn.reply(m.chat, '*Example*: .apk whatsapp', m)
  	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})
  const res = await axios.get(`https://api.lolhuman.xyz/api/playstore?apikey=${global.lolkey}&query=${encodeURIComponent(text)}`)
  const data = res.data.result[0]
  if (!data) return conn.reply(m.chat, `Tidak dapat menemukan aplikasi dengan nama "${text}" di Play Store.`, m)
  let caption = `
*${data.title}*
*ID*: ${data.appId}
*Developer*: ${data.developer}
*Price*: ${data.free ? 'Gratis' : data.price + ' ' + data.currency}
*Rating*: ${data.scoreText}
*Link*: ${data.url}
  `
  conn.sendFile(m.chat, data.icon, 'playstore.png', caption, m)
}

handler.help = ['apk <nama aplikasi>']
handler.tags = ['internet']
handler.command = /^apk$/i

module.exports = handler