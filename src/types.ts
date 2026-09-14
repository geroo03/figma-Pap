export type ScreenId =
  | 'inicio' // 1. Puerta a Puerta - Inicio — Initial Screen
  | 'repartidor_activo' // 2. Puerta a Puerta - Repartidor Activo
  | 'super_admin' // 3. Puerta a Puerta - Super Admin Dashboard
  | 'responsive_commerce' // 4. Puerta a Puerta - Responsive Commerce Dashboard (3 Breakpoints)
  | 'dashboard_comercios' // 5. Puerta a Puerta - Dashboard Comercios
  | 'embajador_dashboard' // 6. Puerta a Puerta - Embajador Dashboard
  | 'matriz_responsiva' // 7. Puerta a Puerta - Matriz Responsiva Completa (Mobile, Tablet, Desktop)
  | 'seguimiento_en_vivo'; // 8. Puerta a Puerta - Seguimiento en Vivo

export type TransitionType = 'none' | 'push' | 'push_back' | 'slide_up';

export interface NavigationState {
  currentScreen: ScreenId;
  transitionType: TransitionType;
}
