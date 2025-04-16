// © HanakoBotz
// • By: Leooxzy - Deku
// • Owner: 6283136099660

// By: Leooxzy
// Bio cr: Krz

module.exports = {
  help: ["gcsetting", "groupsetting", "settingc"].map(v => v + ' *[ 🔒 Mengatur Akses Grup: Membuka/Tutup Grup ]* '),
  tags: ["group"],
  command: ["gcsetting", "groupsetting", "settingc"],
  group: true,
  admin: true,
  botAdmin: true,
  loading: true,
  code: async (m, { conn, text }) => {
    if (!text)
      throw `*– 乂 Cara Penggunaan:*\n
> *🔓* Gunakan \`open\` untuk membuka grup. Member dapat mengirim pesan dan berinteraksi dengan bebas.\n
> *🔒* Gunakan \`close\` untuk menutup grup. Hanya admin yang dapat mengirim pesan, member akan dibatasi.\n\n
*– 乂 Contoh Penggunaan:*\n
> *-* *${m.prefix + m.command} open* - Untuk membuka grup\n
> *-* *${m.prefix + m.command} close* - Untuk menutup grup\n\n
*– 乂 Penting!*\n
> *📌* Jika grup dibuka, semua member dapat berinteraksi.\n
> *📌* Jika grup ditutup, hanya admin yang dapat mengirim pesan.`;

    await conn
      .groupSettingUpdate(
        m.cht,
        text === "open" ? "not_announcement" : "announcement",
      )
      .then(() =>
        m.reply(
          `> ✅ *Berhasil ${text === "open" ? "membuka" : "menutup"} grup!* ${text === "open" ? "Sekarang member bisa mengirim pesan." : "Hanya admin yang dapat mengirim pesan sekarang."}`,
        ),
      );
  },
};
