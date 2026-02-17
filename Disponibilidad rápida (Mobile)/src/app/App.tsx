import { useEffect, useRef, useState } from 'react';
import PdpPrimerDiaConDisponibilidad from '@/imports/PdpPrimerDiaConDisponibilidad';
import Screen360WDefault from '@/imports/360WDefault';
import Screen360WDateTime from '@/imports/360WDefault-10-1154';

export default function App() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<'pdp' | 'calendar' | 'dateTime'>('pdp');
  const [selectedDay, setSelectedDay] = useState<number | undefined>(undefined);
  const [calendarSelectedDay, setCalendarSelectedDay] = useState<number | undefined>(undefined);
  const [persistedSelectedDay, setPersistedSelectedDay] = useState<number | undefined>(undefined);
  const firstCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (firstCtaRef.current) {
        const rect = firstCtaRef.current.getBoundingClientRect();
        // El CTA desaparece cuando su parte inferior está por encima del viewport
        setShowStickyBar(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar estado inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigateToCalendar = (day?: number) => {
    setCalendarSelectedDay(day);
    setPersistedSelectedDay(day); // Persistir la selección
    setCurrentScreen('calendar');
  };

  const handleNavigateToDateTime = (day?: number) => {
    setSelectedDay(day);
    setPersistedSelectedDay(day); // Persistir la selección
    setCurrentScreen('dateTime');
  };

  const handleNavigateBack = () => {
    setCurrentScreen('pdp');
  };

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Contenedor del diseño importado */}
      <div className="relative w-full max-w-[360px] mx-auto">
        {currentScreen === 'pdp' ? (
          <PdpPrimerDiaConDisponibilidad 
            firstCtaRef={firstCtaRef} 
            showStickyBar={showStickyBar}
            onNavigateToCalendar={handleNavigateToCalendar}
            onNavigateToDateTime={handleNavigateToDateTime}
            persistedSelectedDay={persistedSelectedDay}
          />
        ) : currentScreen === 'dateTime' ? (
          <Screen360WDateTime onNavigateBack={handleNavigateBack} selectedDay={selectedDay} />
        ) : (
          <Screen360WDefault onNavigateBack={handleNavigateBack} selectedDay={calendarSelectedDay} />
        )}
      </div>
    </div>
  );
}