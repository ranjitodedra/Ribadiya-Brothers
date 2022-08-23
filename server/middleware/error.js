const ErrorHander = require("../utils/errorhandlers");
const Error = require("../utils/errorhandlers");

module.exports = (err, req, res, next) => {
  err.statuscode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  if (err.name === "CastError") {
    console.log(`Resource not found. Invalid: ${err.path}`);
    err = new ErrorHander(message, 400);
  }
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHander(message, 400);
  }

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again `;
    err = new ErrorHander(message, 400);
  }

  // JWT EXPIRE error
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Try again `;
    err = new ErrorHander(message, 400);
  }

  res.status(err.statuscode).json({
    success: false,
    message: err.message,
  });
};
