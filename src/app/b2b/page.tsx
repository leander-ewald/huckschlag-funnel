import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Package,
  Cpu,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin,
  Quote,
  CheckCircle2,
  Handshake,
  Bot,
  Rocket,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-[100dvh] bg-white">
      {/* ── NAVIGATION ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-blue/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/huckschlag-logo-white.svg"
              alt="Spedition Huckschlag"
              width={180}
              height={36}
              className="h-8 sm:h-9 w-auto"
              priority
            />
          </Link>
          <Link
            href="/b2b/anfrage"
            className="bg-green hover:bg-green-dark text-white text-sm font-semibold px-5 py-3 rounded-full transition-all shadow-lg shadow-green/25 hover:shadow-green/40"
          >
            Jetzt starten
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-blue to-blue-dark pt-24 pb-14 sm:pt-36 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-green/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-green text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
              Kontraktlogistik &amp; Warehousing aus einer Hand
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Finde in nur 60 Sekunden deine passende Logistikl&ouml;sung
            </h1>
            <p className="text-white/70 text-base sm:text-lg mb-8 max-w-xl">
              Von der Bestandsverwaltung &uuml;ber die Einlagerung bis zum Versand &ndash; wir &uuml;bernehmen deine komplette Logistik. Modern, zuverl&auml;ssig und skalierbar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/b2b/anfrage"
                className="inline-flex items-center justify-center gap-2 bg-green hover:bg-green-dark text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-green/25 hover:shadow-green/40 text-sm sm:text-base"
              >
                Logistikl&ouml;sung finden
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+4923739782"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" />
                +49 2373 9782 0
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-3xl sm:text-4xl font-bold text-green mb-1">80.000</p>
              <p className="text-white/60 text-sm">Paletten Lagerkapazit&auml;t</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-3xl sm:text-4xl font-bold text-green mb-1">145</p>
              <p className="text-white/60 text-sm">Engagierte Mitarbeitende</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-3xl sm:text-4xl font-bold text-green mb-1">40+</p>
              <p className="text-white/60 text-sm">Jahre Erfahrung</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VORTEILE ── */}
      <section className="py-12 sm:py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="text-green text-xs font-semibold uppercase tracking-wider mb-3">
              Deine Vorteile
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-4">
              Logistik, Versand &amp; Fulfillment. Aber richtig.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Mit einer Kombination aus modernsten Lagertechnologien und langj&auml;hriger Erfahrung bieten wir ma&szlig;geschneiderte L&ouml;sungen f&uuml;r dein Unternehmen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Komplette Logistiklösungen */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-8 hover:border-green/30 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                <Handshake className="w-7 h-7 text-green" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Komplette Logistikl&ouml;sungen</h3>
              <p className="text-gray-400 text-sm mb-5">
                Von der Bestandsverwaltung &uuml;ber die Einlagerung bis hin zum Paket- und Speditionsversand.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Bestandsverwaltung &amp; Einlagerung
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Kommissionierung &amp; Verpackung
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Paket- &amp; Speditionsversand
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Retourenmanagement
                </li>
              </ul>
            </div>

            {/* AutoStore */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-8 hover:border-green/30 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                <Bot className="w-7 h-7 text-green" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">AutoStore-System</h3>
              <p className="text-gray-400 text-sm mb-5">
                Automatisierte Kommissionierung, bei der Roboter kompakt und effizient durch ein Gitterraster navigieren.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  10.000+ Beh&auml;lter
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Maximale Lagerdichte
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Minimale Fehlerquote
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Skalierbar nach Bedarf
                </li>
              </ul>
            </div>

            {/* Zentraler Standort */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-8 hover:border-green/30 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                <Rocket className="w-7 h-7 text-green" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Zentrale Lage</h3>
              <p className="text-gray-400 text-sm mb-5">
                Zentral gelegene Lager- und Logistikfl&auml;chen in Fr&ouml;ndenberg, optimal f&uuml;r schnelle Transporte angebunden.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Standorte in Fr&ouml;ndenberg &amp; Arnsberg
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Optimale Verkehrsanbindung
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  &gt;50.000 qm Lagerfl&auml;che
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Mittelst&auml;ndische Flexibilit&auml;t
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCHRITTE ── */}
      <section className="py-12 sm:py-20 md:py-28 bg-gradient-to-br from-blue to-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 -right-48 w-[600px] h-[600px] bg-green/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="text-green text-xs font-semibold uppercase tracking-wider mb-3">
              So funktioniert&apos;s
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              In 3 Schritten zur Logistikl&ouml;sung
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 text-center">
              <div className="w-14 h-14 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-green font-bold text-xl">1</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Beantworte 6 Fragen</h3>
              <p className="text-white/60 text-sm">
                Schildere in nur 60 Sekunden deine Anforderungen &amp; Herausforderungen rund um Logistik, Lagerung oder Versand.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 text-center">
              <div className="w-14 h-14 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-green font-bold text-xl">2</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Kostenloses Erstgespr&auml;ch</h3>
              <p className="text-white/60 text-sm">
                Wir analysieren gemeinsam deinen aktuellen Logistikbedarf und zeigen dir klare Optimierungsm&ouml;glichkeiten auf.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 text-center">
              <div className="w-14 h-14 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-green font-bold text-xl">3</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Individuelles Konzept</h3>
              <p className="text-white/60 text-sm">
                Du erh&auml;ltst ein ma&szlig;geschneidertes Logistikkonzept mit effizienten Lagerprozessen und modernen Technologien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÜBER UNS ── */}
      <section className="py-12 sm:py-20 md:py-28 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="text-green text-xs font-semibold uppercase tracking-wider mb-3">
              Erfahrung &amp; Kompetenz
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-4">
              Wir haben Erfahrung
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Huckschlag ist seit mehr als 40 Jahren erfahren in der Logistik, im Versand sowie der gesamten Supply Chain. Wir sind dein verl&auml;sslicher Partner &ndash; heute und in Zukunft.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 text-center border border-gray-200 shadow-sm">
              <Clock className="w-8 h-8 text-green mx-auto mb-3" />
              <p className="text-3xl sm:text-4xl font-bold text-dark mb-1">40+</p>
              <p className="text-gray-400 text-sm">Jahre Erfahrung</p>
            </div>
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 text-center border border-gray-200 shadow-sm">
              <Users className="w-8 h-8 text-green mx-auto mb-3" />
              <p className="text-3xl sm:text-4xl font-bold text-dark mb-1">145</p>
              <p className="text-gray-400 text-sm">Mitarbeitende</p>
            </div>
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 text-center border border-gray-200 shadow-sm">
              <Package className="w-8 h-8 text-green mx-auto mb-3" />
              <p className="text-3xl sm:text-4xl font-bold text-dark mb-1">80.000</p>
              <p className="text-gray-400 text-sm">Paletten Kapazit&auml;t</p>
            </div>
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 text-center border border-gray-200 shadow-sm">
              <Cpu className="w-8 h-8 text-green mx-auto mb-3" />
              <p className="text-3xl sm:text-4xl font-bold text-dark mb-1">10.000</p>
              <p className="text-gray-400 text-sm">AutoStore Beh&auml;lter</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-12 sm:py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 border border-gray-200 shadow-sm text-center">
            <Quote className="w-10 h-10 text-green/30 mx-auto mb-6" />
            <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-dark font-medium leading-relaxed mb-6 sm:mb-8">
              &bdquo;Die Auslagerung der Logistik hat unsere Abl&auml;ufe sp&uuml;rbar vereinfacht und Skalierung erm&ouml;glicht. Zuverl&auml;ssigkeit, Struktur und Professionalit&auml;t standen jederzeit im Fokus &ndash; genau das, was wir von einem Logistikpartner erwarten.&ldquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-blue/10 rounded-full flex items-center justify-center overflow-hidden p-2">
                <Image
                  src="/huckschlag-logo.svg"
                  alt="Huckschlag"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-dark">Sebastian Lehnert</p>
                <p className="text-gray-400 text-sm">Gesch&auml;ftsf&uuml;hrer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-12 sm:py-20 md:py-28 bg-gradient-to-br from-blue to-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Bereit f&uuml;r die n&auml;chste Stufe?
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Finde in nur 60 Sekunden heraus, welche Logistikl&ouml;sung perfekt zu deinem Unternehmen passt.
          </p>
          <Link
            href="/b2b/anfrage"
            className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-white font-semibold px-10 py-4 rounded-full transition-all shadow-lg shadow-green/25 hover:shadow-green/40 text-base sm:text-lg"
          >
            In 60 Sekunden zur Logistikl&ouml;sung
            <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Kostenlos
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Unverbindlich
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              In 60 Sekunden
            </span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-dark py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
            <div>
              <div className="mb-4">
                <Image
                  src="/huckschlag-logo-white.svg"
                  alt="Spedition Huckschlag"
                  width={200}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-white/40 text-sm">
                Die Logistikmacher seit &uuml;ber 40 Jahren. Kontraktlogistik, Warehousing und E-Commerce Fulfillment aus Fr&ouml;ndenberg/Ruhr.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white/40 text-sm">
                  <Phone className="w-4 h-4 text-green flex-shrink-0" />
                  <a href="tel:+4923739782" className="hover:text-white transition-colors">+49 2373 9782 0</a>
                </li>
                <li className="flex items-center gap-2 text-white/40 text-sm">
                  <Mail className="w-4 h-4 text-green flex-shrink-0" />
                  <a href="mailto:info@huckschlag-transporte.de" className="hover:text-white transition-colors">info@huckschlag-transporte.de</a>
                </li>
                <li className="flex items-start gap-2 text-white/40 text-sm">
                  <MapPin className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  <span>Landstr. 2, D-58730 Fr&ouml;ndenberg</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://huckschlag-transporte.de/datenschutz" className="text-white/40 text-sm hover:text-white transition-colors">Datenschutz</a>
                </li>
                <li>
                  <a href="https://huckschlag-transporte.de/impressum" className="text-white/40 text-sm hover:text-white transition-colors">Impressum</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/30 text-xs">
              &copy; {new Date().getFullYear()} Spedition Huckschlag GmbH. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
