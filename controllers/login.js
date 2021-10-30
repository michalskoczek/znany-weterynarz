exports.getLoginPage = (req, res, next) => {
  res.status(200).json({ title: 'Login page' });
};
