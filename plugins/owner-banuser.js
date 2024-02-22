let handler = async (m, { conn, text }) => {
    if (!text) throw '*Contoh*: .ban +628163334646'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag yang ingin di ban Bot'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `Berhasil Banned User`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.mods = true

module.exports = handler