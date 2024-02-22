/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
*/

const axios = require ("axios");
const uploadImage = require ("../lib/uploadImage.js");

const handler = async (m, { conn, usedPrefix, command, text, args }) => {
	conn.deep_fake_AI = conn.deep_fake_AI ? conn.deep_fake_AI : {};
	if (m.sender in conn.deep_fake_AI) {
		return m.reply("_Please wait, you have undone job._");
	}
	const q = m.quoted ? m.quoted : m;
	const mime = (q.msg || q).mimetype || q.mediaType || "";
	if (!/image\/(jpe?g|png)/.test(mime)) {
		return m.reply(
			`Example: reply/send image with caption *${usedPrefix + command}*`
		);
	}
if (!text) throw `{
  "status": false,
  "message": "Style not exist",
  "styles": [
    "anime",
    "pixar",
    "jojo",
    "retro",
    "spirited",
    "cyberpunk",
    "synthwave",
    "horror",
    "zombie",
    "rdr",
    "pixel",
    "thunder",
    "onepiece",
    "firebender",
    "gtav",
    "aether",
    "impasto",
    "barbie",
    "airbender",
    "block",
    "heroes",
    "chocolate",
    "avatar",
    "tatoo",
    "rickmorty",
    "gothic",
    "hell",
    "pastel",
    "papercut",
    "pokemon",
    "luminous"
  ]
}`
	conn.deep_fake_AI[m.sender] = true;
	const [style = `${text}`,] = args;
	const configs = {
		init_image: await uploadImage(await q.download()),
		style,
	};
	await conn.sendMessage(
		m.chat,
		{
			text: `_I'am Turnning you, using ${configs["style"]} template_`,
		},
		{ quoted: m }
	);
	const { data } = await axios
		.request({
			baseURL: "https://api.itsrose.life",
			url: "/image/turnMe",
			method: "POST",
			params: { apikey: "Rk-relyXsakkarin"},
			data: { ...configs },
		})
		.catch((e) => e?.response);
	const { status, message, result } = data;
	if (!status) {
		delete conn.deep_fake_AI[m.sender];
		return m.reply(message)
	}
	await conn.sendFile(m.chat, result.images[0], '', wm, m);
	delete conn.deep_fake_AI[m.sender];
};
handler["help"] = ["turnme"];
handler["command"] = ["turnme"];
handler["tags"] = ["ai"];
module.exports = handler;