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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: undefined,
    message: "",
  });

  const updateData = ({ field, value }: { field: string; value: string }) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", purpose: undefined, message: "" });
    } else {
      alert(`Failed to send message: ${result.message}`);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4">
        <Header />
        <div className="flex flex-col pt-24 pb-12 min-h-[100vh]">
          <h1 className="py-10">Let's Collaborate!</h1>
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
              <form
                onSubmit={handleSubmit}
                className="flex-1 flex flex-col gap-4"
              >
                <h2 className="mb-4">Tell me about your vision!</h2>
                <div className="flex max-md:flex-col flex-row gap-4">
                  <input
                    required
                    placeholder="Name"
                    type="text"
                    className="flex-1 py-2 input-field"
                    onChange={(val) =>
                      updateData({
                        field: "name",
                        value: val.currentTarget.value,
                      })
                    }
                    value={formData.name}
                  />
                  <input
                    required
                    placeholder="Email"
                    type="email"
                    className="flex-1 py-2 input-field"
                    onChange={(val) =>
                      updateData({
                        field: "email",
                        value: val.currentTarget.value,
                      })
                    }
                    value={formData.email}
                  />
                </div>
                <Select
                  onValueChange={(val) =>
                    updateData({ field: "purpose", value: val })
                  }
                  value={formData.purpose}
                  required
                >
                  <SelectTrigger className="bg-white input-field py-2 w-full shadow-none">
                    <SelectValue
                      className="!text-gray-200 !placeholder-gray-200 outline-none"
                      placeholder={
                        <span className="text-gray-400">
                          How can I help you?
                        </span>
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
                  onChange={(val) =>
                    updateData({
                      field: "message",
                      value: val.currentTarget.value,
                    })
                  }
                  value={formData.message}
                />
                <button className="neon-button">Submit</button>
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
