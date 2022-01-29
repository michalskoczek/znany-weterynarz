import { NextFunction, Request, Response } from 'express';

export const getLoginPage = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(200).json({ title: 'Login page' });
};
