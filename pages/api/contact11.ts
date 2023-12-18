import nodemailer from "nodemailer";
import { google } from "googleapis";
import createMail from "../../utils/createMail";

// const redirectUri = "https://wadafmining2.vercel.app";
// const appEmailAddress = "abdibacha67@gmail.com";
// const googleRefreshToken =
//   "1//04gqz_k__W3HMCgYIARAAGAQSNwF-L9IrFu0mg8-zlKXGur4NpwRoDAlyeq-xGPXFvHe4egcMePsej1IxYDWLBKJdmCTYZcvdX2I";

// const googleClientIdMail =
//   "527486429491-8hve3j7cgtsd9hfsegfi3vq9ivlrh2kq.apps.googleusercontent.com";

// const googleClientSecretMail = "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";

const email1 = process.env.EMAIL1;
const pass = process.env.EMAIL_PASS1;


const REFRESH_TOKEN1 = "1//04gECpJQcG7qRCgYIARAAGAQSNwF-L9IrvLBjL8RCE-nPK4g7JoTBDwOA_ETjKvWhyRhtu4TiqTDL2MIrJAnd5BeWgIAtuSeXaw0";
const redirectUri1 = "https://developers.google.com/oauthplayground";
const clientID = "329122866466-6j6vhnuoqbdgp1s4m3ucql12daj7pelq.apps.googleusercontent.com";
const clientSecret = "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";
const Authorization_Code = "4/0AfJohXm8u1TLrinB8cF8R8WD_EU6LqX5LIbKcEMkfwO7tUvB67B2YQhifmjolv_Jb3bDjQ";


const OAuth2Client = new google.auth.OAuth2(clientID,clientSecret,redirectUri1);
OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN1 });

export default async function contactHandler(req: any, res: any) {
  console.log(req.body);
  const data = req.body;
  const email2 =  data.email;
  console.log(email2);
  
  
  try {

  // const accessToken = await OAuth2Client.getAccessToken()
   const accessToken = await new Promise((resolve, reject) => {
    OAuth2Client.getAccessToken((err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: email1,
      clientId: clientID,
      clientSecret: clientSecret,
      refreshToken: REFRESH_TOKEN1,
      // accessToken: accessToken,
    }
  })

  // const mailOptions = {
  //   from: email2,
  //   to: email1,
  //   subject: "user sent contact enquiry",
  //   text: req.body.message,
  //   html: '<h1>ssssssssss</h1>',
  // };

  } catch (error) {
    return error
    
  }
}