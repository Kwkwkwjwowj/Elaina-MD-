/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

let handler = async (m, { conn, text, command, usedPrefix, isOwner }) => {
  let image = 'https://telegra.ph/file/391ce39eab1d40b181d06.jpg'
  let caption = ''
  let changelogs = global.db.data.changelog || []
  
  switch (command) {
    case 'changelog':
    case 'log':
      if (!changelogs.length) return conn.reply(m.chat, 'There are no changelogs yet', m)
      caption = changelogs.map(changelog => {
        let [date, ...items] = changelog.split(' - ')
        return `• ${date}\n${items.map(item => `  ◦ ${item}`).join('\n')}`
      }).join('\n\n')
      conn.sendFile(m.chat, image, 'changelog.jpg', caption, m)
      break
      
    case 'addchangelog':
      if (!isOwner) return conn.reply(m.chat, 'Maaf, hanya Owner yang dapat menggunakan command ini', m)
      if (!text) return conn.reply(m.chat, `Usage: ${usedPrefix}addchangelog <text>`, m)
      changelogs.unshift(`${new Date().toDateString()} - ${text}`)
      global.db.data.changelog = changelogs
      conn.reply(m.chat, 'Changelog telah berhasil ditambahkan', m)
      break
      
    case 'rchangelog':
      if (!isOwner) return conn.reply(m.chat, 'Maaf, hanya Owner yang dapat menggunakan command ini', m)
      if (!text) return conn.reply(m.chat, `Usage: ${usedPrefix}rchangelog <text>`, m)
      let index = changelogs.findIndex(changelog => changelog.includes(text))
      if (index === -1) return conn.reply(m.chat, 'Changelog not found', m)
      changelogs.splice(index, 1)
      global.db.data.changelog = changelogs
      conn.reply(m.chat, 'Changelog telah berhasil dihapus', m)
      break
  }
}

handler.help = ['changelog', 'log', 'addchangelog <text>', 'rchangelog <text>']
handler.tags = ['info']
handler.premium = false

handler.command = /^(changelog|log|addchangelog|rchangelog)$/i
handler.owner = false

module.exports = handler