const fs = require('fs');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
DATABASE_URL = process.env.DATABASE_URL === undefined ? './bot.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
module.exports = {
    VERSION: 'V1.0.2',
    ALIVE: process.env.ALIVE || "https://user-images.githubusercontent.com/106471990/170865439-1383396c-9790-4afd-a7ab-9a8b8ccd40d4.jpg Hey {sender}, I'm alive \n Uptime: {uptime}",
    BLOCK_CHAT: process.env.BLOCK_CHAT || '',
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE) || true,
    READ_MESSAGES: convertToBool(process.env.READ_MESSAGES) || false,
    READ_COMMAND: convertToBool(process.env.READ_COMMAND) || true,
    USERNAME: process.env.USERNAME || '',
    SESSION: process.env.SESSION || '',
    RG: process.env.RG || '919074309534-1632403322@g.us',
    PASSWORD: process.env.PASSWORD || '',
    BOT_INFO: process.env.BOT_INFO || 'Anya;5az_00;2120713075515;https://user-images.githubusercontent.com/106471990/170865439-1383396c-9790-4afd-a7ab-9a8b8ccd40d4.jpg',
    RBG_KEY: process.env.RBG_KEY || '',
    ALLOWED: process.env.ALLOWED || '91,94,212',
    CHATBOT: process.env.CHATBOT || 'on',
    HANDLERS: process.env.HANDLERS || '.,',
    STICKER_DATA: process.env.STICKER_DATA,
    BOT_NAME: process.env.BOT_NAME || 'Anya',
    AUDIO_DATA: process.env.AUDIO_DATA === undefined || process.env.AUDIO_DATA === "private" ? 'ꪶ͢٭5az_00¹¹ꫂ;Anya  bot;https://user-images.githubusercontent.com/106471990/170865439-1383396c-9790-4afd-a7ab-9a8b8ccd40d4.jpg' : process.env.AUDIO_DATA,
    TAKE_KEY: process.env.TAKE_KEY || '',
    MODE: process.env.MODE || 'private',
    WARN: process.env.WARN || '4',
    ANTILINK_WARN: process.env.ANTILINK_WARN || '',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './bot.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    SUDO: process.env.SUDO || '2120713075515,0',
    LANGUAGE: process.env.LANGUAGE || 'Arabic',
    DEBUG: DEBUG
    };
