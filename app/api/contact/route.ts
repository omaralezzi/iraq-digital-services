import { clean, clientKey, jsonError, rateLimited, validContact } from "@/src/lib/formSecurity";

export async function POST(request: Request) {
  if (rateLimited(clientKey(request, "contact"))) return jsonError("Too many requests", 429);
  let input: Record<string, unknown>;
  try { input = await request.json() as Record<string, unknown>; } catch { return jsonError("Invalid JSON", 400); }
  if (clean(input.website)) return Response.json({ ok: true }, { status: 202 });
  const name = clean(input.name, 100);
  const phone = clean(input.phone, 160);
  const email = clean(input.email, 160);
  const message = clean(input.message, 3000);
  const consent = clean(input.consent, 10);
  if (name.length < 2 || message.length < 15 || !validContact(phone) || consent !== "yes") return jsonError("Required fields are invalid", 422);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return jsonError("Email is invalid", 422);
  const acceptedFields = ["businessName", "country", "governorate", "city", "projectType", "budget", "timing", "preferred", "discovery", "referralCode", "source"];
  const record = { id: crypto.randomUUID(), receivedAt: new Date().toISOString(), name, phone, email, message, ...Object.fromEntries(acceptedFields.map(key => [key, clean(input[key], 300)])) };
  void record;
  return Response.json({ ok: true, requestId: record.id }, { status: 201, headers: { "cache-control": "no-store" } });
}
