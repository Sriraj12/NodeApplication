var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: 'srirajappu21@gmail.com',
        pass: ''
    }
})

var mailOptions = {
    from: 'srirajappu21@gmail.com',
    to: 'srirajappu22@gmail.com',
    subject: 'Sending mail using node',
    text: 'Hi Hello...!'
};

transporter.sendMail(mailOptions, function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log('Mail sent:' + info.response);
    }
});