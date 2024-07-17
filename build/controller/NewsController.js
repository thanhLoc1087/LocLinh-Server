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
const NewsRepository_1 = require("../repository/NewsRepository");
const News_1 = require("../model/News");
class NewsController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newNews = new News_1.News();
                newNews.title = req.body.title;
                newNews.time = req.body.time;
                newNews.description = req.body.description;
                newNews.link = req.body.link;
                yield new NewsRepository_1.NewsRepository().save(newNews);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created news!"
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Failed at creating news!"
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                yield new NewsRepository_1.NewsRepository().delete(id);
                res.status(201).json({
                    status: "Deleted!",
                    message: "Successfully deleted news!"
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Failed at Deleting news!"
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const news = yield new NewsRepository_1.NewsRepository().getById(id);
                res.status(201).json({
                    status: "Fetched!",
                    message: "Successfully fetched news!"
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Failed at Fetching news!"
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const news = yield new NewsRepository_1.NewsRepository().getAll();
            console.log(news);
            res.status(201).json(news);
            try {
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Failed at Fetching news!"
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const newNews = new News_1.News();
                newNews.id = id;
                newNews.title = req.body.title;
                newNews.time = req.body.time;
                newNews.description = req.body.description;
                newNews.link = req.body.link;
                yield new NewsRepository_1.NewsRepository().update(newNews);
                res.status(201).json({
                    status: "Updated!",
                    message: "Successfully updated news!"
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Failed at updating news!"
                });
            }
        });
    }
}
exports.default = new NewsController();
