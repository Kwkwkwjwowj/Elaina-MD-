/* 
Script By Orlando Store.
  • Tiktok: D_Orlando2
  • IG: D_Orlando1
Buy Script? 
  • WA: +62 831 0634 6274
  • TELE: t.me/orlandostoreid
  • Tiktok: @D_Orlando2
*/

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes Cheat Balance !*`, m)
        global.db.data.users[m.sender].balance = 9999999999999999999
        global.db.data.users[m.sender].limit = 9999999999999999999
        global.db.data.users[m.sender].level = 9999999999999999999
        global.db.data.users[m.sender].exp = 9999999999999999999
        global.db.data.users[m.sender].sampah = 9999999999999999999
        global.db.data.users[m.sender].potion = 9999999999999999999
        global.db.data.users[m.sender].common = 9999999999999999999
        global.db.data.users[m.sender].uncommon = 9999999999999999999
        global.db.data.users[m.sender].mythic = 9999999999999999999
        global.db.data.users[m.sender].legendary = 9999999999999999999
        global.db.data.users[m.sender].potion =  999999999999999999
}
handler.command = /^(cheat)$/i
handler.owner = true

module.exports = handler