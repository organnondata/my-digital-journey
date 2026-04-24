import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  MessageCircle,
  Instagram,
  Youtube,
  Sparkles,
  Quote,
  Globe,
  ArrowRight,
  Building2,
  Heart,
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
      { title: "Christopher Miranda | Currículo 2026" },
      {
        name: "description",
        content:
          "Currículo 2026 de Christopher Miranda — trajetória em marketing, tecnologia, growth e projetos digitais.",
      },
      { property: "og:title", content: "Christopher Miranda | Currículo 2026" },
      {
        property: "og:description",
        content:
          "Trajetória profissional em marketing, tecnologia e projetos digitais.",
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

const xbriAtuacoes = [
  "Estruturação da operação de marketing digital",
  "Criação de canais de aquisição (Google, YouTube, Instagram e Facebook), que anteriormente não existiam",
  "Desenvolvimento e fortalecimento do e-commerce",
  "Criação de uma equipe dedicada ao atendimento do e-commerce, devido ao aumento da demanda",
  "Apoio estratégico para fortalecimento de marca, incluindo presença no LinkedIn",
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

      {/* SOBRE — estilo chat */}
      <Section id="sobre" eyebrow="01 — Sobre">
        <div className="max-w-3xl mx-auto md:mx-0 space-y-4">
          {/* Mensagem 1 — recebida */}
          <div className="flex items-start gap-3 md:gap-4">
            <div className="size-10 md:size-11 shrink-0 rounded-full bg-accent-vivid/15 border-2 border-accent-vivid/30 flex items-center justify-center">
              <Quote className="size-4 md:size-5 text-accent-vivid" />
            </div>
            <div className="relative rounded-2xl rounded-tl-sm border-2 border-border bg-surface-elevated p-5 md:p-7 shadow-sm">
              <p className="text-lg md:text-2xl leading-relaxed font-medium">
                Minha jornada empreendedora e autônoma foi construída na venda
                dos meus próprios serviços e produtos, atuando tanto na minha
                região quanto em outros mercados.
              </p>
              <span className="block mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Christopher · sobre a trajetória
              </span>
            </div>
          </div>

          {/* Mensagem 2 — pergunta tipo chat */}
          <div className="flex items-start gap-3 md:gap-4 md:pl-14">
            <div className="rounded-2xl rounded-tl-sm border border-accent-vivid/40 bg-accent-vivid/10 p-4 md:p-5">
              <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                A seguir, os principais projetos e construções dos últimos anos —
                organizados em ordem de relevância e impacto.
              </p>
            </div>
          </div>
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
            <p>
              Fui contratado para desenvolver, sozinho, o protótipo de um
              ecossistema digital. O cliente era o responsável por levar a
              proposta ao ecossistema, e a execução completa do projeto ficou
              sob a minha responsabilidade.
            </p>
            <p>
              O objetivo era resolver um ponto central: o ecossistema já possuía
              uma moeda própria, banco, produtos e uma forte comercialização
              interna, além de alta demanda. No entanto, não existia uma
              ferramenta que conectasse esses elementos, fortalecesse a
              comunidade, incentivasse o uso da moeda e melhorasse a circulação
              de informações entre os participantes.
            </p>
          </ProjectCard>
          <ProjectCard label="Solução" title="Concepção do aplicativo." number="02">
            <p>
              A partir disso, desenvolvi sozinho todo o conceito e o protótipo
              do aplicativo — uma plataforma única que conecta comunidade,
              consumo, conteúdo e pagamento, pensada para um público acima de
              40 anos com curva de uso natural e familiar.
            </p>
            <p className="text-muted-foreground">
              A seguir, as funcionalidades estruturadas no protótipo.
            </p>
          </ProjectCard>
        </div>

        <div className="mt-8 rounded-2xl border-2 border-border bg-surface-elevated/80 p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="size-5 text-accent-vivid" />
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-vivid">
              Funcionalidades
            </span>
          </div>
          <FeatureList items={ecossistemaFeatures} />
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://achi-bilu-feed.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent-vivid text-accent-vivid-foreground font-semibold hover:glow-green transition-all"
            >
              Ver protótipo
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </Section>

      {/* FREELAS — projeto e resultado conectados */}
      <Section
        id="freela"
        eyebrow="03 — Freelas"
        title="Mentorias e estruturação digital."
      >
        {/* Beatriz Ilumina */}
        <FreelaBlock
          number="01"
          title="Beatriz Ilumina"
          subtitle="Freela mais recente · Terapeuta holística e Mãe de Santo"
          link={{
            href: "https://www.youtube.com/@Beatrizilumina",
            label: "youtube.com/@Beatrizilumina",
            icon: <Youtube className="size-4" />,
          }}
          body={
            <>
              <p>
                Realizei uma mentoria de 1 mês com foco na construção de canais
                de marketing digital e estruturação de vendas.
              </p>
              <p>Durante o período, trabalhamos:</p>
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
            </>
          }
          result="Atualmente, a cliente atua nas três frentes estruturadas e relatou aumento consistente de resultados e vendas. A agenda passou a ter preenchimento recorrente, e seguimos com consultorias pontuais para otimizações."
        />

        {/* Arazzão */}
        <div className="mt-12">
          <FreelaBlock
            number="02"
            title="Arazzão"
            subtitle="Desenvolvimento — operação digital de evento"
            link={{
              href: "https://arazzao.com",
              label: "arazzao.com",
              icon: <Globe className="size-4" />,
            }}
            body={
              <>
                <p>
                  Desenvolvimento das ferramentas de lançamento para o projeto{" "}
                  <a
                    href="https://arazzao.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent-vivid hover:underline font-semibold"
                  >
                    arazzao.com
                  </a>
                  .
                </p>
                <p>
                  Fui responsável, sozinho, por estruturar toda a captação
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
              </>
            }
            result="O primeiro evento teve alta adesão e validou a operação. Atualmente, estamos em preparação para a próxima edição."
          />
        </div>
      </Section>

      {/* CONSULTORIAS */}
      <Section
        id="consultorias"
        eyebrow="04 — Consultorias 2025"
        title="Atuação em posicionamento e canais de venda."
      >
        <p className="max-w-2xl text-lg md:text-xl text-foreground/85 leading-relaxed mb-10">
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
              className="group relative rounded-xl border-2 border-border bg-surface-elevated/80 p-6 hover:border-accent-vivid transition-colors shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Instagram className="size-5 text-accent-vivid" />
                  <span className="font-semibold text-base">{c.handle}</span>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-accent-vivid group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* XBRI — EXPERIÊNCIAS */}
      <Section id="xbri" eyebrow="05 — Experiências">
        <div className="rounded-3xl border-2 border-border bg-surface-elevated/80 overflow-hidden shadow-sm">
          {/* Header */}
          <div className="relative p-8 md:p-12 border-b-2 border-border bg-gradient-to-br from-accent-vivid/10 via-transparent to-transparent">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="size-16 md:size-20 rounded-2xl bg-accent-vivid/15 border-2 border-accent-vivid/40 flex items-center justify-center shrink-0">
                <Building2 className="size-8 md:size-10 text-accent-vivid" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-accent-vivid mb-2">
                  Empresa multinacional · Setor de pneus
                </p>
                <h3 className="text-4xl md:text-6xl font-semibold leading-none">
                  XBRI Pneus
                </h3>
                <p className="mt-3 text-base md:text-lg text-muted-foreground">
                  Sede em Ciudad del Este, Paraguai
                </p>
              </div>
            </div>
          </div>

          {/* Trajetória dentro da empresa */}
          <div className="p-8 md:p-12 grid md:grid-cols-3 gap-6 border-b-2 border-border">
            {[
              {
                step: "01",
                phase: "Início",
                desc: "Atuação na área comercial.",
              },
              {
                step: "02",
                phase: "Evolução",
                desc: "Time de vendas de grandes volumes.",
              },
              {
                step: "03",
                phase: "Liderança",
                desc: "Frente do marketing digital, com foco em crescimento das equipes.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-xl border-2 border-border bg-background/40 p-6"
              >
                <span className="font-display font-bold text-3xl text-accent-vivid tabular-nums">
                  {s.step}
                </span>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/80">
                  {s.phase}
                </p>
                <p className="mt-2 text-base md:text-lg text-foreground/90 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Narrativa da trajetória */}
          <div className="p-8 md:p-12 border-b-2 border-border bg-background/30">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-vivid mb-5">
              Trajetória na empresa
            </p>
            <div className="space-y-6 max-w-4xl">
              <p className="text-lg md:text-2xl leading-relaxed text-foreground/90">
                Iniciando na empresa pelo setor de vendas diretas, evoluí
                rapidamente para a área comercial do time de vendas de grandes
                volumes. Após alguns meses, assumi a transição para a liderança
                do marketing digital.
              </p>
              <p className="text-lg md:text-2xl leading-relaxed text-foreground/90">
                Nessa posição, assumi a frente da operação com o objetivo de
                integrar estratégias de atração e conversão para impulsionar o
                crescimento dos times de vendas, enquanto aprendia também com o
                atual CMO sobre estratégias de marketing tradicionais, mas
                poderosas.
              </p>
            </div>
          </div>

          {/* Atuações */}
          <div className="p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-vivid mb-8">
              Principais atuações
            </p>
            <FeatureList columns={1} items={xbriAtuacoes} />
          </div>

          {/* Projeto social */}
          <div className="p-8 md:p-12 border-t-2 border-border bg-gradient-to-br from-accent-vivid/5 to-transparent">
            <div className="flex items-start gap-4">
              <div className="size-11 shrink-0 rounded-full bg-accent-vivid/15 border-2 border-accent-vivid/40 flex items-center justify-center">
                <Heart className="size-5 text-accent-vivid" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-vivid mb-3">
                  Projeto social de Natal
                </p>
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                  Desenvolvi um projeto social de Natal envolvendo uma casa de
                  acolhimento de crianças em processo de adoção. A ação
                  mobilizou diferentes regiões do Paraguai, contribuindo tanto
                  para a causa quanto para a visibilidade da empresa.
                </p>
              </div>
            </div>
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
              className="rounded-2xl border-2 border-border bg-surface-elevated/80 p-8 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-vivid mb-6">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-base px-4 py-2 rounded-full border-2 border-border bg-background/40 text-foreground/90 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTATO — somente WhatsApp */}
      <Section id="contato" eyebrow="08 — Contato">
        <div className="max-w-2xl">
          <a
            href="https://wa.me/+5545988352428"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border-2 border-border bg-surface-elevated/80 p-6 md:p-8 hover:border-accent-vivid transition-colors shadow-sm"
          >
            <div className="flex items-center gap-5">
              <div className="size-14 md:size-16 rounded-full bg-accent-vivid/15 border-2 border-accent-vivid/40 flex items-center justify-center">
                <MessageCircle className="size-6 md:size-7 text-accent-vivid" />
              </div>
              <div>
                <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  WhatsApp
                </p>
                <p className="text-xl md:text-2xl font-semibold mt-1">
                  +55 45 98835-2428
                </p>
              </div>
            </div>
            <ArrowUpRight className="size-6 text-muted-foreground group-hover:text-accent-vivid group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </Section>

      <Footer />
    </main>
  );
}

interface FreelaBlockProps {
  number: string;
  title: string;
  subtitle: string;
  link: { href: string; label: string; icon: React.ReactNode };
  body: React.ReactNode;
  result: string;
}

function FreelaBlock({
  number,
  title,
  subtitle,
  link,
  body,
  result,
}: FreelaBlockProps) {
  return (
    <div className="rounded-3xl border-2 border-border bg-surface-elevated/80 overflow-hidden shadow-sm">
      {/* Cabeçalho elevado em negrito */}
      <header className="p-6 md:p-10 border-b-2 border-border bg-gradient-to-r from-accent-vivid/10 via-transparent to-transparent">
        <div className="flex items-start gap-4 md:gap-6">
          <span className="font-display font-bold text-4xl md:text-5xl text-accent-vivid tabular-nums leading-none">
            {number}
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="text-3xl md:text-5xl font-bold leading-tight">
              {title}
            </h3>
            <p className="mt-2 text-sm md:text-base font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {subtitle}
            </p>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-accent-vivid hover:underline font-semibold text-sm md:text-base"
            >
              {link.icon}
              {link.label}
            </a>
          </div>
        </div>
      </header>

      {/* Corpo + Resultado conectados */}
      <div className="grid md:grid-cols-[1.4fr_auto_1fr] gap-0">
        <div className="p-6 md:p-10 space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed">
          {body}
        </div>

        {/* Conector visual */}
        <div className="hidden md:flex items-center justify-center px-2 border-l-2 border-dashed border-border/80">
          <div className="size-10 rounded-full bg-accent-vivid/15 border-2 border-accent-vivid/40 flex items-center justify-center">
            <ArrowRight className="size-5 text-accent-vivid" />
          </div>
        </div>
        <div className="md:hidden flex items-center justify-center py-2">
          <div className="size-10 rounded-full bg-accent-vivid/15 border-2 border-accent-vivid/40 flex items-center justify-center rotate-90">
            <ArrowRight className="size-5 text-accent-vivid" />
          </div>
        </div>

        <div className="p-6 md:p-10 bg-gradient-to-br from-accent-vivid/10 to-transparent border-t-2 md:border-t-0 border-border">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-accent-vivid mb-4">
            Resultado
          </p>
          <p className="text-lg md:text-xl font-display font-medium leading-snug text-foreground">
            {result}
          </p>
        </div>
      </div>
    </div>
  );
}
