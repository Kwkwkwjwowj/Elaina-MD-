/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

let handler = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender]
  let opponent = m.mentionedJid[0]
  
  if (!user || !global.db.data.users[opponent]) {
    return m.reply('*Example*: .bertarung @user')
  }
    
  	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ğŸ•’',
			key: m.key,
		}
	})
  
  let betAmount = Math.floor(Math.random() * (10000000 - 10000 + 1)) + 10000 
  
  if (user.balance < betAmount) {
    return m.reply('Balance Anda tidak mencukupi')
  }
  
  if (user.lastWar && (new Date - user.lastWar) < 10000) {
    let remainingTime = Math.ceil((10000 - (new Date() - user.lastWar)) / 1000)
    return m.reply(`Anda harus menunggu ${remainingTime} detik sebelum dapat bertarung lagi`)
  }
  
  m.reply('Mempersiapkan arena...') 
  
  setTimeout(() => {
    m.reply('Mendapatkan arena...') 
    
    setTimeout(() => {
      m.reply('Bertarung...')
      
      setTimeout(() => {
        let result = Math.random() >= 0.5 
        let wonAmount = result ? betAmount : -betAmount 
        
        user.balance += wonAmount
        global.db.data.users[opponent].balance -= wonAmount
        
        let opponentName = conn.getName(opponent) 
        
        let caption = `*Hasil pertempuran:*\n\n`
        caption += `Anda Vs ${opponentName}\n\n`
        
        if (result) {
          caption += `Anda menang! +${betAmount}\n`
          caption += `Balance Anda saat ini: ${user.balance}\n`
          conn.sendFile(m.chat, 'https://telegra.ph/file/13c9ad12c76959a6ea8f8.jpg', 'You_Win.jpg', caption, m)
        } else {
          caption += `Anda kalah! -${betAmount}\n`
          caption += `Balance Anda saat ini: ${user.balance}\n`
          conn.sendFile(m.chat, 'https://telegra.ph/file/d7a294febd7e8d2ea9ee5.jpg', 'You_Lose.jpg', caption, m)
        }

        user.lastWar = new Date() 
        
        setTimeout(() => {
          m.reply(`Anda dapat bertarung lagi setelah 5 detik`) 
        }, 5000) // https://github.com/ReellyXD
      }, 2000)
    }, 2000) 
  }, 2000) 
}

handler.help = ['bertarung @user']
handler.tags = ['rpg']
handler.command = /^bertarung$/i

module.exports = handler
