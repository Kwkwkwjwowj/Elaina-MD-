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
  let image = `${flythumb}`
  let store = global.db.data.store || {}
  
  switch (command) {
    case 'store':
      let caption = ''
      for (let category in store) {
        caption += `• *${category.toUpperCase()}*\n`
        for (let list of store[category]) {
          caption += `  ◦ ${list}\n`
        }
        caption += '\n'
      }
      conn.sendFile(m.chat, image, 'store.jpg', caption, m)
      break
      
    case 'addcategory':
      if (!isOwner) return conn.reply(m.chat, 'Maaf, hanya owner yang dapat menggunakan perintah ini', m)
      if (!text) return conn.reply(m.chat, `Usage: ${usedPrefix}addcategory <nama category>`, m)
      store[text.toLowerCase()] = []
      global.db.data.store = store
      conn.reply(m.chat, 'Kategori telah berhasil ditambahkan', m)
      break
      
    case 'rcategory':
      if (!isOwner) return conn.reply(m.chat, 'Maaf, hanya owner yang dapat menggunakan perintah ini', m)
      if (!text) return conn.reply(m.chat, `Contoh: ${usedPrefix}rcategory <nama category>`, m)
      if (!store[text.toLowerCase()]) return conn.reply(m.chat, 'Category not found', m)
      delete store[text.toLowerCase()]
      global.db.data.store = store
      conn.reply(m.chat, 'Kategori telah berhasil dihapus', m)
      break
      
    case 'addlist':
      if (!text) return conn.reply(m.chat, `Contoh: ${usedPrefix}addlist <nama list> | <nama category>`, m)
      let [list, category] = text.split("|").map(v => v.trim())
      if (!(category && list)) return conn.reply(m.chat, `Contoh: ${usedPrefix}addlist <nama list> | <nama list>`, m)
      if (!store[category.toLowerCase()]) store[category.toLowerCase()] = []
      store[category.toLowerCase()].push(list)
      global.db.data.store = store
      conn.reply(m.chat, 'Daftar telah berhasil ditambahkan', m)
      break
      
    case 'rlist':
      if (!text) return conn.reply(m.chat, `Contoh: ${usedPrefix}rlist <nama list>`, m)
      for (let category in store) {
        let index = store[category].findIndex(list => list.toLowerCase() === text.toLowerCase())
        if (index !== -1) {
          store[category].splice(index, 1)
          global.db.data.store = store
          conn.reply(m.chat, 'List telah berhasil dihapus', m)
          return
        }
      }
      conn.reply(m.chat, 'List tidak ditemukan', m)
      break
  }
}

handler.help = ['store', 'addcategory <category name>', 'rcategory <category name>', 'addlist <list name> | <category name>', 'rlist <list name>']
handler.tags = ['store']

handler.command = /^(store|addcategory|rcategory|addlist|rlist)$/i
handler.owner = true

handler.admin = false
handler.mods = false
handler.premium = false
handler.group = false

module.exports = handler