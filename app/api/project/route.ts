import { clean, clientKey, jsonError, rateLimited, validContact } from "@/src/lib/formSecurity";
import { sendEnquiryEmail } from "@/src/lib/enquiryEmail";

export async function POST(request: Request) {
  if (rateLimited(clientKey(request, "project"))) return jsonError("Too many requests", 429);
  let input: Record<string, unknown>;
  try { input = await request.json() as Record<string, unknown>; } catch { return jsonError("Invalid JSON", 400); }
  if (clean(input.website)) return Response.json({ ok: true }, { status: 202 });
  const required = ["business", "build", "problem", "audience", "features", "integrations", "assets", "timing", "country", "governorate", "city", "preferred", "name", "contact"];
  const cleaned = Object.fromEntries([...required, "budget", "referralCode", "source"].map(key => [key, clean(input[key], key === "problem" || key === "features" ? 2000 : 300)]));
  if (required.some(key => !cleaned[key]) || clean(input.consent, 10) !== "yes" || !validContact(cleaned.contact)) return jsonError("Required fields are invalid", 422);
  const id = crypto.randomUUID();
  try { await sendEnquiryEmail("project", id, cleaned); } catch { return jsonError("Delivery is temporarily unavailable", 503); }
  return Response.json({ ok: true, requestId: id }, { status: 201, headers: { "cache-control": "no-store" } });
}
