import { Hero } from '../components/Hero';
import { CategorySection } from '../components/CategorySection';
import { ProductSection } from '../components/ProductSection';
import { AboutSection } from '../components/AboutSection';
import { WhySection } from '../components/WhySection';
import { WhatsAppBanner } from '../components/WhatsAppBanner';
import { ContactSection } from '../components/ContactSection';
export function HomePage({ onExplore }: { onExplore: () => void }) { return <main><Hero onExplore={onExplore}/><CategorySection/><ProductSection/><AboutSection/><WhySection/><WhatsAppBanner/><ContactSection/></main>; }
