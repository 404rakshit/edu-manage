require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const OAuth2Client = new OAuth2(
  "386385378142-pai6k096iqumcev6uovds1h57o92ukq5.apps.googleusercontent.com",
  "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"
);

OAuth2Client.setCredentials({ refresh_token: "1//04N20dU5mVt7SCgYIARAAGAQSNwF-L9IryHZubnvQc8B8VUySapFa4_y-v_sKFKwiBbpabvPkRrnYKtGAATYiMQBg0PL51FqNGGc" });

exports.sendMail = async (nam, recipient) => {
  const accessToken = OAuth2Client.getAccessToken();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "devproject193@gmail.com",
      clientId: "386385378142-pai6k096iqumcev6uovds1h57o92ukq5.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: "1//04N20dU5mVt7SCgYIARAAGAQSNwF-L9IryHZubnvQc8B8VUySapFa4_y-v_sKFKwiBbpabvPkRrnYKtGAATYiMQBg0PL51FqNGGc",
      accessToken: accessToken,
    },
  });

  const mailOption = {
    from: `theDeveloper ${process.env.USER}`,
    to: recipient,
    subject: "A msg from theDeveloper",
    html: getHtml(nam),
  };

  let response = await transport.sendMail(mailOption);

  // console.log(response);
  return response;
};

function getHtml(Nam) {
  return `<body style="border: dashed 3.5px; border-radius: 14px;">
 <center>
   <h1>Your OTP is ${Nam}</h1>
 </center>
</body>`;
}
