class UserProfileInfo {
    userId: string;
    userName: string;
    email: string;
    roleId: any[];
    roleName: any[];
    userSettingInfo: UserSettingInfo;
    constructor() {
        this.roleId = [];
        this.roleName = [];
    }
}

class UserSettingInfo {
    DisplayTimeZoneInUTC: boolean;
    DateFomat: string;
    IsIgnoreEmailNotificationsBasedOnUserRole: boolean;

    constructor() {
        this.DisplayTimeZoneInUTC = true;
        this.DateFomat = 'MM/dd/yyyy';
        this.IsIgnoreEmailNotificationsBasedOnUserRole = false;
    }

    // The reason for this method is that we can send this parsed data(via JSON.parse()) without removing the methods.
    public Initialize(settings: UserSettingInfo) {
        this.DisplayTimeZoneInUTC = settings.DisplayTimeZoneInUTC;
        this.DateFomat = settings.DateFomat;
        this.IsIgnoreEmailNotificationsBasedOnUserRole = settings.IsIgnoreEmailNotificationsBasedOnUserRole;
    }

    /**
     * Gets the date format based on the settings.
     * This is if you want to display time as well as the date. Use this in angular pipes.
     * Example: {{eh.actionDate | date: usersettingInfo.DisplayFormatWithTime : usersettingInfo.DisplayTimeZone}}
     */
    get DisplayFormatWithTime(): string {
        return this.DateFomat === 'MM/dd/yyyy' ? 'MM/dd/yyyy hh:mm:ss a' : 'dd-MMM-yy hh:mm:ss a';
    }

    /**
     * Gets the date format based on the settings.
     * This is if you want to display only the date.Use this in angular pipes.
     * {{eh.actionDate | date: usersettingInfo.DisplayFormatWithoutTime : usersettingInfo.DisplayTimeZone}}
     */
    get DisplayFormatWithoutTime(): string {
        return this.DateFomat === 'MM/dd/yyyy' ? 'MM/dd/yyyy' : 'dd-MMM-yy';
    }

    /**
     * Gets the Timezone setting. This allows for us to show the dates in UTC or in the local time.
     * Use this in angular pipes.
     * Example: {{eh.actionDate | date: usersettingInfo.DisplayFormatWithoutTime : usersettingInfo.DisplayTimeZone}}
     */
    get DisplayTimeZone(): string {
        return this.DisplayTimeZoneInUTC ? 'UTC' : '';
    }

    /**
     * Gets Date Format for the date picker
     */
    get DatePickerFormat(): string {
        return this.DateFomat === 'MM/dd/yyyy' ? 'mm/dd/yy' : 'dd-M-yy';
    }
}



export { UserProfileInfo, UserSettingInfo };
