/**
 * Link do WhatsApp a partir do valor configurado: um número (com ou sem DDI,
 * qualquer formatação) vira wa.me com mensagem; uma URL é usada como está.
 */
export const buildWhatsAppUrl = (value: string | undefined, message: string) => {
  const raw = value?.trim();
  if (!raw) return undefined;
  if (/^https?:\/\//i.test(raw)) return raw;

  const digits = raw.replace(/\D/g, "");
  const number = digits.length <= 11 ? `55${digits}` : digits;
  if (number.length < 12 || number.length > 15) return undefined;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

export const defaultContactMessage = "Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.";

export const modelContactMessage = (modelTitle: string) =>
  `Olá! Vi o modelo "${modelTitle}" no seu portfólio e gostaria de conversar sobre um projeto parecido.`;
