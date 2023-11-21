const fs = require('fs')
const chalk = require('chalk')

global.apikey = 'rozananda123nanda'
global.rosekey = '-' //https://api.itsrose.life
//—————「 Set Nama Bot & Own 」—————//
global.namabot = '𝙵𝚊𝚝𝚑𝚎𝚛𝙱𝚘𝚝-𝙼𝙳'
global.namaowner = '@𝚝𝚒𝚗𝚘𝚒𝚜𝚐𝚘𝚘𝚍'

//—————「 Setting Owner 」—————//
global.owner = '6281535365496'
global.nomorlu = '6281535365496'
global.ownernomer = ["6281535365496"]
global.premium = ['6281535365496']

//—————「 Set Wm 」—————//
global.packname = 'FatherBot-Md'
global.author = '@tinoisgood'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: '𝙱𝚎𝚛𝚑𝚊𝚜𝚒𝚕, 𝚋𝚢 *@𝚝𝚒𝚗𝚘𝚒𝚜𝚐𝚘𝚘𝚍*',
    admin: '*𝚑𝚊𝚗𝚢𝚊 𝚊𝚍𝚖𝚒𝚗 𝚐𝚛𝚘𝚞𝚙 𝚞𝚗𝚝𝚞𝚔 𝚏𝚒𝚝𝚞𝚛 𝚒𝚗𝚒*',
    botAdmin: '𝙱𝚘𝚝 𝚋𝚎𝚕𝚞𝚖 𝚖𝚎𝚗𝚓𝚊𝚍𝚒 𝚊𝚍𝚖𝚒𝚗',
    owner: '𝙴𝚛𝚛𝚘𝚛, 𝙵𝚒𝚝𝚞𝚛 𝙷𝚊𝚗𝚢𝚊 𝚄𝚗𝚝𝚞𝚔 𝙾𝚠𝚗𝚎𝚛',
    group: '𝙴𝚛𝚛𝚘𝚛, 𝙵𝚒𝚝𝚞𝚛 𝙷𝚊𝚗𝚢𝚊 𝚄𝚗𝚝𝚞𝚔 𝙶𝚛𝚘𝚞𝚙 𝙲𝚑𝚊𝚝',
    private: '𝚏𝚒𝚝𝚞𝚛 𝚑𝚊𝚗𝚢𝚊 𝚊𝚍𝚖𝚒𝚗 𝚐𝚛𝚘𝚞𝚙',
    wait: '𝙱𝚘𝚝 𝚜𝚎𝚍𝚊𝚗𝚐 𝚙𝚛𝚘𝚜𝚎𝚜, 𝚓𝚊𝚗𝚐𝚊𝚗 𝚜𝚙𝚊𝚖 𝚐𝚞𝚢𝚜...',
    endLimit: '*𝚕𝚒𝚖𝚒𝚝 𝚜𝚞𝚍𝚊𝚑 𝚑𝚊𝚋𝚒𝚜, 𝚜𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚔𝚘𝚗𝚏𝚒𝚛𝚖𝚊𝚜𝚒 𝚘𝚠𝚗𝚎𝚛*',
    error: '*𝚏𝚒𝚝𝚞𝚛 𝚎𝚛𝚛𝚘𝚛, 𝚛𝚎𝚙𝚘𝚛𝚝 𝚝𝚘 𝚘𝚠𝚗𝚎𝚛*',
prem: '*𝚏𝚒𝚝𝚞𝚛 𝚙𝚛𝚎𝚖𝚒𝚞𝚖, 𝚜𝚒𝚕𝚊𝚑𝚔𝚊𝚗 𝚋𝚎𝚕𝚒 𝚔𝚎 𝚘𝚠𝚗𝚎𝚛*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 25,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://img.freepik.com/premium-vector/cute-smiley-robot-illustration-vector-icon-mascotflat-cartoon-design-style_461200-205.jpg'
global.isLink = `https://www.youtube.com/@olengblogetutorials`
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
