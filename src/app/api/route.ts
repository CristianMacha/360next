import "dotenv/config";
import { nanoid } from 'nanoid'
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { type NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_TOKEN);
const resendEmail = process.env.RESEND_EMAIL;
const destinationEmail = process.env.DESTINATION_EMAIL || "email@gmail.com";

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();
        const data = await resend.emails.send({
            from: `360vs <${resendEmail}>`,
            to: [destinationEmail],
            subject: `Contact #${nanoid(6)}`,
            react: EmailTemplate({ firstName: name }),
            text: "email",
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
