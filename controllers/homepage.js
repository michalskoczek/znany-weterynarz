exports.getHomepage = (req, res, next) => {
  res.status(200).json({ title: 'Hello homepage' });
};
