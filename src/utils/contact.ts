/**
 * Monta o link do WhatsApp a partir do valor configurado.
 *
 * Aceita tanto um número ("(11) 98765-4321", "5511987654321") quanto uma URL
 * completa. Números brasileiros sem DDI (10 ou 11 dígitos) recebem o 55.
 * Retorna `undefined` quando o valor não forma um link válido.
 */
export const buildWhatsAppUrl = (value: string | undefined, message?: string) => {
  const raw = value?.trim();
  if (!raw) return undefined;

  if (/^https?:\/\//i.test(raw)) {
    if (!message) return raw;
    try {
      const url = new URL(raw);
      if (/(^|\.)wa\.me$|whatsapp\.com$/i.test(url.hostname)) {
        url.searchParams.set("text", message);
      }
      return url.toString();
    } catch {
      return undefined;
    }
  }

  let digits = raw.replace(/\D/g, "");
  if (digits.length === 10 || digits.length === 11) digits = `55${digits}`;
  if (digits.length < 12 || digits.length > 15) return undefined;

  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${text}`;
};

export const defaultContactMessage = "Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.";

export const modelContactMessage = (modelTitle: string) =>
  `Olá! Vi o modelo "${modelTitle}" no seu portfólio e gostaria de conversar sobre um projeto parecido.`;
