import { ChevronRight, Menu, MessageCircle, X } from 'lucide-react';
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

      {/* Breadcrumb - visible on all sizes */}
      <div className="breadcrumb">
        <ChevronRight size={14} className="breadcrumb-sep" />
        <span className="breadcrumb-current">{active}</span>
      </div>

      {/* Desktop nav links */}
      <nav className="nav-links">
        {navigationItems.map((item) => (
          <button key={item} className={active === item ? 'active' : ''} onClick={() => onNavigate(item)}>{item}</button>
        ))}
        <button onClick={() => onNavigate('Login')}>Login</button>
        <button className="register" onClick={() => onNavigate('Register')}>Register</button>
      </nav>

      <a
        className="call-shop"
        href={getWhatsAppUrl('Hello Toy Willa! I would like to enquire about your toys.')}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={18} /> Call Shop
      </a>

      {/* Mobile hamburger button */}
      <button className="menu-toggle" onClick={onMenuToggle} aria-label="Toggle navigation">
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && <div className="menu-backdrop" onClick={onMenuToggle} />}
      <nav className={`menu-dropdown${menuOpen ? ' open' : ''}`}>
        <div className="menu-header">
          <span className="menu-title">Navigation</span>
          <button className="menu-close" onClick={onMenuToggle} aria-label="Close menu">
            <X size={18} />
          </button>
        </div>
        <div className="menu-items">
          {navigationItems.map((item) => (
            <button
              key={item}
              className={`menu-item${active === item ? ' active' : ''}`}
              onClick={() => onNavigate(item)}
            >
              <span className="menu-item-dot" />
              {item}
            </button>
          ))}
        </div>
        <div className="menu-divider" />
        <div className="menu-auth">
          <button className="menu-item" onClick={() => onNavigate('Login')}>Login</button>
          <button className="menu-item menu-register" onClick={() => onNavigate('Register')}>Register</button>
        </div>
      </nav>
    </header>
  );
}
