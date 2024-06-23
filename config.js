const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/PRINCERAFEH/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/PRINCERAFEH/Suhail-Md" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ MUBI²²¹-ᴍᴅ" 


global.devs = "923257842069" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923257842069";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_00_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDYzLFxuICAgICAgICA0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNCxcbiAgICAgICAgNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDExLFxuICAgICAgICA2LFxuICAgICAgICAzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExLFxuICAgICAgICA1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExLFxuICAgICAgICA2LFxuICAgICAgICAxNixcbiAgICAgICAgMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MixcbiAgICAgICAgNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYxLFxuICAgICAgICA0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcyLFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgODIsXG4gICAgICAgIDc3LFxuICAgICAgICAxODQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgNixcbiAgICAgICAgMixcbiAgICAgICAgMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjQraG9iY1FIZFJ3L1V3SzJucHd3a2c5WGRnMys4ejloOW92UC83M1lKNG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3NDU5MjQxMDAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCRTRDRjcwNzE3N0JFM0NBNjI2NzBBQUIyRUNCOEMyM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkxNTEyNDZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc0NTkyNDEwMDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUwNkY4QTJFNEEwMTUwOTU3QjY2MjgwOUI1Qjk1RUEwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTE1MTI0NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZVmo0ZUhqcVRMQ0k2aVB3em4xYmJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU0NGU4MjFiLTJiMWItNDA2Ni05MjM2LWM4YTMxMmM1OTc5YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICA0MixcbiAgICAgIDY3LFxuICAgICAgODEsXG4gICAgICA4NSxcbiAgICAgIDg3LFxuICAgICAgNDQsXG4gICAgICAxNzcsXG4gICAgICAxOTksXG4gICAgICA1NSxcbiAgICAgIDM5LFxuICAgICAgNjQsXG4gICAgICAxMjAsXG4gICAgICAyMTAsXG4gICAgICAxMzUsXG4gICAgICAxNDIsXG4gICAgICAxMzgsXG4gICAgICA2MCxcbiAgICAgIDk4LFxuICAgICAgMTI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgMjM1LFxuICAgICAgOTAsXG4gICAgICAxNDMsXG4gICAgICAxMjgsXG4gICAgICA2MCxcbiAgICAgIDUzLFxuICAgICAgMTYwLFxuICAgICAgMTgsXG4gICAgICAxNTcsXG4gICAgICAzMSxcbiAgICAgIDE1NCxcbiAgICAgIDIsXG4gICAgICAyMTMsXG4gICAgICAxNDAsXG4gICAgICAxMCxcbiAgICAgIDk5LFxuICAgICAgMTY3LFxuICAgICAgMTYyLFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM05BNksxUzdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ0NzQ1OTI0MTAwMDoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEzOTQ1ODg1MDUzMDc3OjEzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIn5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMS1I1UTBRaDlYZ3N3WVlDeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVzbnlUNWhVYjVEUmhocmZSMkN2VWhzenp4VlhvdDRqSmp2cTRkb3A3ejA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidVpTV0tpbzY3VTg0WXZkR1J2cmRIdDRMckR3a3N3VTFyOXBlVTdrMVcvQWZoU1pmM2F6QzFHbHhTUThWUHE4RHB6dkZYRVQvc2Z5U2lNUVVYTGV2QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZm5qN0FzaHN4ZUg2S1RFRDhrSnhOZFpTN1BlMy9WRFVsU0cvd0E2bk1oZXlkeDdlQVJyL2M1aUhXKzgzNXRjTUhrZUREclVNYkxTQ3BORk5MclpZaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDQ3NDU5MjQxMDAwOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkxNTEyNDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJRzdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlHNy5qc29uIjogIntcImtleURhdGFcIjpcIkpKTXluc0lNeFRDRmRHVHB6R2xJMnJyOGZrUm9tVHJtYXUwZFBjWmt1Z1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjg5MTk5ODYsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMyw0LDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MUBI-KA-SERVENT",
  ownername:process.env.OWNER_NAME|| "MUBI",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
