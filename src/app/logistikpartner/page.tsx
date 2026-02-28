"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import {
  Package,
  Mail,
  TrendingUp,
  Truck,
  ShoppingBag,
  Cpu,
  Sparkles,
  Home,
  BookOpen,
  Leaf,
  Building2,
  Users,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Zap,
  Clock,
  Warehouse,
  RotateCcw,
  User,
  AlertTriangle,
  Banknote,
  MapPin,
  Globe,
  FileText,
  ShoppingCart,
  Code,
  Wallet,
  BarChart3,
  Phone,
  ArrowRight,
  Star,
  ShieldCheck,
  Loader2,
  Lock,
} from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   TYPES
   ══════════════════════════════════════════════════════════════ */
interface FunnelFormData {
  deliveryVolume: string;
  goodsTypes: string[];
  targetAudience: string;
  services: string[];
  challenges: string[];
  region: string;
  productDescription: string;
  shopSystem: string;
  budget: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  privacy: boolean;
}

/* ══════════════════════════════════════════════════════════════
   OPTION DEFINITIONS — Original Huckschlag Funnel Content
   ══════════════════════════════════════════════════════════════ */
const DELIVERY_OPTIONS = [
  { value: "lt100", label: "<100", icon: Mail },
  { value: "100-1000", label: "100 – 1.000", icon: Package },
  { value: "1000-5000", label: "1.000 – 5.000", icon: TrendingUp },
  { value: "gt5000", label: ">5.000", icon: Truck },
];

const GOODS_OPTIONS = [
  { value: "konsumgueter", label: "Konsumgüter", desc: "z. B. Kleidung, Schuhe, Accessoires, Schmuck", icon: ShoppingBag },
  { value: "elektronik", label: "Elektronik", desc: "z. B. Kopfhörer, Handy-Zubehör", icon: Cpu },
  { value: "kosmetik", label: "Kosmetik & Pflegeprodukte", desc: "z. B. Drogeriebedarf, Cremes, Make-up", icon: Sparkles },
  { value: "haushalt", label: "Haushaltswaren", desc: "z. B. Küchenartikel, Deko, Möbel, Gebäudeausstattung", icon: Home },
  { value: "buecher", label: "Bücher & Medien", desc: "z. B. Bücher, Hefte", icon: BookOpen },
  { value: "nahrungsmittel", label: "Nahrungsmittel", desc: "z. B. Ergänzungsprodukte, Trockenprodukte", icon: Leaf },
  { value: "sonstiges_waren", label: "Sonstiges", desc: "z. B. Spielzeug, Geschenkartikel, Heimtierbedarf", icon: Package },
];

const TARGET_OPTIONS = [
  { value: "b2b", label: "B2B", icon: Building2 },
  { value: "b2c", label: "B2C", icon: Users },
  { value: "beides", label: "Beides", icon: CheckCircle2 },
];

const SERVICE_OPTIONS = [
  { value: "standard", label: "Standardversand", icon: Package },
  { value: "express", label: "Expressversand", icon: Zap },
  { value: "sameday", label: "Same / Next-Day", icon: Clock },
  { value: "palette", label: "Palettenversand", icon: Truck },
  { value: "lagerung", label: "Lagerung", icon: Warehouse },
  { value: "retouren", label: "Retourenlogistik", icon: RotateCcw },
];

const CHALLENGE_OPTIONS = [
  { value: "onemanshow", label: "One Man Show", icon: User },
  { value: "unzuverlaessig", label: "Unzuverlässige Spedition", icon: AlertTriangle },
  { value: "kosten", label: "Zu hohe Kosten", icon: Banknote },
  { value: "skalierbarkeit", label: "Skalierbarkeit fehlt", icon: TrendingUp },
  { value: "retouren", label: "Viele Retouren", icon: RotateCcw },
];

const REGION_OPTIONS = [
  { value: "deutschland", label: "Deutschlandweit", icon: MapPin },
  { value: "dach", label: "DACH", icon: MapPin },
  { value: "eu", label: "EU-weit", icon: Globe },
  { value: "international", label: "International", icon: Globe },
];

const SHOP_OPTIONS = [
  { value: "shopify", label: "Shopify", icon: ShoppingCart },
  { value: "shopware", label: "Shopware", icon: ShoppingCart },
  { value: "woocommerce", label: "WooCommerce", icon: ShoppingCart },
  { value: "magento", label: "Magento", icon: ShoppingCart },
  { value: "eigenloesung", label: "Eigenlösung", icon: Code },
  { value: "sonstiges_shop", label: "Sonstiges", icon: Code },
];

const BUDGET_OPTIONS = [
  { value: "lt1000", label: "<1.000 €", icon: Wallet },
  { value: "1000-5000", label: "1.000–5.000 €", icon: Banknote },
  { value: "5000-20000", label: "5.000–20.000 €", icon: TrendingUp },
  { value: "gt20000", label: ">20.000 €", icon: BarChart3 },
];

const TOTAL_QUESTIONS = 9;
const TOTAL_STEPS = TOTAL_QUESTIONS + 1; // +1 for contact form

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════ */
export default function FunnelPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<FunnelFormData>({
    deliveryVolume: "",
    goodsTypes: [],
    targetAudience: "",
    services: [],
    challenges: [],
    region: "",
    productDescription: "",
    shopSystem: "",
    budget: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    privacy: false,
  });

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  const updateField = useCallback(
    <K extends keyof FunnelFormData>(key: K, value: FunnelFormData[K]) => {
      setFormData((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const toggleMulti = useCallback((key: "goodsTypes" | "services" | "challenges", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(value)
        ? (prev[key] as string[]).filter((v) => v !== value)
        : [...(prev[key] as string[]), value],
    }));
  }, []);

  const canProceed = (): boolean => {
    switch (step) {
      case 0: return !!formData.deliveryVolume;
      case 1: return formData.goodsTypes.length > 0;
      case 2: return !!formData.targetAudience;
      case 3: return formData.services.length > 0;
      case 4: return formData.challenges.length > 0;
      case 5: return !!formData.region;
      case 6: return formData.productDescription.trim().length > 0;
      case 7: return !!formData.shopSystem;
      case 8: return !!formData.budget;
      case 9: {
        const hasRequired = !!formData.name && !!formData.email && !!formData.phone;
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
        return hasRequired && emailValid && formData.privacy;
      }
      default: return false;
    }
  };

  const next = () => {
    if (step < TOTAL_STEPS - 1 && canProceed()) setStep(step + 1);
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (!canProceed() || submitting) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Übermittlung fehlgeschlagen");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setSubmitting(false);
    }
  };

  const stepLabel = (): string => {
    if (step <= 7) return `Frage ${step + 1} von 8`;
    if (step === 8) return "Letzte Frage";
    return "Kontakt";
  };

  /* ── SUCCESS STATE ── */
  if (submitted) {
    return (
      <div className="min-h-[100dvh] bg-gradient-to-br from-blue to-blue-dark flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-dark mb-3">
            Vielen Dank!
          </h1>
          <p className="text-gray-600 mb-2">
            Deine Anfrage ist bei uns eingegangen.
          </p>
          <p className="text-gray-600 mb-8">
            Wir melden uns innerhalb von <strong>24 Stunden</strong> bei dir.
          </p>
          <div className="bg-gray-100 rounded-xl p-5 text-left space-y-2 text-sm">
            <p><span className="text-gray-400">Name:</span> <strong>{formData.name}</strong></p>
            <p><span className="text-gray-400">Telefon:</span> <strong>{formData.phone}</strong></p>
            <p><span className="text-gray-400">E-Mail:</span> <strong>{formData.email}</strong></p>
            {formData.company && <p><span className="text-gray-400">Unternehmen:</span> <strong>{formData.company}</strong></p>}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col items-center gap-3">
            <Image
              src="/huckschlag-logo.svg"
              alt="Spedition Huckschlag"
              width={160}
              height={32}
              className="h-8 w-auto opacity-60"
            />
            <p className="text-sm text-gray-400">Landstr. 2 &middot; 58730 Fr&ouml;ndenberg</p>
          </div>
        </div>
      </div>
    );
  }

  /* ── MAIN FUNNEL ── */
  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-blue to-blue-dark flex flex-col">
      {/* Header */}
      <header className="px-4 pt-5 pb-3 sm:pt-6 sm:pb-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/huckschlag-logo-white.svg"
              alt="Spedition Huckschlag"
              width={160}
              height={32}
              className="h-7 sm:h-8 w-auto"
              priority
            />
          </div>
          <div className="text-right">
            <p className="text-white/50 text-xs">{stepLabel()}</p>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-4">
        <div className="max-w-2xl mx-auto">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green to-teal rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-6 sm:py-8">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">
          <div className="p-4 sm:p-6 md:p-10">
            {step === 0 && <StepDelivery value={formData.deliveryVolume} onChange={(v) => updateField("deliveryVolume", v)} />}
            {step === 1 && <StepGoods selected={formData.goodsTypes} onToggle={(v) => toggleMulti("goodsTypes", v)} />}
            {step === 2 && <StepTarget value={formData.targetAudience} onChange={(v) => updateField("targetAudience", v)} />}
            {step === 3 && <StepServices selected={formData.services} onToggle={(v) => toggleMulti("services", v)} />}
            {step === 4 && <StepChallenges selected={formData.challenges} onToggle={(v) => toggleMulti("challenges", v)} />}
            {step === 5 && <StepRegion value={formData.region} onChange={(v) => updateField("region", v)} />}
            {step === 6 && <StepProducts value={formData.productDescription} onChange={(v) => updateField("productDescription", v)} />}
            {step === 7 && <StepShop value={formData.shopSystem} onChange={(v) => updateField("shopSystem", v)} />}
            {step === 8 && <StepBudget value={formData.budget} onChange={(v) => updateField("budget", v)} />}
            {step === 9 && <StepContact formData={formData} updateField={updateField} />}
          </div>

          {/* Error message */}
          {error && (
            <div className="px-4 sm:px-8 md:px-10">
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 mb-4">
                {error}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="px-4 sm:px-8 md:px-10 pb-5 sm:pb-8 md:pb-10 flex items-center justify-between gap-3">
            <button
              onClick={prev}
              disabled={step === 0}
              className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-3 rounded-full text-sm font-medium transition-all min-h-[44px] ${
                step === 0
                  ? "text-gray-300 cursor-default"
                  : "text-gray-600 hover:text-dark hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Zurück
            </button>

            {step < TOTAL_STEPS - 1 ? (
              <button
                onClick={next}
                disabled={!canProceed()}
                className={`flex items-center gap-1.5 sm:gap-2 px-5 sm:px-7 py-3 rounded-full text-sm font-semibold transition-all min-h-[44px] ${
                  canProceed()
                    ? "bg-green text-white hover:bg-green-dark shadow-lg shadow-green/25 hover:shadow-green/40"
                    : "bg-gray-200 text-gray-400 cursor-default"
                }`}
              >
                Weiter
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || submitting}
                className={`flex items-center gap-1.5 sm:gap-2 px-5 sm:px-7 py-3 rounded-full text-sm font-semibold transition-all min-h-[44px] ${
                  canProceed() && !submitting
                    ? "bg-green text-white hover:bg-green-dark shadow-lg shadow-green/25 hover:shadow-green/40"
                    : "bg-gray-200 text-gray-400 cursor-default"
                }`}
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Wird gesendet…
                  </>
                ) : (
                  <>
                    <span className="sm:hidden">Absenden</span>
                    <span className="hidden sm:inline">Jetzt kostenloses Gespräch sichern</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <footer className="px-4 pb-5 sm:pb-6">
        <div className="max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-6 gap-y-2 text-xs text-white/40">
          <span className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
            Sichere Verbindung
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
            Kein Spam
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
            Seit 40+ Jahren
          </span>
          <span className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
            145 Mitarbeitende
          </span>
        </div>
      </footer>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   STEP COMPONENTS
   ══════════════════════════════════════════════════════════════ */

function StepDelivery({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-green text-xs font-semibold uppercase tracking-wider mb-2">Frage 1 von 8</p>
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">Wie viele Lieferpositionen hast du durchschnittlich pro Monat?</h2>
      <p className="text-gray-400 text-sm mb-6">Wähle die passende Größenordnung.</p>
      <div className="grid grid-cols-2 gap-3">
        {DELIVERY_OPTIONS.map((opt) => {
          const Icon = opt.icon;
          return (
            <OptionCard key={opt.value} selected={value === opt.value} onClick={() => onChange(opt.value)} icon={<Icon className="w-5 h-5" />} label={opt.label} />
          );
        })}
      </div>
    </div>
  );
}

function StepGoods({ selected, onToggle }: { selected: string[]; onToggle: (v: string) => void }) {
  return (
    <div>
      <p className="text-green text-xs font-semibold uppercase tracking-wider mb-2">Frage 2 von 8</p>
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">Welche Art von Waren versendet ihr hauptsächlich?</h2>
      <p className="text-gray-400 text-sm mb-6">Mehrfachauswahl möglich.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {GOODS_OPTIONS.map((opt) => {
          const Icon = opt.icon;
          return (
            <OptionCard key={opt.value} selected={selected.includes(opt.value)} onClick={() => onToggle(opt.value)} icon={<Icon className="w-5 h-5" />} label={opt.label} desc={opt.desc} multiSelect />
          );
        })}
      </div>
    </div>
  );
}

function StepTarget({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-green text-xs font-semibold uppercase tracking-wider mb-2">Frage 3 von 8</p>
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">Welche Zielgruppen beliefert ihr?</h2>
      <p className="text-gray-400 text-sm mb-6">Wähle eure Hauptzielgruppe.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {TARGET_OPTIONS.map((opt) => {
          const Icon = opt.icon;
          return (
            <OptionCard key={opt.value} selected={value === opt.value} onClick={() => onChange(opt.value)} icon={<Icon className="w-5 h-5" />} label={opt.label} />
          );
        })}
      </div>
    </div>
  );
}

function StepServices({ selected, onToggle }: { selected: string[]; onToggle: (v: string) => void }) {
  return (
    <div>
      <p className="text-green text-xs font-semibold uppercase tracking-wider mb-2">Frage 4 von 8</p>
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">Welche Leistungen sind für euch am relevantesten?</h2>
      <p className="text-gray-400 text-sm mb-6">Mehrfachauswahl möglich.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SERVICE_OPTIONS.map((opt) => {
          const Icon = opt.icon;
          return (
            <OptionCard key={opt.value} selected={selected.includes(opt.value)} onClick={() => onToggle(opt.value)} icon={<Icon className="w-5 h-5" />} label={opt.label} multiSelect />
          );
        })}
      </div>
    </div>
  );
}

function StepChallenges({ selected, onToggle }: { selected: string[]; onToggle: (v: string) => void }) {
  return (
    <div>
      <p className="text-green text-xs font-semibold uppercase tracking-wider mb-2">Frage 5 von 8</p>
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">Welche Herausforderungen habt ihr aktuell im Versand oder in der Logistik?</h2>
      <p className="text-gray-400 text-sm mb-6">Mehrfachauswahl möglich.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CHALLENGE_OPTIONS.map((opt) => {
          const Icon = opt.icon;
          return (
            <OptionCard key={opt.value} selected={selected.includes(opt.value)} onClick={() => onToggle(opt.value)} icon={<Icon className="w-5 h-5" />} label={opt.label} multiSelect />
          );
        })}
      </div>
    </div>
  );
}

function StepRegion({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-green text-xs font-semibold uppercase tracking-wider mb-2">Frage 6 von 8</p>
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">Welche Regionen wollt ihr beliefert haben?</h2>
      <p className="text-gray-400 text-sm mb-6">Wähle euren Lieferbereich.</p>
      <div className="grid grid-cols-2 gap-3">
        {REGION_OPTIONS.map((opt) => {
          const Icon = opt.icon;
          return (
            <OptionCard key={opt.value} selected={value === opt.value} onClick={() => onChange(opt.value)} icon={<Icon className="w-5 h-5" />} label={opt.label} />
          );
        })}
      </div>
    </div>
  );
}

function StepProducts({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-green text-xs font-semibold uppercase tracking-wider mb-2">Frage 7 von 8</p>
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">Beschreibt eure Produkte kurz und sagt uns, wie viele Materialnummern (SKU) es gibt.</h2>
      <p className="text-gray-400 text-sm mb-6">Je genauer die Angabe, desto besser können wir euch beraten.</p>
      <div className="relative">
        <div className="absolute left-3 top-4 text-gray-400">
          <FileText className="w-4 h-4" />
        </div>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Hier schreiben"
          rows={4}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green transition-colors resize-none"
        />
      </div>
    </div>
  );
}

function StepShop({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-green text-xs font-semibold uppercase tracking-wider mb-2">Frage 8 von 8</p>
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">Welches Shopsystem nutzt ihr?</h2>
      <p className="text-gray-400 text-sm mb-6">Wähle euer aktuelles System.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SHOP_OPTIONS.map((opt) => {
          const Icon = opt.icon;
          return (
            <OptionCard key={opt.value} selected={value === opt.value} onClick={() => onChange(opt.value)} icon={<Icon className="w-5 h-5" />} label={opt.label} />
          );
        })}
      </div>
    </div>
  );
}

function StepBudget({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-green text-xs font-semibold uppercase tracking-wider mb-2">Letzte Frage</p>
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">Wie hoch ist euer monatliches Logistik- oder Versandbudget aktuell?</h2>
      <p className="text-gray-400 text-sm mb-6">Eine grobe Einschätzung genügt.</p>
      <div className="grid grid-cols-2 gap-3">
        {BUDGET_OPTIONS.map((opt) => {
          const Icon = opt.icon;
          return (
            <OptionCard key={opt.value} selected={value === opt.value} onClick={() => onChange(opt.value)} icon={<Icon className="w-5 h-5" />} label={opt.label} />
          );
        })}
      </div>
    </div>
  );
}

function StepContact({ formData, updateField }: { formData: FunnelFormData; updateField: <K extends keyof FunnelFormData>(key: K, value: FunnelFormData[K]) => void }) {
  const emailInvalid = formData.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  return (
    <div>
      <p className="text-green text-xs font-semibold uppercase tracking-wider mb-1">Großartig! Klingt als könnten wir dir helfen</p>
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">Wer ist die Ansprechperson für Logistik / Versand in deinem Unternehmen?</h2>
      <p className="text-gray-400 text-sm mb-6">Wir melden uns zeitnah bei dir.</p>
      <div className="space-y-4">
        <InputField label="Vor- und Nachname *" value={formData.name} onChange={(v) => updateField("name", v)} placeholder="Vor- und Nachname" icon={<User className="w-4 h-4" />} />
        <InputField label="Unternehmensname" value={formData.company} onChange={(v) => updateField("company", v)} placeholder="Unternehmensname" icon={<Building2 className="w-4 h-4" />} />
        <div>
          <InputField label="Deine E-Mail Adresse *" value={formData.email} onChange={(v) => updateField("email", v)} placeholder="Deine E-Mail Adresse" type="email" icon={<Mail className="w-4 h-4" />} />
          {emailInvalid && <p className="text-red-500 text-xs mt-1">Bitte gib eine gültige E-Mail-Adresse ein.</p>}
        </div>
        <InputField label="Deine Telefonnummer *" value={formData.phone} onChange={(v) => updateField("phone", v)} placeholder="Deine Telefonnummer" type="tel" icon={<Phone className="w-4 h-4" />} />
        <InputField label="Deine Unternehmenswebseite" value={formData.website} onChange={(v) => updateField("website", v)} placeholder="Deine Unternehmenswebseite" icon={<Globe className="w-4 h-4" />} />
        <label className="flex items-start gap-3 cursor-pointer group py-1">
          <input
            type="checkbox"
            checked={formData.privacy}
            onChange={(e) => updateField("privacy", e.target.checked)}
            className="mt-0.5 w-5 h-5 rounded border-gray-300 text-green focus:ring-green/30 cursor-pointer flex-shrink-0"
          />
          <span className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
            Ich akzeptiere die Datenschutzbestimmungen
          </span>
        </label>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   SHARED UI COMPONENTS
   ══════════════════════════════════════════════════════════════ */

function OptionCard({ selected, onClick, icon, label, desc, multiSelect }: { selected: boolean; onClick: () => void; icon: React.ReactNode; label: string; desc?: string; multiSelect?: boolean }) {
  return (
    <button onClick={onClick} className={`relative flex items-center gap-3 p-3 sm:p-4 rounded-xl border-2 text-left transition-all min-h-[48px] ${selected ? "border-green bg-green-light shadow-sm" : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-100/50"}`}>
      <div className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors ${selected ? "bg-green text-white" : "bg-gray-100 text-gray-400"}`}>
        {icon}
      </div>
      <div className="min-w-0 pr-6">
        <p className={`font-semibold text-sm ${selected ? "text-dark" : "text-gray-600"}`}>{label}</p>
        {desc && <p className="text-xs text-gray-400 mt-0.5 leading-snug">{desc}</p>}
      </div>
      <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3">
        <div className={`w-5 h-5 ${multiSelect ? "rounded-md" : "rounded-full"} border-2 flex items-center justify-center transition-all ${selected ? "border-green bg-green" : "border-gray-300 bg-white"}`}>
          {selected && <CheckCircle2 className="w-3 h-3 text-white" />}
        </div>
      </div>
    </button>
  );
}

function InputField({ label, value, onChange, placeholder, type = "text", icon }: { label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string; icon: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1.5">{label}</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green transition-colors" />
      </div>
    </div>
  );
}
