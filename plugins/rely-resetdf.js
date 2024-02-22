/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
*/

const handler = async (m, { conn, usedPrefix, command, text, args }) => {
	delete conn.deep_fake_AI[m.sender];
	m.reply(`Done`)
	}
handler["help"] = ["resetdf"];
handler["command"] = ["resetdf"];
handler["tags"] = ["ai"];
module.exports = handler;