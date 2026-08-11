import { clean, clientKey, jsonError, rateLimited, validContact } from "@/src/lib/formSecurity";

export async function POST(request: Request) {
  if (rateLimited(clientKey(request, "project"))) return jsonError("Too many requests", 429);
  let input: Record<string, unknown>;
  try { input = await request.json() as Record<string, unknown>; } catch { return jsonError("Invalid JSON", 400); }
  if (clean(input.website)) return Response.json({ ok: true }, { status: 202 });
  const required = ["business", "build", "problem", "audience", "features", "integrations", "assets", "timing", "governorate", "city", "preferred", "name", "contact"];
  const cleaned = Object.fromEntries([...required, "budget", "referralCode", "source"].map(key => [key, clean(input[key], key === "problem" || key === "features" ? 2000 : 300)]));
  if (required.some(key => !cleaned[key]) || clean(input.consent, 10) !== "yes" || !validContact(cleaned.contact)) return jsonError("Required fields are invalid", 422);
  const record = { id: crypto.randomUUID(), receivedAt: new Date().toISOString(), ...cleaned };
  void record;
  return Response.json({ ok: true, requestId: record.id }, { status: 201, headers: { "cache-control": "no-store" } });
}
