import React, { useState } from 'react';
import { ScreenId, TransitionType } from '../types';

interface ScreenInicioProps {
  onNavigate: (screen: ScreenId, transition: TransitionType) => void;
}

export const ScreenInicio: React.FC<ScreenInicioProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = [
    { id: 'Todos', emoji: '✨', label: 'Todos' },
    { id: 'Comida', emoji: '🍔', label: 'Comida' },
    { id: 'Farmacia', emoji: '💊', label: 'Farmacia' },
    { id: 'Mercado', emoji: '🛒', label: 'Mercado' },
    { id: 'Cafe', emoji: '🥐', label: 'Café & Bakery' },
  ];

  const handleCopyCode = () => {
    setCopied(true);
    navigator.clipboard?.writeText('PUERTA2025');
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="bg-[#fff8f8] text-[#1f1a1c] min-h-screen flex flex-col antialiased selection:bg-[#ff6b35]/20 selection:text-[#ab3500]">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 px-4 flex items-center justify-between gap-2 max-w-lg mx-auto">
          <div className="flex items-center gap-2 min-w-0">
            <img
              alt="Puerta a Puerta Logo"
              className="h-8 w-auto object-contain flex-shrink-0"
              src="https://lh3.googleusercontent.com/aida/AEtjO1WCXYtlofETCtosLk-E_rWPJIKnN6y7XfaREXKXt70MzY_219U1ucxRcouw6FpzPsQN_ftsbQTzk5g0TDyLffGoxly-FPJkPmbm1rTPncH-zbt8jGzXkGxLpQBLinX2I_ba5DccECEX5tXW0WB2AwJ8-dIG-08_zpd8X1_UUVXH5fbFf7QEIbvRQAaHcqjXUYMRqSJ3cnqRyJnql7b3X2wtllb3PPnhSEtmw0yXKtorCxumz2DQDfSU-Qs"
            />
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] font-bold text-[#ab3500] uppercase tracking-wider truncate">
                Puerta a Puerta
              </span>
              <span className="text-[18px] font-semibold text-[#1f1a1c] truncate leading-tight">
                Home
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            <button
              aria-label="Notifications"
              className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-slate-100 text-[#594139] transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">notifications</span>
            </button>
            <a
              className="w-11 h-11 flex items-center justify-center"
              data-path="profile"
              href="#profile"
              onClick={(e) => e.preventDefault()}
            >
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWzbl4n64xDI629ZezkAQSLR8WulNdO6O_EpjfEp-FUPNT-dSpBQ71513ZxqtGV4nIP8bgIdYVxCm-YsnJda-cBlacPQp3M8QLcJz_yJxKWJj6cerfR_PMTKVIWGeF2zCc9DWMZeDO75Y1d62w7gprSZ5vYfkaWL5BH7Pp0zlQWdP6abIW0wmx8jwAtd8oKA-Y1a_wSlFDsRdpXEYsuQpp-JIXvitvi9tTXTgeIHVdlXpbi4W3xOzt"
              />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-[88px] max-w-lg mx-auto">
        <div className="flex flex-col w-full pb-6">
          {/* Greeting & Quick Address Context */}
          <section className="px-4 pt-4 pb-2 flex items-center justify-between">
            <div className="flex flex-col min-w-0 pr-2">
              <div className="flex items-center gap-1.5">
                <h1 className="text-[22px] font-bold text-[#1f1a1c] tracking-tight truncate">
                  Hola, Sebastián
                </h1>
                <span className="text-xl animate-bounce">👋</span>
              </div>
              <button
                aria-label="Cambiar dirección de entrega"
                className="flex items-center gap-1 text-left text-[#594139] hover:text-[#ab3500] transition-colors group mt-0.5"
              >
                <span className="material-symbols-outlined text-[#ab3500] text-[18px]">location_on</span>
                <span className="text-[12px] font-medium text-[#594139] group-hover:text-[#ab3500] truncate max-w-[210px]">
                  Calle Primavera 142, Dpto 4B
                </span>
                <span className="material-symbols-outlined text-[16px] text-[#ab3500] transition-transform group-hover:translate-y-0.5">
                  expand_more
                </span>
              </button>
            </div>

            {/* User Quick Badge / Status */}
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#ff6b35] to-[#ab3500] shadow-[0_4px_10px_rgba(255,107,53,0.35)] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <span className="text-[15px] font-bold text-[#ab3500]">SC</span>
                </div>
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#006c49] rounded-full border-2 border-white shadow-sm"></span>
            </div>
          </section>

          {/* Tactile Search Bar */}
          <section className="px-4 py-2.5">
            <div className="relative flex items-center">
              <div className="w-full flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_6px_16px_rgba(76,69,71,0.04)] focus-within:shadow-[inset_0_1px_2px_rgba(0,0,0,0.02),0_0_0_2px_rgba(255,107,53,0.35)] transition-all">
                <span className="material-symbols-outlined text-[22px] text-[#ab3500]">search</span>
                <input
                  className="w-full bg-transparent border-none outline-none text-[14px] text-[#1f1a1c] placeholder:text-[#8d7168]/70 focus:outline-none focus:ring-0"
                  placeholder="Buscar comida, farmacia o tiendas..."
                  type="text"
                />
                <button
                  aria-label="Filtros avanzados"
                  className="w-8 h-8 rounded-xl bg-[#fcf1f3] text-[#594139] flex items-center justify-center active:scale-95 transition-transform"
                >
                  <span className="material-symbols-outlined text-[18px]">tune</span>
                </button>
              </div>
            </div>
          </section>

          {/* Horizontal Chip/Pill Category Filter */}
          <section className="py-2.5">
            <div className="flex items-center gap-2.5 overflow-x-auto px-4 no-scrollbar scroll-smooth">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full font-semibold text-[13px] flex-shrink-0 transition-all active:scale-95 ${
                      isActive
                        ? 'bg-[#ff6b35] text-white shadow-[0_6px_14px_-2px_rgba(255,107,53,0.4),inset_0_2px_1px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(95,25,0,0.2)]'
                        : 'bg-white text-[#1f1a1c] shadow-[0_4px_12px_rgba(46,40,42,0.06),inset_0_1.5px_1px_rgba(255,255,255,0.9)] hover:bg-[#fcf1f3]'
                    }`}
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Interactive Promo Clay Banner */}
          <section className="px-4 py-2.5">
            <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#ab3500] via-[#ff6b35] to-[#ff8c42] p-4 text-white shadow-[0_12px_24px_-4px_rgba(255,107,53,0.32),inset_0_2px_2px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.15)] flex items-center justify-between gap-3">
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/10 blur-xl pointer-events-none"></div>
              <div className="flex items-start gap-3 z-10 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.6)] flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    local_shipping
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] uppercase tracking-wider text-[#ffdbd0] drop-shadow-sm font-extrabold">
                    Cupón Exclusivo
                  </span>
                  <p className="text-[18px] font-bold leading-tight mt-0.5">
                    Primer envío GRATIS
                  </p>
                  <span className="text-[12px] text-white/90 truncate mt-0.5">
                    Usa el código <strong className="font-bold underline decoration-[#ffdbd0] decoration-2">PUERTA2025</strong>
                  </span>
                </div>
              </div>
              <button
                onClick={handleCopyCode}
                className="flex-shrink-0 px-3.5 py-2 rounded-full bg-white text-[#ab3500] font-bold text-[13px] shadow-[0_4px_10px_rgba(0,0,0,0.12),inset_0_2px_1px_rgba(255,255,255,0.9)] active:scale-95 transition-transform"
              >
                {copied ? '¡Copiado!' : 'Copiar'}
              </button>
            </div>
          </section>

          {/* Featured Section Title */}
          <section className="px-4 pt-3 pb-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-5 rounded-full bg-[#ff6b35]"></span>
              <h2 className="text-[18px] font-bold text-[#1f1a1c]">Populares cerca de ti</h2>
            </div>
            <button className="text-[13px] font-semibold text-[#ab3500] hover:underline flex items-center gap-0.5">
              Ver todo
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </section>

          {/* Delivery Cards Stack */}
          <section className="px-4 flex flex-col gap-5 pt-2">
            {/* Card 1: La Furia Burger House */}
            <article className="relative flex flex-col rounded-[30px] bg-white p-3.5 shadow-[0_12px_28px_-4px_rgba(46,40,42,0.08),0_6px_14px_-2px_rgba(46,40,42,0.05),inset_0_2px_1px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(46,40,42,0.04)] transition-transform duration-200 hover:-translate-y-0.5">
              <div className="relative w-full h-44 rounded-[22px] overflow-hidden bg-slate-100 shadow-inner">
                <img
                  alt="Hamburguesa artesanal smash con queso derretido y papas fritas"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmnvKfsn3gKdxW3nWcG-ZrcJwNCnv8y8AW8jjyCKbBz8onKIz9RPFVw1Vl7pSoSxuXkCRmOsyZNcF0uzCuYfo7uViF5akVkkVww5-WyOrjHTWyocQ8BZ-q_Ccb1dJsWms1GrtX8rhp_sLMbDCEkOKfRRAUebrM9ZMZAvYwwmLN9WTczd7bzjSwQMBk0tywPXekn9KzcPmNKB1F6lnkqBgMI6CjR7XW6KcCGc0MgjfQPeNfKrS7iMvh"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-[#ff6b35] text-white text-[11px] tracking-wide font-extrabold uppercase shadow-[0_4px_8px_rgba(255,107,53,0.35),inset_0_1.5px_1px_rgba(255,255,255,0.4)]">
                    Abierto
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1f1a1c] text-[11px] font-semibold flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-[14px] text-[#006c49]">schedule</span>
                    20-30 min
                  </span>
                </div>
                <button
                  aria-label="Guardar en favoritos"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#594139] hover:text-[#ab3500] transition-colors shadow-sm active:scale-90"
                >
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    favorite
                  </span>
                </button>
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                  <span className="inline-flex items-center gap-1 text-xs font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-[14px] text-[#6ffbbe]">eco</span>
                    Envío gratis sobre $15
                  </span>
                </div>
              </div>

              <div className="flex flex-col pt-3 px-1 gap-1.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[18px] font-bold text-[#1f1a1c] truncate">La Furia Burger House</h3>
                  <div className="flex items-center gap-1 bg-[#fcf1f3] px-2 py-0.5 rounded-full flex-shrink-0">
                    <span className="material-symbols-outlined text-[16px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="text-[13px] font-bold text-[#1f1a1c]">4.9</span>
                    <span className="text-[12px] text-[#594139]">(420+)</span>
                  </div>
                </div>
                <p className="text-[12px] text-[#594139] flex items-center gap-1">
                  <span>🍔 Hamburguesas gourmet</span>
                  <span className="w-1 h-1 rounded-full bg-[#e1bfb5]"></span>
                  <span>Papas trufadas</span>
                  <span className="w-1 h-1 rounded-full bg-[#e1bfb5]"></span>
                  <span>Bebidas</span>
                </p>
                <div className="flex items-center justify-between pt-2 mt-1">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-[#006c49] font-bold uppercase tracking-wider">Envío Express</span>
                    <span className="text-[13px] text-[#1f1a1c] font-semibold">
                      $0.00 <span className="line-through text-[#8d7168] text-xs">$2.50</span>
                    </span>
                  </div>
                  {/* Element (xpath: //button[contains(., 'Pedir ahora') and preceding::h3[contains(text(), 'La Furia')]]) -> Seguimiento en Vivo (push) */}
                  <button
                    onClick={() => onNavigate('seguimiento_en_vivo', 'push')}
                    className="px-5 py-2.5 rounded-full bg-[#ff6b35] text-white font-bold text-[13px] flex items-center gap-1.5 shadow-[0_8px_16px_-2px_rgba(255,107,53,0.38),inset_0_2px_1px_rgba(255,255,255,0.4),inset_0_-2px_3px_rgba(0,0,0,0.12)] active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Pedir ahora</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>

            {/* Card 2: Napoletana & Co. */}
            <article className="relative flex flex-col rounded-[30px] bg-white p-3.5 shadow-[0_12px_28px_-4px_rgba(46,40,42,0.08),0_6px_14px_-2px_rgba(46,40,42,0.05),inset_0_2px_1px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(46,40,42,0.04)] transition-transform duration-200 hover:-translate-y-0.5">
              <div className="relative w-full h-44 rounded-[22px] overflow-hidden bg-slate-100 shadow-inner">
                <img
                  alt="Pizza napolitana al horno de leña con albahaca fresca y mozzarella"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUcfMPjPgdiP0bGZU4cs9-IJ_JDX37WCq3isKO9op-84-q7v5uef3FmmzT2D7ojAO_88mknvu1c9SPpCuyW39ap3hxw8Qps60r7C9yvBYETC1VhWHoMhcxKnyCbNVT4GZxW0llTu0esqtkYupmdNDSIMJwtsXcuZ9f_tdTDTq6Hzfg9aHdDLDppOYmtZCuzKjWwFLv4yis7gV3p_bWWguxpExwcdvFEaI-W4KAG5tVPNsi0ObjJ1wr"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-[#ff6b35] text-white text-[11px] tracking-wide font-extrabold uppercase shadow-[0_4px_8px_rgba(255,107,53,0.35),inset_0_1.5px_1px_rgba(255,255,255,0.4)]">
                    Abierto
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1f1a1c] text-[11px] font-semibold flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-[14px] text-[#006c49]">schedule</span>
                    25-35 min
                  </span>
                </div>
                <button
                  aria-label="Guardar en favoritos"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#594139] hover:text-[#ab3500] transition-colors shadow-sm active:scale-90"
                >
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                  <span className="inline-flex items-center gap-1 text-xs font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-[14px] text-amber-300">local_fire_department</span>
                    Masa fermentada 48 hrs
                  </span>
                </div>
              </div>

              <div className="flex flex-col pt-3 px-1 gap-1.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[18px] font-bold text-[#1f1a1c] truncate">Napoletana &amp; Co.</h3>
                  <div className="flex items-center gap-1 bg-[#fcf1f3] px-2 py-0.5 rounded-full flex-shrink-0">
                    <span className="material-symbols-outlined text-[16px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="text-[13px] font-bold text-[#1f1a1c]">4.8</span>
                    <span className="text-[12px] text-[#594139]">(850+)</span>
                  </div>
                </div>
                <p className="text-[12px] text-[#594139] flex items-center gap-1">
                  <span>🍕 Pizza artesanal</span>
                  <span className="w-1 h-1 rounded-full bg-[#e1bfb5]"></span>
                  <span>Horno de leña</span>
                  <span className="w-1 h-1 rounded-full bg-[#e1bfb5]"></span>
                  <span>Italiana</span>
                </p>
                <div className="flex items-center justify-between pt-2 mt-1">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-[#594139] font-medium">Costo de entrega</span>
                    <span className="text-[13px] text-[#1f1a1c] font-semibold">Envío $1.99</span>
                  </div>
                  {/* Element (xpath: //button[contains(., 'Pedir ahora') and preceding::h3[contains(text(), 'Napoletana')]]) -> Seguimiento en Vivo (push) */}
                  <button
                    onClick={() => onNavigate('seguimiento_en_vivo', 'push')}
                    className="px-5 py-2.5 rounded-full bg-[#ff6b35] text-white font-bold text-[13px] flex items-center gap-1.5 shadow-[0_8px_16px_-2px_rgba(255,107,53,0.38),inset_0_2px_1px_rgba(255,255,255,0.4),inset_0_-2px_3px_rgba(0,0,0,0.12)] active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Pedir ahora</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          </section>

          {/* Element (xpath: //span[contains(text(), 'Repartidores activos cerca')]/ancestor::section) -> Puerta a Puerta - Repartidor Activo (push) */}
          <section
            onClick={() => onNavigate('repartidor_activo', 'push')}
            className="px-4 pt-5 pb-2 cursor-pointer transition-transform hover:scale-[1.01]"
          >
            <div className="p-4 rounded-[26px] bg-white shadow-[0_8px_20px_rgba(46,40,42,0.05),inset_0_2px_1px_rgba(255,255,255,0.9)] flex items-center gap-3.5 border border-emerald-100/50">
              <div className="w-11 h-11 rounded-2xl bg-[#6ffbbe] flex items-center justify-center text-[#002113] shadow-[0_4px_10px_rgba(0,175,121,0.2),inset_0_1.5px_1px_rgba(255,255,255,0.7)] flex-shrink-0">
                <span className="material-symbols-outlined text-[24px]">moped</span>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-[13px] font-bold text-[#1f1a1c]">Repartidores activos cerca</span>
                <span className="text-[12px] text-[#594139]">
                  14 repartidores listos en tu zona para entregas en menos de 30 min.
                </span>
              </div>
              <span className="material-symbols-outlined text-slate-400 text-[20px]">chevron_right</span>
            </div>
          </section>
        </div>
      </main>

      {/* Floating Bottom Nav */}
      <div className="fixed bottom-0 inset-x-0 z-40 pointer-events-none flex justify-center px-4 mb-2">
        <nav
          className="pointer-events-auto bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-full px-4 py-1 flex items-center justify-around gap-2 max-w-md w-full border border-slate-100"
          data-active-classes="text-[#ff6b35] font-semibold"
        >
          <a
            aria-current="page"
            className="flex flex-col items-center justify-center min-w-[56px] h-12 transition-colors text-[#ff6b35] font-semibold"
            data-path="home"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('inicio', 'none');
            }}
          >
            <span className="material-symbols-outlined text-[24px]">home</span>
            <span className="text-[11px] mt-0.5">Home</span>
          </a>
          <a
            className="flex flex-col items-center justify-center min-w-[56px] h-12 text-[#594139] hover:text-[#1f1a1c] transition-colors"
            data-path="search"
            href="#search"
            onClick={(e) => e.preventDefault()}
          >
            <span className="material-symbols-outlined text-[24px]">search</span>
            <span className="text-[11px] mt-0.5">Search</span>
          </a>
          {/* Element (xpath: //nav//a[@data-path='orders']) -> Seguimiento en Vivo (none) */}
          <a
            className="flex flex-col items-center justify-center min-w-[56px] h-12 text-[#594139] hover:text-[#1f1a1c] transition-colors"
            data-path="orders"
            href="#orders"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('seguimiento_en_vivo', 'none');
            }}
          >
            <span className="material-symbols-outlined text-[24px]">receipt_long</span>
            <span className="text-[11px] mt-0.5">Orders</span>
          </a>
          <a
            className="flex flex-col items-center justify-center min-w-[56px] h-12 text-[#594139] hover:text-[#1f1a1c] transition-colors"
            data-path="profile"
            href="#profile"
            onClick={(e) => e.preventDefault()}
          >
            <span className="material-symbols-outlined text-[24px]">person</span>
            <span className="text-[11px] mt-0.5">Profile</span>
          </a>
        </nav>
      </div>
    </div>
  );
};
