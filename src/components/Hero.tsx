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

      <div className="relative mx-auto max-w-6xl w-full grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-vivid opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-vivid" />
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Disponível para projetos · 2025
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight"
          >
            Seu Nome.
            <br />
            <span className="text-gradient-green">Marketing,</span>
            <br />
            Growth & Tecnologia.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Construo operações digitais e ecossistemas para marcas, eventos e
            criadores. Vendas, conteúdo, tráfego e produto — em um só fluxo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#ecossistema"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent-vivid text-accent-vivid-foreground font-medium hover:glow-green transition-all"
            >
              Ver experiência
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
              alt="Foto profissional (placeholder)"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Foto</p>
                <p className="text-sm text-foreground/90">Substituir placeholder</p>
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
