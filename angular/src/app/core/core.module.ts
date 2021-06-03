import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    SpinnerComponent,
    ToasterComponent,
    PrimeNgModule,
    httpInterceptorProviders,
    MessageService
} from '.';


@NgModule({
    imports: [CommonModule, PrimeNgModule],
    exports: [SpinnerComponent, ToasterComponent],
    declarations: [
        SpinnerComponent,
        ToasterComponent

    ],
    providers: [httpInterceptorProviders, MessageService,
    ],
})
export class CoreModule { }
