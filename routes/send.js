var nodemailer = require('nodemailer');

module.exports = (req, res, next) => {
    try {
        let message = "";
        let random = Math.floor(100000000 + Math.random() * 900000000);
        let cust_message = `Hi,

        Thank you for contacting Protect viros.
        
        your case #REQ${random} has been registered. our team will contact you shortly.
        
        Regards
        Protectviros`
        if (req.body.location) {
            message = `Details of the user\nREQ Id: #REQ${random}\nName: ${req.body.name}\nEmail: ${req.body.email}\nPhone Number: ${req.body.phone}\nLocation: ${req.body.location}`;
        }
        else if (req.body.message) {
            message = `Query / Feedback from user \nREQ Id: #REQ${random}\nName: ${req.body.name}\nEmail: ${req.body.email}\nPhone Number: ${req.body.phone}\nLocation: ${req.body.message}`;
        }
        else {
            message = `User email for query\nREQ Id: #REQ${random}\nEmail: ${req.body.email}`
        }
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'protectviros@gmail.com',
                pass: 'ktadrtmguxvfstiz'
            }
        });

        var mailOptions = {
            from: 'protectviros@gmail.com',
            to: 'bhanurocker999@gmail.com',
            subject: 'WEBSITE SUBMISSION',
            text: message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'protectviros@gmail.com',
                pass: 'ktadrtmguxvfstiz'
            }
        });

        var mailOptions = {
            from: 'protectviros@gmail.com',
            to: req.body.email,
            subject: 'Thank you!',
            text: cust_message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.redirect('/');
    } catch (error) {
        res.redirect('/');

    }
}