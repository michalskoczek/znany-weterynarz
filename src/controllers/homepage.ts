import { NextFunction, Request, Response } from 'express';

export const getHomepage = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ title: 'Hello homepage' });
};
