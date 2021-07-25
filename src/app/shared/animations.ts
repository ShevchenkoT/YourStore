import { animate, state, style, transition, trigger } from "@angular/animations"

export const animateSearch = [

  trigger('search', [
    state('start', style({
      width: '60px',
    })),
    state('end', style({ width: '250px' })),
    transition('*<=>*', animate("600ms cubic-bezier(0.175, 0.500, 0.32, 1.275)"))
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
