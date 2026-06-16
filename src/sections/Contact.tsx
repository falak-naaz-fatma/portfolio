"use client";

import { motion } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";

import { contactInfo } from "@/lib/data";
import { revealItem } from "@/lib/motion";
import { useInView } from "@/hooks/useInView";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:${contactInfo.email}?subject=Portfolio Inquiry from ${name || "Visitor"}&body=${encodeURIComponent(message || `Hi Falak,\n\nI viewed your portfolio and would like to connect.\n\n- ${name || "Visitor"} (${email || "no email"})`)}`;
    };

    const inputClass = "w-full rounded-sm border border-border bg-bg-card px-5 py-3 text-[0.95rem] text-text outline-none transition-colors placeholder:text-text-muted focus:border-accent";

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
            </div>
            <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className={`mt-4 h-40 w-full resize-y ${inputClass}`} />
            <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center rounded-sm px-8 py-3 text-[0.95rem] font-semibold transition-colors"
                style={{
                    backgroundColor: "var(--text)",
                    color: "var(--bg)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--text)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--text)";
                    e.currentTarget.style.color = "var(--bg)";
                }}
            >
                Send Message
            </button>
        </form>
    );
}

function ContactInfoColumn() {
    const ref = useRef<HTMLDivElement | null>(null);
    const { isInView, prefersReducedMotion } = useInView(ref);

    return (
        <motion.div
            ref={ref}
            initial={prefersReducedMotion ? false : "hidden"}
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
            }}
        >
            <motion.h3
                variants={revealItem}
                className="text-[1.4rem] font-bold text-text"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
                Get in touch
            </motion.h3>

            <motion.div variants={revealItem} className="mt-6">
                <span className="font-bold text-text">Email: </span>
                <a href={`mailto:${contactInfo.email}`} className="text-text-muted transition-colors hover:text-text">
                    {contactInfo.email}
                </a>
            </motion.div>

            <motion.div variants={revealItem} className="mt-4">
                <span className="font-bold text-text">Phone: </span>
                <span className="text-text-muted">{contactInfo.phone}</span>
            </motion.div>

            <motion.div variants={revealItem} className="mt-4">
                <span className="font-bold text-text">LinkedIn: </span>
                <a href="https://linkedin.com/in/falak-naaz-fatma" target="_blank" rel="noopener noreferrer" className="text-text-muted transition-colors hover:text-text">
                    {contactInfo.linkedin}
                </a>
            </motion.div>

            <motion.div variants={revealItem} className="mt-4">
                <span className="font-bold text-text">GitHub: </span>
                <a href="https://github.com/falak-naaz-fatma" target="_blank" rel="noopener noreferrer" className="text-text-muted transition-colors hover:text-text">
                    {contactInfo.github}
                </a>
            </motion.div>

            <motion.p variants={revealItem} className="mt-6 max-w-[320px] text-[0.95rem] leading-relaxed text-text-muted">
                Open to full-time roles and interesting projects. Feel free to reach out — I usually respond within 24hrs.
            </motion.p>
        </motion.div>
    );
}

export function Contact() {
    const ref = useRef<HTMLElement | null>(null);
    const { isInView, prefersReducedMotion } = useInView(ref);

    return (
        <section ref={ref} id="contact" className="mx-auto max-w-[1100px] px-6" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
            <motion.h2
                initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4 text-[3rem] font-bold text-text"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
                Contact Me
            </motion.h2>

            <div className="mb-12 h-px w-full bg-border" />

            <div className="grid gap-12 md:grid-cols-[40%_60%]">
                <ContactInfoColumn />
                <ContactForm />
            </div>
        </section>
    );
}