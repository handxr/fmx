interface CalendarDayProps {
  day: number;
  isSelected?: boolean;
  isDisabled?: boolean;
  isCurrentDay?: boolean;
  noAvailability?: boolean;
}

export function CalendarDay({ day, isSelected, isDisabled, isCurrentDay, noAvailability }: CalendarDayProps) {
  // Si está seleccionado y no tiene disponibilidad, mostrar fondo rosa con texto blanco
  const bgColor = isSelected 
    ? (noAvailability ? 'bg-[#ea0558]' : 'bg-[#388000]')
    : 'bg-white';
  const textColor = isSelected
    ? 'text-white'
    : isCurrentDay 
      ? 'text-[#d3074c]' 
      : isDisabled 
        ? 'text-[#ccc]' 
        : 'text-[#333]';
  const fontWeight = isDisabled ? 'font-[\'Montserrat:Light\',sans-serif]' : 'font-[\'Montserrat:Medium\',sans-serif]';
  const textDecoration = isDisabled ? '[text-decoration-skip-ink:none] decoration-solid line-through' : '';
  
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <div className={`${bgColor} content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]`} data-name="Background">
        <div className={`css-g0mm18 flex flex-col ${fontWeight} justify-center leading-[0] not-italic relative shrink-0 ${textColor} text-[16.9px] text-center tracking-[-0.32px]`}>
          <p className={`${textDecoration} css-ew64yg leading-[47.81px]`}>{day}</p>
        </div>
      </div>
    </div>
  );
}

interface CalendarDayLastProps {
  day: number;
  isSelected?: boolean;
  isDisabled?: boolean;
  isCurrentDay?: boolean;
  noAvailability?: boolean;
}

export function CalendarDayLast({ day, isSelected, isDisabled, isCurrentDay, noAvailability }: CalendarDayLastProps) {
  // Si está seleccionado y no tiene disponibilidad, mostrar fondo rosa con texto blanco
  const bgColor = isSelected 
    ? (noAvailability ? 'bg-[#ea0558]' : 'bg-[#388000]')
    : 'bg-white';
  const textColor = isSelected
    ? 'text-white'
    : isCurrentDay 
      ? 'text-[#d3074c]' 
      : isDisabled 
        ? 'text-[#ccc]' 
        : 'text-[#333]';
  const fontWeight = isDisabled ? 'font-[\'Montserrat:Light\',sans-serif]' : 'font-[\'Montserrat:Medium\',sans-serif]';
  const textDecoration = isDisabled ? '[text-decoration-skip-ink:none] decoration-solid line-through' : '';
  
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.47px]" data-name="Data">
      <div className={`${bgColor} content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]`} data-name="Background">
        <div className={`css-g0mm18 flex flex-col ${fontWeight} justify-center leading-[0] not-italic relative shrink-0 ${textColor} text-[16.9px] text-center tracking-[-0.32px]`}>
          <p className={`${textDecoration} css-ew64yg leading-[47.81px]`}>{day}</p>
        </div>
      </div>
    </div>
  );
}