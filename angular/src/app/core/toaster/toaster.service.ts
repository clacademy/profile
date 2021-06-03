import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Constants } from '../constants/constants';


export class ToasterObj {
    detail: string;
    severity: string;
    summary: string;
    isClear: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class ToasterService {
    toaster = new Subject<ToasterObj>();
    constructor() { this.message = new ToasterObj(); }
    message: ToasterObj;
    showSuccess(detail?: any) {
        this.message.isClear = false;
        this.message.severity = Constants.common.success; // Don't Change this property value
        this.message.summary = Constants.common.successMessage;
        this.message.detail = detail;
        this.toaster.next(this.message);
    }
    showInfo(detail?: any) {
        this.message.isClear = false;
        this.message.severity = Constants.common.info; // Don't Change this property value
        this.message.summary = Constants.common.infoMessage;
        this.message.detail = detail;
        this.toaster.next(this.message);
    }
    showWarn(detail?: any) {
        this.message.isClear = false;
        this.message.severity = Constants.common.warn; // Don't Change this property value
        this.message.summary = Constants.common.warnMessage;
        this.message.detail = detail;
        this.toaster.next(this.message);
    }

    showError(detail?: any) {
        this.message.isClear = false;
        this.message.severity = Constants.common.error; // Don't Change this property value
        this.message.summary = Constants.common.errorMessage;
        this.message.detail = detail;
        this.toaster.next(this.message);
    }

    clear() {
        this.message.isClear = true;
        this.message.severity = '';
        this.message.summary = '';
        this.message.detail = '';
        this.toaster.next(this.message);
    }


}
