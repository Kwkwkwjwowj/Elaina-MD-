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

let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '*Example*: .twitterstalk relyxd', m)

 			conn.chatRead(m.chat)
			conn.sendMessage(m.chat, {
				react: {
					text: 'ğŸ•’',
					key: m.key,
				}
			})

    axios.get(`https://api.lolhuman.xyz/api/twitter/${text}?apikey=${global.lolkey}`)
        .then((res) => {
            let { name, screen_name, description, profile_picture, followers, following, tweet, joined } = res.data.result

            let caption = `
Username: @${screen_name}
Nama: ${name}
Deskripsi: ${description}
Followers: ${followers}
Following: ${following}
Jumlah tweet: ${tweet}
Bergabung sejak: ${joined}
            `

            conn.sendFile(m.chat, profile_picture, 'profile.jpg', caption, m)
        })
        .catch((err) => {
            console.log(err)
            conn.reply(m.chat, 'Terjadi kesalahan saat mengambil data Twitter', m)
        })
}
handler.help = ['twitterstalk']
handler.tags = ['internet']
handler.command = /^twitterstalk$/i
handler.register = true
handler.limit = true

module.exports = handler