import svgPaths from "./svg-77xqgxex1d";
const imgTourDeHarryPotterPorLondres = "/assets/403554fadfa8fb4d7bdbc7bb3bf5949abadd1ff3.png";

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
      <div className="absolute flex flex-col font-['Montserrat:Light',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+11.25px)] not-italic text-[13.5px] text-center text-white top-[26.63px] tracking-[-0.32px] translate-x-[-50%] translate-y-[-50%] w-[200px] whitespace-nowrap">
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

function Container6({ selectedDay }: { selectedDay?: number }) {
  // Si el selectedDay es 3 (día 15), mostrar Noviembre, de lo contrario Enero
  const monthName = selectedDay === 3 ? "Noviembre" : "Enero";
  
  return (
    <div className="content-stretch flex gap-[9.46px] h-[53.13px] items-start pl-[86.78px] pr-[86.79px] relative shrink-0 w-[276px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[0.563px]">
        <p className="css-ew64yg leading-[52.88px]">{monthName}</p>
      </div>
      <Container5 />
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

function Container10({ selectedDay }: { selectedDay?: number }) {
  return (
    <div className="content-stretch flex h-[52.88px] items-end mb-[-0.01px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container6 selectedDay={selectedDay} />
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

function Background1() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">1</p>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background1 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">2</p>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background2 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">3</p>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background3 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">4</p>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.47px]" data-name="Data">
      <Background4 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
      <div className="bg-white h-[47.81px] shrink-0 w-[51.42px]" data-name="Data" />
      <div className="bg-white h-[47.81px] shrink-0 w-[51.42px]" data-name="Data" />
      <div className="bg-white h-[47.81px] shrink-0 w-[51.42px]" data-name="Data" />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">5</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background5 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">6</p>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background6 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">7</p>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background7 />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">8</p>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background8 />
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">9</p>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background9 />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">10</p>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background10 />
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">11</p>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.47px]" data-name="Data">
      <Background11 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Data10 />
      <Data11 />
      <Data12 />
      <Data13 />
      <Data14 />
      <Data15 />
      <Data16 />
    </div>
  );
}

function Background12({ isNovember }: { isNovember?: boolean }) {
  if (isNovember) {
    return (
      <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
          <p className="css-ew64yg leading-[47.81px]">12</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">12</p>
      </div>
    </div>
  );
}

function Data17({ isNovember }: { isNovember?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background12 isNovember={isNovember} />
    </div>
  );
}

function Background13({ isNovember }: { isNovember?: boolean }) {
  if (isNovember) {
    return (
      <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
          <p className="css-ew64yg leading-[47.81px]">13</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">13</p>
      </div>
    </div>
  );
}

function Data18({ isNovember }: { isNovember?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background13 isNovember={isNovember} />
    </div>
  );
}

function Background14({ isNovember }: { isNovember?: boolean }) {
  if (isNovember) {
    return (
      <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
          <p className="css-ew64yg leading-[47.81px]">14</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">14</p>
      </div>
    </div>
  );
}

function Data19({ isNovember }: { isNovember?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background14 isNovember={isNovember} />
    </div>
  );
}

function Background15({ isSelected }: { isSelected?: boolean }) {
  if (isSelected) {
    return (
      <div className="bg-[#666] content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16.9px] text-center text-white tracking-[-0.32px]">
          <p className="css-ew64yg leading-[47.81px]">15</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">15</p>
      </div>
    </div>
  );
}

function Data20({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background15 isSelected={isSelected} />
    </div>
  );
}

function Background16({ isNovember }: { isNovember?: boolean }) {
  if (isNovember) {
    return (
      <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
          <p className="css-ew64yg leading-[47.81px]">16</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">16</p>
      </div>
    </div>
  );
}

function Data21({ isNovember }: { isNovember?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background16 isNovember={isNovember} />
    </div>
  );
}

function Background17({ isNovember }: { isNovember?: boolean }) {
  if (isNovember) {
    return (
      <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
          <p className="css-ew64yg leading-[47.81px]">17</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">17</p>
      </div>
    </div>
  );
}

function Data22({ isNovember }: { isNovember?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background17 isNovember={isNovember} />
    </div>
  );
}

function Background18({ isNovember }: { isNovember?: boolean }) {
  if (isNovember) {
    return (
      <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
          <p className="css-ew64yg leading-[47.81px]">18</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">18</p>
      </div>
    </div>
  );
}

function Data23({ isNovember }: { isNovember?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.47px]" data-name="Data">
      <Background18 isNovember={isNovember} />
    </div>
  );
}

function Row2({ selectedDay }: { selectedDay?: number }) {
  const isDay15Selected = selectedDay === 3;
  const isNovember = selectedDay === 3;
  
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Data17 isNovember={isNovember} />
      <Data18 isNovember={isNovember} />
      <Data19 isNovember={isNovember} />
      <Data20 isSelected={isDay15Selected} />
      <Data21 isNovember={isNovember} />
      <Data22 isNovember={isNovember} />
      <Data23 isNovember={isNovember} />
    </div>
  );
}

function Background19({ isNovember }: { isNovember?: boolean }) {
  if (isNovember) {
    return (
      <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
          <p className="css-ew64yg leading-[47.81px]">19</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">19</p>
      </div>
    </div>
  );
}

function Data24({ isNovember }: { isNovember?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background19 isNovember={isNovember} />
    </div>
  );
}

function Background20({ isNovember }: { isNovember?: boolean }) {
  if (isNovember) {
    return (
      <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
          <p className="css-ew64yg leading-[47.81px]">20</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">20</p>
      </div>
    </div>
  );
}

function Data25({ isNovember }: { isNovember?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background20 isNovember={isNovember} />
    </div>
  );
}

function Background21({ isNovember }: { isNovember?: boolean }) {
  if (isNovember) {
    return (
      <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
          <p className="css-ew64yg leading-[47.81px]">21</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">21</p>
      </div>
    </div>
  );
}

function Data26({ isNovember }: { isNovember?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background21 isNovember={isNovember} />
    </div>
  );
}

function Background22({ isNovember }: { isNovember?: boolean }) {
  if (isNovember) {
    return (
      <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
          <p className="css-ew64yg leading-[47.81px]">22</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">22</p>
      </div>
    </div>
  );
}

function Data27({ isNovember }: { isNovember?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background22 isNovember={isNovember} />
    </div>
  );
}

function Background23({ isNovember }: { isNovember?: boolean }) {
  if (isNovember) {
    return (
      <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
          <p className="css-ew64yg leading-[47.81px]">23</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">23</p>
      </div>
    </div>
  );
}

function Data28({ isNovember }: { isNovember?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background23 isNovember={isNovember} />
    </div>
  );
}

function Background24({ isNovember }: { isNovember?: boolean }) {
  if (isNovember) {
    return (
      <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
          <p className="css-ew64yg leading-[47.81px]">24</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">24</p>
      </div>
    </div>
  );
}

function Data29({ isNovember }: { isNovember?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background24 isNovember={isNovember} />
    </div>
  );
}

function Background25({ isNovember }: { isNovember?: boolean }) {
  if (isNovember) {
    return (
      <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
          <p className="css-ew64yg leading-[47.81px]">25</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[47.81px] line-through">25</p>
      </div>
    </div>
  );
}

function Data30({ isNovember }: { isNovember?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.47px]" data-name="Data">
      <Background25 isNovember={isNovember} />
    </div>
  );
}

function Row3({ selectedDay }: { selectedDay?: number }) {
  const isNovember = selectedDay === 3;
  
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Data24 isNovember={isNovember} />
      <Data25 isNovember={isNovember} />
      <Data26 isNovember={isNovember} />
      <Data27 isNovember={isNovember} />
      <Data28 isNovember={isNovember} />
      <Data29 isNovember={isNovember} />
      <Data30 isNovember={isNovember} />
    </div>
  );
}

function Background26({ isNovember }: { isNovember?: boolean }) {
  if (isNovember) {
    return (
      <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
          <p className="css-ew64yg leading-[47.81px]">26</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-[#999] content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16.9px] text-center text-white tracking-[-0.32px]">
        <p className="css-ew64yg leading-[47.81px]">26</p>
      </div>
    </div>
  );
}

function Data31({ isNovember }: { isNovember?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background26 isNovember={isNovember} />
    </div>
  );
}

function Background27() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[47.81px]">27</p>
      </div>
    </div>
  );
}

function Data32() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background27 />
    </div>
  );
}

function Background28() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[47.81px]">28</p>
      </div>
    </div>
  );
}

function Data33() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background28 />
    </div>
  );
}

function Background29() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[47.81px]">29</p>
      </div>
    </div>
  );
}

function Data34() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background29 />
    </div>
  );
}

function Background30() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[47.81px]">30</p>
      </div>
    </div>
  );
}

function Data35() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background30 />
    </div>
  );
}

function Background31() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative rounded-[23.91px] shrink-0 w-[47.81px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[47.81px]">31</p>
      </div>
    </div>
  );
}

function Data36() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[51.42px]" data-name="Data">
      <Background31 />
    </div>
  );
}

function Row4({ selectedDay }: { selectedDay?: number }) {
  const isNovember = selectedDay === 3;
  
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Data31 isNovember={isNovember} />
      <Data32 />
      <Data33 />
      <Data34 />
      <Data35 />
      <Data36 />
      <div className="bg-white h-[47.81px] shrink-0 w-[51.47px]" data-name="Data" />
    </div>
  );
}

function Body({ selectedDay }: { selectedDay?: number }) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.01px] pt-[14.06px] relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 selectedDay={selectedDay} />
      <Row3 selectedDay={selectedDay} />
      <Row4 selectedDay={selectedDay} />
    </div>
  );
}

function Table({ selectedDay }: { selectedDay?: number }) {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] relative shrink-0 w-full" data-name="Table">
      <HeaderRow />
      <Body selectedDay={selectedDay} />
    </div>
  );
}

function Container11({ selectedDay }: { selectedDay?: number }) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.01px] relative shrink-0 w-full" data-name="Container">
      <Container10 selectedDay={selectedDay} />
      <Table selectedDay={selectedDay} />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center tracking-[-0.32px]">
            <p className="css-ew64yg leading-[1.5]">Fecha no disponible, te proponemos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TourDeHarryPotterPorLondres() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name="Tour de Harry Potter por Londres">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
        <img alt="" className="absolute h-full left-[-26.67%] max-w-none top-0 w-[153.33%]" src={imgTourDeHarryPotterPorLondres} />
      </div>
    </div>
  );
}

function Background32() {
  return (
    <div className="bg-[#dadce0] overflow-clip relative rounded-[4px] shrink-0 size-[96px]" data-name="Background">
      <TourDeHarryPotterPorLondres />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-[1_0_0] flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[20px] min-h-px min-w-px not-italic relative text-[#333] text-[14px] tracking-[-0.32px]">
        <p className="css-4hzbpn mb-0">Tour de Harry Potter por</p>
        <p className="css-4hzbpn">Londres</p>
      </div>
    </div>
  );
}

function Heading3AlignStretch() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3:align-stretch">
      <Heading />
    </div>
  );
}

function ReviewsStarSvg() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="reviewsStar.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.99 15.99">
        <g id="reviewsStar.svg">
          <path d={svgPaths.p311dd780} fill="var(--fill-0, #F70759)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ReviewsStarSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[15.99px]" data-name="reviewsStar.svg fill">
      <ReviewsStarSvg />
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[15.99px]" data-name="Image">
      <ReviewsStarSvgFill />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[2px] h-[15px] items-center justify-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[12px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[24px]">9.5</p>
      </div>
      <Image />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[12px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[24px]">(3386)</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[3.99px] h-[15px] items-center relative shrink-0 w-[135px]" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[15.99px] items-center py-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[10px] text-[green] tracking-[-0.32px]">
        <p className="css-4hzbpn leading-[14px]">Cancelación gratuita</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[20.99px] items-start pb-[5px] relative shrink-0 w-full" data-name="Margin">
      <Container16 />
    </div>
  );
}

function Strong() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Strong">
      <div className="capitalize css-g0mm18 flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[20px]">16.72€</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bottom-[-7.99px] content-stretch flex flex-col gap-[2px] h-[38px] items-end justify-end right-[-0.01px] w-[83px]" data-name="Container">
      <div className="capitalize css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[10px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[14px]">desde</p>
      </div>
      <Strong />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-full items-start relative shrink-0 w-[224.02px]" data-name="Container">
      <Heading3AlignStretch />
      <Container15 />
      <Margin />
      <Container17 />
    </div>
  );
}

function ContainerAlignStretch() {
  return (
    <div className="content-stretch flex h-full items-start justify-center relative shrink-0" data-name="Container:align-stretch">
      <Container18 />
    </div>
  );
}

function ListItemLink() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-start justify-end pb-[8px] relative self-stretch shrink-0 w-[328.02px]" data-name="List → Item → Link">
      <Background32 />
      <ContainerAlignStretch />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[8px] pt-[15.99px] relative shrink-0 w-full" data-name="Container">
      <ListItemLink />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container19 />
    </div>
  );
}

function Background33({ selectedDay }: { selectedDay?: number }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[39.99px] items-start pb-[56.25px] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <Container11 selectedDay={selectedDay} />
      <Container20 />
    </div>
  );
}

function Background34({ onNavigateBack, selectedDay }: { onNavigateBack?: () => void; selectedDay?: number }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <Background onNavigateBack={onNavigateBack} />
      <Background33 selectedDay={selectedDay} />
    </div>
  );
}

function Icon3() {
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

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col h-[33.75px] items-start left-[6.75px] pb-[5.75px] pt-[5.5px] top-[11.25px] w-[22.19px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[37.13px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <div className="absolute flex flex-col font-['Montserrat:Light',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+11.25px)] not-italic text-[13.5px] text-center text-white top-[26.63px] tracking-[-0.32px] translate-x-[-50%] translate-y-[-50%] w-[149.296px]">
        <p className="css-4hzbpn leading-[20.25px]">Selecciona fecha y hora</p>
      </div>
    </div>
  );
}

function Background35({ selectedDay }: { selectedDay?: number }) {
  return (
    <div className="absolute bg-[#ea0558] content-stretch flex flex-col h-[53.44px] items-start left-0 top-0 w-[360px]" data-name="Background">
      <Container22 />
    </div>
  );
}

export default function Component360WDefault({ onNavigateBack, selectedDay }: { onNavigateBack?: () => void; selectedDay?: number }) {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="360w default" style={{ backgroundImage: "linear-gradient(90deg, rgb(254, 254, 254) 0%, rgb(254, 254, 254) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Background35 selectedDay={selectedDay} />
      <Background34 onNavigateBack={onNavigateBack} selectedDay={selectedDay} />
    </div>
  );
}