/* 
Script By Reelly XD
   YT: ReellyXD
   IG: reellyxd
Buy Script? 
   WA: +62 857-0436-85323
   TELE: t.me/rely_xd
   Github: github.com/ReellyXD
*/

let handler = async (m, {
    conn,
    groupMetadata,
    usedPrefix,
    text,
    command
}) => {
if (!text && !m.quoted) return m.reply("Input text, message replies..")
    let get = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    let count = get.length;
    let sentCount = 0;
    m.reply('Tunggu, sedang diproses...');
    for (let i = 0; i < get.length; i++) {
        setTimeout(function() {
            if (text) {
                conn.sendMessage(get[i], {
                    text: text
                });
            } else if (m.quoted) {
                conn.copyNForward(get[i], m.getQuotedObj(), false);
            } else if (text && m.quoted) {
                conn.sendMessage(get[i], {
                    text: text + "\n" + m.quoted.text
                });
            }
            count--;
            sentCount++;
            if (count === 0) {
                m.reply(`Berhasil Push Kontak:\nJumlah Pesan Terkirim: *${sentCount}*`);
            }
        }, i * 2000); //delay nye
    }
}
handler.command = handler.help = ['pushkontak']
handler.tags = ['owner']
handler.owner = true
handler.group = true
module.exports = handler