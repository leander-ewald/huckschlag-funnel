import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShoppingCart,
  Building2,
  Rocket,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
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
          <a
            href="tel:+4923739782"
            className="bg-green hover:bg-green-dark text-white text-sm font-semibold px-5 py-3 rounded-full transition-all shadow-lg shadow-green/25 hover:shadow-green/40"
          >
            <Phone className="w-4 h-4 inline mr-1.5 -mt-0.5" />
            Anrufen
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-blue to-blue-dark pt-24 pb-14 sm:pt-36 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-green/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-green text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            Spedition Huckschlag &ndash; Seit &uuml;ber 40 Jahren
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Finde in nur 60 Sekunden deine passende Logistikl&ouml;sung
          </h1>
          <p className="text-white/70 text-base sm:text-lg mb-4 max-w-2xl mx-auto">
            Egal ob E-Commerce Fulfillment, Kontraktlogistik oder Startup-Versand &ndash; w&auml;hle den passenden Funnel f&uuml;r dein Unternehmen.
          </p>
        </div>
      </section>

      {/* ── FUNNEL CARDS ── */}
      <section className="py-12 sm:py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="text-green text-xs font-semibold uppercase tracking-wider mb-3">
              W&auml;hle deinen Bereich
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-4">
              Welche L&ouml;sung passt zu dir?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Beantworte wenige Fragen und erhalte ein ma&szlig;geschneidertes Angebot &ndash; kostenlos und unverbindlich.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* B2B-zu-B2C / Logistikpartner */}
            <Link
              href="/b2b-zu-b2c"
              className="group bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-green/40 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                <ShoppingCart className="w-7 h-7 text-green" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">B2B-zu-B2C Fulfillment</h3>
              <p className="text-gray-400 text-sm mb-5">
                F&uuml;r etablierte Unternehmen, die ihren kompletten Versand auslagern m&ouml;chten &ndash; vom Wareneingang bis zur Zustellung.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  AutoStore-System &amp; modernste Lagertechnik
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Same-Day &amp; Next-Day Versand
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  9 Fragen &ndash; ca. 90 Sekunden
                </li>
              </ul>
              <span className="inline-flex items-center gap-2 text-green font-semibold text-sm group-hover:gap-3 transition-all">
                Logistikl&ouml;sung finden
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* B2B */}
            <Link
              href="/b2b"
              className="group bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-green/40 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                <Building2 className="w-7 h-7 text-green" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">B2B Logistik</h3>
              <p className="text-gray-400 text-sm mb-5">
                F&uuml;r wachstumsorientierte Unternehmen, die ihre Kapazit&auml;ten erweitern oder Versandkosten optimieren m&ouml;chten.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Kontraktlogistik &amp; Warehousing
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Transport- &amp; Distributionsl&ouml;sungen
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  6 Fragen &ndash; ca. 60 Sekunden
                </li>
              </ul>
              <span className="inline-flex items-center gap-2 text-green font-semibold text-sm group-hover:gap-3 transition-all">
                Unternehmensanalyse starten
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Startup */}
            <Link
              href="/startup"
              className="group bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-green/40 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                <Rocket className="w-7 h-7 text-green" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Startup Fulfillment</h3>
              <p className="text-gray-400 text-sm mb-5">
                F&uuml;r wachsende Start-ups bereits ab 3 Bestellungen pro Tag &ndash; flexibel skalierbar mit deinem Business.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Bereits ab kleinen Mengen
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Shop-System Integration
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  6 Fragen &ndash; ca. 60 Sekunden
                </li>
              </ul>
              <span className="inline-flex items-center gap-2 text-green font-semibold text-sm group-hover:gap-3 transition-all">
                Fulfillment-L&ouml;sung finden
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-12 sm:py-20 md:py-28 bg-gradient-to-br from-blue to-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 -right-48 w-[600px] h-[600px] bg-green/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="text-green text-xs font-semibold uppercase tracking-wider mb-3">
              Erfahrung &amp; Kompetenz
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Warum Huckschlag?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-green mb-1">40+</p>
              <p className="text-white/60 text-sm">Jahre Erfahrung</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-green mb-1">145</p>
              <p className="text-white/60 text-sm">Mitarbeitende</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-green mb-1">80.000</p>
              <p className="text-white/60 text-sm">Paletten Kapazit&auml;t</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-green mb-1">10.000</p>
              <p className="text-white/60 text-sm">AutoStore Beh&auml;lter</p>
            </div>
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
