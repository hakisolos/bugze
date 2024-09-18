//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lNYTQ4N2ZzWnlCMGNQSXJERDdWTFByNnJ4N1JsbDlEbEpwdVdtOEVVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDR3ZC9NZHJpSDZKS01HbmhJQ2I0MzNwYXZWaXRpRkIyMm9VcU1tZUgyYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTW5ITGVrbEdCcUF5VVorM3lxR3VvRnBQd1ZIbm5BVTNpY2ltUzFEb25BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4aVpTRGhnWWJpYThmWEppMGpGWDJDSzNDT0FkOTl0cnlhaW5MWE9wdVcwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlGNFBWTmFDalVCUXdDYmJ4Vjl6dFE4cHVNdmJHUUwzQ1BxbW1PNzNQM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImloWVd1cTlmTTBoYko0NXJrdGlkNERRUXd1OTFyK0R0Y2lwakpneWhhR2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFNZDhDcTJwa0dyV0U0cDJzUk5TY2REaEwrOWhWRmE5MEwzaXBHVFFIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiam9FQ01ldVlUUlA0U25PQU1CM0NFRXJSa1pvQ1AwYXZ6V2ZQUVhUcDNsMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhxME03eEwrcXFpdGFYYkNraU1IM05FODVpc09mQjRENmtwYjZHWExSZ2FqL1Q3TjIzdTlyK2dzeHBWT29xejI0Nkg2b1UyNy9ON2ZOR21lR0F4UENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6Ii94MUhHdFRzL1dEb1paYklyTDNWWW55OEVkVWJlTmRtNisvYkRpQ3c4Nk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEyNjYzNDM5N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1NkI4OTA2RjZFREVBNTU4OTY4MzhBNjk3MkQzM0Y0OSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2NjcxMTAyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTI2NjM0Mzk3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlEMDAzN0FDNTcwRDEyMkE1RUY1NjQ2QjE2OTE4MjNFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY2NzExMDN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBQSXpMM1YyVGVXV3hTUjFIaTBkOWciLCJwaG9uZUlkIjoiYzI5YWY4MTctN2M5NS00YTEyLTk0MjctNzEyMThjODFlM2Q2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml6Znl6am9PMFRCaTFucHQ3a2pZRnZUZmFLcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDbHJNZ2kvWnFFM1VNYzJuTE5FN3g3TjEzNXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSkI5TkM0UVQiLCJtZSI6eyJpZCI6IjIzNDgxMjY2MzQzOTc6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJCdWd6In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQU1BwWWdHRU8zUnE3Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvYmd5eFRwWkthUHIyMDRSRDRMb21IcEVLYmZyYVlqclhFbzlTWWhNRGd3PSIsImFjY291bnRTaWduYXR1cmUiOiJFb3RCaytoa3JmT21RR0pJbjRybDVWVTJkR0NMaVlMZ1IyVnIrT2VNOE5pa2xpZkJ1VjJWSHpnYjJZVXN4VTV4Q0Fmb1N1TFBjY00zdDRSUWRPQmpDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicXpoZWY5UmlRVS91N1NsTStHVU1aVmVhY1BzRFVhOE5BWnZzOTdvVEtiM2VPakpveTJSbkRkVk1MaWRBdFlScXRkbTQzY0Z1Qy9nUllmWlNHMWFDQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTI2NjM0Mzk3OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYUc0TXNVNldTbWo2OXRPRVErQzZKaDZSQ20zNjJtSTYxeEtQVW1JVEE0TSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjY3MTA5OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFV2YifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
