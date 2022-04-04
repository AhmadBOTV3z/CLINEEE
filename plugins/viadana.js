let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Gopay
╠➥ *6281250521455*
║- Owner Bot:
║- wa.me/6287892711054
╠═〘 AHMADBOT 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viagopay']
handler.tags = ['info']
handler.command = /^viagopay$/i

module.exports = handler
