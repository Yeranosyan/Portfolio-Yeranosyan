"use client";

import toast from "react-hot-toast";
import Section from "@/components/layout/section";
import SubmitButton from "@/components/ui/submit-button";
import { sendEmail } from "@/server/actions/send-email";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk about the problem."
      intro={`I'm open to new opportunities and collaborations. Email me at ${site.email} or use the form.`}
    >
      <form
        className="grid max-w-3xl gap-3"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          if (data) {
            toast.success("Message sent successfully.");
          }
        }}
      >
        <label className="sr-only" htmlFor="senderEmail">
          Your email
        </label>
        <input
          id="senderEmail"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          className="field"
        />

        <label className="sr-only" htmlFor="message">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          placeholder="What are you trying to solve?"
          className="field field--area"
        />

        <div className="mt-2">
          <SubmitButton />
        </div>
      </form>
    </Section>
  );
}
