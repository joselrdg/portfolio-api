const createError = require("http-errors");
const nodemailer = require("nodemailer");
// const { getMaxListeners } = require("../app");
const { sendActivationEmail } = require("../config/mailer.config")

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.NM_USER ,
        pass: process.env.NM_PASSWORD
    }
})

module.exports.getAll = (req, res, next) => {
  console.log('-- getAll');
  console.log(req.body)
  console.log('-- getAll');
  res.json('ok');
};

module.exports.doEmail = (req, res, next) => {
  console.log('-- doEmail');
  console.log(req.body)
  console.log('-- doEmail');

  // sendActivationEmail(req.body)
  res.json('ok');
};

