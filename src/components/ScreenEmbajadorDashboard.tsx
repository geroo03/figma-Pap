import React, { useState } from 'react';
import { ScreenId, TransitionType } from '../types';

interface ScreenEmbajadorDashboardProps {
  onNavigate: (screen: ScreenId, transition: TransitionType) => void;
}

export const ScreenEmbajadorDashboard: React.FC<ScreenEmbajadorDashboardProps> = ({ onNavigate }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopy = () => {
    setCopiedLink(true);
    navigator.clipboard?.writeText('https://puertaapuerta.ar/ref/lucas-diamante');
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="bg-[#fcf8ff] text-slate-900 min-h-screen flex flex-col font-sans antialiased pb-20">
      {/* Top Navbar */}
      <header className="bg-white border-b border-purple-100 px-4 py-3 sticky top-0 z-30 shadow-xs">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('inicio', 'none')}
              className="w-8 h-8 rounded-full bg-purple-50 hover:bg-purple-100 flex items-center justify-center text-purple-700"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            </button>
            <div className="flex flex-col">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-600">
                Programa de Embajadores
              </span>
              <h1 className="text-base font-bold text-slate-900 leading-tight">Lucas M.</h1>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-black shadow-xs flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">diamond</span>
            Nivel Diamante
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-lg mx-auto w-full p-4 flex flex-col gap-4">
        {/* Earnings Card */}
        <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 p-5 text-white shadow-lg">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-xs text-purple-300 font-semibold uppercase tracking-wider">
                Comisiones del Mes
              </span>
              <span className="text-3xl font-black mt-1">$482,900</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-purple-200">
              <span className="material-symbols-outlined text-[28px]">payments</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-purple-200">
            <span>28 comercios adheridos</span>
            {/* Element (xpath: //span[contains(text(), 'Ver historial')]) -> Super Admin Dashboard (push) */}
            <span
              onClick={() => onNavigate('super_admin', 'push')}
              className="text-xs font-semibold text-orange-400 hover:text-orange-300 cursor-pointer flex items-center gap-0.5"
            >
              Ver historial
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </span>
          </div>
        </section>

        {/* Share Referral Link Card */}
        <section className="bg-white rounded-3xl p-4 border border-purple-100 shadow-sm flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-800">Tu Enlace de Embajador</h2>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              5% comisión continua
            </span>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-2xl bg-slate-50 border border-slate-200">
            <input
              type="text"
              readOnly
              value="https://puertaapuerta.ar/ref/lucas-diamante"
              className="bg-transparent text-xs text-slate-700 w-full outline-none font-mono px-2"
            />
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-bold text-xs shadow-xs transition-all flex-shrink-0"
            >
              {copiedLink ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>
        </section>

        {/* Top Referred Businesses */}
        <section className="flex flex-col gap-2 pt-1">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              Comercios Recomendados
            </h2>
            {/* Element (xpath: //span[contains(text(), 'Ver historial')]) backup link */}
            <span
              onClick={() => onNavigate('super_admin', 'push')}
              className="text-xs font-semibold text-orange-600 hover:text-orange-700 cursor-pointer"
            >
              Ver historial
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="bg-white p-3.5 rounded-2xl border border-purple-100/80 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                  LF
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">La Furia Burger House</span>
                  <span className="text-[11px] text-slate-500">420 pedidos este mes</span>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-600">+$42,000</span>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-purple-100/80 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm">
                  PR
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">Pizzería Roma</span>
                  <span className="text-[11px] text-slate-500">310 pedidos este mes</span>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-600">+$31,000</span>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Nav for Ambassador with Element (xpath: //nav//a[contains(., 'Inicio')]) -> Puerta a Puerta - Inicio (none) */}
      <nav className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-purple-100 px-6 py-2 flex items-center justify-around max-w-lg mx-auto z-40">
        {/* Element (xpath: //nav//a[contains(., 'Inicio')]) -> Puerta a Puerta - Inicio (none) */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('inicio', 'none');
          }}
          className="flex flex-col items-center text-slate-500 hover:text-purple-600 font-medium text-[11px] cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">home</span>
          <span>Inicio</span>
        </a>

        <a
          href="#comisiones"
          className="flex flex-col items-center text-purple-600 font-bold text-[11px]"
        >
          <span className="material-symbols-outlined text-[22px]">paid</span>
          <span>Comisiones</span>
        </a>

        <a
          href="#comercios"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('dashboard_comercios', 'none');
          }}
          className="flex flex-col items-center text-slate-500 hover:text-purple-600 font-medium text-[11px]"
        >
          <span className="material-symbols-outlined text-[22px]">storefront</span>
          <span>Comercios</span>
        </a>

        <a
          href="#admin"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('super_admin', 'push');
          }}
          className="flex flex-col items-center text-slate-500 hover:text-purple-600 font-medium text-[11px]"
        >
          <span className="material-symbols-outlined text-[22px]">admin_panel_settings</span>
          <span>Admin</span>
        </a>
      </nav>
    </div>
  );
};
