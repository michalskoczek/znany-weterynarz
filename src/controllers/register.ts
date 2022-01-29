import { NextFunction, Request, Response } from 'express';

export const getRegister = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(200).json({ title: 'Register page' });
};
