let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
• *@${m.sender.split`@`[0]}* Sekarang *AFK*
◦ *Alasan*: ${text ? text : 'Tidak ada'}
  `)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler