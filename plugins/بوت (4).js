import cheerio from 'cheerio';
import fetch from 'node-fetch';
import moment from 'moment';

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    if (!text) return m.reply("مرحبًا، كيف يمكنني مساعدتك اليوم؟");

    try {
        await m.reply("يرجى الانتظار...");

        const result = await CleanDx(text);
        await m.reply(result);
    } catch (error) {
        console.error(error);
        await m.reply("حدث خطأ أثناء معالجة الطلب. يرجى المحاولة مرة أخرى لاحقًا.");
    }
};

handler.help = ["cleandx"];
handler.tags = ["internet"];
handler.command = /^(dx|bot|بوت|vcv)$/i;
export default handler;

async function CleanDx(your_qus) {
    const linkaiList = [];
    const linkaiId = generateRandomString(21);
    const Baseurl = "https://vipcleandx.xyz/";

    linkaiList.push({
        content: your_qus,
        role: "user",
        nickname: "",
        time: formatTime(),
        isMe: true
    });

    linkaiList.push({
        content: "جاري التفكير...",
        role: "assistant",
        nickname: "AI",
        time: formatTime(),
        isMe: false
    });

    const response = await fetch(`${Baseurl}v1/chat/gpt/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Forwarded-For": generateRandomIP(),
            "Referer": Baseurl,
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "ar"
        },
        body: JSON.stringify({
            list: linkaiList,
            id: linkaiId,
            title: your_qus,
            prompt: "",
            temperature: 0.5,
            models: "0",
            continuous: true
        })
    });

    if (!response.ok) throw new Error('فشل في جلب البيانات من واجهة برمجة التطبيقات CleanDx');
    return await response.json(); // يفترض أن API يعيد JSON
}

function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
}

function generateRandomIP() {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
}

function formatTime() {
    return moment().format('HH:mm:ss');
}
