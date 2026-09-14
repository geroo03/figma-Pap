import React, { useState } from 'react';
import { ScreenId, TransitionType } from '../types';

interface ScreenResponsiveCommerceProps {
  onNavigate: (screen: ScreenId, transition: TransitionType) => void;
}

export const ScreenResponsiveCommerce: React.FC<ScreenResponsiveCommerceProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen flex flex-col font-sans antialiased">
      {/* Top Meta Bar */}
      <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('inicio', 'none')}
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <div>
            <h1 className="text-base font-bold text-slate-900 leading-tight">
              Responsive Commerce Dashboard (3 Breakpoints)
            </h1>
            <p className="text-xs text-slate-500">
              Pizzería Roma &amp; Comercios Asociados • Adaptación Multi-pantalla
            </p>
          </div>
        </div>

        {/* Breakpoint Switcher for testing/viewing */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('desktop')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              activeTab === 'desktop' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">desktop_windows</span>
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            onClick={() => setActiveTab('tablet')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              activeTab === 'tablet' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">tablet_mac</span>
            <span className="hidden sm:inline">Tablet</span>
          </button>
          <button
            onClick={() => setActiveTab('mobile')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              activeTab === 'mobile' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">phone_iphone</span>
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar with `Historial` link for xpath: //aside//a[contains(., 'Historial')] */}
        <aside className="w-64 bg-slate-900 text-slate-200 flex flex-col flex-shrink-0 p-4 border-r border-slate-800">
          <div className="flex items-center gap-2.5 px-2 py-3 border-b border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-[#ff6b35] flex items-center justify-center text-white font-black text-sm">
              PR
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">Pizzería Roma</span>
              <span className="text-[10px] text-emerald-400">● Cocina Activa</span>
            </div>
          </div>

          <nav className="mt-4 flex flex-col gap-1.5 text-xs font-medium">
            <a
              href="#comandas"
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#ff6b35] text-white font-semibold"
            >
              <span className="material-symbols-outlined text-[18px]">restaurant_menu</span>
              <span>Comandas Activas</span>
              <span className="ml-auto bg-white/20 px-1.5 py-0.5 rounded text-[10px]">3</span>
            </a>

            {/* Element (xpath: //aside//a[contains(., 'Historial')]) -> Super Admin Dashboard (none) */}
            <a
              href="#historial"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('super_admin', 'none');
              }}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">history</span>
              <span>Historial</span>
            </a>

            <a
              href="#menu"
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">menu_book</span>
              <span>Carta &amp; Platos</span>
            </a>

            <a
              href="#repartidores"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('repartidor_activo', 'push');
              }}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">delivery_dining</span>
              <span>Cadetes Asignados</span>
            </a>
          </nav>
        </aside>

        {/* Content Preview Columns */}
        <main className="flex-1 p-6 overflow-y-auto flex flex-col gap-6 max-w-6xl mx-auto w-full">
          {/* Active Orders Dashboard Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Comandas en Espera de Confirmación</h2>
                <p className="text-xs text-slate-500">Cocina y despacho inmediato de pizzas artesanales</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold animate-pulse">
                1 Nuevo Pedido
              </span>
            </div>

            {/* Order Card with Element (xpath: //button[contains(., 'Aceptar y Cocinar') or contains(., 'Aceptar comanda')]) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Order #1204 */}
              <div className="rounded-2xl border-2 border-[#ff6b35]/40 bg-orange-50/20 p-4 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#ff6b35]">Orden #1204</span>
                    <span className="text-xs text-slate-500 font-medium">Hace 2 min</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">Sebastián C. (1 item)</h3>
                  <div className="bg-white rounded-xl p-3 border border-slate-200 text-xs flex flex-col gap-1">
                    <div className="flex justify-between font-semibold text-slate-800">
                      <span>1x Pizza Margherita Especial</span>
                      <span>$12,500</span>
                    </div>
                    <span className="text-slate-500 text-[11px]">
                      Notas: Masa fina, sin orégano, bien dorada.
                    </span>
                  </div>
                </div>

                {/* Element (xpath: //button[contains(., 'Aceptar y Cocinar') or contains(., 'Aceptar comanda')]) -> Dashboard Comercios (none) */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onNavigate('dashboard_comercios', 'none')}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#ff6b35] hover:bg-[#ab3500] active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">skillet</span>
                    <span>Aceptar y Cocinar</span>
                  </button>

                  <button
                    onClick={() => onNavigate('dashboard_comercios', 'none')}
                    className="py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
                  >
                    <span>Aceptar comanda</span>
                  </button>
                </div>
              </div>

              {/* Order #1203 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col justify-between gap-4 opacity-90">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-600">Orden #1203</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      En Horno (8 min restantes)
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">Mariana G. (2 items)</h3>
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-xs flex flex-col gap-1">
                    <div className="flex justify-between font-semibold text-slate-800">
                      <span>1x Pizza Cuatro Quesos + 1x Coca-Cola</span>
                      <span>$16,800</span>
                    </div>
                    <span className="text-slate-500 text-[11px]">
                      Cadete asignado: Matías (Repartidor PaP)
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <span className="text-slate-500">Despacho estimado: 13:45</span>
                  <button
                    onClick={() => onNavigate('repartidor_activo', 'push')}
                    className="text-[#ff6b35] font-bold hover:underline"
                  >
                    Ver Cadete →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
