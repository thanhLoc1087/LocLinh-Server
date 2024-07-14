
import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { News } from "../model/News";
dotenv.config(); 

class Database {
    public sequelize: Sequelize | undefined;
    private POSTGRES_DB = process.env.POSTGRES_DB as string;
    private POSTGRES_HOST = process.env.POSTGRES_HOST as string;
    private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number;
    private POSTGRES_USER = process.env.POSTGRES_USER as string;
    private POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string;

    constructor() {
        this.connectToPostgreSQL();
    }

    private async connectToPostgreSQL() {
        this.sequelize = new Sequelize(
            this.POSTGRES_DB,
            this.POSTGRES_USER, 
            this.POSTGRES_PASSWORD,
            {
                host: this.POSTGRES_HOST,
                port: this.POSTGRES_PORT,
                dialect: "postgres",
                models: [News],
                define: {
                    createdAt: false,
                    updatedAt: false,
                },
        });

        this.sequelize
            .authenticate()
            .then(() => {
                console.log(
                    "✅ PostgreSQL Connection has been established successfully."
                );
            })
            .catch((err) => {
                console.log(
                    "❌ Unable to connect to PostgreSQL database", err
                );
            })
    }
}

export default Database;