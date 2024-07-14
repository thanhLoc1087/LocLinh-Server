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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsRepository = void 0;
const News_1 = require("../model/News");
class NewsRepository {
    save(news) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield News_1.News.create({
                    title: news.title,
                    time: news.time,
                    description: news.description,
                    link: news.link,
                });
            }
            catch (err) {
                throw new Error("Failed to create news");
            }
        });
    }
    update(news) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newNews = yield News_1.News.findOne({
                    where: {
                        id: news.id,
                    },
                });
                if (!newNews) {
                    throw new Error("News not found");
                }
                newNews.title = news.title;
                newNews.time = news.time;
                newNews.description = news.description;
                newNews.link = news.link;
                yield newNews.save();
            }
            catch (err) {
                throw new Error("Failed to create news");
            }
        });
    }
    delete(newsId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newNews = yield News_1.News.findOne({
                    where: {
                        id: newsId,
                    },
                });
                if (!newNews) {
                    throw new Error("News not found");
                }
                yield newNews.destroy();
            }
            catch (err) {
                throw new Error("Failed to create news");
            }
        });
    }
    getById(newsId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const news = yield News_1.News.findOne({
                    where: {
                        id: newsId,
                    },
                });
                if (!news) {
                    throw new Error("News not found");
                }
                return news;
            }
            catch (err) {
                throw new Error("Failed to fetch news with given id: " + newsId);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const news = yield News_1.News.findAll();
            return news;
            try {
            }
            catch (err) {
                throw new Error("Failed to fetch news");
            }
        });
    }
}
exports.NewsRepository = NewsRepository;
