"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const NewsController_1 = __importDefault(require("../controller/NewsController"));
const validate_1 = __importDefault(require("../helper/validate"));
const NewsSchema_1 = require("../schema/NewsSchema");
class NewsRouter extends BaseRouter_1.default {
    routes() {
        this.router.post("", (0, validate_1.default)(NewsSchema_1.createNewsSchema), NewsController_1.default.create),
            this.router.patch("/:id", (0, validate_1.default)(NewsSchema_1.updateNewsSchema), NewsController_1.default.update),
            this.router.delete("/:id", NewsController_1.default.delete),
            this.router.get("/:id", NewsController_1.default.findById);
        this.router.get("", NewsController_1.default.findAll);
    }
}
exports.default = new NewsRouter().router;
