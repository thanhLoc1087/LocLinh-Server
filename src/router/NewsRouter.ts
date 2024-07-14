import BaseRouter from "./base/BaseRouter";
import NewsController from "../controller/NewsController";
import validate from "../helper/validate";
import { createNewsSchema, updateNewsSchema } from "../schema/NewsSchema";

class NewsRouter extends BaseRouter {
    public routes(): void {
        this.router.post(
            "", 
            validate(createNewsSchema),
            NewsController.create
        ),
        this.router.patch(
            "/:id", 
            validate(updateNewsSchema),
            NewsController.update),
        this.router.delete("/:id", NewsController.delete),
        this.router.get("/:id", NewsController.findById)
        this.router.get("", NewsController.findAll)
    }
}

export default new NewsRouter().router