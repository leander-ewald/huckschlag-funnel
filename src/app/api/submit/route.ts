import { NextResponse } from "next/server";

interface SubmitPayload {
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

const VEHICLE_LABELS: Record<string, string> = {
  "7_5t": "7,5 t Verteilerfahrzeug",
  "12t": "12 t Verteilerfahrzeug",
  "12t_trailer": "12 t + Anhänger (Gliederzug)",
  other: "Andere Fahrzeuge",
};

const FLEET_LABELS: Record<string, string> = {
  "1": "1 Fahrzeug",
  "2-3": "2–3 Fahrzeuge",
  "4-10": "4–10 Fahrzeuge",
  "10+": "10+ Fahrzeuge",
};

const CERT_LABELS: Record<string, string> = {
  adr: "ADR-Schein",
  bkrfqg: "BKrFQG",
  eu_license: "EU-Lizenz",
  gmp: "GMP+",
};

const EXPERIENCE_LABELS: Record<string, string> = {
  "0-1": "Unter 1 Jahr",
  "1-3": "1–3 Jahre",
  "3-10": "3–10 Jahre",
  "10+": "Über 10 Jahre",
};

const REGION_LABELS: Record<string, string> = {
  nrw: "Nordrhein-Westfalen",
  niedersachsen: "Niedersachsen",
  hessen: "Hessen",
  other: "Andere Region",
};

function buildEmailHtml(data: SubmitPayload): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #005280; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #fff; margin: 0; font-size: 20px;">Neue Bewerbung als Logistikpartner</h1>
      </div>
      <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${data.firstName} ${data.lastName}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Telefon</td><td style="padding: 8px 0; font-weight: 600;">${data.phone}</td></tr>
          ${data.email ? `<tr><td style="padding: 8px 0; color: #6b7280;">E-Mail</td><td style="padding: 8px 0;">${data.email}</td></tr>` : ""}
          ${data.company ? `<tr><td style="padding: 8px 0; color: #6b7280;">Unternehmen</td><td style="padding: 8px 0;">${data.company}</td></tr>` : ""}
          <tr><td colspan="2" style="padding: 16px 0 8px; border-top: 1px solid #e5e7eb;"><strong>Angaben zum Fuhrpark</strong></td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Fahrzeugtyp</td><td style="padding: 8px 0;">${VEHICLE_LABELS[data.vehicleType] || data.vehicleType}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Flottengröße</td><td style="padding: 8px 0;">${FLEET_LABELS[data.fleetSize] || data.fleetSize}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Qualifikationen</td><td style="padding: 8px 0;">${data.certifications.map((c) => CERT_LABELS[c] || c).join(", ")}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Erfahrung</td><td style="padding: 8px 0;">${EXPERIENCE_LABELS[data.experience] || data.experience}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Region</td><td style="padding: 8px 0;">${REGION_LABELS[data.region] || data.region}</td></tr>
          ${data.message ? `<tr><td colspan="2" style="padding: 16px 0 8px; border-top: 1px solid #e5e7eb;"><strong>Nachricht</strong></td></tr><tr><td colspan="2" style="padding: 8px 0;">${data.message}</td></tr>` : ""}
        </table>
      </div>
      <p style="color: #9ca3af; font-size: 12px; margin-top: 16px; text-align: center;">
        Gesendet über das Huckschlag Recruiting-Formular &middot; ${new Date().toLocaleDateString("de-DE")}
      </p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const data: SubmitPayload = await request.json();

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.phone || !data.vehicleType || !data.fleetSize || !data.experience || !data.region || !data.certifications?.length) {
      return NextResponse.json({ error: "Bitte füllen Sie alle Pflichtfelder aus." }, { status: 400 });
    }

    // Validate email format if provided
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }, { status: 400 });
    }

    // Send notification email via configured webhook or SMTP
    const webhookUrl = process.env.NOTIFICATION_WEBHOOK_URL;
    const emailTo = process.env.NOTIFICATION_EMAIL || "info@huckschlag-transporte.de";

    if (webhookUrl) {
      // Send to webhook (e.g., Zapier, Make, n8n)
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: emailTo,
          subject: `Neue Bewerbung: ${data.firstName} ${data.lastName} — ${VEHICLE_LABELS[data.vehicleType] || data.vehicleType}`,
          html: buildEmailHtml(data),
          data,
        }),
      });
    }

    // Always log to server for backup
    console.log("[LEAD]", JSON.stringify({
      timestamp: new Date().toISOString(),
      name: `${data.firstName} ${data.lastName}`,
      phone: data.phone,
      email: data.email,
      company: data.company,
      vehicle: data.vehicleType,
      fleet: data.fleetSize,
      certs: data.certifications,
      experience: data.experience,
      region: data.region,
    }));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[LEAD ERROR]", err);
    return NextResponse.json({ error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." }, { status: 500 });
  }
}
