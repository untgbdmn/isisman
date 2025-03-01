"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_EMAIL_KEY);

interface EmailParams {
    email: string;
    subject: string;
    text: string;
}

export const sendEmail = async ({ email, subject, text}: EmailParams) => {
     await resend.emails.send({
        from: 'iSisman - School Management <no-reply@isisman.com>',
        to: email,
        subject: subject,
        html: text
     })
}