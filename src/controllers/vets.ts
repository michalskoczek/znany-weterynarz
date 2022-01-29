import { NextFunction, Request, Response } from 'express';

export const getVets = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    vets: [
      { id: 1, name: 'Yoga Vet', address: 'Warszawa' },
      { id: 2, name: 'Sfora', address: 'Warszawa' },
    ],
  });
};

export const getVet = (req: Request, res: Response, next: NextFunction) => {
  const id: string = req.params.id;
  if (!id) {
    throw new Error('This vet does not exist');
  } else {
    res.status(200).json({
      id: 1,
      name: 'Yoga Vet',
      address: 'Warszawa',
    });
  }
};

export const getVisit = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    title: 'Visit calendar',
    vet: { id: 1, name: 'Yoga Vet', address: 'Warszawa' },
  });
};

export const postBookingVisit = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const day = req.body.day;
  const time = req.body.time;
  const date = req.body.date;
  const service = req.body.service;

  res.status(201).json({
    message: 'Visit booked succesfully!',
    visit: {
      id: new Date().toISOString(),
      day: day,
      time: time,
      date: date,
      service: service,
    },
  });
};
