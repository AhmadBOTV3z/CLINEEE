
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Dana
╠➥ *6281250521455*
╠➥ Chat Owner:
║- wa.me/6281250521455
╠═〘 AHMADBOT 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viadana']
handler.tags = ['info']
handler.command = /^viadana$/i

module.exports = handler
