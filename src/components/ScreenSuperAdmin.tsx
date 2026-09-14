import React, { useState } from 'react';
import { ScreenId, TransitionType } from '../types';

interface ScreenSuperAdminProps {
  onNavigate: (screen: ScreenId, transition: TransitionType) => void;
}

export const ScreenSuperAdmin: React.FC<ScreenSuperAdminProps> = ({ onNavigate }) => {
  const [docExported, setDocExported] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleExportGoogleDocs = () => {
    setDocExported(true);
    setTimeout(() => setDocExported(false), 3000);
  };

  return (
    <div className="bg-[#0f172a] text-slate-100 min-h-screen flex flex-col md:flex-row antialiased font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-[#1e293b] border-r border-slate-700/80 flex flex-col flex-shrink-0">
        {/* Brand */}
        <div className="p-5 border-b border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#ff6b35] to-[#ab3500] flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined text-[24px]">local_shipping</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff8c42]">
                Panel Central
              </span>
              <span className="text-base font-bold text-white tracking-tight">Super Admin</span>
            </div>
          </div>
          <button
            onClick={() => onNavigate('inicio', 'none')}
            className="md:hidden text-slate-400 hover:text-white p-1"
          >
            <span className="material-symbols-outlined text-[20px]">home</span>
          </button>
        </div>

        {/* Navigation items according to spec */}
        <nav className="p-4 flex-1 flex flex-col gap-1.5" data-nav="admin-main">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-1">
            Operaciones Globales
          </span>

          {/* Element (xpath: //nav//a[@data-path='pedidos']) -> Matriz Responsiva Completa (none) */}
          <a
            href="#pedidos"
            data-path="pedidos"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('matriz_responsiva', 'none');
            }}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-200 hover:bg-slate-800 hover:text-white transition-all text-sm font-medium group cursor-pointer"
          >
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#ff6b35] text-[20px]">
              receipt_long
            </span>
            <span>Pedidos en Vivo</span>
            <span className="ml-auto px-2 py-0.5 rounded-full bg-[#ff6b35]/20 text-[#ff8c42] text-[11px] font-bold">
              47
            </span>
          </a>

          {/* Element (xpath: //nav//a[@data-path='comercios']) -> Dashboard Comercios (none) */}
          <a
            href="#comercios"
            data-path="comercios"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('dashboard_comercios', 'none');
            }}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-200 hover:bg-slate-800 hover:text-white transition-all text-sm font-medium group cursor-pointer"
          >
            <span className="material-symbols-outlined text-slate-400 group-hover:text-amber-400 text-[20px]">
              storefront
            </span>
            <span>Comercios Adheridos</span>
            <span className="ml-auto text-xs text-slate-500">128</span>
          </a>

          {/* Element (xpath: //nav//a[@data-path='cadetes']) -> Repartidor Activo (none) */}
          <a
            href="#cadetes"
            data-path="cadetes"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('repartidor_activo', 'none');
            }}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-200 hover:bg-slate-800 hover:text-white transition-all text-sm font-medium group cursor-pointer"
          >
            <span className="material-symbols-outlined text-slate-400 group-hover:text-emerald-400 text-[20px]">
              moped
            </span>
            <span>Cadetes &amp; Repartidores</span>
            <span className="ml-auto px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-[11px] font-semibold">
              34 on
            </span>
          </a>

          {/* Element (xpath: //nav//a[@data-path='embajadores']) -> Embajador Dashboard (none) */}
          <a
            href="#embajadores"
            data-path="embajadores"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('embajador_dashboard', 'none');
            }}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-200 hover:bg-slate-800 hover:text-white transition-all text-sm font-medium group cursor-pointer"
          >
            <span className="material-symbols-outlined text-slate-400 group-hover:text-purple-400 text-[20px]">
              badge
            </span>
            <span>Embajadores de Marca</span>
            <span className="ml-auto text-xs text-purple-400 font-semibold">12</span>
          </a>

          <div className="my-3 border-t border-slate-700/60"></div>

          <a
            href="#analytics"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('responsive_commerce', 'none');
            }}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-200 hover:bg-slate-800 text-sm font-medium group cursor-pointer"
          >
            <span className="material-symbols-outlined text-slate-400 group-hover:text-sky-400 text-[20px]">
              analytics
            </span>
            <span>Matriz Multidispositivo</span>
          </a>

          <a
            href="#seguimiento"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('seguimiento_en_vivo', 'push');
            }}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-200 hover:bg-slate-800 text-sm font-medium group cursor-pointer"
          >
            <span className="material-symbols-outlined text-slate-400 group-hover:text-rose-400 text-[20px]">
              my_location
            </span>
            <span>GPS Tracking en Vivo</span>
          </a>
        </nav>

        {/* Admin User Footer Profile */}
        <div className="p-4 border-t border-slate-700/80 bg-slate-900/50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xs text-amber-300">
              AD
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-200">Director General</span>
              <span className="text-[11px] text-slate-400">admin@puertaapuerta.ar</span>
            </div>
          </div>
          <button
            onClick={() => onNavigate('inicio', 'none')}
            title="Ir a App Cliente"
            className="text-slate-400 hover:text-[#ff8c42] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col gap-6 max-w-7xl mx-auto w-full">
        {/* Top bar with quick filters and export */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Control Maestro de Red
            </h1>
            <p className="text-sm text-slate-400 mt-0.5">
              Estado de entregas en tiempo real en Buenos Aires y alrededores
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Google Docs Report Export */}
            <button
              onClick={handleExportGoogleDocs}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">description</span>
              <span>{docExported ? '¡Reporte en Google Docs Creado!' : 'Exportar a Google Docs'}</span>
            </button>

            <button
              onClick={() => onNavigate('matriz_responsiva', 'push')}
              className="px-4 py-2 rounded-xl bg-[#ff6b35] hover:bg-[#ff8c42] active:scale-95 text-white font-semibold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">devices</span>
              <span>Vista Matriz Multidispositivo</span>
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#1e293b] rounded-2xl p-4 border border-slate-700/60 shadow-sm flex flex-col">
            <span className="text-xs font-medium text-slate-400">Volumen Diario</span>
            <span className="text-2xl font-bold text-white mt-1">$1,842,500</span>
            <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-0.5 mt-2">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              +18.4% vs semana previa
            </span>
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-4 border border-slate-700/60 shadow-sm flex flex-col">
            <span className="text-xs font-medium text-slate-400">Pedidos Activos</span>
            <span className="text-2xl font-bold text-[#ff8c42] mt-1">47 en curso</span>
            <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Tiempo medio de entrega: 26 min
            </span>
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-4 border border-slate-700/60 shadow-sm flex flex-col">
            <span className="text-xs font-medium text-slate-400">Cadetes en Calle</span>
            <span className="text-2xl font-bold text-white mt-1">34 activos</span>
            <span className="text-[11px] text-emerald-400 font-semibold mt-2">
              92% tasa de ocupación
            </span>
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-4 border border-slate-700/60 shadow-sm flex flex-col">
            <span className="text-xs font-medium text-slate-400">Satisfacción Cliente</span>
            <span className="text-2xl font-bold text-white mt-1">4.92 / 5.0</span>
            <span className="text-[11px] text-amber-400 font-semibold mt-2">
              ★ Basado en 1,420 opiniones
            </span>
          </div>
        </div>

        {/* Live Orders Section */}
        <div className="bg-[#1e293b] rounded-2xl border border-slate-700/60 p-5 flex flex-col gap-4 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700/80 pb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold text-white">Monitoreo de Despacho en Vivo</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold">
                EN DIRECTO
              </span>
            </div>

            {/* Element (xpath: //a[contains(., 'Ver todos (47)')]) -> Matriz Responsiva Completa (push) */}
            <a
              href="#ver-todos"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('matriz_responsiva', 'push');
              }}
              className="text-xs font-bold text-[#ff8c42] hover:text-[#ff6b35] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Ver todos (47)</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

          {/* Search bar */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-700/60 text-xs text-slate-300">
            <span className="material-symbols-outlined text-slate-400 text-[18px]">search</span>
            <input
              type="text"
              placeholder="Buscar por ID de orden, comercio o repartidor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-white w-full placeholder:text-slate-500"
            />
          </div>

          {/* Orders Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900/50 text-slate-400 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-3">ID Pedido</th>
                  <th className="p-3">Comercio</th>
                  <th className="p-3">Destino</th>
                  <th className="p-3">Cadete Asignado</th>
                  <th className="p-3">Estado</th>
                  <th className="p-3 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3 font-mono font-bold text-[#ff8c42]">#3489</td>
                  <td className="p-3 font-medium text-white">La Furia Burger House</td>
                  <td className="p-3 text-slate-400">Calle Primavera 142, 4B</td>
                  <td className="p-3">
                    <button
                      onClick={() => onNavigate('repartidor_activo', 'push')}
                      className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span className="material-symbols-outlined text-[14px]">moped</span>
                      Carlos M. (En ruta)
                    </button>
                  </td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 font-semibold text-[10px] border border-emerald-800/50">
                      En tránsito (12 min)
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => onNavigate('seguimiento_en_vivo', 'push')}
                      className="px-2.5 py-1 rounded-lg bg-slate-700 hover:bg-[#ff6b35] hover:text-white text-slate-200 transition-colors"
                    >
                      Rastrear
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3 font-mono font-bold text-[#ff8c42]">#3488</td>
                  <td className="p-3 font-medium text-white">Napoletana &amp; Co.</td>
                  <td className="p-3 text-slate-400">Av. Libertador 2290</td>
                  <td className="p-3">
                    <button
                      onClick={() => onNavigate('dashboard_comercios', 'none')}
                      className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span className="material-symbols-outlined text-[14px]">storefront</span>
                      Matías (Repartidor PaP)
                    </button>
                  </td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 font-semibold text-[10px] border border-amber-800/50">
                      En preparación
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => onNavigate('dashboard_comercios', 'none')}
                      className="px-2.5 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
                    >
                      Comercio
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3 font-mono font-bold text-[#ff8c42]">#3487</td>
                  <td className="p-3 font-medium text-white">Farmacia San Martín</td>
                  <td className="p-3 text-slate-400">Humboldt 1820</td>
                  <td className="p-3 text-slate-400">Lucía V.</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded-full bg-blue-950 text-blue-300 font-semibold text-[10px] border border-blue-800/50">
                      Asignando cadete
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => onNavigate('repartidor_activo', 'push')}
                      className="px-2.5 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
                    >
                      Despachar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};
