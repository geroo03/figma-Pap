import React, { useState } from 'react';
import { ScreenId, TransitionType } from '../types';

interface ScreenMatrizResponsivaProps {
  onNavigate: (screen: ScreenId, transition: TransitionType) => void;
}

export const ScreenMatrizResponsiva: React.FC<ScreenMatrizResponsivaProps> = ({ onNavigate }) => {
  const [selectedDevice, setSelectedDevice] = useState<'all' | 'desktop' | 'tablet' | 'mobile'>('all');

  return (
    <div className="bg-[#0f172a] text-slate-100 min-h-screen flex flex-col font-sans antialiased">
      {/* Top Bar */}
      <header className="bg-[#1e293b] border-b border-slate-700/80 px-4 py-3 flex items-center justify-between sticky top-0 z-30 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('super_admin', 'none')}
            className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <div>
            <h1 className="text-base font-bold text-white leading-tight">
              Matriz Responsiva Completa (Mobile, Tablet, Desktop)
            </h1>
            <p className="text-xs text-slate-400">
              Vista sincrónica multicanal en tiempo real de operaciones Puerta a Puerta
            </p>
          </div>
        </div>

        {/* View Mode */}
        <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-700 text-xs font-semibold">
          <button
            onClick={() => setSelectedDevice('all')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              selectedDevice === 'all' ? 'bg-[#ff6b35] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">grid_view</span>
            <span className="hidden sm:inline">Matriz 3-en-1</span>
          </button>
          <button
            onClick={() => setSelectedDevice('desktop')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              selectedDevice === 'desktop' ? 'bg-[#ff6b35] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">desktop_windows</span>
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            onClick={() => setSelectedDevice('tablet')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              selectedDevice === 'tablet' ? 'bg-[#ff6b35] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">tablet</span>
            <span className="hidden sm:inline">Tablet</span>
          </button>
          <button
            onClick={() => setSelectedDevice('mobile')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              selectedDevice === 'mobile' ? 'bg-[#ff6b35] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">phone_iphone</span>
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>
      </header>

      {/* Main Layout with persistent <aside> conforming to xpath spec */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar <aside> with required xpaths:
            - //aside//a[contains(., 'Cadetes')] -> Repartidor Activo (push)
            - //aside//a[contains(., 'Historial')] -> Super Admin Dashboard (none)
        */}
        <aside className="w-64 bg-[#1e293b] border-r border-slate-700/80 p-4 flex flex-col gap-4 flex-shrink-0">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-700/80">
            <div className="w-10 h-10 rounded-xl bg-[#ff6b35] flex items-center justify-center text-white font-bold">
              PaP
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">Central Operativa</span>
              <span className="text-[11px] text-emerald-400">● 47 Despachos</span>
            </div>
          </div>

          <nav className="flex flex-col gap-1.5 text-xs font-medium">
            <a
              href="#matriz"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#ff6b35] text-white font-bold"
            >
              <span className="material-symbols-outlined text-[18px]">dashboard</span>
              <span>Matriz Unificada</span>
            </a>

            {/* Element (xpath: //aside//a[contains(., 'Cadetes')]) -> Puerta a Puerta - Repartidor Activo (push) */}
            <a
              href="#cadetes"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('repartidor_activo', 'push');
              }}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-emerald-400 text-[18px]">moped</span>
              <span>Cadetes &amp; Envíos</span>
              <span className="ml-auto px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-bold">
                34
              </span>
            </a>

            {/* Element (xpath: //aside//a[contains(., 'Historial')]) -> Puerta a Puerta - Super Admin Dashboard (none) */}
            <a
              href="#historial"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('super_admin', 'none');
              }}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-amber-400 text-[18px]">history</span>
              <span>Historial de Ventas</span>
            </a>

            <a
              href="#comercios"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('dashboard_comercios', 'none');
              }}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-purple-400 text-[18px]">storefront</span>
              <span>Comercios PaP</span>
            </a>

            <a
              href="#seguimiento"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('seguimiento_en_vivo', 'push');
              }}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-rose-400 text-[18px]">location_on</span>
              <span>Seguimiento en Vivo</span>
            </a>
          </nav>
        </aside>

        {/* Multi-Viewport Preview Columns */}
        <main className="flex-1 p-6 overflow-x-auto overflow-y-auto bg-slate-950 flex gap-6 items-start">
          {/* Column 1: Desktop Viewport Simulation (Comandas & Cocina) */}
          {(selectedDevice === 'all' || selectedDevice === 'desktop') && (
            <div className="flex-1 min-w-[340px] max-w-xl bg-[#1e293b] rounded-3xl border border-slate-700/80 p-5 flex flex-col gap-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-400 text-[20px]">desktop_windows</span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Terminal Cocina (Desktop)
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-900/60 text-blue-300 text-[11px] font-bold">
                  1440 × 900
                </span>
              </div>

              {/* Order Card with Element (xpath: //button[contains(., 'Aceptar') and contains(., 'Cocinar')]) */}
              <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-700 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#ff8c42]">Orden #4092</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-900/60 text-amber-300 text-[10px] font-bold">
                    Entrante
                  </span>
                </div>

                <div className="flex flex-col text-xs text-slate-200">
                  <span className="text-sm font-bold text-white">2x Burger Doble Cheddar + Papas</span>
                  <span className="text-slate-400 text-[11px]">Cliente: Lucas M. • Pago online $18,400</span>
                </div>

                {/* Element (xpath: //button[contains(., 'Aceptar') and contains(., 'Cocinar')]) -> Puerta a Puerta - Dashboard Comercios (push) */}
                <button
                  onClick={() => onNavigate('dashboard_comercios', 'push')}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#ff6b35] to-[#ab3500] hover:brightness-110 active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">skillet</span>
                  <span>Aceptar y Cocinar</span>
                </button>
              </div>

              <div className="bg-slate-900/50 rounded-2xl p-4 border border-slate-800 flex flex-col gap-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Orden #4091</span>
                  <span className="text-emerald-400 font-semibold">En entrega con Carlos</span>
                </div>
                <button
                  onClick={() => onNavigate('seguimiento_en_vivo', 'push')}
                  className="text-xs text-[#ff8c42] hover:underline text-left font-semibold"
                >
                  Ver seguimiento en vivo →
                </button>
              </div>
            </div>
          )}

          {/* Column 2: Tablet Viewport Simulation (KDS & Repartidores) */}
          {(selectedDevice === 'all' || selectedDevice === 'tablet') && (
            <div className="flex-1 min-w-[320px] max-w-md bg-[#1e293b] rounded-3xl border border-slate-700/80 p-5 flex flex-col gap-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-purple-400 text-[20px]">tablet</span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Tablet Despacho KDS
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-900/60 text-purple-300 text-[11px] font-bold">
                  768 × 1024
                </span>
              </div>

              <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-700 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-purple-300">Comanda Mesa / Delivery</span>
                  <span className="text-slate-400">1x Pizza Fugazzeta</span>
                </div>
                {/* Secondary Aceptar y Cocinar button */}
                <button
                  onClick={() => onNavigate('dashboard_comercios', 'push')}
                  className="w-full py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">check</span>
                  <span>Aceptar y Cocinar (KDS)</span>
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span>Cadetes disponibles en radio:</span>
                <span className="font-bold text-emerald-400">14 cadetes</span>
              </div>
            </div>
          )}

          {/* Column 3: Mobile Viewport Simulation */}
          {(selectedDevice === 'all' || selectedDevice === 'mobile') && (
            <div className="w-[320px] bg-[#1e293b] rounded-3xl border border-slate-700/80 p-5 flex flex-col gap-4 shadow-xl flex-shrink-0">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-400 text-[20px]">phone_iphone</span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Móvil Cliente
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 text-[11px] font-bold">
                  375 × 812
                </span>
              </div>

              <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-700 flex flex-col gap-3 text-xs">
                <span className="text-slate-300">Acceso rápido a app de inicio o tracking:</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onNavigate('inicio', 'none')}
                    className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold"
                  >
                    Ver Inicio
                  </button>
                  <button
                    onClick={() => onNavigate('seguimiento_en_vivo', 'push')}
                    className="py-2 px-3 rounded-xl bg-[#ff6b35] text-white font-bold"
                  >
                    Tracking
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
