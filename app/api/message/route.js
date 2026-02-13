import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request){
    try{
        const { name, email, message } = await request.json();

        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "krishal342@gmail.com",
            subject: `Message from portfolio site.`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`,

        })

        return NextResponse.json({success:true},{status:200});

    }catch(error){
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}