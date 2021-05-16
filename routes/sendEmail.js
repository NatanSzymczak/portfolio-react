const nodemailer = require("nodemailer");
const emailFrom = 'example@domain.com';
const emailTo = 'example@domain.com';

const transporter = nodemailer.createTransport({
   service: 'Gmail',
   auth: {
      user: emailFrom,
      pass: 'password',
   }
});

const sendEmail = function (router){
   router
      .route('/sendEmail')
      .post(function(req, res, next){
         if(req.body){

            const message = {
               from: emailFrom,
               to: emailTo,
               subject: `A message from ${req.body.userName}`,
               text: req.body.userMessage,
               html: `<p>Answer to: <b>${req.body.userEmail}</b></p><p>Message: <b>${req.body.userMessage}</b></p>`
            };

            transporter.sendMail(message, function(error, success){
               if(error) {
                  res
                     .status(400)
                     .json({error: error});
               }else{
                  res
                  .status(200)
                  .json({response: success});
               }
            })
         }else{
            res
               .status(400)
               .json({error: 'No body'});
         }
      })
   return router;
}

module.exports = sendEmail;
