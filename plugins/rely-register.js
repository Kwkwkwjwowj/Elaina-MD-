/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

const {
	createHash
} = require('crypto');
const fetch = require('node-fetch');

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
let handler = async function(m, {
	text,
	usedPrefix
}) {
	let user = global.db.data.users[m.sender];
	if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar lagi? ${usedPrefix}unreg 90259a21exxxxxx`;
	if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}register nama.umur*`;
	let [_, name, splitter, age] = text.match(Reg);
	if (!name) throw 'Nama tidak boleh kosong (Alfanumerik)';
	if (!age) throw 'Usia tidak boleh kosong (Angka)';
	age = parseInt(age);
	if (age > 120) throw 'Terlalu tua.';
	if (age < 5) throw 'Terlalu Muda.';
	user.name = name.trim();
	user.age = age;
	user.regTime = +new Date();
	user.registered = true;
	let sn = createHash('md5').update(m.sender).digest('hex');

	let balanceBonus = getRandomInt(1000, 10000);
	let limitBonus = getRandomInt(10, 20);
	let expBonus = getRandomInt(1000, 1000);

	m.reply(
		`
Register Successful!

╭─「 Info 」
│ Name: ${name}
│ Age: ${age}
│ Balance: +${balanceBonus}
│ Limit: +${limitBonus}
│ Exp: +${expBonus}
│ SN: ${sn}
╰────
🌐 *Instagram:* https://instagram.com/daffaxdezz
    `
	);
};

handler.help = ['register', 'daftar'].map((v) => v + ' <name>.<age>');
handler.tags = ['start'];
handler.command = /^(register|daftar)$/i;

module.exports = handler;

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}