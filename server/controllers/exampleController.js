const exampleController = {};

exampleController.middleware = (req, res, next) => {
  console.log('Example controller reached successfully');
  return next();
};

module.exports = exampleController;
