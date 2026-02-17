import svgPaths from "./svg-i7wg9hwzdl";

function Icon() {
  return (
    <div className="h-[18px] relative w-[17.39px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.39 18">
        <g id="Icon">
          <path d={svgPaths.p33908800} fill="var(--fill-0, #D3074C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-[58.77px] top-[14.97px]">
      <Container />
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d3074c] text-[13.5px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[20.25px]">64 reservas en las últimas 24 horas</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#fee5ee] h-[48.52px] left-0 right-0 rounded-[8px] top-[calc(50%-31.16px)] translate-y-[-50%]" data-name="Background">
      <Frame />
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[#ea0558] h-[48px] relative rounded-[1000px] shrink-0 w-full cursor-pointer" 
      data-name="Button"
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[24px] py-[16px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white">
            <p className="css-ew64yg leading-[24px]">Ver disponibilidad</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkMargin({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[112px] min-w-[182px] pl-[9px] pr-[7px] py-[7px] right-0 top-[48.52px]" data-name="Link:margin">
      <Button onClick={onClick} />
    </div>
  );
}

function GroupPriceTextContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-center leading-[0] left-[-1px] not-italic px-[8px] top-[61px] tracking-[-0.32px] w-[114px]" data-name="Group price text container">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center relative shrink-0 text-[#666] text-[12px]">
        <p className="css-ew64yg leading-[1.3]">desde</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Bold',sans-serif] justify-center relative shrink-0 text-[#333] text-[16px] text-center">
        <p className="css-ew64yg leading-[1.1]">50,40 €</p>
      </div>
    </div>
  );
}

export function BackgroundSticky({ show, onNavigateToDateTime }: { show?: boolean; onNavigateToDateTime?: (day?: number) => void }) {
  const handleClick = () => {
    if (onNavigateToDateTime) {
      // Navegar a la pantalla de fecha/hora con el día 12 (id: 0)
      onNavigateToDateTime(0);
    }
  };

  return (
    <div 
      className={`bg-white h-[110.83px] w-[360px] left-1/2 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)] z-50 transition-[opacity,transform] duration-300 ${
        show 
          ? 'fixed bottom-0 -translate-x-1/2 translate-y-0 opacity-100' 
          : 'fixed bottom-0 -translate-x-1/2 translate-y-full opacity-0 pointer-events-none'
      }`}
      data-name="Background-sticky"
    >
      <Background />
      <LinkMargin onClick={handleClick} />
      <GroupPriceTextContainer />
    </div>
  );
}