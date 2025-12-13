import { useState } from 'react';
import Onboarding from './components/Onboarding';
import Home from './components/Home';
import Packages from './components/Packages';
import PackageDetail from './components/PackageDetail';
import AR360 from './components/AR360';
import Hotels from './components/Hotels';
import HotelDetail from './components/HotelDetail';
import Restaurants from './components/Restaurants';
import Crafts from './components/Crafts';
import CustomTour from './components/CustomTour';
import DestinationDetail from './components/DestinationDetail';
import DestinationExplorer from './components/DestinationExplorer';
import BottomNav from './components/BottomNav';

export type Screen = 'onboarding' | 'home' | 'packages' | 'package-detail' | 'ar360' | 'hotels' | 'hotel-detail' | 'restaurants' | 'crafts' | 'custom-tour' | 'destination-detail' | 'destination-explorer';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(null);
  const [selectedHotelId, setSelectedHotelId] = useState<number | null>(null);
  const [selectedDestinationId, setSelectedDestinationId] = useState<number | null>(null);
  const [explorerCategory, setExplorerCategory] = useState<'beaches' | 'nature'>('beaches');
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleFinishOnboarding = () => {
    setShowOnboarding(false);
    setCurrentScreen('home');
  };

  const handleNavigate = (screen: Screen, packageId?: number) => {
    setCurrentScreen(screen);
    if (packageId !== undefined) {
      setSelectedPackageId(packageId);
    }
  };

  const handleNavigateToHotel = (hotelId: number) => {
    setSelectedHotelId(hotelId);
    setCurrentScreen('hotel-detail');
  };

  const handleNavigateToDestination = (destinationId: number) => {
    setSelectedDestinationId(destinationId);
    setCurrentScreen('destination-detail');
  };

  const handleNavigateToExplorer = (category: 'beaches' | 'nature') => {
    setExplorerCategory(category);
    setCurrentScreen('destination-explorer');
  };

  const showBottomNav = !showOnboarding && currentScreen !== 'package-detail' && currentScreen !== 'hotel-detail' && currentScreen !== 'custom-tour' && currentScreen !== 'destination-detail' && currentScreen !== 'destination-explorer';

  return (
    <div className="h-screen flex flex-col bg-neutral-50">
      <div className="flex-1 overflow-auto">
        {showOnboarding && currentScreen === 'onboarding' && (
          <Onboarding onFinish={handleFinishOnboarding} />
        )}
        {!showOnboarding && (
          <>
            {currentScreen === 'home' && <Home onNavigate={handleNavigate} onNavigateToExplorer={handleNavigateToExplorer} />}
            {currentScreen === 'packages' && <Packages onNavigate={handleNavigate} />}
            {currentScreen === 'package-detail' && selectedPackageId && (
              <PackageDetail packageId={selectedPackageId} onBack={() => handleNavigate('packages')} />
            )}
            {currentScreen === 'ar360' && <AR360 />}
            {currentScreen === 'hotels' && <Hotels onNavigate={handleNavigateToHotel} />}
            {currentScreen === 'hotel-detail' && selectedHotelId && (
              <HotelDetail hotelId={selectedHotelId} onBack={() => handleNavigate('hotels')} />
            )}
            {currentScreen === 'restaurants' && <Restaurants />}
            {currentScreen === 'crafts' && <Crafts />}
            {currentScreen === 'custom-tour' && <CustomTour onBack={() => handleNavigate('home')} onNavigateToDestination={handleNavigateToDestination} />}
            {currentScreen === 'destination-detail' && selectedDestinationId && (
              <DestinationDetail destinationId={selectedDestinationId} onBack={() => handleNavigate('custom-tour')} />
            )}
            {currentScreen === 'destination-explorer' && (
              <DestinationExplorer category={explorerCategory} onBack={() => handleNavigate('home')} />
            )}
          </>
        )}
      </div>
      {showBottomNav && <BottomNav currentScreen={currentScreen} onNavigate={handleNavigate} />}
    </div>
  );
}