import nodemailer from "nodemailer";
import { google } from "googleapis";
import createMail from "../../utils/createMail";


// const redirectUri = "https://wadafmining5.vercel.app";
const redirectUri = "https://developers.google.com/oauthplayground";
// const redirectUri = "http://localhost:3000";
const appEmailAddress = "abdibacha67@gmail.com";
const googleRefreshToken =
  "1//04XyD4Ko7JSKECgYIARAAGAQSNwF-L9IrI14lwF3Pb-oxzOjG7ypeDVLbgwAzoygRI9qZsCQQ4xQL_RaU_6vZ3ItVQBi7E51PYa0";

const googleClientIdMail =
  "329122866466-e60bpoeqtf4ttfvmgeln7g6knk8btatd.apps.googleusercontent.com";

const googleClientSecretMail = "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";

const AuthorizationCode = "4/0AfJohXm1_bDFGIhUbftlYD5UJ-JUvzpmTspwaC3jgvYSQnDzQ2q2kszJpmhgRXMfeH5MvA";

export default async function contactHandler(req: any, res: any) {
  console.log(req.body);
  const { name, message, phone, email } = req.body;

  const emailTemplate = createMail({ name, phone, message, email });

  // nodeMailerVerify();

  const messageToSend = {
    from: email,
    to: appEmailAddress,
    subject: "user sent contact enquiry",
    text: req.body.message,
    html: emailTemplate,
  };

  const mailer = await getMailer();
  const messageSent = await mailer.sendMail(messageToSend);

  if (messageSent) res.json("message sent successfully");
}

const getMailer = async () => {
  const OAuth2Client = new google.auth.OAuth2({
    clientId: googleClientIdMail,
    clientSecret: googleClientSecretMail,
    redirectUri: redirectUri,
  });

  OAuth2Client.setCredentials({ refresh_token: googleRefreshToken });

  const accessToken = await new Promise((resolve, reject) => {
    OAuth2Client.getAccessToken((err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });

  const config: any = {
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: appEmailAddress,
      accessToken,
      clientId: googleClientIdMail,
      clientSecret: googleClientSecretMail,
      refreshToken: googleRefreshToken,
    },
    tls: {
      rejectUnauthorized: false // Ignore SSL certificate validation
    }
  };

  const mailer = nodemailer.createTransport(config);

  return mailer;
};

// old

// const nodeMailerVerify = async () => {
//   const Mailer = await getMailer();
//   Mailer.verify((err) => {
//     if (err) {
//       console.error(
//         `[Nodemailer Loader] Verifying mailing account failed: ${err}`
//       );
//     }
//     console.info(`[Nodemailer] Ready to send messages`);
//   });
// };
