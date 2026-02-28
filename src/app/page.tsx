"use client";

import { useState, useCallback } from "react";
import {
  Truck,
  Users,
  ShieldCheck,
  MapPin,
  Clock,
  UserCircle,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Building2,
  Loader2,
} from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   TYPES
   ══════════════════════════════════════════════════════════════ */
interface FunnelFormData {
  vehicleType: string;
  fleetSize: string;
  certifications: string[];
  experience: string;
  region: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

/* ══════════════════════════════════════════════════════════════
   STEP DEFINITIONS
   ══════════════════════════════════════════════════════════════ */
const STEPS = [
  { id: "vehicle", label: "Fahrzeug", icon: Truck },
  { id: "fleet", label: "Flotte", icon: Users },
  { id: "certs", label: "Qualifikation", icon: ShieldCheck },
  { id: "experience", label: "Erfahrung", icon: Clock },
  { id: "region", label: "Region", icon: MapPin },
  { id: "contact", label: "Kontakt", icon: UserCircle },
] as const;

const VEHICLE_OPTIONS = [
  { value: "7_5t", label: "7,5 t", desc: "Verteilerfahrzeug" },
  { value: "12t", label: "12 t", desc: "Verteilerfahrzeug" },
  { value: "12t_trailer", label: "12 t + Anhänger", desc: "Gliederzug" },
  { value: "other", label: "Andere", desc: "Sonstige Fahrzeuge" },
];

const FLEET_OPTIONS = [
  { value: "1", label: "1 Fahrzeug" },
  { value: "2-3", label: "2\u20133 Fahrzeuge" },
  { value: "4-10", label: "4\u201310 Fahrzeuge" },
  { value: "10+", label: "10+ Fahrzeuge" },
];

const CERT_OPTIONS = [
  { value: "adr", label: "ADR-Schein", desc: "Gefahrgutbescheinigung" },
  { value: "bkrfqg", label: "BKrFQG", desc: "Berufskraftfahrer-Qualifikation" },
  { value: "eu_license", label: "EU-Lizenz", desc: "Gemeinschaftslizenz" },
  { value: "gmp", label: "GMP+", desc: "Lebensmitteltransport" },
];

const EXPERIENCE_OPTIONS = [
  { value: "0-1", label: "< 1 Jahr" },
  { value: "1-3", label: "1\u20133 Jahre" },
  { value: "3-10", label: "3\u201310 Jahre" },
  { value: "10+", label: "10+ Jahre" },
];

const REGION_OPTIONS = [
  { value: "nrw", label: "Nordrhein-Westfalen" },
  { value: "niedersachsen", label: "Niedersachsen" },
  { value: "hessen", label: "Hessen" },
  { value: "other", label: "Andere Region" },
];

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════ */
export default function FunnelPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<FunnelFormData>({
    vehicleType: "",
    fleetSize: "",
    certifications: [],
    experience: "",
    region: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const totalSteps = STEPS.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const updateField = useCallback(
    <K extends keyof FunnelFormData>(key: K, value: FunnelFormData[K]) => {
      setFormData((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const toggleCert = useCallback((cert: string) => {
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.includes(cert)
        ? prev.certifications.filter((c) => c !== cert)
        : [...prev.certifications, cert],
    }));
  }, []);

  const canProceed = (): boolean => {
    switch (step) {
      case 0: return !!formData.vehicleType;
      case 1: return !!formData.fleetSize;
      case 2: return formData.certifications.length > 0;
      case 3: return !!formData.experience;
      case 4: return !!formData.region;
      case 5: {
        const hasRequired = !!formData.firstName && !!formData.lastName && !!formData.phone;
        const emailValid = !formData.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
        return hasRequired && emailValid;
      }
      default: return false;
    }
  };

  const next = () => {
    if (step < totalSteps - 1 && canProceed()) setStep(step + 1);
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
            Ihre Bewerbung als Logistikpartner ist bei uns eingegangen.
          </p>
          <p className="text-gray-600 mb-8">
            Wir melden uns innerhalb von <strong>24 Stunden</strong> bei Ihnen.
          </p>
          <div className="bg-gray-100 rounded-xl p-5 text-left space-y-2 text-sm">
            <p><span className="text-gray-400">Name:</span> <strong>{formData.firstName} {formData.lastName}</strong></p>
            <p><span className="text-gray-400">Telefon:</span> <strong>{formData.phone}</strong></p>
            {formData.email && <p><span className="text-gray-400">E-Mail:</span> <strong>{formData.email}</strong></p>}
            {formData.company && <p><span className="text-gray-400">Unternehmen:</span> <strong>{formData.company}</strong></p>}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-400">
            Spedition Huckschlag GmbH · Landstr. 2 · 58730 Fröndenberg
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
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-green" />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">Spedition Huckschlag</p>
              <p className="text-white/50 text-xs">Logistikpartner werden</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white/50 text-xs">Schritt {step + 1} von {totalSteps}</p>
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
          {/* Step indicators — desktop only */}
          <div className="hidden sm:flex justify-between mt-3">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => i < step && setStep(i)}
                  disabled={i > step}
                  className={`flex items-center gap-1.5 text-xs transition-colors ${
                    i === step
                      ? "text-green font-semibold"
                      : i < step
                      ? "text-white/60 cursor-pointer hover:text-white/80"
                      : "text-white/20 cursor-default"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-6 sm:py-8">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10">
            {step === 0 && <StepVehicle value={formData.vehicleType} onChange={(v) => updateField("vehicleType", v)} />}
            {step === 1 && <StepFleet value={formData.fleetSize} onChange={(v) => updateField("fleetSize", v)} />}
            {step === 2 && <StepCerts selected={formData.certifications} onToggle={toggleCert} />}
            {step === 3 && <StepExperience value={formData.experience} onChange={(v) => updateField("experience", v)} />}
            {step === 4 && <StepRegion value={formData.region} onChange={(v) => updateField("region", v)} />}
            {step === 5 && <StepContact formData={formData} updateField={updateField} />}
          </div>

          {/* Error message */}
          {error && (
            <div className="px-6 sm:px-8 md:px-10">
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 mb-4">
                {error}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="px-6 sm:px-8 md:px-10 pb-6 sm:pb-8 md:pb-10 flex items-center justify-between gap-4">
            <button
              onClick={prev}
              disabled={step === 0}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${
                step === 0
                  ? "text-gray-300 cursor-default"
                  : "text-gray-600 hover:text-dark hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Zurück
            </button>

            {step < totalSteps - 1 ? (
              <button
                onClick={next}
                disabled={!canProceed()}
                className={`flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all ${
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
                className={`flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all ${
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
                    Bewerbung absenden
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
        <div className="max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% vertraulich
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            Antwort in 24h
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5" />
            Seit 1971
          </span>
          <span className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5" />
            60+ eigene Fahrzeuge
          </span>
        </div>
      </footer>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   STEP COMPONENTS
   ══════════════════════════════════════════════════════════════ */

function StepVehicle({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-green text-xs font-semibold uppercase tracking-wider mb-2">Fahrzeugtyp</p>
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">Welches Fahrzeug setzen Sie ein?</h2>
      <p className="text-gray-400 text-sm mb-6">Wir suchen Transportunternehmer für den Nahverkehr mit 7,5 bis 12 Tonnen.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {VEHICLE_OPTIONS.map((opt) => (
          <OptionCard key={opt.value} selected={value === opt.value} onClick={() => onChange(opt.value)} icon={<Truck className="w-5 h-5" />} label={opt.label} desc={opt.desc} />
        ))}
      </div>
    </div>
  );
}

function StepFleet({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-green text-xs font-semibold uppercase tracking-wider mb-2">Flottengröße</p>
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">Wie viele Fahrzeuge haben Sie?</h2>
      <p className="text-gray-400 text-sm mb-6">Auch Einzelfahrer sind willkommen. Wir schätzen Partner jeder Größe.</p>
      <div className="grid grid-cols-2 gap-3">
        {FLEET_OPTIONS.map((opt) => (
          <OptionCard key={opt.value} selected={value === opt.value} onClick={() => onChange(opt.value)} icon={<Users className="w-5 h-5" />} label={opt.label} />
        ))}
      </div>
    </div>
  );
}

function StepCerts({ selected, onToggle }: { selected: string[]; onToggle: (v: string) => void }) {
  return (
    <div>
      <p className="text-green text-xs font-semibold uppercase tracking-wider mb-2">Qualifikationen</p>
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">Welche Qualifikationen bringen Sie mit?</h2>
      <p className="text-gray-400 text-sm mb-6">Mehrfachauswahl möglich. ADR und BKrFQG sind für unsere Touren erforderlich.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CERT_OPTIONS.map((opt) => (
          <OptionCard key={opt.value} selected={selected.includes(opt.value)} onClick={() => onToggle(opt.value)} icon={<ShieldCheck className="w-5 h-5" />} label={opt.label} desc={opt.desc} multiSelect />
        ))}
      </div>
    </div>
  );
}

function StepExperience({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-green text-xs font-semibold uppercase tracking-wider mb-2">Erfahrung</p>
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">Wie lange sind Sie schon als Transportunternehmer tätig?</h2>
      <p className="text-gray-400 text-sm mb-6">Auch Neueinsteiger mit eigener Flotte können sich bewerben.</p>
      <div className="grid grid-cols-2 gap-3">
        {EXPERIENCE_OPTIONS.map((opt) => (
          <OptionCard key={opt.value} selected={value === opt.value} onClick={() => onChange(opt.value)} icon={<Clock className="w-5 h-5" />} label={opt.label} />
        ))}
      </div>
    </div>
  );
}

function StepRegion({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="text-green text-xs font-semibold uppercase tracking-wider mb-2">Standort</p>
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">In welcher Region sind Sie ansässig?</h2>
      <p className="text-gray-400 text-sm mb-6">Unser Standort in Fröndenberg bedient den Nahverkehr in NRW und angrenzenden Bundesländern.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {REGION_OPTIONS.map((opt) => (
          <OptionCard key={opt.value} selected={value === opt.value} onClick={() => onChange(opt.value)} icon={<MapPin className="w-5 h-5" />} label={opt.label} />
        ))}
      </div>
    </div>
  );
}

function StepContact({ formData, updateField }: { formData: FunnelFormData; updateField: <K extends keyof FunnelFormData>(key: K, value: FunnelFormData[K]) => void }) {
  const emailInvalid = formData.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  return (
    <div>
      <p className="text-green text-xs font-semibold uppercase tracking-wider mb-2">Kontaktdaten</p>
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">Fast geschafft! Wie können wir Sie erreichen?</h2>
      <p className="text-gray-400 text-sm mb-6">Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.</p>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="Vorname *" value={formData.firstName} onChange={(v) => updateField("firstName", v)} placeholder="Max" icon={<UserCircle className="w-4 h-4" />} />
          <InputField label="Nachname *" value={formData.lastName} onChange={(v) => updateField("lastName", v)} placeholder="Mustermann" icon={<UserCircle className="w-4 h-4" />} />
        </div>
        <InputField label="Telefon *" value={formData.phone} onChange={(v) => updateField("phone", v)} placeholder="+49 123 456 789" type="tel" icon={<Phone className="w-4 h-4" />} />
        <div>
          <InputField label="E-Mail" value={formData.email} onChange={(v) => updateField("email", v)} placeholder="max@unternehmen.de" type="email" icon={<Mail className="w-4 h-4" />} />
          {emailInvalid && <p className="text-red-500 text-xs mt-1">Bitte geben Sie eine gültige E-Mail-Adresse ein.</p>}
        </div>
        <InputField label="Unternehmen" value={formData.company} onChange={(v) => updateField("company", v)} placeholder="Mustermann Transporte GmbH" icon={<Building2 className="w-4 h-4" />} />
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Nachricht (optional)</label>
          <textarea value={formData.message} onChange={(e) => updateField("message", e.target.value)} placeholder="Haben Sie noch etwas mitzuteilen?" rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green transition-colors resize-none" />
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   SHARED UI COMPONENTS
   ══════════════════════════════════════════════════════════════ */

function OptionCard({ selected, onClick, icon, label, desc, multiSelect }: { selected: boolean; onClick: () => void; icon: React.ReactNode; label: string; desc?: string; multiSelect?: boolean }) {
  return (
    <button onClick={onClick} className={`relative flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${selected ? "border-green bg-green-light shadow-sm" : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-100/50"}`}>
      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${selected ? "bg-green text-white" : "bg-gray-100 text-gray-400"}`}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className={`font-semibold text-sm ${selected ? "text-dark" : "text-gray-600"}`}>{label}</p>
        {desc && <p className="text-xs text-gray-400 mt-0.5">{desc}</p>}
      </div>
      <div className="absolute top-3 right-3">
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
