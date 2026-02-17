import { CalendarDay, CalendarDayLast } from './CalendarDay';

interface NovemberCalendarProps {
  selectedDay?: number;
}

export function NovemberCalendar({ selectedDay = 0 }: NovemberCalendarProps) {
  // Mapeo de selectedDay a número de día real
  const selectedDayNumberMap: Record<number, number> = {
    0: 12, // Jueves 12
    1: 13, // Viernes 13
    2: 14, // Sábado 14
    3: 15, // Domingo 15
    4: 16, // Lunes 16
  };
  
  const selectedDayNumber = selectedDayNumberMap[selectedDay] || 12;
  
  // Noviembre 2026 empieza un domingo
  // Días pasados (deshabilitados): 1-11
  // Días futuros activos: 12-30
  // Día actual (ejemplo): 26
  const currentDay = 26;
  
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.01px] pt-[14.06px] relative shrink-0 w-full" data-name="Body">
      {/* Fila 1: días 1-4 (todos deshabilitados, domingo a miércoles) */}
      <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
        <div className="bg-white h-[47.81px] shrink-0 w-[51.42px]" data-name="Data" />
        <div className="bg-white h-[47.81px] shrink-0 w-[51.42px]" data-name="Data" />
        <div className="bg-white h-[47.81px] shrink-0 w-[51.42px]" data-name="Data" />
        <CalendarDay day={1} isDisabled />
        <CalendarDay day={2} isDisabled />
        <CalendarDay day={3} isDisabled />
        <CalendarDayLast day={4} isDisabled />
      </div>
      
      {/* Fila 2: días 5-11 (todos deshabilitados) */}
      <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
        <CalendarDay day={5} isDisabled />
        <CalendarDay day={6} isDisabled />
        <CalendarDay day={7} isDisabled />
        <CalendarDay day={8} isDisabled />
        <CalendarDay day={9} isDisabled />
        <CalendarDay day={10} isDisabled />
        <CalendarDayLast day={11} isDisabled />
      </div>
      
      {/* Fila 3: días 12-18 (activos, contiene el día seleccionado) */}
      <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
        <CalendarDay day={12} isSelected={selectedDayNumber === 12} />
        <CalendarDay day={13} isSelected={selectedDayNumber === 13} />
        <CalendarDay day={14} isSelected={selectedDayNumber === 14} />
        <CalendarDay day={15} isSelected={selectedDayNumber === 15} noAvailability={selectedDayNumber === 15} />
        <CalendarDay day={16} isSelected={selectedDayNumber === 16} />
        <CalendarDay day={17} isSelected={selectedDayNumber === 17} />
        <CalendarDayLast day={18} isSelected={selectedDayNumber === 18} />
      </div>
      
      {/* Fila 4: días 19-25 (activos) */}
      <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
        <CalendarDay day={19} isSelected={selectedDayNumber === 19} />
        <CalendarDay day={20} isSelected={selectedDayNumber === 20} />
        <CalendarDay day={21} isSelected={selectedDayNumber === 21} />
        <CalendarDay day={22} isSelected={selectedDayNumber === 22} />
        <CalendarDay day={23} isSelected={selectedDayNumber === 23} />
        <CalendarDay day={24} isSelected={selectedDayNumber === 24} />
        <CalendarDayLast day={25} isSelected={selectedDayNumber === 25} />
      </div>
      
      {/* Fila 5: días 26-30, 26 es el día actual (en rosa) */}
      <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
        <CalendarDay day={26} isCurrentDay isSelected={selectedDayNumber === 26} />
        <CalendarDay day={27} isSelected={selectedDayNumber === 27} />
        <CalendarDay day={28} isSelected={selectedDayNumber === 28} />
        <CalendarDay day={29} isSelected={selectedDayNumber === 29} />
        <CalendarDay day={30} isSelected={selectedDayNumber === 30} />
        <div className="bg-white h-[47.81px] shrink-0 w-[51.42px]" data-name="Data" />
        <div className="bg-white h-[47.81px] shrink-0 w-[51.47px]" data-name="Data" />
      </div>
    </div>
  );
}