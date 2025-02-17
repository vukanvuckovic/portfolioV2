"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  name: string;
  email: string;
  purpose: string | undefined;
  message: string;
}

const EMPTY_FORM: FormData = { name: "", email: "", purpose: undefined, message: "" };

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData(EMPTY_FORM);
      } else {
        setStatus("error");
        setErrorMessage(result.message ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-col w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4">
        <Header />
        <div className="flex flex-col pt-24 pb-12 min-h-[100vh]">
          <h1 className="py-10">Let&apos;s Collaborate!</h1>
          <div className="flex flex-col md:flex-row justify-between min-h-[80vh] max-md:gap-8 gap-6">
            <div
              className={`md:w-2/5 max-md:h-[50vh] flex-shrink-0 flex flex-col justify-end p-6 bg-[url("/background/green-bg3.png")] bg-cover bg-center rounded-2xl overflow-hidden`}
            >
              <h2 className="max-md:!text-lg !text-xl">
                Everything starts with communication! <br />
                Feel free to <b>start the conversation</b> and ask anything.
              </h2>
            </div>
            <div className="md:w-1/2 flex-shrink-0 flex flex-col">
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
                <h2 className="mb-4">Tell me about your vision!</h2>
                <div className="flex max-md:flex-col flex-row gap-4">
                  <input
                    required
                    placeholder="Name"
                    type="text"
                    className="flex-1 py-2 input-field"
                    onChange={(e) => updateField("name", e.target.value)}
                    value={formData.name}
                  />
                  <input
                    required
                    placeholder="Email"
                    type="email"
                    className="flex-1 py-2 input-field"
                    onChange={(e) => updateField("email", e.target.value)}
                    value={formData.email}
                  />
                </div>
                <Select
                  onValueChange={(val) => updateField("purpose", val)}
                  value={formData.purpose}
                  required
                >
                  <SelectTrigger className="bg-white input-field py-2 w-full shadow-none">
                    <SelectValue
                      placeholder={
                        <span className="text-gray-400">How can I help you?</span>
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hiring">I want to hire you</SelectItem>
                    <SelectItem value="collaboration">
                      I want a collaboration with you
                    </SelectItem>
                    <SelectItem value="website">I need a website</SelectItem>
                  </SelectContent>
                </Select>
                <textarea
                  className="input-field pt-3 flex-1"
                  rows={5}
                  placeholder="Your Message"
                  required
                  onChange={(e) => updateField("message", e.target.value)}
                  value={formData.message}
                />
                {status === "success" && (
                  <span className="text-green-600 text-sm">
                    Message sent successfully!
                  </span>
                )}
                {status === "error" && (
                  <span className="text-red-500 text-sm">{errorMessage}</span>
                )}
                <button
                  className="neon-button disabled:opacity-50"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
