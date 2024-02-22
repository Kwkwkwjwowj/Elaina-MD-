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
  if (args.length !== 1) {
    throw '*Example*: .redem 12345';
  }

  let redeemCode = parseInt(args[0]);
  if (isNaN(redeemCode) || redeemCode <= 0) {
    throw '*Example*: .redem 12345';
  }

  let redeemData = global.redeemCodes.find(data => data.code === redeemCode);
  if (!redeemData) {
    throw 'Kode penukaran yang Anda masukkan tidak valid atau telah kedaluwarsa.';
  }

  if (!redeemData.redeemedBy) {
    redeemData.redeemedBy = [];
  }

  if (redeemData.redeemedBy.includes(m.sender)) {
    throw 'Anda telah menukarkan dengan kode yang sama sebelumnya.';
  }

  let user = m.sender;
  let users = global.db.data.users;
  if (!users[user]) {
    users[user] = {
      limit: 0,
      exp: 0,
      lastclaim: 0,
      balance: 0,
      energy: 0,
      redeemed: []
    };
  }

  let exp = Math.floor(Math.random() * 50) + 1;
  let balance = redeemData.prize || 0;
  let energy = Math.floor(Math.random() * 10) + 1;

  if (!users[user].balance) {
    users[user].balance = 0;
  }

  users[user].exp += exp;
  users[user].balance += balance;
  users[user].energy += energy;

  if (!users[user].redeemed) {
    users[user].redeemed = [];
  }

  if (!users[user].redeemed.includes(redeemCode)) {
    users[user].redeemed.push(redeemCode);
    redeemData.redeemedBy.push(user);
  }

  global.db.data.users[user] = users[user];
  global.db.write();

  conn.reply(m.chat, `Selamat, Anda telah berhasil menukarkan kode *${redeemCode}*!\n\nHadiah yang Anda dapatkan:\n- ${exp} exp\n- ${balance} balance\n- ${energy} energy`, m);
};

handler.help = ['redem <kode>'];
handler.tags = ['game'];
handler.command = /^redem$/i;
handler.register = true
handler.limit = true

module.exports = handler;