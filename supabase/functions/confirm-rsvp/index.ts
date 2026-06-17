import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const ADMIN_EMAIL = "contato@samiragouvea.com.br";

const GCAL_LINK =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=Anivers%C3%A1rio+Samira+4.0" +
  "&dates=20260704T180000Z/20260704T230000Z" +
  "&details=Celebra%C3%A7%C3%A3o+dos+40+anos+de+Samira+Gouvea+%E2%80%94+v4.0.+Uma+tarde+especial+no+Recanto+Para%C3%ADso." +
  "&location=Recanto+Para%C3%ADso%2C+Rua+P%C3%A9gaso+10%2C+Mairipor%C3%A3%2C+SP";

function buildGuestEmail(nome: string, primeiroNome: string): string {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Presença Confirmada — Samira 4.0</title>
</head>
<body style="background:#F8F5F2;margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;color:#2A2A2A;-webkit-font-smoothing:antialiased">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F8F5F2;min-height:100vh">
<tr><td align="center" style="padding:40px 16px">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;margin:0 auto">

    <!-- HEADER VINHO -->
    <tr>
      <td style="background:linear-gradient(160deg,#5E2433 0%,#3F1722 100%);border-radius:20px 20px 0 0;padding:50px 40px 44px;text-align:center">
        <div style="display:inline-block;font-family:'Courier New',Courier,monospace;font-size:11px;letter-spacing:0.38em;color:#D4B06A;text-transform:uppercase;background:rgba(212,176,106,0.14);border:1px solid rgba(212,176,106,0.35);padding:7px 18px;border-radius:30px;margin-bottom:28px">
          v4.0 — Edição Limitada
        </div>
        <div style="font-family:Georgia,'Times New Roman',Times,serif;font-weight:300;font-size:52px;line-height:0.88;letter-spacing:-0.03em;color:#F8F5F2;margin-bottom:12px">
          Samira <span style="color:#D4B06A">4.0</span>
        </div>
        <div style="font-family:'Courier New',Courier,monospace;font-size:11px;letter-spacing:0.2em;color:rgba(233,217,206,0.6);text-transform:uppercase;margin-top:10px">
          40 anos de história · versão ilimitada
        </div>
        <div style="width:60px;height:1px;background:linear-gradient(90deg,transparent,#D4B06A,transparent);margin:30px auto 0"></div>
      </td>
    </tr>

    <!-- CORPO -->
    <tr>
      <td style="background:#FFFFFF;padding:44px 40px 36px;border-left:1px solid #EDE4DA;border-right:1px solid #EDE4DA">

        <div style="text-align:center;margin-bottom:28px">
          <div style="display:inline-block;width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,#E7CF94,#D4B06A);text-align:center;line-height:72px;font-size:30px;color:#4A1B28;box-shadow:0 12px 32px rgba(212,176,106,0.4)">
            ✓
          </div>
        </div>

        <div style="text-align:center;margin-bottom:32px">
          <div style="font-family:'Courier New',Courier,monospace;font-size:10px;letter-spacing:0.3em;color:#A9803F;text-transform:uppercase;margin-bottom:12px">
            Atualização concluída
          </div>
          <h1 style="font-family:Georgia,'Times New Roman',Times,serif;font-weight:400;font-size:34px;line-height:1.15;letter-spacing:-0.02em;color:#2A2A2A;margin:0">
            Sua presença foi confirmada,<br>
            <em style="color:#5E2433">${primeiroNome}.</em>
          </h1>
        </div>

        <p style="font-size:16px;line-height:1.75;color:#5b4a4a;text-align:center;max-width:440px;margin:0 auto 36px">
          Que alegria contar com você nessa celebração tão especial. Estamos preparando tudo com muito carinho para receber vocês.
        </p>

        <!-- DETALHES DO EVENTO -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius:14px;overflow:hidden;margin-bottom:36px">
          <tr>
            <td style="background:#F8F5F2;border:1px solid #EDE4DA;border-radius:14px;padding:28px 24px">
              <div style="font-family:'Courier New',Courier,monospace;font-size:10px;letter-spacing:0.3em;color:#A9803F;text-transform:uppercase;margin-bottom:18px">
                // detalhes do evento
              </div>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #EDE4DA">
                    <span style="font-family:'Courier New',Courier,monospace;font-size:11px;color:#A9803F;letter-spacing:0.1em;display:block;margin-bottom:4px">DATA</span>
                    <span style="font-family:Georgia,'Times New Roman',Times,serif;font-size:20px;color:#2A2A2A">04 de Julho de 2026 &middot; Sábado</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #EDE4DA">
                    <span style="font-family:'Courier New',Courier,monospace;font-size:11px;color:#A9803F;letter-spacing:0.1em;display:block;margin-bottom:4px">HORÁRIO</span>
                    <span style="font-family:Georgia,'Times New Roman',Times,serif;font-size:20px;color:#2A2A2A">A partir das 15h</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0">
                    <span style="font-family:'Courier New',Courier,monospace;font-size:11px;color:#A9803F;letter-spacing:0.1em;display:block;margin-bottom:4px">LOCAL</span>
                    <span style="font-family:Georgia,'Times New Roman',Times,serif;font-size:20px;color:#2A2A2A">Recanto Paraíso</span>
                    <span style="font-size:14px;color:#8a7070;display:block;margin-top:4px">Rua Pégaso, 10 — Mairiporã, SP</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- CTA GOOGLE CALENDAR -->
        <div style="text-align:center;margin-bottom:16px">
          <a href="${GCAL_LINK}" target="_blank"
            style="display:inline-block;text-decoration:none;background:linear-gradient(135deg,#5E2433,#7A3242);color:#F8F5F2;font-family:Arial,Helvetica,sans-serif;font-weight:700;font-size:15px;letter-spacing:0.02em;padding:17px 36px;border-radius:50px;box-shadow:0 10px 28px rgba(94,36,51,0.32)">
            📅 Adicionar na Agenda Google
          </a>
        </div>
        <div style="text-align:center;font-family:'Courier New',Courier,monospace;font-size:12px;color:#a89090;letter-spacing:0.08em;margin-bottom:36px">
          Salve o evento para não perder a data.
        </div>

        <!-- CTA MAPA -->
        <div style="text-align:center;margin-bottom:8px">
          <a href="https://www.google.com/maps/search/?api=1&query=Rua+P%C3%A9gaso+10+Mairipor%C3%A3" target="_blank"
            style="display:inline-block;text-decoration:none;background:transparent;color:#5E2433;font-family:Arial,Helvetica,sans-serif;font-weight:600;font-size:14px;padding:13px 28px;border-radius:50px;border:1.5px solid rgba(94,36,51,0.4)">
            📍 Ver no Mapa
          </a>
        </div>
      </td>
    </tr>

    <!-- DIVISOR DOURADO -->
    <tr>
      <td style="background:#FFFFFF;padding:0 40px;border-left:1px solid #EDE4DA;border-right:1px solid #EDE4DA">
        <div style="height:1px;background:linear-gradient(90deg,transparent,#D4B06A 30%,#D4B06A 70%,transparent)"></div>
      </td>
    </tr>

    <!-- CITAÇÃO -->
    <tr>
      <td style="background:#FFFFFF;padding:36px 40px 44px;text-align:center;border-left:1px solid #EDE4DA;border-right:1px solid #EDE4DA">
        <p style="font-family:Georgia,'Times New Roman',Times,serif;font-style:italic;font-weight:300;font-size:22px;line-height:1.45;color:#5E2433;max-width:420px;margin:0 auto 22px">
          "Os melhores capítulos não acontecem quando a vida começa. Eles acontecem quando entendemos quem somos."
        </p>
        <p style="font-size:15px;color:#8a7070;line-height:1.7;font-family:Arial,Helvetica,sans-serif">
          Com amor,<br>
          <strong style="color:#5E2433">Samira</strong>
        </p>
      </td>
    </tr>

    <!-- FOOTER VINHO -->
    <tr>
      <td style="background:linear-gradient(160deg,#3F1722,#5E2433);border-radius:0 0 20px 20px;padding:36px 40px;text-align:center">
        <div style="font-family:Georgia,'Times New Roman',Times,serif;font-size:26px;color:#F8F5F2;margin-bottom:8px">
          Samira <span style="color:#D4B06A">4.0</span>
        </div>
        <div style="font-family:'Courier New',Courier,monospace;font-size:10px;letter-spacing:0.2em;color:rgba(233,217,206,0.5);text-transform:uppercase;margin-bottom:20px">
          04 · 07 · 2026 · Mairiporã
        </div>
        <div style="margin-bottom:18px">
          <a href="https://instagram.com/samiragouvea.mkt" target="_blank"
            style="font-family:'Courier New',Courier,monospace;font-size:12px;letter-spacing:0.1em;color:#D4B06A;text-decoration:none">
            @samiragouvea.mkt
          </a>
        </div>
        <div style="font-size:12px;color:rgba(233,217,206,0.35);font-family:Arial,Helvetica,sans-serif;line-height:1.6">
          Você recebeu este email porque confirmou presença no evento.<br>
          Em caso de dúvidas, responda este email.
        </div>
      </td>
    </tr>

    <tr><td style="height:40px"></td></tr>

  </table>
</td></tr>
</table>

</body>
</html>`;
}

function buildAdminEmail(payload: {
  nome: string;
  telefone: string;
  email: string;
  convidados: number;
  acompanhantes: string;
  observacoes: string;
  created_at: string;
}): string {
  const dt = new Date(payload.created_at).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="utf-8"><title>Nova Confirmação — Samira 4.0</title></head>
<body style="background:#F8F5F2;margin:0;padding:30px;font-family:Arial,Helvetica,sans-serif;color:#2A2A2A">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:520px;margin:0 auto">
    <tr>
      <td style="background:#5E2433;border-radius:12px 12px 0 0;padding:24px 30px;text-align:center">
        <div style="font-family:Georgia,serif;font-size:22px;color:#F8F5F2">
          Nova confirmação <span style="color:#D4B06A">recebida</span>
        </div>
        <div style="font-family:monospace;font-size:11px;color:rgba(233,217,206,0.6);margin-top:6px;letter-spacing:0.2em">
          SAMIRA 4.0 — RSVP
        </div>
      </td>
    </tr>
    <tr>
      <td style="background:#FFFFFF;border:1px solid #EDE4DA;border-top:none;padding:30px">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse">
          <tr><td style="font-family:monospace;font-size:11px;color:#A9803F;letter-spacing:0.08em;padding:10px 8px;border-bottom:1px solid #EDE4DA;width:40%">NOME</td><td style="font-size:16px;font-weight:700;padding:10px 8px;border-bottom:1px solid #EDE4DA">${payload.nome}</td></tr>
          <tr><td style="font-family:monospace;font-size:11px;color:#A9803F;letter-spacing:0.08em;padding:10px 8px;border-bottom:1px solid #EDE4DA">WHATSAPP</td><td style="padding:10px 8px;border-bottom:1px solid #EDE4DA">${payload.telefone || "—"}</td></tr>
          <tr><td style="font-family:monospace;font-size:11px;color:#A9803F;letter-spacing:0.08em;padding:10px 8px;border-bottom:1px solid #EDE4DA">EMAIL</td><td style="padding:10px 8px;border-bottom:1px solid #EDE4DA">${payload.email}</td></tr>
          <tr><td style="font-family:monospace;font-size:11px;color:#A9803F;letter-spacing:0.08em;padding:10px 8px;border-bottom:1px solid #EDE4DA">CONVIDADOS</td><td style="padding:10px 8px;border-bottom:1px solid #EDE4DA">${payload.convidados || 1}</td></tr>
          <tr><td style="font-family:monospace;font-size:11px;color:#A9803F;letter-spacing:0.08em;padding:10px 8px;border-bottom:1px solid #EDE4DA">ACOMPANHANTES</td><td style="padding:10px 8px;border-bottom:1px solid #EDE4DA">${payload.acompanhantes || "—"}</td></tr>
          <tr><td style="font-family:monospace;font-size:11px;color:#A9803F;letter-spacing:0.08em;padding:10px 8px">OBSERVAÇÕES</td><td style="padding:10px 8px">${payload.observacoes || "—"}</td></tr>
        </table>
        <div style="margin-top:20px;font-size:12px;color:#a89090;font-family:monospace">Recebido em: ${dt}</div>
      </td>
    </tr>
    <tr>
      <td style="background:#3F1722;border-radius:0 0 12px 12px;padding:16px 30px;text-align:center">
        <div style="font-size:12px;color:rgba(233,217,206,0.5);font-family:monospace">Samira 4.0 · RSVP System</div>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }

  try {
    const body = await req.json();
    const { nome, telefone, email, convidados, acompanhantes, observacoes } = body;

    if (!nome || !email) {
      return new Response(JSON.stringify({ error: "Nome e email são obrigatórios." }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }

    const created_at = new Date().toISOString();
    const dbPayload = { nome, telefone, email, convidados: convidados || 0, acompanhantes: acompanhantes || "", observacoes: observacoes || "", created_at };

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
    const { error: dbError } = await supabase.from("confirmacoes").insert(dbPayload);

    if (dbError) {
      console.error("DB error:", dbError);
      return new Response(JSON.stringify({ error: "Erro ao salvar confirmação." }), {
        status: 500,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }

    const primeiroNome = nome.trim().split(" ")[0];

    await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Samira 4.0 <contato@samiragouvea.com.br>",
          to: [email],
          subject: `🎉 Presença confirmada, ${primeiroNome}! — Samira 4.0`,
          html: buildGuestEmail(nome, primeiroNome),
        }),
      }).then(r => { if (!r.ok) r.text().then(t => console.error("Resend guest:", t)); }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "RSVP Samira 4.0 <contato@samiragouvea.com.br>",
          to: [ADMIN_EMAIL],
          subject: `[RSVP] Nova confirmação: ${nome}`,
          html: buildAdminEmail(dbPayload),
        }),
      }).then(r => { if (!r.ok) r.text().then(t => console.error("Resend admin:", t)); }),
    ]);

    return new Response(JSON.stringify({ success: true, primeiroNome }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  } catch (err) {
    console.error("Function error:", err);
    return new Response(JSON.stringify({ error: "Erro interno." }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }
});
