import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
export function WhatsAppBanner() { return <section className="whatsapp-banner"><div><span className="eyebrow">NEED A LITTLE HELP?</span><h2>Tell us what you're looking for.</h2><p>Send us a WhatsApp message. Our shop team will help you find the right toy.</p></div><a href={getWhatsAppUrl('Hello Toy Willa! I need help choosing a toy.')} target="_blank" rel="noreferrer" className="whatsapp-button"><MessageCircle/> Chat on WhatsApp</a></section>; }
