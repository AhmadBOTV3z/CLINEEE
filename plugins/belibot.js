let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *VIA PULSA* :      *Rp 10.000*
╠➥ *VIA DANA* :      *Rp 10.000*
╠➥ *VIA GOPAY* : *Rp 10.000*
╠➥ *PREMIUM* :   *Rp 5.000*
╠   *SEMUA PERMANENT YAAAAAA*
║
╠═〘 METODE PEMBAYARAN 〙 ═
╠➥ DANA/GOPAY/PULSA
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Klil Button Di Bawah
║
╠═〘 AHMADBOT 〙 ═`.trim(), '❖ AhmadBOT', 'Gopay', '#viagopay', 'Dana', '#viadana', m)
}

handler.command = /^sewabot$/i

module.exports = handler
