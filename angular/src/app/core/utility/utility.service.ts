import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';
import { MenuItem } from '../../core/index';
import { FormGroup } from '@angular/forms';
interface KeyValuePair {
    key: string;
    value: any;
}
@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    breadCrumb: MenuItem[];
    displayDateinUTC = true; // Global Property to display datetime format in UTC or time zone of User System.
    private holdPageFilterValue: KeyValuePair[] = [];

    constructor() { }

    getBreadCrumbPath(path?: string, id?: string) {
        this.breadCrumb = [];
        this.breadCrumb.push(Constants.breadCrumbUrls.home);
        if (!path) { return this.breadCrumb; }
        switch (path.toLowerCase()) {
            case 'clienthome':
                this.breadCrumb.push(Constants.breadCrumbUrls.clienthome);
                break;
            case 'clientadd':
                this.addUrlsToBreadcrumb(Constants.breadCrumbUrls.clientAdd);
                break;
            case 'clientedit':
                this.addUrlsToBreadcrumb(Constants.breadCrumbUrls.clientEdit);
                break;
            case 'letterhome':
                this.breadCrumb.push(Constants.breadCrumbUrls.letterhome);
                break;
            case 'letteradd':
                this.addUrlsToBreadcrumb(Constants.breadCrumbUrls.letteradd);
                break;
            case 'letteredit':
                this.addUrlsToBreadcrumb(Constants.breadCrumbUrls.letterEdit);
                break;
            case 'user':
                this.breadCrumb.push(Constants.breadCrumbUrls.userManagerHome);
                break;
            case 'useradd':
                this.addUrlsToBreadcrumb(Constants.breadCrumbUrls.userAdd);
                break;
            case 'useredit':
                this.addUrlsToBreadcrumb(Constants.breadCrumbUrls.userEdit);
                break;
            case 'letter-code-manager':
                this.breadCrumb.push(Constants.breadCrumbUrls.letterCodeManager);
                break;
            case 'usersetting':
                this.addUrlsToBreadcrumb(Constants.breadCrumbUrls.userSettings);
                break;
            case 'letter-code-detail':
                this.addUrlsToBreadcrumb(Constants.breadCrumbUrls.letterCodeDetail);
                break;
            case 'letter-asset-manager':
                this.breadCrumb.push(Constants.breadCrumbUrls.letterAssetManager);
                break;
            case 'letter-asset-detail':
                this.addUrlsToBreadcrumb(Constants.breadCrumbUrls.letterAssetDetail);
                break;
            case 'validation-search':
                this.breadCrumb.push(Constants.breadCrumbUrls.validationSearch);
                break;
            case 'proof-profile':
                this.breadCrumb.push(Constants.breadCrumbUrls.proofProfile);
                break;
            case 'proof-profile-add':
                this.addUrlsToBreadcrumb(Constants.breadCrumbUrls.proofProfileAdd);
                break;
            case 'proof-profile-edit':
                this.addUrlsToBreadcrumb(Constants.breadCrumbUrls.proofProfileEdit);
                break;
            case 'proof-profile-copy':
                this.addUrlsToBreadcrumb(Constants.breadCrumbUrls.proofProfileCopy);
                break;
            case 'proof-profile-generate':
                const url = Constants.breadCrumbUrls.proofProfileGenerate;
                const replaceUrl = url[1];
                replaceUrl.routerLink = '/letter/letter-asset/detail/' + id; // Here we are ausing static because we are binding with id.
                this.addUrlsToBreadcrumb(url);
                break;
            case 'failed-records':
                this.breadCrumb.push(Constants.breadCrumbUrls.failedRecords);
                break;
            case 'activity-report':
                this.breadCrumb.push(Constants.breadCrumbUrls.activityReport);
                break;
            case 'held-records':
                this.breadCrumb.push(Constants.breadCrumbUrls.heldRecords);
                break;
            case 'processing-report':
                this.breadCrumb.push(Constants.breadCrumbUrls.processingReport);
                break;
            case 'invoice-report':
                this.breadCrumb.push(Constants.breadCrumbUrls.invoiceReport);
                break;
            case 'email-tracking--report':
                this.breadCrumb.push(Constants.breadCrumbUrls.emailTrackingReport);
                break;
            case 'failedtransaction-report':
                this.breadCrumb.push(Constants.breadCrumbUrls.failedTransactionReport);
                break;
            case 'aging-transaction-report':
                this.breadCrumb.push(Constants.breadCrumbUrls.agingTransactionReport);
                break;
            case 'dripcampaign':
                this.breadCrumb.push(Constants.breadCrumbUrls.dripCampaign);
                break;
            case 'dripcampaign-edit':
                this.addUrlsToBreadcrumb(Constants.breadCrumbUrls.dripCampaignEdit);
                break;
            case 'dripcampaign-add':
                this.addUrlsToBreadcrumb(Constants.breadCrumbUrls.dripCampaignAdd);
                break;
            case 'sent-email-report':
                this.breadCrumb.push(Constants.breadCrumbUrls.sentEmailReport);
                break;
        }

        return this.breadCrumb;
    }

    /**
     * This method will return true or false to display Date Time formart in whole website as UTC or Time Zone of user system.
     * We can access this method in any components and pass as parameter to DateTimeFormat Custom Pipe.
     * Custom pipe is created under core/pipe/dateTimeFormat.Pipe.ts. Below is the interpolation syntax need to use in HTML pages
     * {{ datevalue | dateTimeFormat: displayDateinUTC(passign argument to custom pipe)  }}
     */
    getDateTimeFormat() {
        return this.displayDateinUTC;
    }

    private addUrlsToBreadcrumb(url: any[]) {
        url.forEach(element => {
            this.breadCrumb.push(element);
        });
    }

    setFormGroupUnDirtyAndUnTouched(form: FormGroup) {
        form.markAsDirty({ onlySelf: false });
        form.markAsUntouched();
    }

    setFormGroupDirtyAndTouched(form: FormGroup) {
        form.markAsDirty({ onlySelf: true });
        form.markAllAsTouched();
    }

    /**
     * Setting row filter option to grid
     */
    getRowFilterSetting(): number[] {
        return [10, 20, 30, 50];
    }

    getDefaultRowShow(): any {
        return this.getRowFilterSetting()[0];
    }

    /**
     * Get default page size for Reports
     */
    getDefaultRowShowForRpts(): any {
        return 50;
    }

    /**
     * Getting DelimitedValue
     */
    getDelimitedValueForChip(form: FormGroup, key: string, newValue: string) {
        if (newValue.trim()) {
            const strNewValue = newValue.trim(); // geting new value as string
            const strNewValueToArray = strNewValue.split(/[\s,]+/).join().split(',').map((item) => item.trim()); // converting to array

            if (form.controls[key].value) { // checking value is there or not.

                const previusSelectedValue = []; // creating empty array for stoaring previus selected value

                // tslint:disable-next-line:prefer-for-of
                if (form.controls[key].value.length > 1) { // checking length for if  more than one item

                    // if  more than one item then getiing previus selected item
                    // tslint:disable-next-line:prefer-for-of
                    for (let i = 0; i < form.controls[key].value.length - 1; i++) {

                        previusSelectedValue.push(form.controls[key].value[i]);

                    }
                }
                // here if new value then concating with previus value;
                form.controls[key].setValue(
                    previusSelectedValue.concat(this.trimChipValue(strNewValueToArray)));
            }

        }
    }

    private trimChipValue(value: any): any {
        if (!value) { return value; }
        return value.map(x => x.trim());
    }

    setPageFilterValue(keyName?: string, filterValue?: any) {
        // getting filter value by keyname
        const res = this.holdPageFilterValue.find(x => x.key === keyName);
        // getting index
        const index = this.holdPageFilterValue.indexOf(res);
        // checking if previus with same entity value is there then update other wise push to array
        if (!res) { this.holdPageFilterValue.push({ key: keyName, value: filterValue }); return; }
        this.holdPageFilterValue[index].value = filterValue;

    }

    /**
     * Clearing the array
     */
    clearPageFilterValue(keyName?: string) {

        this.holdPageFilterValue = this.holdPageFilterValue.filter(item => item.key !== keyName);
    }

    /**
     * get array filter value
     */
    getPageFilterValue(keyName?: string) {

        return this.holdPageFilterValue.find(x => x.key === keyName);

    }
}
