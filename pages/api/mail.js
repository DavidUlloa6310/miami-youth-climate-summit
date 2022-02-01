const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function mail(req, res) {
  const body = JSON.parse(req.body);
  const msg = {
    to: "miami.ycs@gmail.com",
    from: "miami.ycs@gmail.com",
    subject: body.subject,
    text: body.message,
    html: `${body.message}<br/><h3>Sent from MiamiYouthClimateSummit.com, Sender email: ${body.email}</h3>`,
  };

  await sgMail.send(msg);
  return res.status(200).json({ status: "OK" });
}
