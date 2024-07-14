import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: News.NEWS_TABLE_NAME,
    
})
export class News extends Model {
    public static NEWS_TABLE_NAME = "TB_Van_bang_2" as string;
    public static NEWS_ID = "id" as string;
    public static NEWS_TITLE = "title" as string;
    public static NEWS_TIME = "time" as string;
    public static NEWS_DESCRIPTION = "description" as string;
    public static NEWS_LINK = "link" as string;

    // @Column({
    //     type: DataType.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    //     field: News.NEWS_ID
    // })
    // id!: number

    @Column({
        type: DataType.STRING(255),
        field: News.NEWS_TITLE,
        primaryKey: true
    })
    title!: string

    @Column({
        type: DataType.STRING(255),
        field: News.NEWS_TIME
    })
    time!: string

    @Column({
        type: DataType.STRING(255),
        field: News.NEWS_DESCRIPTION
    })
    description!: string

    @Column({
        type: DataType.STRING(255),
        field: News.NEWS_LINK
    })
    link!: string
}