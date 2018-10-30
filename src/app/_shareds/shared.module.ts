import { NgModule } from '@angular/core';

import { HiddenDirective } from '../_directives/hidden.directive';
import { NoRecordFoundDirective } from '../_directives/no_records_found.directive';

@NgModule({
    declarations: [
        HiddenDirective,
        NoRecordFoundDirective
    ],
    exports: [
        HiddenDirective,
        NoRecordFoundDirective
    ],
    providers: [

    ],
})
export class SharedModule { }