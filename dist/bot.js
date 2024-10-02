"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const bot = new grammy_1.Bot("326013551:AAHEpSlARXSVaeqCOHCZn8I_uwyhjcLrLmw");
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.on("message:text", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(ctx);
    function query(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("https://munasarr-f4.hf.space/api/v1/prediction/a03228f6-a819-4e57-ba57-a1fc3dbfab73", {
                headers: {
                    Authorization: "Bearer DvuY3i4p_2YQ8ibhKrMZ_kH4QHDQU7fgfoNhHs8BuCc",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(data)
            });
            const result = yield response.json();
            return result;
        });
    }
    query({ "question": ctx.message.text }).then((response) => {
        console.log(response);
        ctx.reply(response.text);
    });
}));
bot.start();
