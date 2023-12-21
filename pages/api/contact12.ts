import nodemailer from "nodemailer";
import { google } from "googleapis";
import createMail from "../../utils/createMail";

// const redirectUri = "https://developers.google.com/oauthplayground";
const appEmailAddress = "abdibacha67@gmail.com";
const googleRefreshToken =
  "1//04gECpJQcG7qRCgYIARAAGAQSNwF-L9IrvLBjL8RCE-nPK4g7JoTBDwOA_ETjKvWhyRhtu4TiqTDL2MIrJAnd5BeWgIAtuSeXaw0";

const googleClientIdMail =
  "329122866466-6j6vhnuoqbdgp1s4m3ucql12daj7pelq.apps.googleusercontent.com";

const googleClientSecretMail = "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";

const email1 = process.env.EMAIL1;
const pass = process.env.EMAIL_PASS1;

export default async function contactHandler(req: any, res: any) {
  console.log(req.body);

  if (req.method === 'POST') {
    const { name, email,phone, message  } = req.body;

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: email1,
        pass: pass,
      },
      tls: {
        rejectUnauthorized: false, // Bypass SSL certificate verification
      },
    });

    try {
      // Send mail with defined transport object
      let info = await transporter.sendMail({
        from: email,
        to: email1,
        subject: "user sent contact enquiry",
        text: message,
      });

      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error occurred:', error);
      res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
  
};

