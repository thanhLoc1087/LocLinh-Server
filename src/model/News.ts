import { Column, DataType, Model, Table } from "sequelize-typescript";
import Database from "../config/database";

@Table({
    tableName: News.NEWS_TABLE_NAME
})
export class News extends Model {
    public static NEWS_TABLE_NAME = "news" as string;
    public static NEWS_ID = "id" as string;
    public static NEWS_TITLE = "title" as string;
    public static NEWS_TIME = "time" as string;
    public static NEWS_DESCRIPTION = "description" as string;
    public static NEWS_LINK = "link" as string;

    id: number | undefined;
    title: string | undefined;
    time: string | undefined;
    description: string | undefined;
    link: string | undefined;

}