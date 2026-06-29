# Ailine LP Template (white-label)

Réplica da landing page de checkout da Ailine, reconstruída em **Next.js + TailwindCSS**, para uso como template.

Diferenças em relação à LP original:

- Onde a logo do cliente aparece (header e footer), há um banner **"SUA LOGO AQUI"** (`src/components/LogoPlaceholder.tsx`).
- Onde os planos são exibidos, há marcadores **"PERSONALIZE SEU PLANO"** (`src/components/Pricing.tsx`).

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
src/
  pages/
    _app.tsx        # estilos globais + <Head>
    _document.tsx   # fonte Montserrat
    index.tsx       # monta todas as seções
  components/
    LogoPlaceholder.tsx  # banner "SUA LOGO AQUI"
    HeaderNav.tsx
    Hero.tsx             # carrossel de fundo
    Benefits.tsx
    Pricing.tsx          # cards com "PERSONALIZE SEU PLANO"
    Security.tsx
    Programs.tsx
    HowItWorks.tsx
    Testimonials.tsx
    Faq.tsx
    FooterSection.tsx
    SectionHeader.tsx    # pill + título
    Reveal.tsx           # animação on-scroll
    data.ts              # textos e dados das seções
  styles/
    globals.css
```

## Personalização rápida

- **Logo:** edite `LogoPlaceholder.tsx` para inserir sua `<img>`.
- **Planos:** substitua os cards placeholder em `Pricing.tsx` pelos planos reais.
- **Cores:** ajuste a paleta em `tailwind.config.js` (navy, coral, etc.).
- **Textos/seções:** edite `src/components/data.ts`.
- **Imagens do hero:** troque as URLs em `HERO_IMAGES` (`data.ts`).
