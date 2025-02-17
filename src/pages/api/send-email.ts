import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, purpose, message } = req.body;

    if (!name || !email || !purpose || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL!, // Replace with your Gmail address
                pass: process.env.PASS!,   // Replace with your App Password
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`, // Sender's name and email
            to: "vukanvuckovic05@gmail.com",   // Your email address (receiver)
            subject: `New Message: ${purpose}`, // Subject line
            text: message, // Plain text body
            html: `<p>${message}</p>`, // HTML body
        });

        return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to send email" });
    }
}