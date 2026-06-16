"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Footer() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.footer
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-24 max-w-[1100px] border-t border-border px-6 pb-6 pt-6"
        >
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
                <p className="font-mono text-[0.78rem] text-text-muted">
                    &copy; 2026 Falak Naaz Fatma
                </p>
                <p className="font-mono text-[0.78rem] text-text-muted">
                    Bhopal, India
                </p>
            </div>
        </motion.footer>
    );
}