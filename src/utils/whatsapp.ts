import { WHATSAPP_NUMBER } from '../constants/site';

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
