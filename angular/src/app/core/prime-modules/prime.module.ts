import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import * as prime from 'primeng/primeng';
import { ToastModule } from 'primeng/toast';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ProgressSpinnerModule } from 'primeng/ProgressSpinner';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import {ChipsModule} from 'primeng/chips';
import {CheckboxModule} from 'primeng/checkbox';
import {InputSwitchModule} from 'primeng/inputswitch';
import {AccordionModule} from 'primeng/accordion';
import {ChartModule} from 'primeng/chart';
import {TooltipModule} from 'primeng/tooltip';


const PrimeNgModules = [
    BreadcrumbModule,
    ProgressSpinnerModule,
    ToastModule,
    TableModule,
    PaginatorModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    AutoCompleteModule,
    MultiSelectModule,
    CalendarModule,
    ChipsModule,
    CheckboxModule,
    InputSwitchModule,
    AccordionModule,
    ChartModule,
    TooltipModule
  ];

@NgModule({
    imports: PrimeNgModules,
    declarations: [],
    providers: [DynamicDialogRef
    ],
    exports: PrimeNgModules,
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],

})

export class PrimeNgModule { }
