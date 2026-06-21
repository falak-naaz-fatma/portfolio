import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required." }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["falaknaazfatma26@gmail.com"],
            replyTo: email,
            subject: `Portfolio Inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (error) {
            return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }
}