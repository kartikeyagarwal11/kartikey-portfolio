"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

// EmailJS configuration - replace with your actual values
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export function ContactForm({
  title = "Get In Touch",
  subtitle = `Open to product, strategy, and early-stage startup roles. If you'd like to collaborate or discuss opportunities, feel free to reach out.`,
  compact = false,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_company: formData.company,
          message: formData.message,
          to_email: "sbikartikey0911@gmail.com",
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSuccess(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className={`mx-auto w-full max-w-2xl ${compact ? "py-8" : "py-12 px-6"}`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div
          className={`grid gap-4 ${compact ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 md:grid-cols-2"}`}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-muted-foreground mb-2"
            >
              Name *
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="h-12"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-muted-foreground mb-2"
            >
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="h-12"
              placeholder="your@email.com"
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-muted-foreground mb-2"
            >
              Company / Organization (optional)
            </label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="h-12"
              placeholder="Your company (optional)"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-muted-foreground mb-2"
          >
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            placeholder="Tell me about your project or opportunity..."
            className="min-h-[120px]"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
          <Button
            type="submit"
            disabled={loading || success}
            className="w-full sm:w-auto min-h-[44px] flex items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : success ? (
              <>
                <CheckCircle className="h-4 w-4" />
                Sent successfully
              </>
            ) : (
              "Send Message"
            )}
          </Button>

          {success && (
            <p className="text-sm text-muted-foreground">
              I'll get back to you soon!
            </p>
          )}
        </div>
      </form>

      {error && (
        <div className="mt-6 p-4 border border-destructive/30 bg-destructive/5 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
            <p className="text-sm text-destructive">{error}</p>
          </div>
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          Or email directly:{" "}
          <Link
            href="mailto:sbikartikey0911@gmail.com"
            className="text-accent hover:text-accent/80 font-medium underline"
          >
            sbikartikey0911@gmail.com
          </Link>
        </p>
      </div>
    </div>
  );
}
