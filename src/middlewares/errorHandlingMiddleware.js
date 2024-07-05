
/* eslint-disable no-unused-vars */


// Middleware xử lý lỗi tập trung trong ứng dụng Back-end NodeJS (ExpressJS)
 const errorHandlingMiddleware = (err, req, res, next) => {

  return res.render("404Page.ejs")

}
module.exports = errorHandlingMiddleware