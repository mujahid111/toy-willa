import { Menu, MessageCircle, X } from 'lucide-react';
import { navigationItems } from '../constants/site';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Brand } from './Brand';

interface HeaderProps {
  menuOpen: boolean;
  active: string;
  onMenuToggle: () => void;
  onNavigate: (item: string) => void;
}

export function Header({ menuOpen, active, onMenuToggle, onNavigate }: HeaderProps) {
  return (
    <header className="nav">
      <Brand onClick={() => onNavigate('Home')} />
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {navigationItems.map((item) => <button key={item} className={active === item ? 'active' : ''} onClick={() => onNavigate(item)}>{item}</button>)}
        <button onClick={() => onNavigate('Login')}>Login</button>
        <button className="register" onClick={() => onNavigate('Register')}>Register</button>
      </nav>
      <a className="call-shop" href={getWhatsAppUrl('Hello Toy Willa! I would like to enquire about your toys.')} target="_blank" rel="noreferrer">
        <MessageCircle size={18} /> Call Shop
      </a>
      <button className="menu" onClick={onMenuToggle} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
    </header>
  );
}
