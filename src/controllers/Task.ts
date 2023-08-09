import { Request, Response } from 'express'

export const getTasks = (req: Request, res: Response): void => {
	res.send('Hello world')
}
