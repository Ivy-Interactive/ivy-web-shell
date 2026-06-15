import { SiteHeader } from '~/components/site-header';
import { Footer } from '~/components/footer';

export default function ConstructionInspectionPage() {
  const capabilities = [
    {
      icon: '⚖️',
      title: 'Regelmotor med juridisk kontextförståelse',
      description: 'Reasoning-baserad tolkning (inte nyckelordssökning). Tar en konkret situation (t.ex. "150mm isolering, U-värde 0,18, stomme av KL-trä") och avgör överensstämmelse med BBR 29 §9:2, AMA och avtalsvillkor (AB 04 / ABT 06).',
      features: [
        'Versionshantering av regeltexter med auto-uppdatering',
        'Projektspecifik avtalsinläsning som tolkningskontext',
        'Explicit paragrafbaserad motivering för varje bedömning'
      ]
    },
    {
      icon: '📸',
      title: 'Multimodal fältanalys',
      description: 'Realtidsanalys från foto/video i fält.',
      features: [
        'Auto-matchning mot uppladdade ritningar och BIM-modell',
        'Avvikelseflaggning: sprickor, felaktig dragning, saknad tätskiktning',
        'Interaktiv begäran om kompletterande bilder',
        'Automatisk protokollänkning utan manuell taggning',
        'Offline-kapabel fältanalys'
      ]
    },
    {
      icon: '📚',
      title: 'Svensk normadapterad kunskapsbas',
      description: 'RAG-arkitektur som omfattar:',
      features: [
        'Boverket, AMA, PBL, JB-dokument',
        'Branschpraxis från Byggföretagen, RISE, SP',
        'Anpassad praxisfallsinläsning för besiktningsföretag',
        'Oskrivna konventioner: tvisthantering, försäkringskrav vid dolda fel, gränstolkningar'
      ]
    },
    {
      icon: '🌍',
      title: 'Realtids-LCA integrerat i protokollet',
      description: 'Under besiktning när material registreras:',
      features: [
        'Automatisk EPD-datahämtning',
        'Klimatpåverkan per enhet kopplat till projektdeklarationsgränser',
        'Preliminär klimatdeklarationsbas (PBL 10 kap.) genereras löpande',
        'Flaggar när materialval riskerar att missa klimatmål'
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-background px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              Det exemplariska AI-verktyget för byggbesiktning
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
              Ett intelligent system byggt kring fyra sammankopplade kärnförmågor som transformerar
              den svenska byggbesiktningsprocessen — inte som fyra separata moduler utan som ett
              enhetligt system.
            </p>
          </div>
        </section>

        {/* Capability Sections */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 md:gap-16">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex flex-col gap-6 md:flex-row md:gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent text-3xl">
                      {capability.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                      {capability.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                      {capability.description}
                    </p>
                    <div className="mt-4 space-y-2">
                      {capability.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Architecture Section */}
        <section className="border-t border-border bg-muted px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-foreground">Systemarkitektur</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              En översikt över systemets topologi och hur de olika komponenterna samverkar.
            </p>
            <div className="mt-8 rounded-lg border border-border bg-background p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full max-w-xs rounded-md border border-border bg-muted p-4 text-center">
                    <div className="font-semibold text-foreground">Fältapp</div>
                    <div className="text-xs text-muted-foreground">(offline-first, iOS/Android)</div>
                  </div>
                  <div className="h-8 w-0.5 bg-border" />
                  <div className="w-full max-w-xs rounded-md border border-accent bg-accent/10 p-4 text-center">
                    <div className="font-semibold text-foreground">Projektplattform</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-8 w-0.5 bg-border" />
                    <div className="w-full rounded-md border border-border bg-muted p-4 text-center">
                      <div className="font-semibold text-foreground">Regelmotor</div>
                      <div className="text-xs text-muted-foreground">(uppdateringsbar kunskapsbas)</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-8 w-0.5 bg-border" />
                    <div className="w-full rounded-md border border-border bg-muted p-4 text-center">
                      <div className="font-semibold text-foreground">Bildanalys-pipeline</div>
                      <div className="text-xs text-muted-foreground">(fine-tunad vision-modell)</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-8 w-0.5 bg-border" />
                    <div className="w-full rounded-md border border-border bg-muted p-4 text-center">
                      <div className="font-semibold text-foreground">LCA-kalkylator</div>
                      <div className="text-xs text-muted-foreground">(EPD-databas)</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-8 w-0.5 bg-border" />
                    <div className="w-full rounded-md border border-border bg-muted p-4 text-center">
                      <div className="font-semibold text-foreground">Rapportgenerator</div>
                      <div className="text-xs text-muted-foreground">(PDF, XML, API)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Principle Callout */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-lg border border-accent bg-accent/5 p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-2xl">
                    ⚡
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Designprincip</h3>
                  <p className="mt-2 text-muted-foreground">
                    Besiktningsmannen behåller yrkesansvaret: verktyget föreslår, motiverar och
                    flaggar, men bekräftelsen är alltid mänsklig. Detta är både etiskt korrekt
                    och juridiskt nödvändigt för ansvarsfrågor vid dolda fel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
