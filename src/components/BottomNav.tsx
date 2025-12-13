import { Home, Package, Glasses, Hotel, ShoppingBag } from 'lucide-react';
import type { Screen } from '../App';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const navItems = [
  { icon: Home, label: 'Home', screen: 'home' as Screen },
  { icon: Package, label: 'Pacotes', screen: 'packages' as Screen },
  { icon: Glasses, label: 'RA 360°', screen: 'ar360' as Screen },
  { icon: Hotel, label: 'Hotéis', screen: 'hotels' as Screen },
  { icon: ShoppingBag, label: 'Artesanato', screen: 'crafts' as Screen },
];

export default function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  // Map restaurants to hotels for bottom nav
  const displayScreen = currentScreen === 'restaurants' ? 'hotels' : currentScreen;

  return (
    <div className="bg-white border-t border-neutral-200 px-2 py-2 shadow-lg">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = displayScreen === item.screen;
          return (
            <button
              key={item.screen}
              onClick={() => onNavigate(item.screen)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'text-emerald-600'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              <item.icon className={`w-6 h-6 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
              <span className={isActive ? '' : ''}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
