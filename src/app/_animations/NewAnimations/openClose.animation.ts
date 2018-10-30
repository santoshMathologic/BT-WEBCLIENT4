import { trigger, state, style, transition, animate } from '@angular/animations';
export const openClose = trigger('openClose',[
      transition(":enter", [
        style({ opacity: 0 }),
        animate('2000ms', style({ opacity: 1 }))
      ]),
      transition(":leave", [
        animate('2000ms', style({ opacity: 0 }))
      ])
]);