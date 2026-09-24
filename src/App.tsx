import { useState } from "react";
import type { ModalType } from "./types/auth";
import { Header } from "./components/Header";
import { AuthModal } from "./components/AuthModal";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [modal, setModal] = useState<ModalType>(null);

  const navigate = (item: string) => {
    setActive(item);
    setMenuOpen(false);
    if (item === "Login" || item === "Register") {
      setModal(item.toLowerCase() as Exclude<ModalType, null>);
      return;
    }
    const target = document.getElementById(
      item.toLowerCase().replaceAll(" ", "-"),
    );
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Header
        menuOpen={menuOpen}
        active={active}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        onNavigate={navigate}
      />
      <HomePage onExplore={() => navigate("Categories")} />
      <Footer onNavigate={navigate} />
      {modal && (
        <AuthModal
          type={modal}
          onClose={() => setModal(null)}
          onSwitch={setModal}
        />
      )}
    </div>
  );
}
