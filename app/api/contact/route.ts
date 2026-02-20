import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactBody;
    const { name, phone, email, service, message } = body;

    if (!name?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Ime, telefon i poruka su obavezna polja." },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILJET_API_KEY;
    const secretKey = process.env.MAILJET_SECRET_KEY;
    const sender = process.env.SITE_MAIL_SENDER;
    const receiver = process.env.SITE_MAIL_RECEIVER;

    if (!apiKey || !secretKey || !sender || !receiver) {
      console.error("Missing Mailjet env variables");
      return NextResponse.json(
        { error: "Greška konfiguracije servera." },
        { status: 500 }
      );
    }

    const credentials = Buffer.from(`${apiKey}:${secretKey}`).toString(
      "base64"
    );

    const textContent = [
      `Ime i prezime: ${name}`,
      `Telefon: ${phone}`,
      `Email: ${email || "nije navedeno"}`,
      `Usluga: ${service || "nije izabrana"}`,
      ``,
      `Poruka:`,
      message,
    ].join("\n");

    const htmlContent = `
      <h2>Nova poruka sa hausmajstor sajta</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
        <tr><td style="padding:4px 12px 4px 0;color:#666;font-weight:bold">Ime i prezime:</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666;font-weight:bold">Telefon:</td><td>${escapeHtml(phone)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666;font-weight:bold">Email:</td><td>${escapeHtml(email ?? "nije navedeno")}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666;font-weight:bold">Usluga:</td><td>${escapeHtml(service ?? "nije izabrana")}</td></tr>
      </table>
      <p style="margin-top:16px;font-weight:bold;font-family:sans-serif;font-size:14px">Poruka:</p>
      <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(message)}</p>
    `;

    const mailjetRes = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify({
        Messages: [
          {
            From: { Email: sender, Name: "Hausmajstor Sajt" },
            To: [{ Email: receiver }],
            Subject: `Nova poruka od ${name} — ${service || "Upit sa sajta"}`,
            TextPart: textContent,
            HTMLPart: htmlContent,
          },
        ],
      }),
    });

    if (!mailjetRes.ok) {
      const errText = await mailjetRes.text();
      console.error("Mailjet error:", errText);
      return NextResponse.json(
        { error: "Greška pri slanju emaila. Pokušajte ponovo." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Greška servera." }, { status: 500 });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
