import svgPaths from "./svg-a7s6pffqbi";
const imgContainer = "/assets/3fc05aa5ca16e4ff9438535739505921640db6d1.png";
const imgContainer1 = "/assets/a62b1e947e2ea7269b10d95b67c19aaaefb9f24e.png";
const imgFigureOculoDelPanteonDeAgripa = "/assets/e2216a7e9b73f5cb0279351c78ce61c33475cea7.gif";
import { useState, type RefObject } from 'react';
import { Alert } from '@/app/components/Alert';
import { BackgroundSticky } from './BackgroundSticky';

function LogoCivitatis() {
  return (
    <div className="h-[19.218px] relative shrink-0 w-[88px]" data-name="logo-civitatis">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 19.2184">
        <g id="logo-civitatis">
          <path d={svgPaths.p107a5180} fill="var(--fill-0, white)" id="logo-civitatis_2" />
        </g>
      </svg>
    </div>
  );
}

function Dialogo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="dialogo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dialogo">
          <path d={svgPaths.p30057860} fill="var(--fill-0, white)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function LupaBuscar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lupa-buscar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lupa-buscar">
          <path d={svgPaths.p2f834f00} fill="var(--fill-0, white)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function IconCarritoVacio() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-carrito-vacio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-carrito-vacio">
          <path d={svgPaths.p3d730300} fill="var(--fill-0, white)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function ActionHeaderBasket() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0 size-[24px]" data-name=".action-header/basket">
      <IconCarritoVacio />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="user">
          <path d={svgPaths.p15f3e4f0} fill="var(--fill-0, white)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <Dialogo />
      <LupaBuscar />
      <ActionHeaderBasket />
      <User />
    </div>
  );
}

function HeaderNewMb() {
  return (
    <div className="absolute bg-[#ea0558] content-stretch flex h-[56px] items-center justify-between left-0 px-[16px] top-0 w-[360px]" data-name="Header new MB">
      <LogoCivitatis />
      <Frame />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[54px] relative shrink-0 w-[360px]" data-name="Header">
      <HeaderNewMb />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white content-stretch flex gap-[5.63px] h-[30.75px] items-center pb-[7.31px] pl-[5.62px] pt-[6.44px] relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ea0558] text-[11.3px] tracking-[-0.32px]">
        <p className="css-ew64yg leading-[16.88px]">Italia</p>
      </div>
      <div className="h-[11.25px] relative shrink-0 w-[1.13px]" data-name="Vertical Divider">
        <div aria-hidden="true" className="absolute border-[rgba(234,5,88,0.67)] border-r border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[2.813px] relative shrink-0" data-name="Link:margin">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-white content-stretch flex gap-[5.62px] h-[30.75px] items-center pb-[7.31px] pl-[5.63px] pt-[6.44px] relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ea0558] text-[11.3px] tracking-[-0.32px]">
        <p className="css-ew64yg leading-[16.88px]">Lacio</p>
      </div>
      <div className="h-[11.25px] relative shrink-0 w-[1.13px]" data-name="Vertical Divider">
        <div aria-hidden="true" className="absolute border-[rgba(234,5,88,0.67)] border-r border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[2.813px] relative shrink-0" data-name="Link:margin">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-white content-stretch flex h-[30.75px] items-center pb-[7.31px] pt-[6.44px] px-[5.625px] relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ea0558] text-[11.3px] tracking-[-0.32px]">
        <p className="css-ew64yg leading-[16.88px]">Roma</p>
      </div>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pr-[2.813px] relative shrink-0" data-name="Link:margin">
      <Link2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-h-px min-w-px mr-[-0.01px] relative" data-name="Container">
      <LinkMargin />
      <LinkMargin1 />
      <LinkMargin2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[21px] relative w-[20.48px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.48 21">
        <g id="Icon">
          <path d={svgPaths.p219c3e80} fill="var(--fill-0, #999999)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[21.81px] items-start relative shrink-0 w-[20.48px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[3.37px] pt-[5.57px] px-[5.625px] relative w-full">
        <Container1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start mr-[-0.01px] relative shrink-0" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[30.75px] items-start max-w-[1200px] pr-[0.01px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container3 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[42px] max-w-[1211.25px] relative shrink-0 w-full" data-name="Margin">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] p-[5.625px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[18px] not-italic relative shrink-0 text-[#333] text-[18px] tracking-[-0.32px] w-full">
        <p className="css-4hzbpn mb-0">Entrada al Panteón de Agripa sin</p>
        <p className="css-4hzbpn">colas</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ea0558] text-[16.9px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[28.13px]">8,1 / 10</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-3.32px] relative shrink-0 w-full z-[2]" data-name="Container">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ea0558] text-[13.5px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[16.2px]">1.052</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ea0558] text-[13.5px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[16.2px]">opiniones</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[3.19px] items-start justify-center mb-[-3.32px] relative shrink-0 w-full z-[1]" data-name="Container">
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[3.32px] pt-[2.82px] relative shrink-0" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[1.125px] relative shrink-0" data-name="Container">
      <Container7 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col h-[45.45px] items-center justify-end px-[1.688px] relative shrink-0" data-name="Item">
      <Container8 />
    </div>
  );
}

function ItemMargin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[6.75px] relative self-stretch shrink-0" data-name="Item:margin">
      <Item />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[16.2px] not-italic relative shrink-0 text-[#377c01] text-[13.5px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg mb-0">Cancelación</p>
        <p className="css-ew64yg">gratuita</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-end pb-[1.125px] pl-[5.625px] pr-[3.375px] relative self-stretch shrink-0" data-name="Container">
      <Container9 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16.99px] relative w-[16.54px]" data-name="Icon">
      <div className="absolute inset-[0_0_0_-0.39%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6046 16.9897">
          <g id="Icon">
            <path d={svgPaths.p1d28a500} fill="var(--fill-0, #999999)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-[26.31px] items-start mb-[-5.06px] relative shrink-0 w-[16.55px] z-[2]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-5.06px] relative shrink-0 z-[1]" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[13.5px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[16.2px]">Sin colas</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col h-[45.45px] isolate items-center justify-end pb-[5.06px] pl-[10.125px] pr-[1.688px] relative shrink-0" data-name="Item">
      <Container11 />
      <Link6 />
    </div>
  );
}

function ItemMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[6.75px] relative self-stretch shrink-0" data-name="Item:margin">
      <Item1 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="List">
      <ItemMargin />
      <Container10 />
      <ItemMargin1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end min-h-px min-w-px relative" data-name="Container">
      <List />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[54.75px] relative w-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[100.7px] max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pb-[11.25px] px-[11.25px] relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[111.95px] max-w-[1211.25px] relative shrink-0 w-full" data-name="Margin">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] p-[5.625px] relative size-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Margin />
      <Margin1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[14px] relative w-[10.47px]" data-name="Icon">
      <div className="absolute inset-[0_-0.38%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.51 14">
          <g id="Icon">
            <path d={svgPaths.p3b542700} fill="var(--fill-0, #999999)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[28.13px] items-start left-0 pl-[8.82px] pr-[8.83px] py-[7.313px] rounded-[14.07px] top-0 w-[28.12px]" data-name="Background">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative self-stretch shrink-0 w-[28.12px]" data-name="Container">
      <div className="absolute flex flex-col font-['Montserrat:Light',sans-serif] h-[16px] justify-center leading-[0] left-[-9970.88px] not-italic text-[#0a0a0a] text-[13.5px] top-0 tracking-[-0.32px] translate-y-[-50%] w-[66.432px]">
        <p className="css-4hzbpn leading-[0px]">Compartir</p>
      </div>
      <Background />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex items-start pl-[11.25px] pr-[0.01px] py-[11.25px] right-[11.24px] top-[-50.63px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[236.25px_0_1087.63px_0] items-start" data-name="Header">
      <Container16 />
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bottom-0 left-0 top-0 w-[360px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.41%] left-0 max-w-none top-[-0.71%] w-full" src={imgContainer} />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bottom-0 left-[360px] top-0 w-[360px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.78%] left-0 max-w-none top-[-0.89%] w-full" src={imgContainer1} />
      </div>
    </div>
  );
}

function FigureOculoDelPanteonDeAgripa() {
  return (
    <div className="absolute inset-0 opacity-0" data-name="Figure → Óculo del Panteón de Agripa">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[152.38%] left-0 max-w-none top-[-26.19%] w-full" src={imgFigureOculoDelPanteonDeAgripa} />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bottom-0 left-[720px] top-0 w-[360px]" data-name="Container">
      <FigureOculoDelPanteonDeAgripa />
    </div>
  );
}

function FigureCapitelesCorintiosDelPanteonDeAgripa() {
  return (
    <div className="absolute inset-0 opacity-0" data-name="Figure → Capiteles corintios del Panteón de Agripa">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[152.38%] left-0 max-w-none top-[-26.19%] w-full" src={imgFigureOculoDelPanteonDeAgripa} />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bottom-0 left-[1080px] top-0 w-[360px]" data-name="Container">
      <FigureCapitelesCorintiosDelPanteonDeAgripa />
    </div>
  );
}

function FigureVisitandoElInteriorDelPanteonDeAgripa() {
  return (
    <div className="absolute inset-0 opacity-0" data-name="Figure → Visitando el interior del Panteón de Agripa">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[152.38%] left-0 max-w-none top-[-26.19%] w-full" src={imgFigureOculoDelPanteonDeAgripa} />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[16px] relative w-[15.44px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.44 16">
        <g id="Icon">
          <path d={svgPaths.p6f06c00} fill="var(--fill-0, #EA0558)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col h-[23.63px] items-start pb-[4.63px] pt-[3px] relative shrink-0 w-[15.44px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[23.63px] items-start pl-[11.25px] relative shrink-0 w-[26.69px]" data-name="Margin">
      <Container23 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-white content-stretch flex inset-[41.19%_22.75%_41.19%_22.74%] items-center px-[28.125px] py-[9px] rounded-[33.75px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ea0558] text-[13.5px] tracking-[-0.32px]">
        <p className="css-ew64yg leading-[20.25px]">Ver más fotos (69)</p>
      </div>
      <Margin2 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bottom-0 left-[1440px] top-0 w-[360px]" data-name="Container">
      <FigureVisitandoElInteriorDelPanteonDeAgripa />
      <Background1 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="flex-[1_0_0] h-[19.125px] min-h-px min-w-[11.25px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[136.125px] pr-[3.938px] py-[3.938px] relative size-full">
          <div className="bg-white rounded-[5.63px] shrink-0 size-[11.25px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start p-[3.938px] relative shrink-0 size-[19.125px]" data-name="Margin">
      <div className="bg-white rounded-[5.63px] shrink-0 size-[11.25px]" data-name="Background" />
    </div>
  );
}

function Margin5() {
  return (
    <div className="flex-[1_0_0] h-[19.125px] min-h-px min-w-[11.25px] relative" data-name="Margin">
      <div className="content-stretch flex flex-col items-start min-w-[inherit] pl-[3.938px] pr-[136.125px] py-[3.938px] relative size-full">
        <div className="bg-white rounded-[5.63px] shrink-0 size-[11.25px]" data-name="Background" />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bottom-[11.26px] content-stretch flex items-start left-[-1800px] right-[1440.01px]" data-name="Container">
      <Margin3 />
      {[...Array(3).keys()].map((_, i) => (
        <Margin4 key={i} />
      ))}
      <Margin5 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bottom-0 left-[1800px] top-0 w-[0.01px]" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[236.25px] overflow-auto relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container24 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[0_0_1241.58px_0] items-start max-w-[360px]" data-name="Section">
      <Container28 />
    </div>
  );
}

function Section1() {
  return <div className="absolute inset-[1477.83px_0_-0.01px_0]" data-name="Section" />;
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[13.5px] tracking-[-0.32px] w-full">
          <p className="css-4hzbpn mb-0">
            <span className="leading-[18.36px]">{`Con esta `}</span>
            <span className="font-['Montserrat:Medium',sans-serif] leading-[18.36px] not-italic">entrada al Panteón de Agripa sin colas</span>
          </p>
          <p className="css-4hzbpn mb-0">
            <span className="leading-[18.36px]">{`podréis visitar `}</span>
            <span className="font-['Montserrat:Medium',sans-serif] leading-[18.36px] not-italic">uno de los grandes monumentos de</span>
          </p>
          <p className="css-4hzbpn mb-0">
            <span className="font-['Montserrat:Medium',sans-serif] leading-[18.36px] not-italic">la Antigua Roma</span>
            <span className="leading-[18.36px]">. ¡Imprescindible si estáis en la</span>
          </p>
          <p className="css-4hzbpn leading-[18.36px]">Ciudad Eterna!</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#bfbfbf] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[12.25px] pt-[11.25px] px-[11.25px] relative w-full">
        <Container29 />
      </div>
    </div>
  );
}

function DiaDispoRapida({ day, dayNumber, month, isSelected, onClick }: { day: string; dayNumber: string; month: string; isSelected?: boolean; onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] cursor-pointer hover:bg-gray-50 transition-colors duration-200" 
      data-name="dia-dispo-rapida"
    >
      {isSelected && (
        <div aria-hidden="true" className="absolute border-2 border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      )}
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center px-[4px] py-[8px] relative text-center w-full">
          <p className={`css-4hzbpn font-['Montserrat:Medium',sans-serif] h-[14px] leading-[16px] not-italic relative shrink-0 text-[12px] text-center w-[34px] ${
            isSelected ? 'text-[#333]' : 'text-[#8c8c8c]'
          }`}>{day}</p>
          <div className={`flex flex-col h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center w-[36px] text-[#333] ${
            isSelected ? "font-['Montserrat:Bold',sans-serif]" : "font-['Montserrat:Medium',sans-serif]"
          }`}>
            <p className="css-4hzbpn leading-[24px]">{dayNumber}</p>
          </div>
          <p className="css-4hzbpn font-['Montserrat:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#333] text-[14px] text-center w-[36px]">{month}</p>
        </div>
      </div>
    </button>
  );
}



function CalendarIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar icon">
          <path d={svgPaths.pe0d58b0} fill="var(--fill-0, #333333)" fillOpacity="0.9" id="path" />
        </g>
      </svg>
    </div>
  );
}

function MoreDatesContainer({ onNavigateToDateTime }: { onNavigateToDateTime?: () => void }) {
  return (
    <div 
      className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch cursor-pointer" 
      data-name="More dates container"
      onClick={onNavigateToDateTime}
    >
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[4px] relative size-full">
          <CalendarIcon />
          <div className="font-['Montserrat:Medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#333] text-[12px] text-center w-[min-content]">
            <p className="css-4hzbpn mb-0">{`Más `}</p>
            <p className="css-4hzbpn">fechas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DateContainer({ selectedDay, onDaySelect, onNavigateToDateTime }: { selectedDay: number; onDaySelect: (day: number) => void; onNavigateToDateTime?: () => void }) {
  const days = [
    { day: 'J', dayNumber: '12', month: 'nov', id: 0 },
    { day: 'V', dayNumber: '13', month: 'nov', id: 1 },
    { day: 'S', dayNumber: '14', month: 'nov', id: 2 },
    { day: 'D', dayNumber: '15', month: 'nov', id: 3 },
    { day: 'L', dayNumber: '16', month: 'nov', id: 4 },
  ];

  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Date container">
      {days.map((dayData) => (
        <DiaDispoRapida 
          key={dayData.id}
          day={dayData.day}
          dayNumber={dayData.dayNumber}
          month={dayData.month}
          isSelected={selectedDay === dayData.id}
          onClick={() => onDaySelect(dayData.id)}
        />
      ))}
      <MoreDatesContainer onNavigateToDateTime={onNavigateToDateTime} />
    </div>
  );
}

function DateSelection({ selectedDay, onDaySelect, onNavigateToDateTime }: { selectedDay: number; onDaySelect: (day: number) => void; onNavigateToDateTime?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Date selection">
      <DateContainer selectedDay={selectedDay} onDaySelect={onDaySelect} onNavigateToDateTime={onNavigateToDateTime} />
    </div>
  );
}

function DateSelection1({ selectedDay, onDaySelect, onNavigateToDateTime }: { selectedDay: number; onDaySelect: (day: number) => void; onNavigateToDateTime?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Date selection">
      <DateSelection selectedDay={selectedDay} onDaySelect={onDaySelect} onNavigateToDateTime={onNavigateToDateTime} />
    </div>
  );
}

function GroupPriceTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center leading-[0] not-italic px-[8px] relative shrink-0 tracking-[-0.32px] w-[114px]" data-name="Group price text container">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center relative shrink-0 text-[#666] text-[12px]">
        <p className="css-ew64yg leading-[1.3]">Desde</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Bold',sans-serif] justify-center relative shrink-0 text-[#333] text-[16px] text-center">
        <p className="css-ew64yg leading-[1.1]">50,40 €</p>
      </div>
    </div>
  );
}

function Button({ text, onClick }: { text: string; onClick?: () => void }) {
  return (
    <div 
      className="bg-[#ea0558] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[1000px] cursor-pointer" 
      data-name="Button"
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[24px] py-[16px] relative size-full">
          <p className="css-ew64yg font-['Montserrat:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-center text-white">{text}</p>
        </div>
      </div>
    </div>
  );
}

function OptionsButtonContainer({ buttonText, onClick }: { buttonText: string; onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end min-h-px min-w-px relative" data-name="Options button container">
      <Button text={buttonText} onClick={onClick} />
    </div>
  );
}

function GroupPriceContainer({ ctaRef, buttonText, onClick }: { ctaRef?: RefObject<HTMLDivElement>; buttonText: string; onClick?: () => void }) {
  return (
    <div ref={ctaRef} className="bg-white content-stretch flex items-center justify-between py-[8px] relative shrink-0 w-full" data-name="Group price container">
      <GroupPriceTextContainer />
      <OptionsButtonContainer buttonText={buttonText} onClick={onClick} />
    </div>
  );
}

function ReservationInfoIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Reservation info icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Reservation info icon">
          <path d={svgPaths.p3961e580} fill="var(--fill-0, #C2044B)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function ReservationInfoIconContainer() {
  return (
    <div className="bg-[#ffeaf1] content-stretch flex items-center p-[4px] relative rounded-[100px] shrink-0" data-name="Reservation info icon container">
      <ReservationInfoIcon />
    </div>
  );
}

function Cancelacion() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Cancelacion">
      <ReservationInfoIconContainer />
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px]">
        <p className="css-ew64yg leading-[20px]">64 reservas en las últimas 24 horas</p>
      </div>
    </div>
  );
}

function CancellationInfoIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Cancellation info icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Cancellation info icon">
          <g id="path">
            <path d={svgPaths.p2697f700} fill="var(--fill-0, #00825B)" />
            <path d={svgPaths.p12023a40} fill="var(--fill-0, #00825B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CancellationInfoIconContainer() {
  return (
    <div className="bg-[#dafaeb] content-stretch flex items-center p-[4px] relative rounded-[100px] shrink-0" data-name="Cancellation info icon container">
      <CancellationInfoIcon />
    </div>
  );
}

function Cancelacion1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Cancelacion">
      <CancellationInfoIconContainer />
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Cancela gratis hasta 24 horas antes</p>
      </div>
    </div>
  );
}

function ReservationInfoContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Reservation info container">
      <Cancelacion />
      <Cancelacion1 />
    </div>
  );
}

function DispoRapidaMarketplace({ ctaRef, onNavigateToCalendar, onNavigateToDateTime, persistedSelectedDay }: { ctaRef?: RefObject<HTMLDivElement>; onNavigateToCalendar?: (day?: number) => void; onNavigateToDateTime?: (day?: number) => void; persistedSelectedDay?: number }) {
  const [selectedDay, setSelectedDay] = useState(persistedSelectedDay ?? 0);
  
  // Día 15 (id: 3) no tiene disponibilidad
  const hasAvailability = selectedDay !== 3;
  const buttonText = hasAvailability ? "Ver disponibilidad" : "Ver otras actividades";

  const handleButtonClick = () => {
    if (!hasAvailability && onNavigateToCalendar) {
      // Pasar el día seleccionado al calendario (día 15 = id 3)
      onNavigateToCalendar(selectedDay);
    } else if (hasAvailability && onNavigateToDateTime) {
      onNavigateToDateTime(selectedDay);
    }
  };
  
  const handleMoreDatesClick = () => {
    if (onNavigateToDateTime) {
      onNavigateToDateTime(undefined);
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative rounded-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-[360px]" data-name="Dispo rápida Marketplace">
      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out w-full"
        style={{
          maxHeight: !hasAvailability ? '200px' : '0px',
          opacity: !hasAvailability ? 1 : 0,
          marginBottom: !hasAvailability ? '0px' : '-16px'
        }}
      >
        <Alert />
      </div>
      <DateSelection1 selectedDay={selectedDay} onDaySelect={setSelectedDay} onNavigateToDateTime={handleMoreDatesClick} />
      <GroupPriceContainer ctaRef={ctaRef} buttonText={buttonText} onClick={handleButtonClick} />
      <ReservationInfoContainer />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[9px] relative w-[15.56px]" data-name="Icon">
      <div className="absolute inset-[-0.14%_-0.67%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6637 9.01221">
          <g id="Icon">
            <path d={svgPaths.p1a6f51f2} fill="var(--fill-0, #CCCCCC)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-[334.69px] pt-[15px] top-0 w-[8.44px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <button className="bg-white cursor-pointer relative shrink-0 w-[360px] z-[2]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[11.25px] pr-[22.5px] relative w-full">
        <div className="css-g0mm18 cursor-pointer flex flex-col font-['Montserrat:ExtraLight',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1a1a] text-[13.5px] text-left tracking-[-0.32px] uppercase" role="button" tabIndex="0">
          <p className="css-ew64yg leading-[40.5px]">Descripción</p>
        </div>
        <Container30 />
      </div>
    </button>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.52px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[28.35px] not-italic relative shrink-0 text-[#333] text-[20.3px] tracking-[-0.32px] w-full">
        <p className="css-4hzbpn mb-0">¿Por qué visitar el Panteón de</p>
        <p className="css-4hzbpn">Agripa?</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12.035px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[13.5px] tracking-[-0.32px] w-full">
        <p className="css-4hzbpn leading-[21.6px] mb-0">Situado en una de las principales zonas</p>
        <p className="css-4hzbpn mb-0">
          <span className="leading-[21.6px]">{`monumentales de la capital italiana, el `}</span>
          <span className="font-['Montserrat:Medium',sans-serif] leading-[21.6px] not-italic">Panteón</span>
        </p>
        <p className="css-4hzbpn mb-0">
          <span className="font-['Montserrat:Medium',sans-serif] leading-[21.6px] not-italic">de Agripa</span>
          <span className="leading-[21.6px]">{` es una de las grandes `}</span>
          <span className="font-['Montserrat:Medium',sans-serif] leading-[21.6px] not-italic">joyas</span>
        </p>
        <p className="css-4hzbpn mb-0">
          <span className="font-['Montserrat:Medium',sans-serif] leading-[21.6px] not-italic">arquitectónicas de la Antigua Roma</span>
          <span className="leading-[21.6px]">. Además,</span>
        </p>
        <p className="css-4hzbpn leading-[21.6px]">¡no tendréis que esperar la cola!</p>
      </div>
    </div>
  );
}

function Strong() {
  return (
    <div className="absolute font-['Montserrat:Medium',sans-serif] h-[37.59px] left-0 top-[88.37px] w-[298.31px]" data-name="Strong">
      <div className="absolute flex flex-col h-[22px] justify-center left-[188.53px] top-[8px] translate-y-[-50%] w-[110.49px]">
        <p className="css-4hzbpn leading-[21.6px]">{` de casi 9 metros`}</p>
      </div>
      <div className="absolute flex flex-col h-[22px] justify-center left-0 top-[29.6px] translate-y-[-50%] w-[81.133px]">
        <p className="css-4hzbpn leading-[21.6px]">de diámetro</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[147.28px] leading-[0] not-italic relative shrink-0 text-[#333] text-[13.5px] tracking-[-0.32px] w-full" data-name="Container">
      <div className="absolute flex flex-col font-['Montserrat:Light',sans-serif] h-[108px] justify-center left-0 top-[53.19px] translate-y-[-50%] w-[299.28px]">
        <p className="css-4hzbpn mb-0">
          <span className="leading-[21.6px]">{`Vuestra `}</span>
          <span className="font-['Montserrat:Medium',sans-serif] leading-[21.6px] not-italic">entrada al Panteón de Agripa</span>
          <span className="leading-[21.6px]">{` os`}</span>
        </p>
        <p className="css-4hzbpn leading-[21.6px] mb-0">permitirá acceder al monumento sin pasar por</p>
        <p className="css-4hzbpn leading-[21.6px] mb-0">taquilla. En su interior, vuestros ojos se dirigirán</p>
        <p className="css-4hzbpn mb-0">
          <span className="leading-[21.6px]">{`inevitablemente hasta la `}</span>
          <span className="font-['Montserrat:Medium',sans-serif] leading-[21.6px] not-italic">cúpula del panteón</span>
          <span className="leading-[21.6px]">,</span>
        </p>
        <p className="css-4hzbpn">
          <span className="leading-[21.6px]">{`donde se encuentra un `}</span>
          <span className="font-['Montserrat:Medium',sans-serif] leading-[21.6px] not-italic">óculo</span>
        </p>
      </div>
      <Strong />
      <div className="absolute flex flex-col font-['Montserrat:Light',sans-serif] h-[22px] justify-center left-[80.56px] top-[117.97px] translate-y-[-50%] w-[208.213px]">
        <p className="css-4hzbpn leading-[21.6px]">{` por el que penetra la luz natural.`}</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[11.825px] pt-[5.465px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[13.5px] tracking-[-0.32px] w-full">
        <p className="css-4hzbpn leading-[21.6px] mb-0">Además del famoso óculo, en el interior del</p>
        <p className="css-4hzbpn mb-0">
          <span className="leading-[21.6px]">{`Panteón de Agripa encontraréis la `}</span>
          <span className="font-['Montserrat:Medium',sans-serif] leading-[21.6px] not-italic">tumba del</span>
        </p>
        <p className="css-4hzbpn mb-0">
          <span className="font-['Montserrat:Medium',sans-serif] leading-[21.6px] not-italic">pintor Rafael Sanzio</span>
          <span className="leading-[21.6px]">{` y de otros destacados`}</span>
        </p>
        <p className="css-4hzbpn mb-0">
          <span className="leading-[21.6px]">{`personajes, como el `}</span>
          <span className="font-['Montserrat:Medium',sans-serif] leading-[21.6px] not-italic">rey Víctor Manuel II</span>
          <span className="leading-[21.6px]">. También</span>
        </p>
        <p className="css-4hzbpn mb-0">
          <span className="leading-[21.6px]">{`merece la pena contemplar las `}</span>
          <span className="font-['Montserrat:Medium',sans-serif] leading-[21.6px] not-italic">esculturas</span>
          <span className="leading-[21.6px]">{` y `}</span>
          <span className="font-['Montserrat:Medium',sans-serif] leading-[21.6px] not-italic">obras</span>
        </p>
        <p className="css-4hzbpn">
          <span className="font-['Montserrat:Medium',sans-serif] leading-[21.6px] not-italic">pictóricas</span>
          <span className="leading-[21.6px]">{` que atesora el monumento.`}</span>
        </p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[5.47px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[20.3px] tracking-[-0.32px] w-full">
        <p className="css-4hzbpn leading-[28.35px]">Horario y punto de encuentro</p>
      </div>
    </div>
  );
}

function Strong1() {
  return (
    <div className="absolute font-['Montserrat:Medium',sans-serif] h-[37.59px] left-0 top-[66.78px] w-[279.92px]" data-name="Strong">
      <div className="absolute flex flex-col h-[22px] justify-center left-[126.09px] top-[8px] translate-y-[-50%] w-[154.627px]">
        <p className="css-4hzbpn leading-[21.6px]">os proporcionaremos la</p>
      </div>
      <div className="absolute flex flex-col h-[22px] justify-center left-0 top-[29.59px] translate-y-[-50%] w-[54.616px]">
        <p className="css-4hzbpn leading-[21.6px]">{`entrada `}</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[141.67px] leading-[0] not-italic relative shrink-0 text-[#333] text-[13.5px] tracking-[-0.32px] w-full" data-name="Container">
      <div className="absolute flex flex-col font-['Montserrat:Light',sans-serif] h-[87px] justify-center left-0 top-[42.39px] translate-y-[-50%] w-[310.865px]">
        <p className="css-4hzbpn leading-[21.6px] mb-0">A la hora indicada debéis presentaros en el</p>
        <p className="css-4hzbpn mb-0">
          <span className="font-['Montserrat:Medium',sans-serif] leading-[21.6px] not-italic">número 56 de la Via del Pozzo delle Cornacchie</span>
          <span className="leading-[21.6px]">.</span>
        </p>
        <p className="css-4hzbpn leading-[21.6px] mb-0">En este lugar, situado a solo 5 minutos a pie del</p>
        <p className="css-4hzbpn leading-[21.6px]">{`Panteón de Agripa, `}</p>
      </div>
      <Strong1 />
      <div className="absolute flex flex-col font-['Montserrat:Light',sans-serif] h-[22px] justify-center left-[54.25px] top-[96.37px] translate-y-[-50%] w-[178.839px]">
        <p className="css-4hzbpn leading-[21.6px]">y con ella podréis dirigiros al</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Light',sans-serif] h-[22px] justify-center left-0 top-[117.97px] translate-y-[-50%] w-[292.064px]">
        <p className="css-4hzbpn leading-[21.6px]">monumento para visitarlo por vuestra cuenta.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[10.4px] items-start px-[10px] relative w-full">
        <Heading1 />
        <Container31 />
        <Container32 />
        <Container33 />
        <Heading2 />
        <Container34 />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f5f4f5] max-w-[360px] relative shrink-0 w-full z-[1]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[28.13px] pt-[24.42px] px-[11.25px] relative w-full">
        <Container35 />
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[25px] pt-px relative shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-b border-solid border-t inset-0 pointer-events-none" />
      <Link7 />
      <Background2 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[9px] relative w-[15.56px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.56 9">
        <g id="Icon">
          <path d={svgPaths.p52276f0} fill="var(--fill-0, #CCCCCC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-[334.69px] pt-[15px] top-0 w-[8.44px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[11.25px] pr-[22.5px] relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:ExtraLight',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[13.5px] tracking-[-0.32px] uppercase">
          <p className="css-ew64yg leading-[40.5px]">Detalles</p>
        </div>
        <Container36 />
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-b border-solid border-t inset-0 pointer-events-none" />
      <Link8 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[9px] relative w-[15.56px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.56 9">
        <g id="Icon">
          <path d={svgPaths.p52276f0} fill="var(--fill-0, #CCCCCC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-[334.69px] pt-[15px] top-0 w-[8.44px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[11.25px] pr-[22.5px] relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:ExtraLight',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[13.5px] tracking-[-0.32px] uppercase">
          <p className="css-ew64yg leading-[40.5px]">Cancelaciones</p>
        </div>
        <Container37 />
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-b border-solid border-t inset-0 pointer-events-none" />
      <Link9 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[9px] relative w-[15.56px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.56 9">
        <g id="Icon">
          <path d={svgPaths.p52276f0} fill="var(--fill-0, #CCCCCC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-[334.69px] pt-[15px] top-0 w-[8.44px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[11.25px] pr-[22.5px] relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:ExtraLight',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[13.5px] tracking-[-0.32px] uppercase">
          <p className="css-ew64yg leading-[40.5px]">Punto de encuentro</p>
        </div>
        <Container38 />
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-b border-solid border-t inset-0 pointer-events-none" />
      <Link10 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[9px] relative w-[15.56px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.56 9">
        <g id="Icon">
          <path d={svgPaths.p52276f0} fill="var(--fill-0, #CCCCCC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-[334.69px] pt-[15px] top-0 w-[8.44px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[11.25px] pr-[22.5px] relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Montserrat:ExtraLight',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[13.5px] tracking-[-0.32px] uppercase">
          <p className="css-ew64yg leading-[40.5px]">Opiniones</p>
        </div>
        <Container39 />
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex flex-col items-start overflow-clip py-px relative rounded-[inherit] w-full">
        <Link11 />
      </div>
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-b border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[360px] overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="List">
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Nav">
      <List1 />
    </div>
  );
}

function Container40({ ctaRef, onNavigateToCalendar, onNavigateToDateTime, persistedSelectedDay }: { ctaRef?: RefObject<HTMLDivElement>; onNavigateToCalendar?: (day?: number) => void; onNavigateToDateTime?: (day: number) => void; persistedSelectedDay?: number }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <HorizontalBorder />
        <DispoRapidaMarketplace ctaRef={ctaRef} onNavigateToCalendar={onNavigateToCalendar} onNavigateToDateTime={onNavigateToDateTime} persistedSelectedDay={persistedSelectedDay} />
        <Nav />
      </div>
    </div>
  );
}

function Section2({ ctaRef, onNavigateToCalendar, onNavigateToDateTime, persistedSelectedDay }: { ctaRef?: RefObject<HTMLDivElement>; onNavigateToCalendar?: (day?: number) => void; onNavigateToDateTime?: (day: number) => void; persistedSelectedDay?: number }) {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[390.2px_0_0_0] items-start max-w-[360px] pt-px" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#cfcfcf] border-solid border-t inset-0 pointer-events-none" />
      <Container40 ctaRef={ctaRef} onNavigateToCalendar={onNavigateToCalendar} onNavigateToDateTime={onNavigateToDateTime} persistedSelectedDay={persistedSelectedDay} />
    </div>
  );
}

function Article({ ctaRef, onNavigateToCalendar, onNavigateToDateTime, persistedSelectedDay }: { ctaRef?: RefObject<HTMLDivElement>; onNavigateToCalendar?: (day?: number) => void; onNavigateToDateTime?: (day: number) => void; persistedSelectedDay?: number }) {
  return (
    <div className="h-[1477.83px] relative shrink-0 w-full" data-name="Article">
      <div className="absolute inset-[236.25px_0_1241.57px_0]" data-name="Rectangle" />
      <div className="absolute inset-[236.25px_0_1241.57px_0]" data-name="Rectangle" />
      <Header1 />
      <Section />
      <Section1 />
      <Section2 ctaRef={ctaRef} onNavigateToCalendar={onNavigateToCalendar} onNavigateToDateTime={onNavigateToDateTime} persistedSelectedDay={persistedSelectedDay} />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.78px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[15.2px] tracking-[-0.32px] w-full">
        <p className="css-4hzbpn leading-[22.78px]">Top 10 actividades en Roma</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d3074c] text-[11.3px] tracking-[-0.32px] w-full">
        <p className="css-4hzbpn leading-[16.88px]">Visita guiada por el Coliseo, Foro y Palatino</p>
      </div>
    </div>
  );
}

function LinkMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link:margin">
      <div className="content-stretch flex flex-col items-start pb-[11.25px] pr-[2.813px] relative w-full">
        <Link12 />
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d3074c] text-[11.3px] tracking-[-0.32px] w-full">
        <p className="css-4hzbpn leading-[16.88px]">Visita guiada por los Museos Vaticanos y la Capilla Sixtina</p>
      </div>
    </div>
  );
}

function LinkMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link:margin">
      <div className="content-stretch flex flex-col items-start pb-[11.25px] pr-[2.813px] relative w-full">
        <Link13 />
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d3074c] text-[11.3px] tracking-[-0.32px] w-full">
        <p className="css-4hzbpn leading-[16.88px]">Free tour por Roma</p>
      </div>
    </div>
  );
}

function LinkMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link:margin">
      <div className="content-stretch flex flex-col items-start pb-[11.25px] pr-[2.813px] relative w-full">
        <Link14 />
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[2.81px] top-[-0.56px]" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[16.88px] not-italic relative shrink-0 text-[#d3074c] text-[11.3px] tracking-[-0.32px]">
        <p className="css-ew64yg mb-0">{`Tour por el Castillo de Sant'Angelo con entradas y subida a la`}</p>
        <p className="css-ew64yg">terraza</p>
      </div>
    </div>
  );
}

function LinkMargin6() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Link:margin">
      <Link15 />
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d3074c] text-[11.3px] tracking-[-0.32px] w-full">
        <p className="css-4hzbpn leading-[16.88px]">Coliseo, Foro y Palatino + Arena de gladiadores</p>
      </div>
    </div>
  );
}

function LinkMargin7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link:margin">
      <div className="content-stretch flex flex-col items-start pb-[11.25px] pr-[2.813px] relative w-full">
        <Link16 />
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d3074c] text-[11.3px] tracking-[-0.32px] w-full">
        <p className="css-4hzbpn leading-[16.88px]">Visita Basílica San Pedro</p>
      </div>
    </div>
  );
}

function LinkMargin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link:margin">
      <div className="content-stretch flex flex-col items-start pb-[11.25px] pr-[2.813px] relative w-full">
        <Link17 />
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d3074c] text-[11.3px] tracking-[-0.32px] w-full">
        <p className="css-4hzbpn leading-[16.88px]">Tour por la Capilla Sixtina y Museos Vaticanos a primera hora</p>
      </div>
    </div>
  );
}

function LinkMargin9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link:margin">
      <div className="content-stretch flex flex-col items-start pb-[11.25px] pr-[2.813px] relative w-full">
        <Link18 />
      </div>
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d3074c] text-[11.3px] tracking-[-0.32px] w-full">
        <p className="css-4hzbpn leading-[16.88px]">Excursión a Florencia y Pisa</p>
      </div>
    </div>
  );
}

function LinkMargin10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link:margin">
      <div className="content-stretch flex flex-col items-start pb-[11.25px] pr-[2.813px] relative w-full">
        <Link19 />
      </div>
    </div>
  );
}

function Link20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d3074c] text-[11.3px] tracking-[-0.32px] w-full">
        <p className="css-4hzbpn leading-[16.88px]">Excursión a Nápoles y Pompeya en tren de alta velocidad</p>
      </div>
    </div>
  );
}

function LinkMargin11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link:margin">
      <div className="content-stretch flex flex-col items-start pb-[11.25px] pr-[2.813px] relative w-full">
        <Link20 />
      </div>
    </div>
  );
}

function Link21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d3074c] text-[11.3px] tracking-[-0.32px] w-full">
        <p className="css-4hzbpn leading-[16.88px]">Excursión Pompeya y Sorrento</p>
      </div>
    </div>
  );
}

function LinkMargin12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link:margin">
      <div className="content-stretch flex flex-col items-start pb-[11.25px] pr-[2.813px] relative w-full">
        <Link21 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <LinkMargin3 />
      <LinkMargin4 />
      <LinkMargin5 />
      <LinkMargin6 />
      <LinkMargin7 />
      <LinkMargin8 />
      <LinkMargin9 />
      <LinkMargin10 />
      <LinkMargin11 />
      <LinkMargin12 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[13.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#f5f4f5] relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pb-[36px] pl-[11.25px] pt-[23.75px] relative w-full">
        <Container43 />
      </div>
    </div>
  );
}

function Main({ ctaRef, onNavigateToCalendar, onNavigateToDateTime, persistedSelectedDay }: { ctaRef?: RefObject<HTMLDivElement>; onNavigateToCalendar?: (day?: number) => void; onNavigateToDateTime?: (day: number) => void; persistedSelectedDay?: number }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Main">
      <Article ctaRef={ctaRef} onNavigateToCalendar={onNavigateToCalendar} onNavigateToDateTime={onNavigateToDateTime} persistedSelectedDay={persistedSelectedDay} />
      <Section3 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[18.99px] relative w-[18.87px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.87 18.9899">
        <g id="Icon">
          <path d={svgPaths.p8ff1100} fill="var(--fill-0, #999999)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col h-[43.19px] items-start pb-[12.19px] pt-[12px] relative w-[18.88px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[18.99px] relative w-[18.87px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.87 18.9899">
        <g id="Icon">
          <path d={svgPaths.p8ff1100} fill="var(--fill-0, #999999)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col h-[43.19px] items-start opacity-0 pb-[12.19px] pt-[12px] relative w-[18.88px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="Container">
      <div className="absolute flex h-[18.88px] items-center justify-center left-[293.72px] top-[13.17px] w-[43.19px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Container44 />
        </div>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[19.2px] tracking-[-0.32px]">
        <p className="css-ew64yg leading-[43.2px]">Civitatis</p>
      </div>
      <div className="absolute flex h-[18.88px] items-center justify-center left-[293.71px] top-[13.16px] w-[43.19px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-90deg]">
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="h-[44.2px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#707070] border-b border-solid inset-0 pointer-events-none" />
      <Container46 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[18.99px] relative w-[18.87px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.87 18.9899">
        <g id="Icon">
          <path d={svgPaths.p8ff1100} fill="var(--fill-0, #999999)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col h-[43.19px] items-start pb-[12.19px] pt-[12px] relative w-[18.88px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon11 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[18.99px] relative w-[18.87px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.87 18.9899">
        <g id="Icon">
          <path d={svgPaths.p8ff1100} fill="var(--fill-0, #999999)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col h-[43.19px] items-start opacity-0 pb-[12.19px] pt-[12px] relative w-[18.88px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon12 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="Container">
      <div className="absolute flex h-[18.88px] items-center justify-center left-[293.72px] top-[13.16px] w-[43.19px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Container47 />
        </div>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[19.2px] tracking-[-0.32px]">
        <p className="css-ew64yg leading-[43.2px]">Inspiración</p>
      </div>
      <div className="absolute flex h-[18.88px] items-center justify-center left-[293.71px] top-[13.15px] w-[43.19px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-90deg]">
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="h-[44.2px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#707070] border-b border-solid inset-0 pointer-events-none" />
      <Container49 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[19px] relative w-[18.88px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.88 19">
        <g id="Icon">
          <path d={svgPaths.p322b6040} fill="var(--fill-0, #999999)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col h-[43.19px] items-start pb-[12.19px] pt-[12px] relative w-[18.88px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon13 />
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[19px] relative w-[18.88px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.88 19">
        <g id="Icon">
          <path d={svgPaths.p322b6040} fill="var(--fill-0, #999999)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col h-[43.19px] items-start opacity-0 pb-[12.19px] pt-[12px] relative w-[18.88px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon14 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="Container">
      <div className="absolute flex h-[18.88px] items-center justify-center left-[293.72px] top-[13.16px] w-[43.19px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Container50 />
        </div>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[19.2px] tracking-[-0.32px]">
        <p className="css-ew64yg leading-[43.2px]">Trabaja con nosotros</p>
      </div>
      <div className="absolute flex h-[18.88px] items-center justify-center left-[293.71px] top-[13.16px] w-[43.19px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-90deg]">
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="h-[44.2px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#707070] border-b border-solid inset-0 pointer-events-none" />
      <Container52 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[18.99px] relative w-[18.87px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.87 18.9899">
        <g id="Icon">
          <path d={svgPaths.p8ff1100} fill="var(--fill-0, #999999)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col h-[43.19px] items-start left-[305.88px] pb-[12.19px] pt-[12px] top-0 w-[18.88px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon15 />
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[45.2px] relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] h-[44px] justify-center leading-[0] left-0 not-italic text-[#ccc] text-[19.2px] top-[21px] tracking-[-0.32px] translate-y-[-50%] w-[67.433px]">
        <p className="css-4hzbpn leading-[43.2px]">{`Ayuda `}</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Regular',sans-serif] h-[44px] justify-center leading-[0] left-[67.13px] not-italic text-[#ccc] text-[14.4px] top-[23px] tracking-[-0.32px] translate-y-[-50%] w-[121.408px]">
        <p className="css-4hzbpn leading-[43.2px]">Disponibles 24 / 7</p>
      </div>
      <Container53 />
    </div>
  );
}

function Link22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container54 />
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#707070] border-b border-solid inset-0 pointer-events-none" />
      <Link22 />
    </div>
  );
}

function Strong2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Strong">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[19.2px] text-white tracking-[-0.32px]">
        <p className="css-ew64yg leading-[normal]">9,1/10</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[23.05px] left-0 overflow-clip right-[8%] top-px" data-name="Container">
      <div className="absolute flex flex-col font-['Montserrat:Light','Noto_Sans:Light',sans-serif] h-[24px] justify-center leading-[0] left-0 text-[#ffd700] text-[23px] top-[11px] tracking-[-0.32px] translate-y-[-50%] w-[113.76px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        <p className="css-4hzbpn leading-[23.04px]">★★★★★</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[113.55999755859375px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light','Noto_Sans:Light',sans-serif] justify-center leading-[0] max-h-[23.040000915527344px] overflow-hidden relative shrink-0 text-[#808080] text-[23px] text-ellipsis tracking-[-0.32px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        <p className="css-ew64yg leading-[23px]">★★★★★</p>
      </div>
      <Container55 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end min-h-px min-w-px relative" data-name="Container">
      <Strong2 />
      <Margin6 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[11.25px] relative shrink-0" data-name="Container">
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
      <Container58 />
    </div>
  );
}

function Link23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-white tracking-[-0.32px]">
        <p className="css-ew64yg leading-[17.28px]">opiniones de Civitatis</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[14.4px] tracking-[-0.32px]">
        <p className="css-ew64yg leading-[17.28px]">{`+5.000.000 `}</p>
      </div>
      <Link23 />
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.25px] items-start relative w-full">
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.36px] pt-[15.36px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#707070] border-b border-solid inset-0 pointer-events-none" />
      <Container61 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[30px] relative w-[29.69px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.69 30">
        <g id="Icon">
          <path d={svgPaths.p1c1cbd70} fill="var(--fill-0, #3B5998)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-white relative rounded-[14.5px] shrink-0 size-[29px]" data-name="Background">
      <div className="absolute flex h-[30px] items-center justify-center left-0 top-0 w-[29.69px]">
        <div className="flex-none scale-y-[-100%]">
          <Icon16 />
        </div>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col h-[29px] items-center relative shrink-0" data-name="Item">
      <Background3 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[13.989px] relative w-[13.18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.18 13.9894">
        <g id="Icon">
          <path d={svgPaths.p29636c00} fill="var(--fill-0, #1C1A1A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pb-[8.25px] pt-[6.75px] relative rounded-[14.5px] shrink-0 w-[29px]" data-name="Background">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon17 />
        </div>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col h-[29px] items-center relative shrink-0" data-name="Item">
      <Background4 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[30px] relative w-[29.69px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.69 30">
        <g id="Icon">
          <path d={svgPaths.p11fef5f1} fill="var(--fill-0, #1276A8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-white relative rounded-[14.5px] shrink-0 size-[29px]" data-name="Background">
      <div className="absolute flex h-[30px] items-center justify-center left-0 top-0 w-[29.69px]">
        <div className="flex-none scale-y-[-100%]">
          <Icon18 />
        </div>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col h-[29px] items-center relative shrink-0" data-name="Item">
      <Background5 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[30px] relative w-[29.69px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.69 30">
        <g id="Icon">
          <path d={svgPaths.p24ef6680} fill="var(--fill-0, #CD307F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-white relative rounded-[14.5px] shrink-0 size-[29px]" data-name="Background">
      <div className="absolute flex h-[30px] items-center justify-center left-0 top-0 w-[29.69px]">
        <div className="flex-none scale-y-[-100%]">
          <Icon19 />
        </div>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col h-[29px] items-center relative shrink-0" data-name="Item">
      <Background6 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[20px] relative w-[15.8px]" data-name="Icon">
      <div className="absolute inset-[0_-0.12%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8192 20">
          <g id="Icon">
            <path d={svgPaths.p38369500} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#c4302b] content-stretch flex items-start pb-[5px] pl-[6.59px] pr-[6.61px] pt-[4px] relative rounded-[14.5px] shrink-0 w-[29px]" data-name="Background">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon20 />
        </div>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col h-[29px] items-center relative shrink-0" data-name="Item">
      <Background7 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[20px] relative w-[16.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8 20">
        <g id="Icon">
          <path d={svgPaths.p20ac7680} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#c4302b] content-stretch flex items-start pb-[5px] pl-[6.09px] pr-[6.11px] pt-[4px] relative rounded-[14.5px] shrink-0 w-[29px]" data-name="Background">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon21 />
        </div>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col h-[29px] items-center relative shrink-0" data-name="Item">
      <Background8 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[30px] relative w-[29.69px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.69 30">
        <g id="Icon">
          <path d={svgPaths.p186d600} fill="var(--fill-0, #C4302B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-white relative rounded-[14.5px] shrink-0 size-[29px]" data-name="Background">
      <div className="absolute flex h-[30px] items-center justify-center left-0 top-0 w-[29.69px]">
        <div className="flex-none scale-y-[-100%]">
          <Icon22 />
        </div>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex flex-col h-[29px] items-center relative shrink-0" data-name="Item">
      <Background9 />
    </div>
  );
}

function List2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[19px] items-start px-[9.5px] relative w-full">
        <Item7 />
        <Item8 />
        <Item9 />
        <Item10 />
        <Item11 />
        <Item12 />
        <Item13 />
      </div>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.36px] pt-[15.36px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#707070] border-b border-solid inset-0 pointer-events-none" />
      <List2 />
    </div>
  );
}

function AppStoreSvg() {
  return (
    <div className="h-[21.11px] relative shrink-0 w-[17.764px]" data-name="app-store.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7639 21.11">
        <g clipPath="url(#clip0_1_5318)" id="app-store.svg">
          <path d={svgPaths.p14ac1900} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_5318">
            <rect fill="white" height="21.11" width="17.7639" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AppStoreSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[21.11px] items-center justify-center overflow-clip relative shrink-0 w-[17.75px]" data-name="app-store.svg fill">
      <AppStoreSvg />
    </div>
  );
}

function AppStore() {
  return (
    <div className="aspect-[17.75/21.110000610351562] content-stretch flex items-start overflow-clip relative shrink-0" data-name="app-store">
      <AppStoreSvgFill />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pr-[11.52px] relative shrink-0" data-name="Container">
      <AppStore />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] mr-[-0.01px] not-italic pb-[2.51px] relative shrink-0 text-white tracking-[-0.32px]" data-name="Paragraph">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center mb-[-0.05px] relative shrink-0 text-[8.6px] uppercase">
        <p className="css-ew64yg leading-[12.96px]">Disponible en</p>
      </div>
      <div className="capitalize css-g0mm18 flex flex-col font-['Montserrat:Bold',sans-serif] justify-center mb-[-0.05px] relative shrink-0 text-[14.4px]">
        <p className="css-ew64yg leading-[12.96px]">App Store</p>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#212020] content-stretch flex h-[42.06px] items-center justify-center pr-[0.01px] py-[3.75px] relative rounded-[5.76px] shrink-0 w-full" data-name="Background">
      <Container62 />
      <Paragraph />
    </div>
  );
}

function Margin7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[11.25px] relative size-full">
          <Background10 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_0.01%_0_-0.01%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9419 21.1103">
        <g id="Group">
          <path d={svgPaths.p2ac8b600} fill="url(#paint0_linear_1_5308)" id="Trazado 15994" />
          <path d={svgPaths.pb1f2580} fill="url(#paint1_linear_1_5308)" id="Trazado 15995" />
          <path d={svgPaths.p3e70aec4} fill="url(#paint2_linear_1_5308)" id="Trazado 15996" />
          <path d={svgPaths.p33039080} fill="url(#paint3_linear_1_5308)" id="Trazado 15997" />
          <path d={svgPaths.p9ff4300} fill="var(--fill-0, black)" id="Trazado 15998" opacity="0.2" />
          <path d={svgPaths.p12ded080} fill="var(--fill-0, black)" id="Trazado 15999" opacity="0.12" />
          <path d={svgPaths.paa61780} fill="var(--fill-0, black)" id="Trazado 16000" opacity="0.12" />
          <path d={svgPaths.p9c0e700} fill="var(--fill-0, white)" id="Trazado 16001" opacity="0.25" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_5308" x1="9.7073" x2="-6.56076" y1="136.259" y2="131.929">
            <stop stopColor="#00A0FF" />
            <stop offset="0.01" stopColor="#00A1FF" />
            <stop offset="0.26" stopColor="#00BEFF" />
            <stop offset="0.51" stopColor="#00D2FF" />
            <stop offset="0.76" stopColor="#00DFFF" />
            <stop offset="1" stopColor="#00E3FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_5308" x1="19.5752" x2="-0.264571" y1="127.008" y2="127.008">
            <stop stopColor="#FFE000" />
            <stop offset="0.41" stopColor="#FFBD00" />
            <stop offset="0.78" stopColor="#FFA500" />
            <stop offset="1" stopColor="#FF9C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_5308" x1="12.1964" x2="-0.900664" y1="125.146" y2="103.158">
            <stop stopColor="#FF3A44" />
            <stop offset="1" stopColor="#C31162" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_5308" x1="-2.18476" x2="3.65451" y1="143.283" y2="133.462">
            <stop stopColor="#32A071" />
            <stop offset="0.07" stopColor="#2DA771" />
            <stop offset="0.48" stopColor="#15CF74" />
            <stop offset="0.8" stopColor="#06E775" />
            <stop offset="1" stopColor="#00F076" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function GooglePlaySvg() {
  return (
    <div className="h-[21.11px] overflow-clip relative shrink-0 w-[18.942px]" data-name="google-play.svg">
      <Group />
    </div>
  );
}

function GooglePlaySvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[21.11px] items-center justify-center overflow-clip relative shrink-0 w-[18.94px]" data-name="google-play.svg fill">
      <GooglePlaySvg />
    </div>
  );
}

function GooglePlay() {
  return (
    <div className="aspect-[18.940000534057617/21.110000610351562] content-stretch flex items-start overflow-clip relative shrink-0" data-name="google-play">
      <GooglePlaySvgFill />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[11.51px] relative shrink-0" data-name="Container">
      <GooglePlay />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic pb-[1.14px] relative shrink-0 text-white tracking-[-0.32px]" data-name="Paragraph">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center mb-[-0.54px] relative shrink-0 text-[8.6px] uppercase">
        <p className="css-ew64yg leading-[12.96px]">Disponible en</p>
      </div>
      <div className="capitalize css-g0mm18 flex flex-col font-['Montserrat:Bold',sans-serif] justify-center mb-[-0.54px] relative shrink-0 text-[14.4px]">
        <p className="css-ew64yg leading-[21.6px]">Google Play</p>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#212020] content-stretch flex gap-[0.01px] h-[42.06px] items-center justify-center py-[3.75px] relative rounded-[5.76px] shrink-0 w-full" data-name="Background">
      <Container63 />
      <Paragraph1 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[11.25px] relative size-full">
          <Background11 />
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative w-full">
        <Margin7 />
        <Margin8 />
      </div>
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.36px] pt-[15.36px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#707070] border-b border-solid inset-0 pointer-events-none" />
      <Container64 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 40">
        <g id="frame">
          <path d={svgPaths.p7f23100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p6eb4660} id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[10%_11.21%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.545 32">
        <g id="Group">
          <path d="M46.545 0H0V32H46.545V0Z" fill="var(--fill-0, #FF0000)" id="frame" opacity="0" />
          <g id="Visa">
            <path d={svgPaths.p30e5a580} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p663a000} fill="var(--fill-0, #FEA200)" id="Vector_2" />
            <path d={svgPaths.p221ef180} fill="var(--fill-0, #002463)" id="fringe" />
            <path d={svgPaths.p2ee7a900} fill="var(--fill-0, #002463)" id="VIsa" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function VisaSvg() {
  return (
    <div className="absolute h-[40px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[60px]" data-name="visa.svg">
      <Group3 />
    </div>
  );
}

function VisaSvgFill() {
  return (
    <div className="h-[25.19px] overflow-clip relative shrink-0 w-[37.78px]" data-name="visa.svg fill">
      <VisaSvg />
    </div>
  );
}

function Visa() {
  return (
    <div className="content-stretch flex items-start max-h-[25.200000762939453px] max-w-[44px] overflow-clip relative rounded-[3.84px] shrink-0" data-name="visa">
      <VisaSvgFill />
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[1.27px] relative self-stretch shrink-0" data-name="Item">
      <Visa />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 40">
        <g id="frame">
          <path d={svgPaths.p7f23100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p6eb4660} id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[10%_16.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.0005 32">
        <g id="Group">
          <path d="M40 0H0V32H40V0Z" fill="var(--fill-0, #BA0000)" id="frame" opacity="0" />
          <g id="Mastercard con texto">
            <path clipRule="evenodd" d={svgPaths.p13f95000} fill="var(--fill-0, black)" fillRule="evenodd" id="Mastercard" />
            <g id="Group_2">
              <path clipRule="evenodd" d={svgPaths.p3b329780} fill="var(--fill-0, #FF5F00)" fillRule="evenodd" id="Vector" />
              <path clipRule="evenodd" d={svgPaths.pdc13e00} fill="var(--fill-0, #EB001B)" fillRule="evenodd" id="Vector_2" />
              <path clipRule="evenodd" d={svgPaths.p21a91a00} fill="var(--fill-0, #F79E1B)" fillRule="evenodd" id="Vector_3" />
              <path clipRule="evenodd" d={svgPaths.p23257800} fill="var(--fill-0, #F79E1B)" fillRule="evenodd" id="Vector_4" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group4 />
      <Group5 />
    </div>
  );
}

function McSvg() {
  return (
    <div className="absolute h-[40px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[60px]" data-name="mc.svg">
      <Group6 />
    </div>
  );
}

function McSvgFill() {
  return (
    <div className="h-[25.19px] overflow-clip relative shrink-0 w-[37.78px]" data-name="mc.svg fill">
      <McSvg />
    </div>
  );
}

function MasterCard() {
  return (
    <div className="content-stretch flex items-start max-h-[25.200000762939453px] max-w-[44px] overflow-clip relative rounded-[3.84px] shrink-0" data-name="master card">
      <McSvgFill />
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[1.27px] relative self-stretch shrink-0" data-name="Item">
      <MasterCard />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 40">
        <g id="frame">
          <path d={svgPaths.p7f23100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p6eb4660} id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[10%_23.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <path d="M32 0H-1.45053e-07V32H32V0Z" fill="var(--fill-0, #FF0000)" id="frame" opacity="0" />
          <g id="PayPal">
            <path d={svgPaths.p2c03d680} fill="var(--fill-0, #008AD8)" id="Vector" />
            <path d={svgPaths.p20c13400} fill="var(--fill-0, #002575)" id="Vector_2" />
            <g id="Group_2">
              <path d={svgPaths.pc2d21b0} fill="var(--fill-0, #008AD8)" id="Vector_3" />
              <path d={svgPaths.pd0b6f80} fill="var(--fill-0, #001A57)" id="trazado" />
              <path d={svgPaths.p3f42e300} fill="var(--fill-0, #002575)" id="trazado_2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group7 />
      <Group8 />
    </div>
  );
}

function PaypalSvg() {
  return (
    <div className="absolute h-[40px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[60px]" data-name="paypal.svg">
      <Group9 />
    </div>
  );
}

function PaypalSvgFill() {
  return (
    <div className="h-[25.19px] overflow-clip relative shrink-0 w-[37.78px]" data-name="paypal.svg fill">
      <PaypalSvg />
    </div>
  );
}

function Paypal() {
  return (
    <div className="content-stretch flex items-start max-h-[25.200000762939453px] max-w-[44px] overflow-clip relative rounded-[3.84px] shrink-0" data-name="paypal">
      <PaypalSvgFill />
    </div>
  );
}

function Item16() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[1.27px] relative self-stretch shrink-0" data-name="Item">
      <Paypal />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 40">
        <g id="frame">
          <path d={svgPaths.p7f23100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p6eb4660} id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[11%_6.65%_11%_6.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.0108 31.2">
        <g id="Group">
          <path d="M52 0H0V31.2H52V0Z" fill="var(--fill-0, #FF0000)" id="frame" opacity="0" />
          <g id="Group_2">
            <path d={svgPaths.p4ad3900} fill="var(--fill-0, #4A4A4A)" id="Vector" />
            <g id="Group_3">
              <path clipRule="evenodd" d={svgPaths.p1d24dc00} fill="var(--fill-0, #004A98)" fillRule="evenodd" id="Vector_2" />
              <path clipRule="evenodd" d={svgPaths.p7568400} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" id="Vector_3" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function DinersClub() {
  return (
    <div className="absolute contents inset-0" data-name="Diners Club">
      <Group10 />
      <Group11 />
    </div>
  );
}

function DinersSvg() {
  return (
    <div className="absolute h-[40px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[60px]" data-name="diners.svg">
      <DinersClub />
    </div>
  );
}

function DinersSvgFill() {
  return (
    <div className="h-[25.19px] overflow-clip relative shrink-0 w-[37.78px]" data-name="diners.svg fill">
      <DinersSvg />
    </div>
  );
}

function DinerClub() {
  return (
    <div className="content-stretch flex items-start max-h-[25.200000762939453px] max-w-[44px] overflow-clip relative rounded-[3.84px] shrink-0" data-name="diner club">
      <DinersSvgFill />
    </div>
  );
}

function Item17() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[1.27px] relative self-stretch shrink-0" data-name="Item">
      <DinerClub />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 40">
        <g id="frame">
          <path d={svgPaths.p7f23100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p6eb4660} id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[10%_11.9%_10%_11.91%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.714 32">
        <g id="Group">
          <path d={svgPaths.p17842340} fill="var(--fill-0, #FF0000)" id="frame" opacity="0" />
          <g id="Group_2">
            <path d={svgPaths.p3eb65500} fill="var(--fill-0, #006FCF)" id="Vector" />
            <g id="American Express">
              <path d={svgPaths.p1d173980} fill="var(--fill-0, white)" id="Trazado 15764" />
              <path d={svgPaths.p2a893280} fill="var(--fill-0, #006FCF)" id="Trazado 15765" />
              <path d={svgPaths.p2b1db8c0} fill="var(--fill-0, #006FCF)" id="Trazado 15766" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function AmericanExpress() {
  return (
    <div className="absolute contents inset-0" data-name="American Express">
      <Group12 />
      <Group13 />
    </div>
  );
}

function AmexSvg() {
  return (
    <div className="absolute h-[40px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[60px]" data-name="amex.svg">
      <AmericanExpress />
    </div>
  );
}

function AmexSvgFill() {
  return (
    <div className="h-[25.19px] overflow-clip relative shrink-0 w-[37.78px]" data-name="amex.svg fill">
      <AmexSvg />
    </div>
  );
}

function Amex() {
  return (
    <div className="content-stretch flex items-start max-h-[25.200000762939453px] max-w-[44px] overflow-clip relative rounded-[3.84px] shrink-0" data-name="amex">
      <AmexSvgFill />
    </div>
  );
}

function Item18() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[1.27px] relative self-stretch shrink-0" data-name="Item">
      <Amex />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 40">
        <g id="frame">
          <path d={svgPaths.p7f23100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p6eb4660} id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[10%_11.21%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.545 32">
        <g id="Group">
          <path d="M46.545 0H0V32H46.545V0Z" fill="var(--fill-0, #FF0000)" id="frame" opacity="0" />
          <g id="ApplePay">
            <path d={svgPaths.p33147700} fill="var(--fill-0, black)" id="Vector" />
            <path d={svgPaths.p2d9af100} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.pe362780} fill="var(--fill-0, black)" id="Apple Pay" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group14 />
      <Group15 />
    </div>
  );
}

function ApplepaySvg() {
  return (
    <div className="absolute h-[40px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[60px]" data-name="applepay.svg">
      <Group16 />
    </div>
  );
}

function ApplepaySvgFill() {
  return (
    <div className="h-[25.19px] overflow-clip relative shrink-0 w-[37.78px]" data-name="applepay.svg fill">
      <ApplepaySvg />
    </div>
  );
}

function ApplePay() {
  return (
    <div className="content-stretch flex items-start max-h-[25.200000762939453px] max-w-[44px] overflow-clip relative rounded-[3.84px] shrink-0" data-name="apple pay">
      <ApplepaySvgFill />
    </div>
  );
}

function Item19() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[1.27px] relative self-stretch shrink-0" data-name="Item">
      <ApplePay />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 40">
        <g id="frame">
          <path d={svgPaths.p7f23100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p6eb4660} id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[24%_6.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.0005 20.8">
        <g id="Group">
          <path d="M52 0H0V20.8H52V0Z" fill="var(--fill-0, #FF0000)" id="frame" opacity="0" />
          <g id="GPay">
            <path d={svgPaths.pe7d6740} fill="var(--fill-0, #5F6368)" id="Vector" />
            <g id="Group_2">
              <path d={svgPaths.p1102e180} fill="var(--fill-0, #4285F4)" id="Vector_2" />
              <path d={svgPaths.p2368800} fill="var(--fill-0, #34A853)" id="Vector_3" />
              <path d={svgPaths.pb019700} fill="var(--fill-0, #FABB05)" id="Vector_4" />
              <path d={svgPaths.p3bd3fa00} fill="var(--fill-0, #E94235)" id="Vector_5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group17 />
      <Group18 />
    </div>
  );
}

function PaywithgoogleSvg() {
  return (
    <div className="absolute h-[40px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[60px]" data-name="paywithgoogle.svg">
      <Group19 />
    </div>
  );
}

function PaywithgoogleSvgFill() {
  return (
    <div className="h-[25.19px] overflow-clip relative shrink-0 w-[37.78px]" data-name="paywithgoogle.svg fill">
      <PaywithgoogleSvg />
    </div>
  );
}

function Gpay() {
  return (
    <div className="content-stretch flex items-start max-h-[25.200000762939453px] max-w-[44px] overflow-clip relative rounded-[3.84px] shrink-0" data-name="Gpay">
      <PaywithgoogleSvgFill />
    </div>
  );
}

function Item20() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[1.27px] relative self-stretch shrink-0" data-name="Item">
      <Gpay />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 40">
        <g id="frame">
          <path d={svgPaths.p7f23100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p6eb4660} id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute inset-[23.71%_6.67%]" data-name="Layer 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 21.034">
        <g id="Layer 1">
          <path d={svgPaths.p183fe800} fill="var(--fill-0, #FFB3C7)" id="RectÃ¡ngulo 2781" />
          <path d={svgPaths.p3ac4ab00} fill="var(--fill-0, black)" id="Trazado 15774" />
          <path d={svgPaths.p2f183580} fill="var(--fill-0, black)" id="RectÃ¡ngulo 2782" />
          <path d={svgPaths.p1a2ca00} fill="var(--fill-0, black)" id="Trazado 15775" />
          <path d={svgPaths.p25b10ef0} fill="var(--fill-0, black)" id="Trazado 15776" />
          <path d={svgPaths.p23702900} fill="var(--fill-0, black)" id="Trazado 15777" />
          <path d={svgPaths.p23de0400} fill="var(--fill-0, black)" id="Trazado 15778" />
          <path d={svgPaths.p10e8a500} fill="var(--fill-0, black)" id="Trazado 15779" />
          <path d={svgPaths.p16324a00} fill="var(--fill-0, black)" id="RectÃ¡ngulo 2783" />
        </g>
      </svg>
    </div>
  );
}

function Klarna() {
  return (
    <div className="absolute contents inset-[23.71%_6.67%]" data-name="Klarna">
      <Layer />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group20 />
      <Klarna />
    </div>
  );
}

function KlarnaSvg() {
  return (
    <div className="absolute h-[40px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[60px]" data-name="klarna.svg">
      <Group21 />
    </div>
  );
}

function KlarnaSvgFill() {
  return (
    <div className="h-[25.19px] overflow-clip relative shrink-0 w-[37.78px]" data-name="klarna.svg fill">
      <KlarnaSvg />
    </div>
  );
}

function Klarna1() {
  return (
    <div className="content-stretch flex items-start max-h-[25.200000762939453px] max-w-[44px] overflow-clip relative rounded-[3.84px] shrink-0" data-name="Klarna">
      <KlarnaSvgFill />
    </div>
  );
}

function Item21() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[1.27px] relative self-stretch shrink-0" data-name="Item">
      <Klarna1 />
    </div>
  );
}

function List3() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex items-start justify-between pr-[0.06px] relative w-full">
        <Item14 />
        <Item15 />
        <Item16 />
        <Item17 />
        <Item18 />
        <Item19 />
        <Item20 />
        <Item21 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start py-[15.36px] relative shrink-0 w-full" data-name="Container">
      <List3 />
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
        <HorizontalBorder1 />
        <HorizontalBorder2 />
        <HorizontalBorder3 />
        <HorizontalBorder4 />
        <HorizontalBorder5 />
        <HorizontalBorder6 />
        <HorizontalBorder7 />
        <Container65 />
      </div>
    </div>
  );
}

function LogoCivitatis1() {
  return (
    <div className="absolute inset-[0_0_0.01%_0]" data-name="Logo Civitatis">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107.999 23.8328">
        <g id="Logo Civitatis">
          <path d={svgPaths.peb18d00} fill="var(--fill-0, white)" id="Trazado 198" />
          <path d={svgPaths.p2552dd00} fill="var(--fill-0, white)" id="Trazado 199" />
          <path d={svgPaths.p12672e00} fill="var(--fill-0, white)" id="Trazado 200" />
          <path d={svgPaths.p2eb09000} fill="var(--fill-0, white)" id="Trazado 201" />
          <path d={svgPaths.p3634c380} fill="var(--fill-0, white)" id="Trazado 202" />
          <path d={svgPaths.p2acd9500} fill="var(--fill-0, white)" id="Trazado 203" />
          <path d={svgPaths.p628e80} fill="var(--fill-0, white)" id="Trazado 204" />
          <path d={svgPaths.pa21b000} fill="var(--fill-0, white)" id="Trazado 205" />
          <path d={svgPaths.pec5a700} fill="var(--fill-0, white)" id="Trazado 206" />
          <path d={svgPaths.p18560700} fill="var(--fill-0, white)" id="Trazado 207" />
          <path d={svgPaths.p3bc02200} fill="var(--fill-0, white)" id="Trazado 208" />
          <path d={svgPaths.p74f17c0} fill="var(--fill-0, white)" id="Trazado 209" />
        </g>
      </svg>
    </div>
  );
}

function CivitatisSvg() {
  return (
    <div className="h-[23.834px] overflow-clip relative shrink-0 w-[108px]" data-name="civitatis.svg">
      <LogoCivitatis1 />
    </div>
  );
}

function CivitatisSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[23.83px] items-center justify-center overflow-clip relative shrink-0 w-[108px]" data-name="civitatis.svg fill">
      <CivitatisSvg />
    </div>
  );
}

function Civitatis() {
  return (
    <div className="aspect-[108/23.829999923706055] content-stretch flex flex-col items-start max-w-[360px] overflow-clip relative shrink-0" data-name="civitatis">
      <CivitatisSvgFill />
    </div>
  );
}

function Link24() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Link">
      <Civitatis />
    </div>
  );
}

function Container67() {
  return (
    <div className="mb-[-1.01px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[14.063px] pt-[19.688px] px-[11.25px] relative w-full">
        <Link24 />
      </div>
    </div>
  );
}

function Link25() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.64px] relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[10.4px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[16.64px]">Condiciones generales</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col h-[15.38px] items-center relative shrink-0 w-[4.19px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light','Noto_Sans_JP:Light',sans-serif] justify-center leading-[0] relative shrink-0 text-[#999] text-[9px] text-center tracking-[-0.32px]" style={{ fontVariationSettings: "'wght' 300" }}>
        <p className="css-ew64yg leading-[14.4px]">･</p>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col h-[15.38px] items-start px-[2px] relative shrink-0 w-[8.19px]" data-name="Margin">
      <Container68 />
    </div>
  );
}

function Item22() {
  return (
    <div className="content-stretch flex h-[16.64px] items-center pb-px relative shrink-0" data-name="Item">
      <Link25 />
      <Margin9 />
    </div>
  );
}

function Link26() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.64px] relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[10.4px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[16.64px]">Aviso legal</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col h-[15.38px] items-center relative shrink-0 w-[4.19px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light','Noto_Sans_JP:Light',sans-serif] justify-center leading-[0] relative shrink-0 text-[#999] text-[9px] text-center tracking-[-0.32px]" style={{ fontVariationSettings: "'wght' 300" }}>
        <p className="css-ew64yg leading-[14.4px]">･</p>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col h-[15.38px] items-start px-[2px] relative shrink-0 w-[8.19px]" data-name="Margin">
      <Container69 />
    </div>
  );
}

function Item23() {
  return (
    <div className="content-stretch flex h-[16.64px] items-center pb-px relative shrink-0" data-name="Item">
      <Link26 />
      <Margin10 />
    </div>
  );
}

function Link27() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.64px] relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[10.4px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[16.64px]">Política de privacidad</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col h-[15.38px] items-center relative shrink-0 w-[4.19px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light','Noto_Sans_JP:Light',sans-serif] justify-center leading-[0] relative shrink-0 text-[#999] text-[9px] text-center tracking-[-0.32px]" style={{ fontVariationSettings: "'wght' 300" }}>
        <p className="css-ew64yg leading-[14.4px]">･</p>
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col h-[15.38px] items-start px-[2px] relative shrink-0 w-[8.19px]" data-name="Margin">
      <Container70 />
    </div>
  );
}

function Item24() {
  return (
    <div className="content-stretch flex h-[16.64px] items-center pb-px relative shrink-0" data-name="Item">
      <Link27 />
      <Margin11 />
    </div>
  );
}

function Link28() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.64px] relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Montserrat:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccc] text-[10.4px] text-center tracking-[-0.32px]">
        <p className="css-ew64yg leading-[16.64px]">Cookies</p>
      </div>
    </div>
  );
}

function Item25() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Item">
      <Link28 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-end flex flex-wrap gap-0 items-end justify-center relative shrink-0 w-full" data-name="List">
      <Item22 />
      <Item23 />
      <Item24 />
      <div className="flex flex-row items-end self-stretch">
        <Item25 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="mb-[-1.01px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[16px] px-[16px] relative w-full">
        <List4 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.01px] relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Container71 />
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#212020] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background">
      <Container72 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#333] content-stretch flex flex-col gap-[0.01px] items-start left-0 top-[1926.42px] w-[360px]" data-name="Footer">
      <Container66 />
      <Background12 />
    </div>
  );
}

function Container73({ ctaRef, onNavigateToCalendar, onNavigateToDateTime, persistedSelectedDay }: { ctaRef?: RefObject<HTMLDivElement>; onNavigateToCalendar?: (day?: number) => void; onNavigateToDateTime?: (day: number) => void; persistedSelectedDay?: number }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[2488px] items-start left-0 overflow-clip right-0 top-0" data-name="Container">
      <Header />
      <Main ctaRef={ctaRef} onNavigateToCalendar={onNavigateToCalendar} onNavigateToDateTime={onNavigateToDateTime} persistedSelectedDay={persistedSelectedDay} />
      <Footer />
    </div>
  );
}

function Icon23() {
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

function Container74() {
  return (
    <div className="absolute content-stretch flex items-start left-[58.77px] top-[14.97px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon23 />
        </div>
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="absolute bg-[#fee5ee] h-[48.52px] left-0 right-0 rounded-[8px] top-[calc(50%-31.16px)] translate-y-[-50%]" data-name="Background">
      <Container74 />
      <div className="absolute flex flex-col font-['Montserrat:Medium',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+11.6px)] not-italic text-[#d3074c] text-[13.5px] text-center top-[26.97px] tracking-[-0.32px] translate-x-[-50%] translate-y-[-50%] w-[222.434px]">
        <p className="css-4hzbpn leading-[20.25px]">12 reservas en las últimas 24 horas</p>
      </div>
    </div>
  );
}

function Margin12() {
  return <div className="h-[1.125px] mb-[-0.495px] shrink-0 w-full" data-name="Margin" />;
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center leading-[0] not-italic relative shrink-0 tracking-[-0.32px]" data-name="Paragraph">
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[16.9px]">
        <p className="css-ew64yg leading-[16.88px]">{`16,29 `}</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[14.6px]">
        <p className="css-ew64yg leading-[14.63px]">US$</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[0.495px] relative shrink-0" data-name="Container">
      <Margin12 />
      <Paragraph2 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container75 />
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Background">
      <Container76 />
    </div>
  );
}

function Margin13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pl-[4px] right-[248px] top-[70.67px]" data-name="Margin">
      <Background14 />
    </div>
  );
}

function Link29({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[#ea0558] min-w-[166px] relative rounded-[562.5px] shrink-0 w-full cursor-pointer" 
      data-name="Link"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[#ea0558] border-solid inset-[-1px] pointer-events-none rounded-[563.5px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-w-[inherit] pb-[15.81px] pt-[15.5px] px-[8px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16.3px] text-center text-white tracking-[-0.32px]">
            <p className="css-4hzbpn leading-[16.31px]">Ver disponibilidad</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkMargin13({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[112px] min-w-[182px] pl-[9px] pr-[7px] py-[7px] right-0 top-[48.52px]" data-name="Link:margin">
      <Link29 onClick={onClick} />
    </div>
  );
}

export default function PdpPrimerDiaConDisponibilidad({ firstCtaRef, showStickyBar, onNavigateToCalendar, onNavigateToDateTime, persistedSelectedDay }: { firstCtaRef?: RefObject<HTMLDivElement>, showStickyBar?: boolean, onNavigateToCalendar?: (day?: number) => void, onNavigateToDateTime?: (day: number) => void, persistedSelectedDay?: number }) {
  return (
    <div className="relative size-full" data-name="PDP - Primer día con disponibilidad" style={{ backgroundImage: "linear-gradient(90deg, rgb(254, 254, 254) 0%, rgb(254, 254, 254) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container73 ctaRef={firstCtaRef} onNavigateToCalendar={onNavigateToCalendar} onNavigateToDateTime={onNavigateToDateTime} persistedSelectedDay={persistedSelectedDay} />
      <BackgroundSticky show={showStickyBar} onNavigateToDateTime={onNavigateToDateTime} />
    </div>
  );
}