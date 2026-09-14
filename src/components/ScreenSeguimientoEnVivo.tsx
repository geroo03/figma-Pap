import React, { useState } from 'react';
import { ScreenId, TransitionType } from '../types';

interface ScreenSeguimientoEnVivoProps {
  onNavigate: (screen: ScreenId, transition: TransitionType) => void;
}

export const ScreenSeguimientoEnVivo: React.FC<ScreenSeguimientoEnVivoProps> = ({ onNavigate }) => {
  const [called, setCalled] = useState(false);
  const [activeStep] = useState(2); // 0: Recibido, 1: En cocina, 2: En camino, 3: Entregado

  const handleCall = () => {
    setCalled(true);
    setTimeout(() => setCalled(false), 2500);
  };

  return (
    <div className="bg-[#1c1917] text-stone-100 min-h-screen flex flex-col relative overflow-hidden font-sans antialiased">
      {/* Dynamic Realistic Map Visual Background */}
      <div className="absolute inset-0 z-0 bg-[#292524] overflow-hidden">
        <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="city-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="60" height="60" fill="none" stroke="#44403c" strokeWidth="1" />
              <circle cx="30" cy="30" r="1" fill="#78716c" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#city-grid)" />
          {/* Avenue and route */}
          <path d="M-100,320 C180,300 240,160 550,140" fill="none" stroke="#57534e" strokeWidth="20" />
          <path
            d="M-100,320 C180,300 240,160 550,140"
            fill="none"
            stroke="#ff6b35"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="8 6"
            className="animate-pulse"
          />
        </svg>

        {/* Origin Restaurant Pin */}
        <div className="absolute top-[35%] left-[20%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="w-9 h-9 rounded-2xl bg-amber-500 border-2 border-white shadow-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[18px]">restaurant</span>
          </div>
          <span className="mt-1 px-2.5 py-0.5 rounded-full bg-black/80 text-[10px] font-semibold text-amber-200">
            La Furia Burger
          </span>
        </div>

        {/* Courier Pin with Element (xpath: //div[contains(@class, 'cursor-pointer') and contains(., 'Carlos')]) -> Repartidor Activo (push) */}
        <div
          onClick={() => onNavigate('repartidor_activo', 'push')}
          className="absolute top-[28%] left-[55%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer flex flex-col items-center transition-transform hover:scale-110 group"
          title="Ver panel del repartidor Carlos"
        >
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-[#ff6b35]/30 animate-ping absolute -inset-1"></div>
            <div className="w-12 h-12 rounded-full bg-[#ff6b35] border-3 border-white shadow-2xl flex items-center justify-center text-white relative z-10 group-hover:bg-[#ab3500] transition-colors">
              <span className="material-symbols-outlined text-[24px]">moped</span>
            </div>
          </div>
          <div className="mt-1.5 px-3 py-1 rounded-full bg-stone-900/90 backdrop-blur-md text-[11px] font-bold text-white border border-stone-700 shadow-lg flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Carlos M. (En camino)</span>
          </div>
        </div>

        {/* Destination Pin (User address) */}
        <div className="absolute top-[18%] right-[18%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="w-10 h-10 rounded-2xl bg-[#006c49] border-2 border-white shadow-xl flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[20px]">home_pin</span>
          </div>
          <span className="mt-1 px-2.5 py-0.5 rounded-full bg-black/80 text-[10px] font-semibold text-emerald-200">
            Tu Domicilio
          </span>
        </div>
      </div>

      {/* Header conforming to:
          - Element (xpath: //header//button[@aria-label='Dismiss or go back']) -> Inicio (push_back)
      */}
      <header className="relative z-30 pt-4 px-4 pb-2 flex items-center justify-between max-w-lg mx-auto w-full">
        <div className="flex items-center gap-2">
          {/* Element (xpath: //header//button[@aria-label='Dismiss or go back']) */}
          <button
            aria-label="Dismiss or go back"
            onClick={() => onNavigate('inicio', 'push_back')}
            className="w-10 h-10 rounded-full bg-stone-900/90 backdrop-blur-xl hover:bg-stone-800 text-stone-200 flex items-center justify-center border border-stone-700 shadow-md active:scale-95 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>

          {/* Element (xpath: //button[@aria-label='Volver']) -> Inicio (push_back) */}
          <button
            aria-label="Volver"
            onClick={() => onNavigate('inicio', 'push_back')}
            className="px-3.5 py-2 rounded-full bg-stone-900/90 backdrop-blur-xl hover:bg-stone-800 text-xs font-bold text-stone-200 border border-stone-700 shadow-md flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">chevron_left</span>
            <span>Volver</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-stone-900/90 backdrop-blur-xl px-3 py-1.5 rounded-full border border-stone-700 text-xs font-bold text-stone-200 shadow-md flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#ff6b35] text-[16px]">timer</span>
            <span>Llegada en ~12 min</span>
          </div>
        </div>
      </header>

      {/* Floating Center Courier Quick Card for Xpath safety */}
      <div className="relative z-20 px-4 mt-2 max-w-lg mx-auto w-full pointer-events-none">
        <div className="pointer-events-auto bg-stone-900/90 backdrop-blur-xl rounded-2xl border border-stone-700/80 p-3 shadow-lg flex items-center justify-between">
          {/* Secondary element with cursor-pointer and Carlos */}
          <div
            onClick={() => onNavigate('repartidor_activo', 'push')}
            className="flex items-center gap-2.5 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff6b35] to-amber-500 flex items-center justify-center text-white font-bold text-sm">
              CM
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">Carlos Morales</span>
              <span className="text-[11px] text-stone-400">Honda GLH 150 • ★ 4.95</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCall}
              className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xs active:scale-95"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
            </button>
            <button
              onClick={() => onNavigate('repartidor_activo', 'push')}
              className="px-2.5 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-[11px] font-bold text-stone-200 border border-stone-600"
            >
              GPS
            </button>
          </div>
        </div>
      </div>

      {called && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-40 bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
          Conectando llamada con Carlos...
        </div>
      )}

      {/* Bottom Live Tracking Panel */}
      <div className="mt-auto relative z-30 px-4 pb-6 pt-2 max-w-lg mx-auto w-full">
        <div className="bg-stone-900/95 backdrop-blur-2xl rounded-[32px] border border-stone-700/80 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.7)] flex flex-col gap-4">
          {/* Order Status Headline */}
          <div className="flex items-center justify-between border-b border-stone-800 pb-3">
            <div className="flex flex-col">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#ff8c42]">
                En camino a tu puerta
              </span>
              <h2 className="text-lg font-black text-white">Llega entre 13:30 - 13:40</h2>
            </div>
            <div className="w-11 h-11 rounded-2xl bg-[#ff6b35]/20 border border-[#ff6b35]/40 flex items-center justify-center text-[#ff6b35]">
              <span className="material-symbols-outlined text-[24px]">moped</span>
            </div>
          </div>

          {/* Progress Multi-step Tracker */}
          <div className="flex items-center justify-between relative px-2 py-1">
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-stone-800 -z-0">
              <div
                className="h-full bg-gradient-to-r from-[#ff6b35] to-emerald-500 transition-all duration-500"
                style={{ width: '75%' }}
              ></div>
            </div>

            <div className="flex flex-col items-center gap-1 z-10">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-md">
                ✓
              </div>
              <span className="text-[10px] text-stone-400 font-semibold">Confirmado</span>
            </div>

            <div className="flex flex-col items-center gap-1 z-10">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-md">
                ✓
              </div>
              <span className="text-[10px] text-stone-400 font-semibold">Cocinado</span>
            </div>

            <div className="flex flex-col items-center gap-1 z-10">
              <div className="w-7 h-7 rounded-full bg-[#ff6b35] text-white flex items-center justify-center text-xs font-bold ring-4 ring-[#ff6b35]/30 animate-pulse">
                <span className="material-symbols-outlined text-[14px]">moped</span>
              </div>
              <span className="text-[10px] text-[#ff8c42] font-bold">En camino</span>
            </div>

            <div className="flex flex-col items-center gap-1 z-10">
              <div className="w-7 h-7 rounded-full bg-stone-800 text-stone-500 flex items-center justify-center text-xs font-bold">
                4
              </div>
              <span className="text-[10px] text-stone-500 font-semibold">Entregado</span>
            </div>
          </div>

          {/* Delivery Order Summary */}
          <div className="bg-stone-800/60 rounded-2xl p-3 border border-stone-700/60 flex flex-col gap-1.5 text-xs">
            <div className="flex items-center justify-between text-stone-300 font-bold">
              <span>Pedido #3489 • La Furia Burger House</span>
              <span className="text-[#ff8c42]">$15,200</span>
            </div>
            <p className="text-stone-400 text-[11px]">
              1x Doble Cheeseburger Smash + Papas Rústicas con Cheddar + 1x Gaseosa
            </p>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('inicio', 'push_back')}
              className="flex-1 py-3 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 active:scale-95 text-xs font-bold text-stone-200 border border-stone-700 flex items-center justify-center gap-1.5 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">home</span>
              <span>Volver a la Tienda</span>
            </button>
            <button
              onClick={() => onNavigate('repartidor_activo', 'push')}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#ff6b35] to-[#ab3500] hover:brightness-110 active:scale-95 text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow-md transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">navigation</span>
              <span>Ver Cadete en Vivo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
