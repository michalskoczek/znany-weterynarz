exports.errorGenerator = (req, res, nex) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
};

exports.errorHandler = (error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
};
