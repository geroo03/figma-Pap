import React, { useState } from 'react';
import { ScreenId, TransitionType } from '../types';

interface ScreenRepartidorActivoProps {
  onNavigate: (screen: ScreenId, transition: TransitionType) => void;
}

export const ScreenRepartidorActivo: React.FC<ScreenRepartidorActivoProps> = ({ onNavigate }) => {
  const [online, setOnline] = useState(true);
  const [orderDelivered, setOrderDelivered] = useState(false);

  return (
    <div className="bg-[#18181b] text-zinc-100 min-h-screen flex flex-col relative overflow-hidden font-sans">
      {/* Map Canvas Background (Simulated high-res delivery map) */}
      <div className="absolute inset-0 z-0 bg-[#1e232a] overflow-hidden">
        {/* Map Grid and streets */}
        <svg className="w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#334155" strokeWidth="1" />
              <circle cx="40" cy="40" r="1.5" fill="#475569" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          {/* Main roads */}
          <path d="M-50,220 C200,180 300,320 600,280" fill="none" stroke="#475569" strokeWidth="16" />
          <path d="M-50,220 C200,180 300,320 600,280" fill="none" stroke="#ff6b35" strokeWidth="6" strokeDasharray="6 4" />
          <path d="M120,-20 L180,700" fill="none" stroke="#334155" strokeWidth="10" />
          <path d="M340,-20 L280,700" fill="none" stroke="#334155" strokeWidth="12" />
        </svg>

        {/* Courier Animated Pulse Marker */}
        <div className="absolute top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-[#ff6b35]/25 animate-ping absolute -inset-1"></div>
            <div className="w-12 h-12 rounded-full bg-[#ff6b35] border-3 border-white shadow-xl flex items-center justify-center text-white relative z-10">
              <span className="material-symbols-outlined text-[24px]">moped</span>
            </div>
          </div>
          <span className="mt-1.5 px-2.5 py-0.5 rounded-full bg-black/85 backdrop-blur-md text-[11px] font-bold text-white border border-white/20 shadow-md">
            Tú (Repartidor)
          </span>
        </div>

        {/* Store Marker */}
        <div className="absolute top-[22%] left-[22%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="w-9 h-9 rounded-xl bg-amber-500 border-2 border-white shadow-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[18px]">storefront</span>
          </div>
          <span className="mt-1 px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-semibold text-amber-200">
            La Furia Burger
          </span>
        </div>

        {/* Customer Marker */}
        <div className="absolute top-[55%] right-[20%] z-10 flex flex-col items-center">
          <div className="w-9 h-9 rounded-xl bg-emerald-500 border-2 border-white shadow-lg flex items-center justify-center text-white animate-bounce">
            <span className="material-symbols-outlined text-[18px]">home_pin</span>
          </div>
          <span className="mt-1 px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-semibold text-emerald-200">
            Cliente (Sebastián C.)
          </span>
        </div>
      </div>

      {/* Top Floating App Bar */}
      <header className="relative z-20 pt-4 px-4 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-3 bg-zinc-900/90 backdrop-blur-xl px-4 py-2 rounded-full border border-zinc-700/60 shadow-lg">
          <button
            onClick={() => onNavigate('inicio', 'none')}
            className="w-7 h-7 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-300"
            title="Volver al inicio"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          </button>
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                online ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'
              }`}
            ></span>
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              {online ? 'EN LÍNEA' : 'DESCONECTADO'}
            </span>
          </div>
          <button
            onClick={() => setOnline(!online)}
            className={`w-10 h-5 rounded-full transition-colors relative p-0.5 ${
              online ? 'bg-emerald-500' : 'bg-zinc-700'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transition-transform ${
                online ? 'translate-x-5' : 'translate-x-0'
              }`}
            ></div>
          </button>
        </div>

        {/* Quick GPS / Recenter Floating Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('super_admin', 'push')}
            className="bg-zinc-900/90 backdrop-blur-xl px-3 py-2 rounded-full border border-zinc-700/60 text-xs font-semibold text-amber-400 flex items-center gap-1 shadow-lg hover:bg-zinc-800"
          >
            <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span>
            <span>Admin</span>
          </button>
          <div className="bg-zinc-900/90 backdrop-blur-xl px-3 py-2 rounded-full border border-zinc-700/60 text-xs font-bold text-zinc-200 shadow-lg flex items-center gap-1.5">
            <span className="material-symbols-outlined text-emerald-400 text-[18px]">payments</span>
            <span>$4,850 hoy</span>
          </div>
        </div>
      </header>

      {/* Floating Speed & GPS stats */}
      <div className="relative z-20 px-4 mt-2 flex items-center justify-between pointer-events-none">
        <div className="bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-2">
          <span className="text-[#ff6b35] font-bold">28 km/h</span>
          <span className="text-zinc-600">|</span>
          <span>Precisión GPS: 4m</span>
        </div>
      </div>

      {/* Bottom Dispatch Sheet (Claymorphic / Tactical Dark UI) */}
      <div className="mt-auto relative z-30 px-4 pb-6 pt-2 max-w-lg mx-auto w-full">
        <div className="bg-zinc-900/95 backdrop-blur-2xl rounded-[32px] border border-zinc-700/60 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col gap-4">
          {/* Header of Active Dispatch */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#ff6b35]/20 border border-[#ff6b35]/40 flex items-center justify-center text-[#ff6b35]">
                <span className="material-symbols-outlined text-[22px]">delivery_dining</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#ff8c42]">
                  Misión en Curso • Entrega #3489
                </span>
                <span className="text-base font-bold text-white">La Furia Burger House</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-700/50 text-xs font-extrabold">
              12 min est.
            </span>
          </div>

          {/* Delivery Route Steps */}
          <div className="flex flex-col gap-3 py-1 text-xs">
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center mt-0.5">
                <span className="w-3 h-3 rounded-full bg-amber-400 ring-4 ring-amber-400/20"></span>
                <span className="w-0.5 h-6 bg-zinc-700 my-0.5"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-zinc-400 font-medium">Recogido en local (13:10)</span>
                <span className="text-zinc-200 font-semibold">Av. Corrientes 1240</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center mt-0.5">
                <span className="w-3 h-3 rounded-full bg-[#ff6b35] ring-4 ring-[#ff6b35]/20 animate-pulse"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-zinc-400 font-medium">Destino de entrega</span>
                <span className="text-zinc-100 font-bold text-sm">Calle Primavera 142, Dpto 4B</span>
                <span className="text-zinc-400 text-[11px]">Cliente: Sebastián C. (+54 11 9823-1120)</span>
              </div>
            </div>
          </div>

          {/* Key Navigation Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {/* Element (xpath: //button[contains(., 'Ver detalles')]) -> Seguimiento en Vivo (slide_up) */}
            <button
              onClick={() => onNavigate('seguimiento_en_vivo', 'slide_up')}
              className="py-3 px-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 active:scale-95 border border-zinc-700 text-xs font-bold text-zinc-200 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-[18px] text-[#ff6b35]">info</span>
              <span>Ver detalles</span>
            </button>

            {/* Element (xpath: //button[contains(., 'Historial')]) -> Dashboard Comercios (none) */}
            <button
              onClick={() => onNavigate('dashboard_comercios', 'none')}
              className="py-3 px-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 active:scale-95 border border-zinc-700 text-xs font-bold text-zinc-200 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-[18px] text-amber-400">history</span>
              <span>Historial</span>
            </button>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={() => {
              setOrderDelivered(!orderDelivered);
              if (!orderDelivered) {
                setTimeout(() => onNavigate('seguimiento_en_vivo', 'push'), 400);
              }
            }}
            className={`w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg active:scale-98 ${
              orderDelivered
                ? 'bg-emerald-600 text-white'
                : 'bg-gradient-to-r from-[#ff6b35] to-[#ab3500] text-white hover:brightness-110 shadow-[0_8px_20px_rgba(255,107,53,0.4)]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              {orderDelivered ? 'check_circle' : 'task_alt'}
            </span>
            <span>{orderDelivered ? '¡Entrega Completada!' : 'Confirmar Llegada a Destino'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
