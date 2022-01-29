import { NextFunction, Request, Response } from 'express';

export const errorGenerator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const error = new Error('Not found');
  // error.status = 404;
  next(error);
};

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
};
