const balancemins = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^pull/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bank / balancemins) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].bank >= balancemins * count) {
    global.db.data.users[m.sender].bank -= balancemins * count
    global.db.data.users[m.sender].balance += count
    m.reply(`-${balancemins * count} ATM\n+ ${count} BALANCE`)
  } else m.reply(`ATM kamu tersisa ${global.db.data.users[m.sender].bank} !!`)
}

handler.help = ['pull <jumlah>', 'pullall']
handler.tags = ['rpg']
handler.command = /^pull([0-9]+)|pull|pullall$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false 
handler.private = false
handler.limit = false
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler