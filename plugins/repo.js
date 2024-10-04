const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*Dark Shadow MD Repastitory Information*

*| ɴᴀᴍᴇ*: ᴅᴀʀᴋ-ꜱʜᴀᴅᴏᴡ-ᴍᴅ
*| ᴏᴡɴᴇʀ*: ᴘᴀᴛʜᴜᴍ ᴍᴀʟꜱᴀʀᴀ
*| ɴᴜᴍʙᴇʀ*: 94773416478
*| ᴠᴇʀꜱɪᴏɴ*: 1.0.0


*📡 REPO LINK*
🔗◦https://github.com/dark-shadow-LK/DARK-SHADOW-MD-V1/tree/main

*📌 SUBSCRIBE MY YOUTUBE CHANNEL*
🔗◦ https://youtube.com/@dark_shadow-bot?si=63aH4ud-TXRmyQy5

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ-ᴍᴅ
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/1ece2e0281513c05d20ee.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
