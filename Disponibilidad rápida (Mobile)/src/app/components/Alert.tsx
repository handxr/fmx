import svgPaths from "@/imports/svg-3vxgc2llcg";

function Informacion() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Informacion">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Informacion">
          <path d={svgPaths.p329fb700} fill="var(--fill-0, #098AC3)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">Sin disponibilidad este día</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-h-px min-w-px relative">
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Informacion />
      <Frame />
    </div>
  );
}

function Borde() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Borde">
      <div aria-hidden="true" className="absolute border border-[#098ac3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export function Alert() {
  return (
    <div className="bg-[#f2fafd] content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] size-full" data-name="Alert">
      <Frame1 />
      <Borde />
    </div>
  );
}
