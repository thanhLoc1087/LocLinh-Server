import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

const validate = (schema: AnyZodObject) => 
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            })
            return next()
        } catch (err: any) {
            const errorMessage = JSON.parse(err.message);
            return res.status(400).json({
                status: "Bad request!",
                message: errorMessage[0].message,
            })
        }
    }

export default validate;