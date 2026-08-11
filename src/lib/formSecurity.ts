type RateRecord = { count: number; resetAt: number };

const globalStore = globalThis as typeof globalThis & { __formRateStore?: Map<string, RateRecord> };
const store = globalStore.__formRateStore ?? new Map<string, RateRecord>();
globalStore.__formRateStore = store;

export function clientKey(request: Request, endpoint: string) {
  const forwarded = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for")?.split(",")[0] || "local";
  return `${endpoint}:${forwarded.trim()}`;
}

export function rateLimited(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const current = store.get(key);
  if (!current || current.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }
  current.count += 1;
  return current.count > limit;
}

export function clean(value: unknown, max = 2000) {
  if (typeof value !== "string") return "";
  return value.replace(/[<>\u0000-\u001F]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

export function validContact(value: string) {
  return /^[\p{L}\p{N}@+._()\-\s]{5,160}$/u.test(value);
}

export function jsonError(message: string, status: number) {
  return Response.json({ ok: false, message }, { status, headers: { "cache-control": "no-store" } });
}
