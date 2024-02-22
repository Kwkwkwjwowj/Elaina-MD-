let handler = async (m, { conn, command }) => {
let thumb = `https://api.xyroinee.xyz/api/sfw/cosplay?apikey=${global.xyroinee}`
let text = `Waduh`
    //conn.sendButtonImg(m.chat, nyenye, 'Nih', wm2, 'Next', `.${command}`, m) 
 //   conn.sendFile(m.chat, nyenye, 'kul.jpg', 'Tch', m) 
    conn.sendFile(m.chat, thumb, 'menu.jpg', `${text}`, m)
}
handler.help = ['cosplay']
handler.tags = ['nsfw']
handler.command = /^(cosplay)$/i
handler.limit = true
module.exports = handler