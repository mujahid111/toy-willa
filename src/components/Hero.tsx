import { MessageCircle, ShieldCheck, ShoppingBag, Sparkles, Truck, Star } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export function Hero({ onExplore }: { onExplore: () => void }) {
  return <section id="home" className="hero"><div className="hero-copy"><div className="eyebrow"><Sparkles size={16}/> PLAY • LEARN • IMAGINE</div><h1>Big smiles start with <span>great toys.</span></h1><p>Discover fun, creative and quality toys made to turn everyday playtime into a little adventure.</p><div className="hero-actions"><button className="primary" onClick={onExplore}>Explore Toys <ShoppingBag size={18}/></button><a className="secondary" href={getWhatsAppUrl('Hello Toy Willa! I want help choosing a toy.')} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Enquire on WhatsApp</a></div><div className="trust"><span><ShieldCheck/> Quality checked</span><span><Truck/> Easy delivery</span></div></div><div className="hero-art"><div className="blob"></div><div className="toy toy1">🧸</div><div className="toy toy2">🚗</div><div className="toy toy3">🧩</div><div className="hero-card"><Star fill="currentColor"/> Loved by little explorers</div></div></section>;
}
