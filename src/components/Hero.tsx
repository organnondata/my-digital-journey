import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait-placeholder.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 px-6 md:px-10">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="relative mx-auto max-w-6xl w-full grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-20 items-center">
        <div>
          {/* Mobile portrait — only visible on small screens, sits at the top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="md:hidden mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="size-36 sm:size-44 rounded-full overflow-hidden border-2 border-accent-vivid/40 bg-surface-elevated shadow-xl">
                <img
                  src={portrait}
                  alt="Christopher Miranda"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-2 right-2 size-3 rounded-full bg-accent-vivid ring-2 ring-background" />
              <div className="absolute -inset-3 -z-10 rounded-full bg-accent-vivid/20 blur-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8 justify-center md:justify-start"
          >
            <span className="h-px w-10 bg-accent-vivid" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Currículo · 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight text-center md:text-left"
          >
            Christopher
            <br />
            <span className="text-gradient-green">Miranda.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg md:text-2xl text-foreground/90 leading-relaxed font-light text-center md:text-left mx-auto md:mx-0"
          >
            Este é um resumo da minha trajetória profissional, apresentando os
            principais projetos, experiências e construções que desenvolvi ao
            longo dos últimos anos.
          </motion.p>

          <motion.ol
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 max-w-xl mx-auto md:mx-0 grid grid-cols-2 gap-y-3 gap-x-6 text-base md:text-lg text-foreground/85"
          >
            {[
              "Sobre",
              "Trabalho",
              "Freelas",
              "Experiências",
              "Contatos",
              "Habilidades",
            ].map((item, i) => (
              <li key={item} className="flex items-baseline gap-3">
                <span className="text-accent-vivid font-display font-bold text-lg md:text-xl tabular-nums">
                  0{i + 1}
                </span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </motion.ol>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
              href="#sobre"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent-vivid text-accent-vivid-foreground font-medium hover:glow-green transition-all"
            >
              Explorar
              <ArrowDown className="size-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-foreground hover:bg-surface-elevated transition-colors"
            >
              Entrar em contato
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden md:block"
        >
          <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-border bg-surface-elevated">
            <img
              src={portrait}
              alt="Christopher Miranda"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Currículo
                </p>
                <p className="text-sm text-foreground/90">Christopher Miranda</p>
              </div>
              <span className="size-2 rounded-full bg-accent-vivid" />
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 -z-10 size-32 rounded-full bg-accent-vivid/20 blur-3xl" />
          <div className="absolute -top-4 -right-4 -z-10 size-32 rounded-full bg-primary/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
