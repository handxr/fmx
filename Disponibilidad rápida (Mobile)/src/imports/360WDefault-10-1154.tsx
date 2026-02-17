import svgPaths from "./svg-d9gyx5iel2";
import { NovemberCalendar } from "@/app/components/NovemberCalendar";

function Icon() {
  return (
    <div className="h-[22.5px] relative w-[22.19px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.19 22.5">
        <g id="Icon">
          <path d={svgPaths.p5b16c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="absolute content-stretch flex flex-col h-[33.75px] items-start left-[6.75px] pb-[5.75px] pt-[5.5px] top-[11.25px] w-[22.19px] cursor-pointer" 
      data-name="Container"
      onClick={onClick}
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container1({ onNavigateBack }: { onNavigateBack?: () => void }) {
  return (
    <div className="h-[37.13px] relative shrink-0 w-full" data-name="Container">
      <Container onClick={onNavigateBack} />
      <div className="absolute flex flex-col font-['Montserrat:Light',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+11.25px)] not-italic text-[13.5px] text-center text-white top-[26.63px] tracking-[-0.32px] translate-x-[-50%] translate-y-[-50%] whitespace-nowrap">
        <p className="css-4hzbpn leading-[20.25px]">Selecciona fecha y hora</p>
      </div>
    </div>
  );
}

function Background({ onNavigateBack }: { onNavigateBack?: () => void }) {
  return (
    <div className="bg-[#ea0558] content-stretch flex flex-col h-[53.44px] items-start relative shrink-0 w-full" data-name="Background">
      <Container1 onNavigateBack={onNavigateBack} />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[28.5px] relative w-[27.73px]" data-name="Icon">
      <div className="absolute inset-[0_-0.59%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.893 28.5">
          <g id="Icon">
            <path d={svgPaths.p22b51700} fill="var(--fill-0, #666666)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[52.88px] items-start opacity-50 pb-[12.38px] pl-[14.27px] pt-[12px] relative shrink-0 w-[42px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[53.88px] items-start relative shrink-0 w-[42px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[52.88px]">2026</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[9.46px] h-[53.13px] items-start pl-[56.78px] pr-[56.79px] relative shrink-0 w-[276px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[0.563px]">
        <p className="css-ew64yg leading-[52.88px]">Noviembre 2026</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[28.5px] relative w-[27.73px]" data-name="Icon">
      <div className="absolute inset-[0_0_0_-0.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9201 28.5">
          <g id="Icon">
            <path d={svgPaths.p4610800} fill="var(--fill-0, #666666)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-[52.88px] items-start pb-[12.38px] pt-[12px] relative shrink-0 w-[42px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-[53.88px] items-start relative shrink-0 w-[42px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[52.88px] items-end mb-[-0.01px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container6 />
      <Container9 />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col items-center py-[7.313px] relative shrink-0 w-[51.42px]" data-name="Data">
      <div className="capitalize css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[12.4px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[18.56px]">l</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-center py-[7.313px] relative shrink-0 w-[51.42px]" data-name="Data">
      <div className="capitalize css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[12.4px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[18.56px]">m</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-center py-[7.313px] relative shrink-0 w-[51.42px]" data-name="Data">
      <div className="capitalize css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[12.4px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[18.56px]">j</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-center py-[7.313px] relative shrink-0 w-[51.42px]" data-name="Data">
      <div className="capitalize css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[12.4px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[18.56px]">v</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-center py-[7.313px] relative shrink-0 w-[51.42px]" data-name="Data">
      <div className="capitalize css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[12.4px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[18.56px]">s</p>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="content-stretch flex flex-col items-center py-[7.313px] relative shrink-0 w-[51.47px]" data-name="Data">
      <div className="capitalize css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[12.4px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[18.56px]">d</p>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Header → Row">
      <Data />
      {[...Array(2).keys()].map((_, i) => (
        <Data1 key={i} />
      ))}
      <Data2 />
      <Data3 />
      <Data4 />
      <Data5 />
    </div>
  );
}

function Table({ selectedDay }: { selectedDay?: number }) {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] relative shrink-0 w-full" data-name="Table">
      <HeaderRow />
      <NovemberCalendar selectedDay={selectedDay} />
    </div>
  );
}

function Container11({ selectedDay }: { selectedDay?: number }) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.01px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Table selectedDay={selectedDay} />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[22.49px] relative w-[22.18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.18 22.4899">
        <g id="Icon">
          <path d={svgPaths.p3d37ae80} fill="var(--fill-0, #CCCCCC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[21.6px] relative shrink-0 w-[49.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[13.66px] relative size-full">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none scale-y-[-100%]">
            <Icon3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="min-h-[41.0625px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center min-h-[inherit] pb-[9.58px] pt-[9.48px] relative">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[13.5px] tracking-[-0.32px]">
          <p className="css-ew64yg leading-[21.6px]">Hora</p>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="absolute h-[43.06px] left-px min-h-[41.0625px] right-px top-0" data-name="Border">
      <div className="content-stretch flex items-center min-h-[inherit] overflow-clip pl-px pr-[40.375px] py-px relative rounded-[inherit] size-full">
        <Container12 />
        <Container13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComboboxMenu() {
  return (
    <div className="bg-[#f5f4f5] flex-[1_0_0] h-[41.06px] min-h-px min-w-px relative" data-name="Combobox menu">
      <div aria-hidden="true" className="absolute border border-[#f5f4f5] border-solid inset-0 pointer-events-none" />
      <Border />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[5.5px] relative w-[9.21px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.21 5.5">
        <g id="Icon">
          <path d={svgPaths.p3411bb80} fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-start pb-[18.06px] pt-[17.5px] relative shrink-0 w-[22.5px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[41.06px] items-start right-px top-px w-[22.5px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function FormFieldset() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[337.5px]" data-name="Form → Fieldset">
      <ComboboxMenu />
      <Container15 />
    </div>
  );
}

function Background32({ selectedDay }: { selectedDay?: number }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32.87px] items-center pb-[84.76px] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <Container11 selectedDay={selectedDay} />
      <FormFieldset />
    </div>
  );
}

function Background33({ onNavigateBack, selectedDay }: { onNavigateBack?: () => void; selectedDay?: number }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <Background onNavigateBack={onNavigateBack} />
      <Background32 selectedDay={selectedDay} />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[22.5px] relative w-[22.19px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.19 22.5">
        <g id="Icon">
          <path d={svgPaths.p5b16c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[33.75px] items-start left-[6.75px] pb-[5.75px] pt-[5.5px] top-[11.25px] w-[22.19px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[37.13px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <div className="absolute flex flex-col font-['Montserrat:Light',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+11.25px)] not-italic text-[13.5px] text-center text-white top-[26.63px] tracking-[-0.32px] translate-x-[-50%] translate-y-[-50%] w-[149.296px]">
        <p className="css-4hzbpn leading-[20.25px]">Selecciona fecha y hora</p>
      </div>
    </div>
  );
}

function Background34() {
  return (
    <div className="absolute bg-[#ea0558] content-stretch flex flex-col h-[53.44px] items-start left-0 top-0 w-[360px]" data-name="Background">
      <Container17 />
    </div>
  );
}

function Link({ selectedDay }: { selectedDay?: number }) {
  // El botón siempre muestra "Ver disponibilidad"
  const buttonText = "Ver disponibilidad";
  
  return (
    <div className="absolute bg-[#ea0558] bottom-[11px] content-stretch flex flex-col items-center left-[15px] min-w-[166px] pb-[15.8px] pt-[15.5px] px-[32px] rounded-[100px] w-[329.2px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#ea0558] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-center text-white">
        <p className="css-ew64yg leading-[16.31px]">{buttonText}</p>
      </div>
    </div>
  );
}

export default function Component360WDefault({ onNavigateBack, selectedDay }: { onNavigateBack?: () => void; selectedDay?: number }) {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="360w default" style={{ backgroundImage: "linear-gradient(90deg, rgb(254, 254, 254) 0%, rgb(254, 254, 254) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Background34 />
      <Link selectedDay={selectedDay} />
      <Background33 onNavigateBack={onNavigateBack} selectedDay={selectedDay} />
    </div>
  );
}