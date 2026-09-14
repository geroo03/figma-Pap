import React from 'react';
import { ScreenId, TransitionType } from '../types';

interface ScreenDashboardComerciosProps {
  onNavigate: (screen: ScreenId, transition: TransitionType) => void;
}

export const ScreenDashboardComercios: React.FC<ScreenDashboardComerciosProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#fff9f6] text-slate-900 min-h-screen flex flex-col font-sans antialiased pb-20">
      {/* Commerce Header */}
      <header className="bg-white border-b border-orange-100/80 px-4 py-3 sticky top-0 z-30 shadow-xs">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('inicio', 'none')}
              className="w-8 h-8 rounded-full bg-orange-50 hover:bg-orange-100 flex items-center justify-center text-orange-700"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            </button>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#ff6b35] to-amber-500 flex items-center justify-center text-white font-black text-sm shadow-sm">
              PR
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <h1 className="text-base font-bold text-slate-900 leading-tight">Pizzería Roma</h1>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <span className="text-[11px] text-emerald-600 font-semibold">Abierto • Recibiendo pedidos</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('super_admin', 'push')}
              className="px-2.5 py-1.5 rounded-full bg-orange-100 text-[#ab3500] font-bold text-xs flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span>
              <span>Admin</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-lg mx-auto w-full p-4 flex flex-col gap-4">
        {/* Quick Metrics Bar */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white p-3 rounded-2xl border border-orange-100 shadow-xs flex flex-col items-center text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400">Hoy</span>
            <span className="text-lg font-black text-[#ab3500] mt-0.5">24</span>
            <span className="text-[10px] text-slate-500">pedidos</span>
          </div>
          <div className="bg-white p-3 rounded-2xl border border-orange-100 shadow-xs flex flex-col items-center text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400">Facturación</span>
            <span className="text-lg font-black text-emerald-600 mt-0.5">$318k</span>
            <span className="text-[10px] text-slate-500">+12% vs ayer</span>
          </div>
          <div className="bg-white p-3 rounded-2xl border border-orange-100 shadow-xs flex flex-col items-center text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400">Tiempo Cocina</span>
            <span className="text-lg font-black text-amber-500 mt-0.5">14m</span>
            <span className="text-[10px] text-slate-500">promedio</span>
          </div>
        </div>

        {/* Section: Pedido en Despacho con Cadete Activo */}
        <section className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              En Despacho / Con Cadete
            </h2>
            <span className="text-xs text-[#ab3500] font-semibold">1 pedido activo</span>
          </div>

          {/* Active Order with Matías (Repartidor PaP) */}
          <div className="bg-white rounded-3xl p-4 border border-orange-100 shadow-md flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-orange-50 pb-2.5">
              <div>
                <span className="text-xs font-mono font-bold text-[#ab3500]">#ORD-9021</span>
                <h3 className="font-bold text-slate-900 text-sm">Mariana González • 2 items</h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                Retirado de cocina
              </span>
            </div>

            <div className="bg-[#fff8f5] rounded-2xl p-3 border border-orange-100/60 flex flex-col gap-1 text-xs">
              <span className="text-slate-700 font-medium">1x Pizza Cuatro Quesos Grande</span>
              <span className="text-slate-700 font-medium">1x Gaseosa Línea Coca 1.5L</span>
              <span className="text-slate-400 text-[11px] mt-1">
                Destino: Av. Del Libertador 2290, Piso 6
              </span>
            </div>

            {/* Element (xpath: //div[contains(., 'Matías (Repartidor PaP)')]//button) -> Repartidor Activo (push) */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-orange-50/70 border border-orange-200/60">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-[#ff6b35] text-white flex items-center justify-center shadow-xs">
                  <span className="material-symbols-outlined text-[20px]">moped</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">
                    Matías (Repartidor PaP)
                  </span>
                  <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    En camino al cliente (8 min)
                  </span>
                </div>
              </div>

              {/* Button inside the div containing Matías */}
              <button
                onClick={() => onNavigate('repartidor_activo', 'push')}
                className="px-3.5 py-2 rounded-xl bg-[#ab3500] hover:bg-[#852a00] active:scale-95 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <span>Ver Cadete</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>
        </section>

        {/* Section: Nuevos pedidos en cocina */}
        <section className="flex flex-col gap-2 pt-2">
          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider px-1">
            Nuevos Pedidos por Confirmar
          </h2>

          <div className="bg-white rounded-3xl p-4 border border-orange-100 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-600">#ORD-9022</span>
              <span className="text-xs font-bold text-amber-600">Hace 1 min</span>
            </div>
            <div className="flex flex-col text-xs text-slate-700">
              <span className="font-bold text-sm text-slate-900">Sebastián C.</span>
              <span>1x Pizza Margherita con Albahaca Fresca</span>
            </div>
            <button
              onClick={() => onNavigate('responsive_commerce', 'none')}
              className="w-full py-2.5 rounded-xl bg-[#ff6b35] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span className="material-symbols-outlined text-[16px]">skillet</span>
              <span>Mandar a Cocina &amp; Ver en Pantalla de Comandas</span>
            </button>
          </div>
        </section>
      </main>

      {/* Bottom Commerce Navigation */}
      <nav className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-orange-100 px-6 py-2 flex items-center justify-around max-w-lg mx-auto z-40">
        <a
          href="#pedidos"
          className="flex flex-col items-center text-[#ab3500] font-bold text-[11px]"
        >
          <span className="material-symbols-outlined text-[22px]">restaurant</span>
          <span>Cocina</span>
        </a>

        {/* Element (xpath: //nav//a[@data-path='historial']) -> Super Admin Dashboard (none) */}
        <a
          href="#historial"
          data-path="historial"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('super_admin', 'none');
          }}
          className="flex flex-col items-center text-slate-500 hover:text-[#ab3500] font-medium text-[11px] cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">history</span>
          <span>Historial</span>
        </a>

        <a
          href="#menu"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('matriz_responsiva', 'push');
          }}
          className="flex flex-col items-center text-slate-500 hover:text-[#ab3500] font-medium text-[11px]"
        >
          <span className="material-symbols-outlined text-[22px]">devices</span>
          <span>Matriz</span>
        </a>

        <a
          href="#repartidores"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('repartidor_activo', 'push');
          }}
          className="flex flex-col items-center text-slate-500 hover:text-[#ab3500] font-medium text-[11px]"
        >
          <span className="material-symbols-outlined text-[22px]">moped</span>
          <span>Cadetes</span>
        </a>
      </nav>
    </div>
  );
};
