/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

let handler = async (m, { conn }) => {
  const fs = require('fs')
  const path = require('path')
  const databaseFile = path.join(__dirname, '../database.json')

  if (!fs.existsSync(databaseFile)) {
    throw 'Maaf, file database tidak ditemukan'
  }

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})

  conn.sendFile(m.chat, databaseFile, 'database.json', '', m).then((message) => {
    let size = fs.statSync(databaseFile).size
    let owner = conn.user.name
    let name = message.file_name
    let from = m.sender.name

    conn.reply(m.chat, ` Berikut adalah detail file database yang telah dikirim:

â—¦ Name  : database.json
â—¦ From  : ${namebot} Cloud
â—¦ Size  : ${size} bytes
â—¦ Owner : ${author}`, message)
  })
}

handler.command = /^(getdb|getdatabase)$/i
handler.help = ['getdb', 'getdatabase']
handler.tags = ['owner']
handler.limit = true
handler.owner = true
handler.register = true

module.exports = handler