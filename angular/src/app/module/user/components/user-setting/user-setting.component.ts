import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToasterService, UtilityService, EmitService, Constants } from '../../../../core';
import { UserService } from '../../user.service';
import { BaseService } from '../../../../shared/service/base-service/base.service';
import { UserSettingInfo } from '../../../../shared/model/user-profile-Info';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent implements OnInit {

  userSettingForm: FormGroup;
  userSettingInfo: UserSettingInfo;

  constructor(
    private utilityService: UtilityService, // service for common methods(breadcrumb functionality)
    private emitService: EmitService, // This service use transfer data child component to parent component
    private formBuilder: FormBuilder, // create form control and form group instances.
    private userService: UserService,
    private toasterService: ToasterService,
    private baseService: BaseService
  ) {
    this.userSettingInfo = new UserSettingInfo();
  }

  ngOnInit() {
    this.setBreadCrumb();
    const response = this.baseService.getUserPermission().userProfileInfo.userSettingInfo;
    if (response) {
      this.userSettingInfo = response;
      this.formInitialize(); // Initialize form
    }

  }

  /**
   * Setting Breadcrumb value
   */
  private setBreadCrumb() {
    const breadCrumbPath = this.utilityService.getBreadCrumbPath('usersetting');
    this.emitService.breadCrumbChangeEvent(breadCrumbPath);
  }

  /**
   * Initialize reactive forms and validators
   */
  private formInitialize() {
    this.userSettingForm = this.formBuilder.group({
      timeZoneCtrl: ['' + this.userSettingInfo.DisplayTimeZoneInUTC],
      dateFormatCtrl: [this.userSettingInfo.DateFomat],
      isIgnoreEmailNotificationsCtrl: [this.userSettingInfo.IsIgnoreEmailNotificationsBasedOnUserRole],
    });
  }
  get fb() { return this.userSettingForm.controls; }
  public saveUserSettingInfo() {
    this.mapToObject();
    this.userService.saveTimeFormat(this.userSettingInfo).subscribe((res: number) => {
      if (res > 0) {
        this.toasterService.showSuccess(Constants.messages.successfulSavedMessage);
        this.baseService.updatedToken();
      }

    });
  }
  private mapToObject() {
    this.userSettingInfo.DisplayTimeZoneInUTC = this.fb.timeZoneCtrl.value;
    this.userSettingInfo.DateFomat = this.fb.dateFormatCtrl.value;
    this.userSettingInfo.IsIgnoreEmailNotificationsBasedOnUserRole = this.fb.isIgnoreEmailNotificationsCtrl.value;
  }
}
