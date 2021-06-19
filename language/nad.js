exports.wait = () => {
	return`*「❗」DAGOAN SAKEDAP ANJG*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「❗」LEVELING ENABLE*`
}

exports.lvloff = () => {
	return`*「❗」LEVELING DISABLE*`
}

exports.lvlnul = () => {
	return`*「❗」LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*「❗」LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「❗」VERIFIKASI HELA ATUH「❗」*\n\nketik : @verify`
}

exports.baned = () => {
	return`*「❗」SORRY SORRY AJA NIH BRO, TAPI KAU SUDAH KU BANNED YAHAHAHA HAYUUU :V*`
}

exports.premium = (prefix) => {
	return`Lu Siapa? Fitur ini khusus user premium!
Upgrade ke premium dulu bosku
Jika minat hubungi owner ku
Ketik : ${prefix}owner`
}

exports.rediregis = () => {
	return`*NGEES VERIFIKASI SIA TEH GOBLOG-_-*`
}

exports.stikga = () => {
	return`*「 GAGAL 」Coba reply/tag ulang kak*`
}

exports.linkga = () => {
	return`*「❗」LINK NYA YANG BENER BODOH*`
}

exports.groupo = () => {
	return`*「❗」GROUP ONLY*`
}

exports.ownerb = () => {
	return`*「❗」JUL ONLY*`
}

exports.ownerg = () => {
	return`*「❗」JUL ONLY*`
}

exports.admin = () => {
	return`*「❗」ADMIN GROUP ONLY*`
}

exports.badmin = () => {
	return`*「❗」ADMINKEN HELA AING ANJG*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*「🗿」Teks nya mana kak?*`
}

exports.clears = () => {
	return`*SUKSES BRO OLEH JUL GNTENG*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
\`\`\`➸ Nama : ${pushname}\`\`\`
\`\`\`➸ Nomor : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ Xp : ${getLevelingXp(sender)}\`\`\`
\`\`\`➸ Level : ${getLevel} ➸ ${getLevelingLevel(sender)}\`\`\`
`}
 
exports.limitend = (pushname, prefix) => {
	return`*maaf ${pushname} limit hari ini habis*
*Limit di reset setiap jam 24:00*

\`\`\`Upgrade Premium Bebas Limit\`\`\`
\`\`\`➸ 20K : 1 Bulan\`\`\`
\`\`\`Jika berminat silahkan hubungi owner\`\`\`
\`\`\`Kirim perintah : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${isPrem ? '9999' : `${limitCounts}`}

Upgrade premium bosku, biar bebas gunain bot`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ NOMOR : ${sender.split("@")[0]}
┃│➸ MONEY : ${uangkau}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}

exports.donasi = (ownerName) => {
return`*DONASI KAK*
Pulsa : 082319617604
Gopay : 082319617604
Dana : 082319617604
Qris : Hubungi si *${ownerName}*

Donasi supaya bot terus update & Aktif`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return`🔰 -----[ 「 *IKLAN ${botName}* 」 ]----- 🔰
──────────────────────────────
◯ *DAFTAR SEWA & BUAT BOT :*
◯ *SEWA : 35K/GRUP (BULAN)*
◯ *BUAT : 150K (BISA JADI OWNER)*
◯ *PEMBAYARAN BISA MELALUI :*
◯ *OVO, GOPAY, DANA, PULSA+10K*
──────────────────────────────
◯ *KEUNTUNGAN SEWA BOT :*
◯ *1. BISA MEMASUKAN BOT KE GROUP*
◯ *2. BISA MENGGUNAKAN FITUR PREMIUM*
◯ *KEUNTUNGAN BUAT BOT :*
◯ *1. BISA MENJADI OWNER BOT SENDIRI*
◯ *2. BISA MENGGANTI NAMA BOT SENDIRI*
◯ *3. BISA MEMBAWA BOT KE GROUP*
◯ *4. BISA MENGGUNAKAN COMMAND OWNER*
◯ *5. BISA MENYEWAKAN BOT KEMBALI*
──────────────────────────────
◯ *JIKA MINAT IKLAN DIATAS*
◯ *HARAP HUBUNGI NOMOR DIBAWAH :*
◯ *wa.me/${6283866834781}*
──────────────────────────────
🔰 -----[「 *POWERED BY ${ownerName}* 」]----- 🔰`
}
