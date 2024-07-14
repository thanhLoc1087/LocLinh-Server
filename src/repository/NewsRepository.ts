import { title } from "process";
import { News } from "../model/News";

interface INewsRepository {
    save(news: News): Promise<void>;
    update(news: News): Promise<void>;
    delete(newsId: number): Promise<void>;
    getById(newsId: number): Promise<News>;
    getAll(): Promise<News[]>;
}

export class NewsRepository implements INewsRepository {
    async save(news: News): Promise<void> {
        try {
            await News.create({
                title: news.title,
                time: news.time,
                description: news.description,
                link: news.link,
            })
        } catch (err) {
            throw new Error("Failed to create news");
        }
    }
    async update(news: News): Promise<void> {
        try {
            const newNews = await News.findOne({
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

            await newNews.save();
        } catch (err) {
            throw new Error("Failed to create news");
        }
    }
    async delete(newsId: number): Promise<void> {
        try {
            const newNews = await News.findOne({
                where: {
                    id: newsId,
                },
            });
            if (!newNews) {
                throw new Error("News not found");
            }

            await newNews.destroy();
        } catch (err) {
            throw new Error("Failed to create news");
        }
    }

    async getById(newsId: number): Promise<News> {
        try {
            const news = await News.findOne({
                where: {
                    id: newsId,
                },
            });
            if (!news) {
                throw new Error("News not found");
            }
            return news;
        } catch (err) {
            throw new Error("Failed to fetch news with given id: " + newsId);
        }   
    }

    async getAll(): Promise<News[]> {
        const news = await News.findAll();
        return news;
        try {
        } catch (err) {
            throw new Error("Failed to fetch news");
        }
    }
}