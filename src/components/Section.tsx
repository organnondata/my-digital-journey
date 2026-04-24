import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 md:py-32 px-6 md:px-10 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-14 md:mb-20"
          >
            {eyebrow && (
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-accent-vivid" />
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent-vivid">
                  {eyebrow}
                </span>
              </div>
            )}
            {title && (
              <h2 className="text-4xl md:text-6xl font-semibold max-w-3xl leading-[1.05]">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
