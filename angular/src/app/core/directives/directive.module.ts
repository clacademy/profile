import { NgModule } from '@angular/core';
import { DateTimeFormatPipe } from '../pipe/date-time-format.pipe';
import { DateFormatPipe } from '../pipe/date-format.pipe';
import { TwoDigitDecimaNumberDirective } from './two-digit-decima-number.directive';
import { NumberDirective } from './numbers-only.directive';
import { FormTypeValidateDirective } from './form-type-validate.directive';


@NgModule({
    imports: [],
    exports: [
        DateTimeFormatPipe,
        DateFormatPipe,
        TwoDigitDecimaNumberDirective,
        NumberDirective,
        FormTypeValidateDirective
    ],
    declarations: [
        DateTimeFormatPipe,
        DateFormatPipe,
        TwoDigitDecimaNumberDirective,
        NumberDirective,
        FormTypeValidateDirective
    ],
    providers: [],
})
export class DirectiveModule { }
