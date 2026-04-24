import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Instagram,
  Youtube,
  Sparkles,
} from "lucide-react";
import ogImage from "@/assets/og-image.jpg";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { FeatureList } from "@/components/FeatureList";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Christopher Miranda | Currículo" },
      {
        name: "description",
        content:
          "Apresentação profissional e trajetória de Christopher Miranda em marketing, tecnologia e projetos digitais.",
      },
      { property: "og:title", content: "Christopher Miranda | Currículo" },
      {
        property: "og:description",
        content:
          "Apresentação profissional e trajetória em marketing, tecnologia e projetos digitais.",
      },
      { property: "og:image", content: ogImage },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
  }),
  component: Index,
});

const consultorias = [
  {
    handle: "@chantillystoreofc",
    href: "https://www.instagram.com/chantillystoreofc/",
  },
  {
    handle: "@diogodeavillavisagista",
    href: "https://www.instagram.com/diogodeavillavisagista/",
  },
  {
    handle: "@milenagiacomni",
    href: "https://www.instagram.com/milenagiacomni/",
  },
];

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />

      {/* SOBRE */}
      <Section id="sobre" eyebrow="01 — Sobre">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-20 items-start">
          <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Trajetória
          </div>
          <p className="text-2xl md:text-4xl font-display font-medium leading-[1.25] text-foreground">
            “Minha jornada empreendedora e autônoma foi construída na venda dos
            meus próprios serviços e produtos, atuando tanto na minha região
            quanto em outros mercados.”
          </p>
        </div>
      </Section>

      {/* ECOSSISTEMA */}
      <Section
        id="ecossistema"
        eyebrow="02 — Trabalho mais recente"
        title="Desenvolvimento de Ecossistema Digital."
      >
        <div className="grid lg:grid-cols-2 gap-6">
          <ProjectCard label="Contexto" title="O ponto a ser resolvido." number="01">
            <p className="leading-relaxed">
              Junto de um parceiro, desenvolvi o protótipo de um ecossistema
              digital. O ecossistema já possuía moeda própria, banco, produtos
              e forte comercialização interna, com alta demanda — mas não
              existia uma ferramenta que conectasse esses elementos,
              fortalecesse a comunidade e melhorasse a circulação de
              informações.
            </p>
          </ProjectCard>
          <ProjectCard label="Solução" title="Conceito do aplicativo." number="02">
            <p className="leading-relaxed">
              Desenvolvi todo o conceito de uma plataforma única que conecta
              comunidade, consumo, conteúdo e pagamento, pensada para um
              público acima de 40 anos com curva de uso natural e familiar.
            </p>
          </ProjectCard>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-surface-elevated/60 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="size-4 text-accent-vivid" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent-vivid">
              Funcionalidades
            </span>
          </div>
          <FeatureList
            items={[
              "Experiência estilo rede social (foco em público 40+)",
              "Feed inteligente com conteúdos e produtos",
              "E-commerce personalizado",
              "Sistema de pagamento próprio",
              "Mensagens internas",
              "Integração com YouTube e outras plataformas",
              "Sistema de bonificação",
              "Sistema de anúncios internos",
              "Rádio e mídia interna",
              "Eventos, caronas e hospedagem",
              "Login com verificação facial",
            ]}
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://achi-bilu-feed.vercel.app/feed"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent-vivid text-accent-vivid-foreground font-medium hover:glow-green transition-all"
            >
              Ver protótipo
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </Section>

      {/* FREELA */}
      <Section
        id="freela"
        eyebrow="03 — Freela mais recente"
        title="Mentoria de marketing — Beatriz Ilumina."
      >
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10">
          <ProjectCard label="Cliente" title="@Beatrizilumina" number="01">
            <a
              href="https://www.youtube.com/@Beatrizilumina"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-accent-vivid hover:underline"
            >
              <Youtube className="size-4" />
              youtube.com/@Beatrizilumina
            </a>
            <p className="leading-relaxed">
              Mentoria de 1 mês com foco em estruturação de marketing digital
              e canais de vendas.
            </p>
            <FeatureList
              columns={1}
              items={[
                "Produção de conteúdo",
                "Planejamento de postagens",
                "Conversão",
                "Tráfego pago",
                "Expansão de canais",
              ]}
            />
          </ProjectCard>
          <div className="rounded-2xl border border-accent-vivid/30 bg-gradient-to-br from-accent-vivid/10 to-transparent p-8 md:p-10 flex flex-col justify-between">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-vivid">
              Resultado
            </span>
            <p className="text-2xl md:text-3xl font-display font-medium leading-tight mt-6">
              Crescimento de vendas e agenda com alta demanda.
            </p>
          </div>
        </div>
      </Section>

      {/* ARAZZÃO */}
      <Section
        id="arazzao"
        eyebrow="04 — Projeto"
        title="Arazzão — operação digital de evento."
      >
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10">
          <ProjectCard label="Escopo" title="Estruturação completa da operação digital." number="01">
            <FeatureList
              items={[
                "Site",
                "Tráfego pago",
                "Conteúdo",
                "Checkout",
                "E-mail marketing",
                "Check-in",
                "Grupo de engajamento",
              ]}
            />
          </ProjectCard>
          <div className="rounded-2xl border border-accent-vivid/30 bg-gradient-to-br from-accent-vivid/10 to-transparent p-8 md:p-10 flex flex-col justify-between">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-vivid">
              Resultado
            </span>
            <p className="text-2xl md:text-3xl font-display font-medium leading-tight mt-6">
              Primeiro evento validado e continuidade do projeto.
            </p>
          </div>
        </div>
      </Section>

      {/* CONSULTORIAS */}
      <Section
        id="consultorias"
        eyebrow="05 — Consultorias 2025"
        title="Atuação em posicionamento e canais de venda."
      >
        <p className="max-w-2xl text-foreground/80 leading-relaxed mb-10">
          Consultorias com foco em posicionamento, canais de venda, tráfego
          pago, conteúdo e estrutura digital.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {consultorias.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-xl border border-border bg-surface-elevated/60 p-6 hover:border-accent-vivid/60 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Instagram className="size-5 text-accent-vivid" />
                  <span className="font-medium text-sm">{c.handle}</span>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-accent-vivid group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* XBRI */}
      <Section
        id="xbri"
        eyebrow="06 — Experiência profissional"
        title="XBRI Pneus."
      >
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10">
          <div>
            <p className="text-foreground/85 leading-relaxed">
              Trajetória iniciando em vendas até assumir o marketing digital
              da empresa.
            </p>
            <div className="mt-8 rounded-xl border border-accent-vivid/30 bg-accent-vivid/5 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-accent-vivid mb-2">
                Nota
              </p>
              <p className="text-sm text-foreground/90 leading-relaxed">
                Desenvolvimento de projeto social com impacto regional.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface-elevated/60 p-8 md:p-10">
            <FeatureList
              columns={1}
              items={[
                "Estruturação do marketing digital",
                "Criação de canais de aquisição",
                "Desenvolvimento do e-commerce",
                "Criação de equipe dedicada",
                "Apoio estratégico de marca",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* OUTROS */}
      <Section id="outros" eyebrow="07 — Outros projetos">
        <p className="text-2xl md:text-3xl font-display font-medium leading-snug max-w-3xl text-foreground/90">
          Participação em eventos, shows, cursos e projetos de startups como{" "}
          <span className="text-accent-vivid">VocêInvest</span>.
        </p>
      </Section>

      {/* CONTATO */}
      <Section id="contato" eyebrow="08 — Contato" title="Vamos conversar.">
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          <a
            href="https://wa.me/5545988352428"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-border bg-surface-elevated/60 p-6 hover:border-accent-vivid/60 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="size-11 rounded-full bg-accent-vivid/15 flex items-center justify-center">
                <MessageCircle className="size-5 text-accent-vivid" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Direto
                </p>
                <p className="font-medium">WhatsApp</p>
              </div>
            </div>
            <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-accent-vivid group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
          <a
            href="mailto:contato@seudominio.com"
            className="group flex items-center justify-between rounded-2xl border border-border bg-surface-elevated/60 p-6 hover:border-accent-vivid/60 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="size-11 rounded-full bg-accent-vivid/15 flex items-center justify-center">
                <Mail className="size-5 text-accent-vivid" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Formal
                </p>
                <p className="font-medium">E-mail</p>
              </div>
            </div>
            <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-accent-vivid group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
