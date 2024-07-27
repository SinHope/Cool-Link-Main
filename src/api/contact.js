import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { first_name, last_name, email, company_name, purpose, message } = req.body;

    // Configure Nodemailer
    let transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // Replace with your SMTP host
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'process.env.EMAIL_USER', // Replace with your email
        pass: 'process.env.EMAIL_PASS', // Replace with your email password
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: '"Website Contact Form" <your_email@example.com>',
        to: 'nasmerfontanilla@gmail.com',
        subject: `New Contact Form Submission from ${first_name} ${last_name}`,
        text: `You have received a new message from ${first_name} ${last_name} (${email}, ${company_name}).

Purpose of Message: ${purpose}

Message:
${message}`,
      });

      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
