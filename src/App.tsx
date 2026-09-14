import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ScreenId, TransitionType } from './types';
import { ScreenInicio } from './components/ScreenInicio';
import { ScreenRepartidorActivo } from './components/ScreenRepartidorActivo';
import { ScreenSuperAdmin } from './components/ScreenSuperAdmin';
import { ScreenResponsiveCommerce } from './components/ScreenResponsiveCommerce';
import { ScreenDashboardComercios } from './components/ScreenDashboardComercios';
import { ScreenEmbajadorDashboard } from './components/ScreenEmbajadorDashboard';
import { ScreenMatrizResponsiva } from './components/ScreenMatrizResponsiva';
import { ScreenSeguimientoEnVivo } from './components/ScreenSeguimientoEnVivo';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('inicio');
  const [transitionType, setTransitionType] = useState<TransitionType>('none');
  const [showNavDrawer, setShowNavDrawer] = useState(false);

  const handleNavigate = useCallback((target: ScreenId, transition: TransitionType = 'none') => {
    setTransitionType(transition);
    setCurrentScreen(target);
  }, []);

  const getTransitionVariants = (type: TransitionType) => {
    switch (type) {
      case 'push':
        return {
          initial: { x: '100%', opacity: 0.9 },
          animate: { x: 0, opacity: 1 },
          exit: { x: '-30%', opacity: 0.8 },
          transition: { duration: 0.28, ease: [0.32, 0.72, 0, 1] },
        };
      case 'push_back':
        return {
          initial: { x: '-100%', opacity: 0.9 },
          animate: { x: 0, opacity: 1 },
          exit: { x: '30%', opacity: 0.8 },
          transition: { duration: 0.28, ease: [0.32, 0.72, 0, 1] },
        };
      case 'slide_up':
        return {
          initial: { y: '100%', opacity: 0.95 },
          animate: { y: 0, opacity: 1 },
          exit: { y: '100%', opacity: 0.95 },
          transition: { duration: 0.32, ease: [0.32, 0.72, 0, 1] },
        };
      case 'none':
      default:
        return {
          initial: { opacity: 1 },
          animate: { opacity: 1 },
          exit: { opacity: 1 },
          transition: { duration: 0 },
        };
    }
  };

  const screensMeta: { id: ScreenId; label: string; number: number }[] = [
    { id: 'inicio', label: '1. Inicio', number: 1 },
    { id: 'repartidor_activo', label: '2. Repartidor Activo', number: 2 },
    { id: 'super_admin', label: '3. Super Admin Dashboard', number: 3 },
    { id: 'responsive_commerce', label: '4. Responsive Commerce', number: 4 },
    { id: 'dashboard_comercios', label: '5. Dashboard Comercios', number: 5 },
    { id: 'embajador_dashboard', label: '6. Embajador Dashboard', number: 6 },
    { id: 'matriz_responsiva', label: '7. Matriz Responsiva Completa', number: 7 },
    { id: 'seguimiento_en_vivo', label: '8. Seguimiento en Vivo', number: 8 },
  ];

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'inicio':
        return <ScreenInicio onNavigate={handleNavigate} />;
      case 'repartidor_activo':
        return <ScreenRepartidorActivo onNavigate={handleNavigate} />;
      case 'super_admin':
        return <ScreenSuperAdmin onNavigate={handleNavigate} />;
      case 'responsive_commerce':
        return <ScreenResponsiveCommerce onNavigate={handleNavigate} />;
      case 'dashboard_comercios':
        return <ScreenDashboardComercios onNavigate={handleNavigate} />;
      case 'embajador_dashboard':
        return <ScreenEmbajadorDashboard onNavigate={handleNavigate} />;
      case 'matriz_responsiva':
        return <ScreenMatrizResponsiva onNavigate={handleNavigate} />;
      case 'seguimiento_en_vivo':
        return <ScreenSeguimientoEnVivo onNavigate={handleNavigate} />;
      default:
        return <ScreenInicio onNavigate={handleNavigate} />;
    }
  };

  const variants = getTransitionVariants(transitionType);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden font-sans">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentScreen}
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={variants.transition}
          className="w-full min-h-screen"
        >
          {renderCurrentScreen()}
        </motion.div>
      </AnimatePresence>

      {/* Floating Unobtrusive Prototype Switcher for Quick Testing & Audit */}
      <aside
        aria-label="Prototype navigation overlay"
        className="fixed bottom-4 right-4 z-50 flex flex-col items-end pointer-events-auto"
      >
        {showNavDrawer && (
          <div className="mb-2 bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-3 shadow-2xl w-64 text-slate-100 flex flex-col gap-1 text-xs">
            <div className="flex items-center justify-between pb-2 mb-1 border-b border-slate-800">
              <span className="font-bold text-white text-[11px] uppercase tracking-wider text-[#ff8c42]">
                8 Pantallas del Prototipo
              </span>
              <button
                onClick={() => setShowNavDrawer(false)}
                className="w-5 h-5 rounded-full hover:bg-slate-800 flex items-center justify-center text-slate-400"
              >
                ✕
              </button>
            </div>
            {screensMeta.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  handleNavigate(s.id, 'none');
                  setShowNavDrawer(false);
                }}
                className={`px-2.5 py-1.5 rounded-lg text-left transition-colors flex items-center justify-between ${
                  currentScreen === s.id
                    ? 'bg-[#ff6b35] text-white font-bold'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="truncate">{s.label}</span>
                {currentScreen === s.id && <span className="text-[10px]">●</span>}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={() => setShowNavDrawer(!showNavDrawer)}
          className="px-3.5 py-2 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white text-xs font-bold shadow-xl flex items-center gap-1.5 hover:bg-slate-800 active:scale-95 transition-all opacity-80 hover:opacity-100"
          title="Ver selector de pantallas"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff6b35]"></span>
          <span className="hidden sm:inline">Pantalla actual:</span>
          <span>{screensMeta.find((s) => s.id === currentScreen)?.number}/8</span>
          <span className="material-symbols-outlined text-[16px]">
            {showNavDrawer ? 'expand_more' : 'apps'}
          </span>
        </button>
      </aside>
    </div>
  );
}
