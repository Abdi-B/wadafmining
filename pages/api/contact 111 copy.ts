import nodemailer from "nodemailer";
import { google } from "googleapis";
import createMail from "../../utils/createMail";

const redirectUri = "https://wadafmining2.vercel.app";
const appEmailAddress = "abdibacha67@gmail.com";
const googleRefreshToken =
  "1//04gqz_k__W3HMCgYIARAAGAQSNwF-L9IrFu0mg8-zlKXGur4NpwRoDAlyeq-xGPXFvHe4egcMePsej1IxYDWLBKJdmCTYZcvdX2I";

const googleClientIdMail =
  "527486429491-8hve3j7cgtsd9hfsegfi3vq9ivlrh2kq.apps.googleusercontent.com";

const googleClientSecretMail = "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";

const email1 = process.env.EMAIL1;
const pass = process.env.EMAIL_PASS1;

export default async function contactHandler(req: any, res: any) {
  console.log(req.body);
  const { name, message, phone, email } = req.body;
  
  const data = req.body;
  console.log(data.email);
  const email2 =  data.email;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: email1,
      pass: pass,
    },
    tls: {
      rejectUnauthorized: false // Ignore SSL certificate validation
    }
  });

  const mailOptions = {
    from: 'Abdi Bacha <contactabdi.bacha@gmail.com>',
    to: email1,
  };


  if(req.method  === "POST") {
    const data = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "checking part",
        text: message,
        // html:"<h1>Test Title</h1> <p>Some body text</p>"
      });
      return res.status(200).json({success: true});
      
    } catch (error) {
      console.log(error);
      // return res.status(400).json({message: error.message });
    }

  }
  return res.status(400).json({message: "Bad request"});

  
  
};




 


