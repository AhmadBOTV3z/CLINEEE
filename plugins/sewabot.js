let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
╭═══ 〔 SEWA BOT 〕 ════
├⬡ *VIA PULSA* : *Rp.10.000*
├⬡ *VIA DANA* : *Rp.10.000*
├⬡ *VIA GOPAY* : *Rp.10.000*
├⬡ *VIA OVO* : *Rp.10.000
├⬡ *PREMIUM* : *5.000*
└═══════════════
𝗦𝗶𝗹𝗮𝗸𝗮𝗻 𝗸𝗹𝗶𝗸 𝗽𝗮𝗱𝗮 "𝗟𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮" 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗹𝗶𝗵𝗮𝘁 𝗹𝗶𝘀𝘁.
╭═══════════════════════
║╭──❉ 〔 METODE PEMBAYARAN 〕 ❉──────
║│➸ *Dana* : 6281250521455
║│➸ *Gopay*: 6281250521455
║│➸ *OVO* : 6281250521455
║│➸ *Owner*: wa.me/6281250521455
║╰─────────────────────
╰═══════════════════════`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'VIA PULSA', description: "Rp10.000\nSewa bot PERMANENT.", rowId:".masuk"},
        {title: 'VIA DANA', description: "Rp10.000\nSewa bot PERMANENT.", rowId:".masuk"},
        {title: 'VIA PULSA', description: "Rp10.000\nSewa bot PERMANENT.", rowId:".masuk"},
        {title: 'VIA OVO', description: "Rp10.000\nSewa bot PERMANENT.", rowId:".masuk"},
        {title: 'PREMIUM', description: "Rp5.000\nPREMIUM PERMANENT.", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Rules Bot AhmadBOT.", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
