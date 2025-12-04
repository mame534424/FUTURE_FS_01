import React, { useState } from "react";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from "../lib/utils";
import { Toaster, toast } from "react-hot-toast";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("✅ Your message has been sent successfully!");
        e.target.reset();
      } else {
        toast.error(data.message || "❌ Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative background-secondary/30">
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Email</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="mailto:mame.534424@gmail.com"
                  >
                    mame.534424@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                    href="tel:+251953442423"
                  >
                    +2519 53442423
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Location</h4>
                  <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            {/* Social Links */}

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with me on</h4>
              <div className="flex space-x-4 justify-center">
                <a target="_blank" href="https://linkedin.com/in/mohammed-abrar-ba0291312">
                  <Linkedin />
                </a>
                <a target="_blank" href="#">
                  <Twitter />
                </a>
                <a target="_blank" href="https://github.com/mame534424">
                  <Github />
                </a>
                <a target="_blank" href="#">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-4 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="mohammed abrar"
                />

                <label htmlFor="email" className="block text-sm font-medium mb-2 mt-4">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-4 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="mame@gmail.com"
                />

                <label htmlFor="message" className="block text-sm font-medium mb-2 mt-4">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-4 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  loading ? "opacity-60 cursor-not-allowed" : ""
                )}
              >
                <Send />
                <span>{loading ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
