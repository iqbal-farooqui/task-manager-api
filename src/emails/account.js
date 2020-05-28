const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'iqbal_af@outlook.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the task manager.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'iqbal_af@outlook.com',
        subject: 'Sorry to see you go...',
        text: `Goodbye, ${name}. Thanks for using the app!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}