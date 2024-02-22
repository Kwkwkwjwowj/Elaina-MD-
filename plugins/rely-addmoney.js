/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/


let handler = async (m, { conn, args }) => {
  if (args.length === 2 && args[0] === 'all') {
    let users = global.db.data.users;
    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      throw 'Jumlah balance yang dimasukkan harus berupa angka. Contoh: .addbalance all 100';
    }
    for (let user in users) {
      users[user].balance += pointsToAdd;
    }
    conn.reply(m.chat, `Berhasil menambahkan ${pointsToAdd} balance untuk semua pengguna.`, m);
  } else if (args.length === 2) {
    let mentionedJid = m.mentionedJid[0];
    if (!mentionedJid) {
      throw 'Tag pengguna yang ingin diberikan balance. Contoh: .addbalance @user 100';
    }
      
  	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})

    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      throw 'Jumlah balance yang dimasukkan harus berupa angka. Contoh: .addbalance @user 100';
    }

    let users = global.db.data.users;
    if (!users[mentionedJid]) {
      users[mentionedJid] = {
        limit: 0,
        exp: 0,
        lastclaim: 0,
        balance: 0
      };
    }

    users[mentionedJid].balance += pointsToAdd;

    conn.reply(m.chat, `Berhasil menambahkan ${pointsToAdd} balance untuk @${mentionedJid.split('@')[0]}.`, m, {
      mentions: [mentionedJid]
    });
  } else {
    throw 'Masukkan argumen yang valid. Contoh: .addbalance @user 100 atau .addbalance all 100';
  }
};

handler.help = ['addbalance @user <jumlah>', 'addbalance all <jumlah>'];
handler.tags = ['xp'];
handler.command = /^addbalance$/i;
handler.owner = true;

module.exports = handler;