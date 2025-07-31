// app/api/sendmail/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, email, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `New message from ${firstName} ${lastName}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(JSON.stringify({ message: 'Email sending failed', error: error.message }), {
      status: 500,
    });
  }
}
