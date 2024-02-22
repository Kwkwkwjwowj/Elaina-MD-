var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks, contoh : .lolimaker reelly'
  m.reply('Tunggu sebentar kak..')
  var fly = `https://oni-chan.my.id/api/canvas/loliGgo?name=${response[0]}`
  conn.sendFile(m.chat, fly, 'loliiiii.jpg', wm, m, false)
};
handler.command = handler.help = ['lolimaker'];
handler.tags = ['maker'];
handler.register = true;
handler.limit = true;
module.exports = handler;