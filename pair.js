const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Qadeer_Khan,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function QADEER_KHAN_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Qadeer_Khan = Qadeer_Khan({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Qadeer_Khan.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Qadeer_Khan.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Qadeer_Khan.ev.on('creds.update', saveCreds)
            Pair_Code_By_Qadeer_Khan.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Qadeer_Khan.sendMessage(Pair_Code_By_Qadeer_Khan.user.id, { text: '' + b64data });

               let QADEER_KHAN_TEXT = `
┏━━━━━━━━━━━━━━
┃ᴍᴀʟᴠɪɴ-ᴍᴅ SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = 𖥘⚡ ᴍᴀʟᴠɪɴ-ᴋɪɴɢ ⚡𖥘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || Owner = https://wa.me/923079749129
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❺ || My Github = https://github.com/Qadeer-bhai
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❻ || YouTube = https://www.youtube.com/@tofanmods7 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©2024-2099 ᴍᴀʟᴠɪɴ-ᴋɪɴɢ_`
 await Pair_Code_By_Malvin_King.sendMessage(Pair_Code_By_Malvin_King.user.id,{text:MALVIN_KING_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Malvin_King.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    MALVIN_KING_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await QADEER_KHAN_PAIR_CODE()
});
module.exports = router
