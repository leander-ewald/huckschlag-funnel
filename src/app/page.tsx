import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Warehouse,
  Package,
  ShoppingCart,
  Cpu,
  Users,
  Clock,
  Boxes,
  Phone,
  Mail,
  MapPin,
  Quote,
  CheckCircle2,
  TrendingUp,
  Truck,
  Star,
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
            href="/logistikpartner"
            className="bg-green hover:bg-green-dark text-white text-sm font-semibold px-5 py-3 rounded-full transition-all shadow-lg shadow-green/25 hover:shadow-green/40"
          >
            Jetzt starten
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-blue to-blue-dark pt-24 pb-14 sm:pt-36 sm:pb-28 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-green/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-green text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
              Die Logistikmacher seit 40+ Jahren
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Wir bewegen Waren — und davon ganz sch&ouml;n viel!
            </h1>
            <p className="text-white/70 text-base sm:text-lg mb-8 max-w-xl">
              Kontraktlogistik, Warehousing und E-Commerce Fulfillment aus einer Hand. Modern, automatisiert und zuverl&auml;ssig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/logistikpartner"
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
              <p className="text-3xl sm:text-4xl font-bold text-green mb-1">&gt;50.000</p>
              <p className="text-white/60 text-sm">qm Lagerfl&auml;che</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-3xl sm:text-4xl font-bold text-green mb-1">75.000</p>
              <p className="text-white/60 text-sm">LKW in drei Netzwerken</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-3xl sm:text-4xl font-bold text-green mb-1">100%</p>
              <p className="text-white/60 text-sm">zufriedene Kunden</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-12 sm:py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="text-green text-xs font-semibold uppercase tracking-wider mb-3">
              Unsere Leistungen
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-4">
              Logistik, Versand &amp; Fulfillment. Aber richtig.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Mit einer Kombination aus modernsten Lagertechnologien und langj&auml;hriger Erfahrung bieten wir ma&szlig;geschneiderte L&ouml;sungen f&uuml;r Ihr Unternehmen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kontraktlogistik */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-8 hover:border-green/30 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                <Warehouse className="w-7 h-7 text-green" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Kontraktlogistik</h3>
              <p className="text-gray-400 text-sm mb-5">
                Langfristige Partnerschaften f&uuml;r Ihre gesamte Supply Chain.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Individuelle Lagerbewirtschaftung
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Integrierte Transport- &amp; Distributionsl&ouml;sungen
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Retourenmanagement &amp; Quality-Checks
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Value-Added-Services nach Bedarf
                </li>
              </ul>
            </div>

            {/* Warehousing */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-8 hover:border-green/30 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                <Boxes className="w-7 h-7 text-green" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Warehousing</h3>
              <p className="text-gray-400 text-sm mb-5">
                &Uuml;ber 50.000 qm modernste Lagerfl&auml;che f&uuml;r Ihre Waren.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Hochregallager &amp; Fachbodenregale
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Kommissionierung &amp; Verpackung
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Bestandsf&uuml;hrung in Echtzeit
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Flexibles Fl&auml;chenmanagement
                </li>
              </ul>
            </div>

            {/* E-Commerce Fulfillment */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-8 hover:border-green/30 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green/20 transition-colors">
                <ShoppingCart className="w-7 h-7 text-green" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">E-Commerce Fulfillment</h3>
              <p className="text-gray-400 text-sm mb-5">
                Vom Wareneingang bis zur Zustellung — alles aus einer Hand.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Shop-System-Integration (Shopify, Shopware, etc.)
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Same-Day &amp; Next-Day Versand
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Automatisierte Retourenabwicklung
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  Individuelle Verpackungsl&ouml;sungen
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUTOSTORE ── */}
      <section className="py-12 sm:py-20 md:py-28 bg-gradient-to-br from-blue to-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 -right-48 w-[600px] h-[600px] bg-green/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <p className="text-green text-xs font-semibold uppercase tracking-wider mb-3">
                Technologie
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                Automatisierte Kommissionierung mit dem AutoStore
              </h2>
              <p className="text-white/70 text-base mb-6">
                Entdecken Sie AutoStore: Ihr intelligentes Lager der Zukunft! Das AutoStore&trade;-System ist eine bahnbrechende, robotergest&uuml;tzte Lagertechnologie, die das traditionelle Lagermanagement revolutioniert.
              </p>
              <p className="text-white/70 text-base mb-8">
                Im Herzen des Systems befinden sich hochmoderne Roboter, die auf einem Raster operieren und Behälter pr&auml;zise und effizient zu den Kommissionierstationen transportieren. Das Ergebnis: maximale Lagerdichte bei minimaler Fehlerquote.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <Cpu className="w-6 h-6 text-green mb-2" />
                  <p className="text-white font-semibold text-sm">Robotergest&uuml;tzt</p>
                  <p className="text-white/50 text-xs mt-1">Vollautomatische Kommissionierung</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <TrendingUp className="w-6 h-6 text-green mb-2" />
                  <p className="text-white font-semibold text-sm">4x Dichter</p>
                  <p className="text-white/50 text-xs mt-1">Maximale Raumausnutzung</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-8 md:p-10 border border-white/10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Maximale Effizienz</p>
                    <p className="text-white/60 text-sm">Durch robotergesteuerte Ware-zu-Person-Kommissionierung werden Laufwege eliminiert und die Produktivit&auml;t massiv gesteigert.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Minimale Fehlerquote</p>
                    <p className="text-white/60 text-sm">Pr&auml;zise automatische Zuordnung reduziert Kommissionierfehler auf nahezu Null.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Skalierbar</p>
                    <p className="text-white/60 text-sm">Das System w&auml;chst mit Ihrem Bedarf — einfach durch Hinzuf&uuml;gen weiterer Roboter und Beh&auml;lter.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Platzsparend</p>
                    <p className="text-white/60 text-sm">Bis zu 4x mehr Lagerkapazit&auml;t auf gleicher Fl&auml;che im Vergleich zu herk&ouml;mmlichen Systemen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ERFAHRUNG / STATS ── */}
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
              Huckschlag ist seit mehr als 40 Jahren erfahren in der Logistik, im Versand sowie der gesamten Supply Chain. Wir sind Ihr verl&auml;sslicher Partner — heute und in Zukunft.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-14">
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

          <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-12 border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-dark mb-4">
                  Tradition trifft Innovation
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4">
                  Als Familienunternehmen verbinden wir bodenst&auml;ndige Werte mit zukunftsweisender Technologie. Unser Standort in Fr&ouml;ndenberg/Ruhr bietet optimale Verkehrsanbindung und modernste Infrastruktur.
                </p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Von der klassischen Spedition haben wir uns zum Full-Service-Logistikdienstleister entwickelt — mit eigenem AutoStore-System, digitalen Prozessen und einem Team, das f&uuml;r Ihre Logistik brennt.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-green-light rounded-xl p-4">
                  <Star className="w-6 h-6 text-green flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-dark text-sm">Zertifizierte Qualit&auml;t</p>
                    <p className="text-gray-400 text-xs">H&ouml;chste Standards in allen Prozessen</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-green-light rounded-xl p-4">
                  <Truck className="w-6 h-6 text-green flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-dark text-sm">Drei Speditionsnetzwerke</p>
                    <p className="text-gray-400 text-xs">75.000 LKW f&uuml;r maximale Flexibilit&auml;t</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-green-light rounded-xl p-4">
                  <Cpu className="w-6 h-6 text-green flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-dark text-sm">AutoStore Technologie</p>
                    <p className="text-gray-400 text-xs">Automatisierte Kommissionierung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── E-COMMERCE SECTION ── */}
      <section className="py-12 sm:py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <p className="text-green text-xs font-semibold uppercase tracking-wider mb-3">
                E-Commerce
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-6">
                Wir bewegen Waren. Und davon ganz sch&ouml;n viel.
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mb-6">
                Als Logistiker mit mehr als 40 Jahren Erfahrung in der Kontraktlogistik, in Lagerung und im Versand, haben wir die Abwicklung bereits hundertfach perfektioniert.
              </p>
              <p className="text-gray-400 text-sm sm:text-base mb-6">
                Als Fulfillment-Dienstleister k&uuml;mmern wir uns um die Lagerung Ihrer Waren, Ihre Auftr&auml;ge und die Verpackung und den anschlie&szlig;enden Versand. Wir stellen sicher, dass Ihre Waren p&uuml;nktlich, sicher und in einwandfreiem Zustand beim Kunden ankommen.
              </p>
              <p className="text-gray-400 text-sm sm:text-base mb-8">
                Durch die Integration modernster Shop-Systeme und unsere automatisierte Lagertechnologie garantieren wir schnelle Durchlaufzeiten und maximale Transparenz &uuml;ber Ihren gesamten Warenfluss.
              </p>
              <Link
                href="/logistikpartner"
                className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-green/25 hover:shadow-green/40 text-sm sm:text-base"
              >
                Jetzt Kontakt aufnehmen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue to-blue-dark rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green/20 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-green" />
                  </div>
                  <h4 className="text-white font-semibold">Pick &amp; Pack</h4>
                </div>
                <p className="text-white/60 text-sm">
                  Pr&auml;zise Kommissionierung und professionelle Verpackung — automatisiert durch AutoStore oder manuell mit h&ouml;chster Sorgfalt.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue to-blue-dark rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green/20 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-green" />
                  </div>
                  <h4 className="text-white font-semibold">Versand &amp; Distribution</h4>
                </div>
                <p className="text-white/60 text-sm">
                  Zugang zu 75.000 LKW &uuml;ber drei Speditionsnetzwerke. Standard, Express oder Same-Day — wir liefern zuverl&auml;ssig.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue to-blue-dark rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green/20 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-green" />
                  </div>
                  <h4 className="text-white font-semibold">Shop-Integration</h4>
                </div>
                <p className="text-white/60 text-sm">
                  Nahtlose Anbindung an Shopify, Shopware, WooCommerce und mehr. Bestell- und Retourenprozesse vollst&auml;ndig automatisiert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-12 sm:py-20 md:py-28 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 border border-gray-200 shadow-sm text-center">
            <Quote className="w-10 h-10 text-green/30 mx-auto mb-6" />
            <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-dark font-medium leading-relaxed mb-6 sm:mb-8">
              &bdquo;2024 wird E-Commerce weiter an Bedeutung gewinnen. Als Logistiker haben wir uns darauf vorbereitet: Mit AutoStore, digitalen Prozessen und einem Team, das f&uuml;r unsere Kunden alles gibt. Wir sind nicht einfach ein Lager — wir sind Ihr Wachstumspartner.&ldquo;
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
                <p className="font-bold text-dark">Thomas Huckschlag</p>
                <p className="text-gray-400 text-sm">Gesch&auml;ftsf&uuml;hrender Gesellschafter</p>
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
            Finden Sie in nur 60 Sekunden heraus, welche Logistikl&ouml;sung perfekt zu Ihrem Unternehmen passt.
          </p>
          <Link
            href="/logistikpartner"
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
            {/* Company */}
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

            {/* Kontakt */}
            <div>
              <h4 className="text-white font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white/40 text-sm">
                  <Phone className="w-4 h-4 text-green flex-shrink-0" />
                  <a href="tel:+4923739782" className="hover:text-white transition-colors">
                    +49 2373 9782 0
                  </a>
                </li>
                <li className="flex items-center gap-2 text-white/40 text-sm">
                  <Mail className="w-4 h-4 text-green flex-shrink-0" />
                  <a href="mailto:info@huckschlag-transporte.de" className="hover:text-white transition-colors">
                    info@huckschlag-transporte.de
                  </a>
                </li>
                <li className="flex items-start gap-2 text-white/40 text-sm">
                  <MapPin className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  <span>Landstr. 2, D-58730 Fr&ouml;ndenberg</span>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://huckschlag-transporte.de/datenschutz" className="text-white/40 text-sm hover:text-white transition-colors">
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a href="https://huckschlag-transporte.de/impressum" className="text-white/40 text-sm hover:text-white transition-colors">
                    Impressum
                  </a>
                </li>
                <li>
                  <Link href="/logistikpartner" className="text-white/40 text-sm hover:text-white transition-colors">
                    Logistikl&ouml;sung finden
                  </Link>
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
