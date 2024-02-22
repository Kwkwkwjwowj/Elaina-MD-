

let handler = async (m, { conn, args }) => {
  let target = m.mentionedJid[0] || m.sender
  let user = global.db.data.users[target]
  let name = user.name

  let exp = user.exp
  let limit = user.limit
  let balance = user.balance
  let premium = user.premium ? 'Yes' : 'No'

  let caption = `• Balance *${name}*\n\n◦ Exp : *${exp}*\n◦ Limit : *${limit}*\n◦ Balance : *${balance}*\n◦ Premium : *${premium}*`

  conn.reply(m.chat, caption, m, {
    contextInfo: {
      externalAdReply: {
   	showAdAttribution: true,
        title: namebot,
        thumbnailUrl: flythumb,
        sourceUrl: web,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })
}

handler.help = ['balance', 'balance @tag']
handler.tags = ['info']
handler.command = /^balance$/i

module.exports = handler