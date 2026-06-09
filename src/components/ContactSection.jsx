import React, { useState, useRef, useEffect } from "react";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from "../lib/utils";
import { Toaster, toast } from "react-hot-toast";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll('[data-animate]');
          children.forEach((child, index) => {
            child.style.animation = `fade-in-up 0.6s ease-out forwards`;
            child.style.animationDelay = `${index * 0.1}s`;
            child.style.opacity = '0';
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      console.log(import.meta.env.VITE_BACKEND_URL)
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
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
      console.log(err)
      toast.error("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 relative bg-secondary/20" ref={sectionRef}>
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="container max-w-6xl mx-auto">
        <div data-animate className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div data-animate>
              <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
            </div>
            <div className="space-y-6">
              {/* Email */}
              <div data-animate className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="p-4 rounded-lg bg-primary/15">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                    href="mailto:mame.534424@gmail.com"
                  >
                    mame.534424@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div data-animate className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="p-4 rounded-lg bg-primary/15">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                    href="tel:+251953442423"
                  >
                    +2519 53442423
                  </a>
                </div>
              </div>

              {/* Location */}
              <div data-animate className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="p-4 rounded-lg bg-primary/15">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-muted-foreground text-base">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div data-animate className="pt-8">
              <h4 className="font-bold text-lg mb-6">Connect with me</h4>
              <div className="flex space-x-4">
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/mohammed-abrar-ba0291312" 
                  className="p-3 rounded-lg bg-secondary/50 hover:bg-primary hover:scale-110 transition-all text-foreground hover:text-primary-foreground">
                  <Linkedin size={24} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="#" 
                  className="p-3 rounded-lg bg-secondary/50 hover:bg-primary hover:scale-110 transition-all text-foreground hover:text-primary-foreground">
                  <Twitter size={24} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/mame534424" 
                  className="p-3 rounded-lg bg-secondary/50 hover:bg-primary hover:scale-110 transition-all text-foreground hover:text-primary-foreground">
                  <Github size={24} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="#" 
                  className="p-3 rounded-lg bg-secondary/50 hover:bg-primary hover:scale-110 transition-all text-foreground hover:text-primary-foreground">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div data-animate className="bg-card p-8 rounded-xl shadow-lg border-2 border-border hover:border-primary/50 transition-all">
            <h3 className="text-3xl font-bold mb-8">Send Me a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background/50 focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Mohammed Abrar"
                />

                <label htmlFor="email" className="block text-sm font-semibold mb-2 mt-4">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background/50 focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="your@email.com"
                />

                <label htmlFor="message" className="block text-sm font-semibold mb-2 mt-4">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background/50 focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 text-lg",
                  loading ? "opacity-60 cursor-not-allowed" : ""
                )}
              >
                <Send size={20} />
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
