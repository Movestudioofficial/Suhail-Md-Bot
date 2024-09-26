const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_13_23_09_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDc2LFxuICAgICAgICAxNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDM0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDc1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDYzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk3LFxuICAgICAgICA4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI5LFxuICAgICAgICA1LFxuICAgICAgICA3OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExLFxuICAgICAgICA3MixcbiAgICAgICAgMTMyLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQxLFxuICAgICAgICA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib3N1aDQvbzhnb1lsbkR3cEF5R093Vm5zQ2E4QWg0bTVTdFRGSVNqWTVjaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDM1NDcxNDI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTc5QUY2RDE3RDZBRjNGOEE1RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjczNTY5OTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibFhiYjdkLXhSVG0zc2lLWGJ3TFphZ1wiLFxuICBcInBob25lSWRcIjogXCIxODA5MWViZS0yN2JjLTQ2ZDItYThlMy02NDRhMjJmZGZjYjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgMTY3LFxuICAgICAgMTc4LFxuICAgICAgMjQ4LFxuICAgICAgMTc5LFxuICAgICAgMjM1LFxuICAgICAgNjAsXG4gICAgICA2MCxcbiAgICAgIDU0LFxuICAgICAgNzcsXG4gICAgICAyMzEsXG4gICAgICA5MixcbiAgICAgIDE0NyxcbiAgICAgIDE2MCxcbiAgICAgIDYsXG4gICAgICAxMzUsXG4gICAgICAxODMsXG4gICAgICAyMjgsXG4gICAgICAzNixcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDEwMCxcbiAgICAgIDIyNSxcbiAgICAgIDEzOSxcbiAgICAgIDEyNixcbiAgICAgIDYwLFxuICAgICAgMTMwLFxuICAgICAgMTY3LFxuICAgICAgNTgsXG4gICAgICA0LFxuICAgICAgMTcsXG4gICAgICAyNTIsXG4gICAgICAxNjIsXG4gICAgICAyMTAsXG4gICAgICAxMDUsXG4gICAgICA2NSxcbiAgICAgIDE3NSxcbiAgICAgIDU0LFxuICAgICAgMjQzLFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldERkpFRDVYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM1NDcxNDI3OjU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTW92ZXR2cGx1c1wiLFxuICAgIFwibGlkXCI6IFwiNDQ2ODkzMDI1NDAzNjY6NTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnVTa2E0SUVMYkExYmNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZWGxvVGNydmxCMS9TNE5vUGtOd3IyOUwxMWlTNzk5RkJUdXl2QXMvdnk0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVRajVNL1k2UzRDeTdTWkQyWlBwcmdRckJlQ3A4Q2Y0VVNvUUhFdGdTS3pxSXFYRWF1akNCK2hOWjROQTFxR3M3RTlUQzZSYjBCQ1NIUHJPVThUWkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNVOU5HQ0hVUkVsNnkvWEM2M3JCeWIvTXRKUEMyVXdZamlFcVpGQjJMeXhtRm01L3huSkp2WlhzMUZySmlGS2hzNjRwUE02MDVXTnB3Y09rTXJ4SWp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzU0NzE0Mjc6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjczNTY5ODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFK3NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUrcy5qc29uIjogIntcImtleURhdGFcIjpcIlYvRmJRZ054VnkxcUF5NzQ3Nkcvd1o4QWZ6bHpLSHpuR0hkZE0zSUMzdTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjI0NDIzMzU2MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzI3MzU2OTg5NjUxXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
