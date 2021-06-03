import { Directive, OnInit, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToasterService } from '../toaster/toaster';


@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'input[formTypeValidate]'
})
export class FormTypeValidateDirective implements OnInit, OnDestroy {
    valueSubscription: Subscription;
    constructor(public ngControl: NgControl, private toasterService: ToasterService,) { }

    ngOnInit(): void {
        this.valueSubscription = this.ngControl.control.valueChanges.subscribe(
            value => {
                const newVal = this.transform(value);
                this.ngControl.control.setValue(newVal, { emitEvent: false });

            }
        );
    }
    ngOnDestroy(): void {
        this.valueSubscription.unsubscribe();
    }

    transform(value) {
        let initalValue = value;
        if (!(/[^a-zA-Z0-9-_.]/g).test(initalValue) === false) {
            this.toasterService.clear();
            this.toasterService.showWarn('Only numbers, letters, underscore(_), period(.), and dash(-) are allowed.');
        }

        initalValue = initalValue.replace(/[^a-zA-Z0-9-_.]/g, '');
        return initalValue;
    }
}
