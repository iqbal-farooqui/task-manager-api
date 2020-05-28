const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'iqbal_af@outlook.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'iqbal_af@outlook.com',
        subject: 'Why you leave us?',
        text: `${name}, bruh... why did you leave? `
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}