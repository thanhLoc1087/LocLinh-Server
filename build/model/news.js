"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.News = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let News = class News extends sequelize_typescript_1.Model {
};
exports.News = News;
News.NEWS_TABLE_NAME = "news";
News.NEWS_ID = "id";
News.NEWS_TITLE = "title";
News.NEWS_TIME = "time";
News.NEWS_DESCRIPTION = "description";
News.NEWS_LINK = "link";
exports.News = News = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: News.NEWS_TABLE_NAME
    })
], News);
