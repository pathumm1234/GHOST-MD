const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*🎉DARK-SHADOW-MD WHATSAPP BOT*

*| ᴏᴡɴᴇʀ ɴᴀᴍᴇ*: ᴘᴀᴛʜᴜᴍ-ᴍᴀʟꜱᴀʀᴀ
*| ɴᴜᴍʙᴇʀ*: 94773416478
*| ʏᴏᴜᴛᴜʙᴇ*: https://youtube.com/@dark_shadow-bot?si=63aH4ud-TXRmyQy5
*| ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ*: https://whatsapp.com/channel/0029VacTVYIGOj9kr0GJzR1r

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ꜱʜᴀᴅᴏᴡ-ᴍᴅ
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/1ece2e0281513c05d20ee.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
