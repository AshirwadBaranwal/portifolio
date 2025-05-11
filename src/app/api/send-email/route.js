// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `Portfolio Contact Form: Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>New Message from Portfolio Contact Form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9;">
            ${message}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Failed to send email." }, { status: 500 });
  }
}
