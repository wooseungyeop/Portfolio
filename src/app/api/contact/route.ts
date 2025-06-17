// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
      
    },
  });
  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: "Portfolio Contact",
      text: message,
    });

    return NextResponse.json({ message: "메일 전송 성공!" });
  } catch (error) {
    return NextResponse.json({ error: "메일 전송 실패" }, { status: 500 });
  }
}
