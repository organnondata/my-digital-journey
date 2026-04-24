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

const ecossistemaFeatures = [
  "Experiência inspirada em redes sociais como Facebook, com foco em usabilidade para o público acima de 40 anos",
  "Feed dinâmico com mistura de notícias do ecossistema, comunicadores e produtos do e-commerce com base em interesse e comportamento do usuário",
  "Estrutura de e-commerce planejada e personalizada",
  "Sistema próprio de gateway de pagamento, com definição da jornada de compra e relacionamento com o cliente",
  "Sistema de mensagens interno",
  "Integração e automação de comunicação entre plataformas, como YouTube e o próprio aplicativo",
  "Sistema de bonificação baseado em uso, engajamento e divulgação da plataforma",
  "Estrutura de anúncios internos para priorização e destaque de produtos",
  "Sistema de mídia interna, incluindo publicidade e rádio do próprio ecossistema",
  "Módulos de eventos, caronas (estilo BlaBlaCar) e hospedagem",
  "Login com verificação facial e foco em segurança",
];

const skillsGroups = [
  {
    title: "Skills",
    items: [
      "Vendas",
      "Canais de vendas",
      "Gestão de tráfego pago",
      "Métricas e conversões personalizadas em ads",
      "SEO e SEM",
      "Produção de conteúdo",
      "Sites",
      "Gateways de pagamento",
      "E-commerce",
      "Google Ads",
      "Meta Ads",
      "TikTok Ads",
      "UX e jornada do cliente",
      "Prompts e IA",
    ],
  },
  {
    title: "Idiomas",
    items: ["Português", "Inglês", "Espanhol"],
  },
  {
    title: "Design",
    items: [
      "Web Design",
      "Photoshop",
      "Illustrator",
      "Animação",
      "Edição de vídeo",
      "UX Design",
    ],
  },
  {
    title: "Computação",
    items: ["JavaScript", "HTML", "Tailwind", "CSS", "Estudando Python"],
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

      {/* ECOSSISTEMA — TRABALHO MAIS RECENTE */}
      <Section
        id="ecossistema"
        eyebrow="02 — Trabalho mais recente"
        title="Desenvolvimento de Ecossistema Digital."
      >
        <div className="grid lg:grid-cols-2 gap-6">
          <ProjectCard label="Contexto" title="O ponto a ser resolvido." number="01">
            <p className="leading-relaxed">
              Junto de um parceiro, desenvolvi o protótipo de um ecossistema
              digital.
            </p>
            <p className="leading-relaxed">
              O objetivo do projeto era resolver um ponto central: o ecossistema
              já possuía uma moeda própria, banco, produtos e uma forte
              comercialização interna, além de alta demanda. No entanto, não
              existia uma ferramenta que conectasse esses elementos,
              fortalecesse a comunidade, incentivasse o uso da moeda e
              melhorasse a circulação de informações entre os participantes.
            </p>
          </ProjectCard>
          <ProjectCard label="Solução" title="Concepção do aplicativo." number="02">
            <p className="leading-relaxed">
              A partir disso, desenvolvi todo o conceito do aplicativo — uma
              plataforma única que conecta comunidade, consumo, conteúdo e
              pagamento, pensada para um público acima de 40 anos com curva de
              uso natural e familiar.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              A seguir, as funcionalidades estruturadas no protótipo.
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
          <FeatureList items={ecossistemaFeatures} />
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

      {/* FREELAS */}
      <Section
        id="freela"
        eyebrow="03 — Freelas"
        title="Mentorias e estruturação digital."
      >
        {/* Beatriz Ilumina */}
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10">
          <ProjectCard
            label="Cliente · Freela mais recente"
            title="Beatriz Ilumina"
            number="01"
          >
            <a
              href="https://www.youtube.com/@Beatrizilumina"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-accent-vivid hover:underline"
            >
              <Youtube className="size-4" />
              youtube.com/@Beatrizilumina
            </a>
            <p className="leading-relaxed text-muted-foreground">
              Terapeuta holística e Mãe de Santo.
            </p>
            <p className="leading-relaxed">
              Realizei uma mentoria de 1 mês com foco na construção de canais
              de marketing digital e estruturação de vendas.
            </p>
            <p className="leading-relaxed">Durante o período, trabalhamos:</p>
            <FeatureList
              columns={1}
              items={[
                "Produção e planejamento de conteúdo",
                "Organização das postagens",
                "Estratégias de conversão nas páginas",
                "Tráfego pago",
                "Expansão para outras redes além do Instagram",
              ]}
            />
          </ProjectCard>
          <div className="rounded-2xl border border-accent-vivid/30 bg-gradient-to-br from-accent-vivid/10 to-transparent p-8 md:p-10 flex flex-col justify-between">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-vivid">
              Resultado
            </span>
            <p className="text-xl md:text-2xl font-display font-medium leading-snug mt-6">
              Atualmente, a cliente atua nas três frentes estruturadas e
              relatou aumento consistente de resultados e vendas. A agenda
              passou a ter preenchimento recorrente, e seguimos com
              consultorias pontuais para otimizações.
            </p>
          </div>
        </div>

        {/* Arazzão */}
        <div className="mt-10 grid md:grid-cols-[1.2fr_1fr] gap-10">
          <ProjectCard
            label="Projeto"
            title="Arazzão — operação digital de evento."
            number="02"
          >
            <p className="leading-relaxed">
              Desenvolvimento das ferramentas de lançamento para o projeto
              <span className="text-accent-vivid"> arazzao.com</span>.
            </p>
            <p className="leading-relaxed">
              Fui responsável, junto ao time, por estruturar toda a captação
              digital do evento:
            </p>
            <FeatureList
              items={[
                "Site",
                "Tráfego pago",
                "Produção de conteúdo",
                "Checkout de pagamento",
                "E-mail marketing",
                "Sistema de check-in",
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
        eyebrow="04 — Consultorias 2025"
        title="Atuação em posicionamento e canais de venda."
      >
        <p className="max-w-2xl text-foreground/80 leading-relaxed mb-10">
          Atuação em posicionamento, canais de venda, tráfego pago e estrutura
          digital.
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

      {/* XBRI — EXPERIÊNCIAS */}
      <Section
        id="xbri"
        eyebrow="05 — Experiências"
        title="XBRI Pneus."
      >
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10">
          <div className="space-y-6">
            <p className="text-foreground/85 leading-relaxed">
              Atuei na XBRI, empresa multinacional do setor de pneus com sede
              em Ciudad del Este, Paraguai.
            </p>
            <p className="text-foreground/85 leading-relaxed">
              Iniciei na área comercial e evoluí para o marketing digital, com
              foco em crescimento dos resultados da empresa.
            </p>
            <div className="rounded-xl border border-accent-vivid/30 bg-accent-vivid/5 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-accent-vivid mb-2">
                Nota
              </p>
              <p className="text-sm text-foreground/90 leading-relaxed">
                Também desenvolvi um projeto social com foco em impacto e
                visibilidade regional.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface-elevated/60 p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
              Principais atuações
            </p>
            <FeatureList
              columns={1}
              items={[
                "Estruturação do marketing digital",
                "Criação de canais de aquisição",
                "Desenvolvimento e fortalecimento do e-commerce",
                "Criação de equipe dedicada",
                "Apoio estratégico de marca",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* OUTROS */}
      <Section id="outros" eyebrow="06 — Outros projetos">
        <p className="text-2xl md:text-3xl font-display font-medium leading-snug max-w-3xl text-foreground/90">
          Participação em eventos, cursos, shows e projetos de startups como{" "}
          <span className="text-accent-vivid">VocêInvest</span>.
        </p>
      </Section>

      {/* HABILIDADES */}
      <Section
        id="habilidades"
        eyebrow="07 — Habilidades"
        title="Conhecimentos e ferramentas."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {skillsGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-surface-elevated/60 p-8"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-accent-vivid mb-6">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full border border-border bg-background/40 text-foreground/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTATO */}
      <Section id="contato" eyebrow="08 — Contatos" title="Vamos conversar.">
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
