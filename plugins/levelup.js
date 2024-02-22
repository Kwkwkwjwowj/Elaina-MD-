let levelling = require('../lib/levelling')

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup) return true

    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

    if (before !== user.level) {
      let reply = `Selamat, Anda telah naik level!\n\n*[ ${before} ]* ➠ [ ${user.level} ]\n\nKetik *.profile* untuk cek\n\n\nJoin Group: https://chat.whatsapp.com/D6bHVUjyGj06bb6iZeUsOI`
      m.reply(reply)
      console.log(reply)
    }
  }
}