//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "judebright688@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFJYkZzdWhhRE9YUkR3TUZrT0duUzFpWW9PWnJ0RDF2WmNXNWZtTWVrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2gra040Mm9lYTgxRmNFYjRiRThUSkY3emdjV1B0VkRVRXA1bjhoV09Xbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSng4VUZoR3ovTGxUbzNiS3VMRU9XSUJsaERPV3ZqOC9Odm1oSHJnVFdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLZzFCTHR2eUpXaXcwNGdIeUo0aWM1VGNtTEduRTEwRjJ6T3lXdXdpTEN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFBT0dFQitRWGk3SVR6dTlQNnoyTWJiZHlSc2t1ZStGSnJEc3FVMUpHa2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZoOFBwTEVxampyNC9HRmNiU0kvMnprc2t1ZFNERmV6Q1NhZ1N5MDB4alk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0h6VTlhZTFBMmZzTVdKTUlzYjFvZHMrblNBN2hhOFU2S3crMU1HZjRWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQS9nQVNYNVhiTjJSMG1pN0lWb1RhOXBlQVBQd212cDBvU0hnNGtab3F6OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImExNTYrcGlrcE44YTRhU3huUTR5NmZBNVNOdk93QWF2Y1Jta1RaRWpsWkRHR2NpOWIwanF4UkJNYTlFdmdNTFVDdXNRUTlTWGV5VC9SV2Y4QVExdmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiJxb1lKMzVhMlp1SUFZMXUveDhoZ09tZXpLWDd0NVplM2NTY3Byb3Q3bFljPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxbTRYNDR2TFQxRzVnXzdxTHpoZUt3IiwicGhvbmVJZCI6IjA4MTNiMzBhLTE2MzItNDRiOS05NWViLTc4M2Q5NTIwZGJjNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1cGVsVWJXQXBkRmtuYlFSdEhYeUwveGdRVVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUStoWC9ibU9mK2JoZnpaRG1VWU5CRzVIbVdzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlI3M0JSU0pWIiwibWUiOnsiaWQiOiIyMzQ4MDc3NTUwNjY2OjYzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMckRtL0VGRUxLQnpiVUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGTzdmbnMvckh2b2QrVGpHWVBBR1huQUM4bWNucEFiMlc3QnJPcmRjRWtrPSIsImFjY291bnRTaWduYXR1cmUiOiJGMDhpdkhpeTRpQjNhK0kraTFMeWNLenVxS3V6R0k2RmNHanFHT3lpV2ErdGRSUDZUbkltQWNSSyszK2M5a1habG5UYURGak9GTXhKY1BPb0NDTGtBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUHp3WkUxNU5YQXNRWXgxS3BNdWQwb3FHSXdCZUJMZ1ZoSkxNRG1FamppZFBRU0RWdFlBcXZFYlQrdjhTMWt5WnZETXRTK21lSVVIYTM5TmJMOHhGaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDc3NTUwNjY2OjYzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJUdTM1N1A2eDc2SGZrNHhtRHdCbDV3QXZKbko2UUc5bHV3YXpxM1hCSkoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMwMjM1NTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRG95In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "STRIKE",
  author: process.env.PACK_AUTHER || "STRIK",
  packname: process.env.PACK_NAME || "CRASH",
  botname: process.env.BOT_NAME || "STRIKE",
  ownername: process.env.OWNER_NAME || "CHASE",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "PRIVATE",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
