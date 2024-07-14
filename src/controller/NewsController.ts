import { Request, Response } from "express";
import { NewsRepository } from "../repository/NewsRepository";
import { News } from "../model/News";

class NewsController {
    async create(req: Request, res: Response) {
        try {
            const newNews = new News();
            newNews.title = req.body.title;
            newNews.time = req.body.time;
            newNews.description = req.body.description;
            newNews.link = req.body.link;

            await new NewsRepository().save(newNews);

            res.status(201).json({
                status: "Created!",
                message: "Successfully created news!"
            });
        } catch(err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Failed at creating news!"
            });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            let id = parseInt(req.params["id"]);
            await new NewsRepository().delete(id);

            res.status(201).json({
                status: "Deleted!",
                message: "Successfully deleted news!"
            });
        } catch(err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Failed at Deleting news!"
            });
        }
    }

    async findById(req: Request, res: Response) {
        try {
            let id = parseInt(req.params["id"]);
            const news = await new NewsRepository().getById(id);

            res.status(201).json({
                status: "Fetched!",
                message: "Successfully fetched news!"
            });
        } catch(err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Failed at Fetching news!"
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const news = await new NewsRepository().getAll();
            
            res.status(201).json({
                status: "Fetched!",
                message: "Successfully fetched all news!"
            });
        } catch(err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Failed at Fetching news!"
            });
        }
    }

    async update(req: Request, res: Response) {
        try {
            let id = parseInt(req.params["id"]);
            const newNews = new News();
            newNews.id = id;
            newNews.title = req.body.title;
            newNews.time = req.body.time;
            newNews.description = req.body.description;
            newNews.link = req.body.link;

            await new NewsRepository().update(newNews);

            res.status(201).json({
                status: "Updated!",
                message: "Successfully updated news!"
            });
        } catch(err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Failed at updating news!"
            });
        }
    }
}

export default new NewsController()