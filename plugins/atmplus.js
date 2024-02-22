const balanceplus = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^atm/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].balance / balanceplus) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].balance >= balanceplus * count) {
    global.db.data.users[m.sender].balance -= balanceplus * count
    global.db.data.users[m.sender].bank += count
    m.reply(`-${balanceplus * count} BALANCE\n+ ${count} ATM`)
  } else m.reply(`Balance tidak mencukupi untuk menabung ${count} ATM`)
}

handler.help = ['atm <jumlah>', 'atmall']
handler.tags = ['rpg']
handler.command = /^atm([0-9]+)|atm|atmall$/i
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