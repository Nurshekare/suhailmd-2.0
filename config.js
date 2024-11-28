const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_31_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDk4LFxuICAgICAgICA0MixcbiAgICAgICAgMjA4LFxuICAgICAgICA2OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDksXG4gICAgICAgIDE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk1LFxuICAgICAgICA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODksXG4gICAgICAgIDI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MCxcbiAgICAgICAgNCxcbiAgICAgICAgNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDcxLFxuICAgICAgICA4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDQwLFxuICAgICAgICA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3LFxuICAgICAgICA0NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDU5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA0LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0LFxuICAgICAgICA4MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDU4LFxuICAgICAgICAxODYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDcyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3WmYvdjNmZ3kvMkY2L3FEd09rN0Rxb0VuUFpNR1lxZXBCQkdSWjdvdXZZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpcUEySXZXUVEweVp3VUZzSEx3UmhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZiNzlhZGUxLWQzMjQtNDZlZC04MGU0LTc0NGVlNGE1YjQwMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTQsXG4gICAgICAxNDUsXG4gICAgICAyMDEsXG4gICAgICAxMTUsXG4gICAgICAxNTksXG4gICAgICA1MixcbiAgICAgIDQxLFxuICAgICAgMzQsXG4gICAgICAyMTEsXG4gICAgICAxODUsXG4gICAgICAxOTMsXG4gICAgICAxODMsXG4gICAgICAyOSxcbiAgICAgIDQxLFxuICAgICAgMTksXG4gICAgICAxNzAsXG4gICAgICAzNSxcbiAgICAgIDIzMixcbiAgICAgIDEzNixcbiAgICAgIDIzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICAyMyxcbiAgICAgIDI1NCxcbiAgICAgIDAsXG4gICAgICAxNjksXG4gICAgICA2MyxcbiAgICAgIDE5NSxcbiAgICAgIDIzMixcbiAgICAgIDE2NyxcbiAgICAgIDI1MCxcbiAgICAgIDUzLFxuICAgICAgMTAwLFxuICAgICAgMTAsXG4gICAgICAxOTQsXG4gICAgICAxNCxcbiAgICAgIDM3LFxuICAgICAgOTcsXG4gICAgICAyMzcsXG4gICAgICA0NixcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBFSDlRMk1UXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQ2MTUxMDE3OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NjI5ODg0NTAyMDQwNToxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMUGtySVFERU0rcWxyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldENjhxZnFteFVmTTdMNkdiU3VtRDZxamkyVUJZVWtJYzEyVkpOK3NTWHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiME1VMXR0Y3VCU3JQbWoyNXg1T254QUdoK3lQaWVxVFR5N2xLVWozRzFGaHdXbUd0OXhoL2RoTWxmb05HMjRLTENoSmgrOUlQY0I3Yzd1Z2ZxRTNhQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYVZmVlE1amNkWUJkc2oxT3phbHBnRURHN2VzQ3hicUhUalpRZk91V3lpbldBcndHSDMwUFBESDZpSmNPeStjdWNVelA5UXgwN2tyVTkreVUrbTUvZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NjE1MTAxNzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI2MTM0NTlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
