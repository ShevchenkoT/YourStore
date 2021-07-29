import { animate, keyframes, state, style, transition, trigger } from "@angular/animations"

export const animateSearch = [

  trigger('search', [
    state('start', style({
      width: '60px',
    })),
    state('end', style({ width: '250px' })),
    transition('*<=>*', animate("600ms cubic-bezier(0.175, 0.500, 0.32, 1.2)"))
  ])
]

export const animateBoxButtons = [

  trigger('hidden', [
    state('start', style({
      display: 'none',
      width: '0'
    })),
    state('end', style({
      display: 'flex',
      width: '180px'
    })),
    transition('start <=> end', [
      style({ display: 'flex' }),
      animate(450),
    ]),
    transition('end <=> start', animate(450)),
  ]),


  trigger('rotate', [
    state('start', style({
      transform: 'rotate(0deg)',
    })),
    state('end', style({ transform: 'rotate(90deg)' })),
    transition('start <=> end', animate(450)),
  ])
]

export const animateGetProduct = [
  trigger('getProduct', [
    state('start', style({
      transform: "translateX(0%)",
      opacity: "1"
    })),
    state('right', style({
      transform: "translateX(150%)",
      opacity: "0"
    })),
    state('left', style({
      transform: "translateX(-150%)",
      opacity: "0"
    })),
    transition('* => right', [
      animate(400),
    ]),
    transition('* => left', [
      animate(400),
    ]),
    transition('* => start', animate(200, keyframes([
      style({ transform: "translateX(0%)", offset: 0.1 }),
      style({ opacity: "1", offset: 1 })
    ]))),
  ])
]

export const shakeIt = [
  trigger("shake", [
    state('start', style({
      transform: "translateY(0)"
    })),
    state('shake', style({
      transform: "translateY(0)"
    })),
    transition('start => shake', animate(300, keyframes([
      style({ transform: "translateY(0)", offset: 0 }),
      style({ transform: "translateY(-6px)", offset: 0.2 }),
      style({ transform: "translateY(6px)", offset: 0.4 }),
      style({ transform: "translateY(-4px)", offset: 0.6 }),
      style({ transform: "translateY(4px)", offset: 0.8 }),
      style({ transform: "translateY(0)", offset: 1 }),
    ]))),

  ])
]

