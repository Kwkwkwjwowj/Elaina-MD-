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
	args
}) => {
	if (!args[0] || isNaN(args[0])) {
		throw '*Contoh*:.buylimit 10';
	}

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '',
			key: m.key,
		}
	})

	let count = parseInt(args[0]);
	let price = count * 50000;
	let users = global.db.data.users;
	let user = users[m.sender];
	if (price > user.balance) {
		throw `Maaf, uang kamu tidak cukup untuk membeli ${count} limit. Harga 1 limit adalah 50000 balance.`;
	}
	user.balance -= price;
	user.limit += count;
	conn.reply(m.chat, `Berhasil membeli ${count} limit dengan harga ${price} balance.`, m);
}

handler.help = ['buylimit <jumlah>'];
handler.tags = ['xp'];
handler.command = /^buylimit$/i;
handler.register = true;
handler.limit = false;

module.exports = handler;