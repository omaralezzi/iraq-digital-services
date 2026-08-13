import "server-only";

const recipient = process.env.ENQUIRY_RECIPIENT_EMAIL;
const apiKey = process.env.RESEND_API_KEY;

type EnquiryKind = "contact" | "project";

const labels: Record<string, string> = {
  name: "الاسم", phone: "الهاتف", email: "البريد الإلكتروني", businessName: "اسم النشاط",
  country: "الدولة", governorate: "المحافظة", city: "المدينة", projectType: "نوع المشروع",
  budget: "الميزانية التقريبية", timing: "موعد البدء", preferred: "وسيلة التواصل المفضلة",
  discovery: "مصدر التعرف", message: "وصف المشروع", business: "نوع النشاط", build: "الحل المطلوب",
  problem: "المشكلة", audience: "الجمهور المستهدف", features: "الخصائص المطلوبة",
  integrations: "التكاملات", assets: "المواد المتوفرة", contact: "بيانات التواصل",
  referralCode: "رمز الإحالة", source: "مصدر الزيارة",
};

const escapeHtml = (value: string) => value
  .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;").replaceAll("'", "&#039;");

export async function sendEnquiryEmail(kind: EnquiryKind, id: string, record: Record<string, string>) {
  if (!apiKey || !recipient) throw new Error("Email delivery is not configured");
  const title = kind === "contact" ? "طلب تواصل جديد" : "وصف مشروع جديد";
  const fields = Object.entries(record).filter(([, value]) => value);
  const html = `<main dir="rtl" style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#102438"><h1 style="font-size:24px">${title}</h1><p style="color:#5a6d7d">رقم الطلب: ${escapeHtml(id)}</p><table style="border-collapse:collapse;width:100%">${fields.map(([key, value]) => `<tr><th style="text-align:right;vertical-align:top;border-bottom:1px solid #e4e9ed;padding:10px;width:32%">${escapeHtml(labels[key] ?? key)}</th><td style="white-space:pre-wrap;border-bottom:1px solid #e4e9ed;padding:10px">${escapeHtml(value)}</td></tr>`).join("")}</table></main>`;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
    body: JSON.stringify({ from: "sifrsifr.one <forms@sifrsifr.one>", to: [recipient], reply_to: record.email || undefined, subject: `${title} — ${record.name || record.business || id}`, html }),
  });
  if (!response.ok) throw new Error(`Email provider returned ${response.status}`);
}
