
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInOutAnimation =
    trigger('fadeInOut', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('500ms', style({ opacity: 1 }))
        ]),
        transition(':leave', [
            animate('500ms', style({ opacity: 0 }))
        ])
    ])