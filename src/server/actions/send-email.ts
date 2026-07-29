"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils/errors";
import ContactFormEmail from "@/emails/contact-form-email";

let client: Resend | null = null;

function getResend(): Resend | null {
  if (client) return client;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  client = new Resend(apiKey);
  return client;
}

export const sendEmail = async (FormData: FormData) => {
  const senderEmail = FormData.get("senderEmail");
  const message = FormData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const resend = getResend();

  if (!resend) {
    return {
      error: "Email is not configured — RESEND_API_KEY is missing.",
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "gagik.yeranosyan14@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    if (error) {
      return {
        error: getErrorMessage(error),
      };
    }

    return {
      data,
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
