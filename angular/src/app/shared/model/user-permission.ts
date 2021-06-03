import { User } from 'oidc-client';
import { UserProfileInfo, UserSettingInfo } from './user-profile-Info';
import { ApplicationUserRole } from '../enums/enum';

export class UserPermission {
    public currentUser: User;
    public userProfileInfo: UserProfileInfo;
    public isSysAdminUser: boolean;
    public isAdminUser: boolean;
    public isBridgetreeUser: boolean;
    public isAsurionUser: boolean;
    public isVisionuser: boolean;
    public isUserAllowedToAddEditClient: boolean;
    public isUserAllowedToAddEditForms: boolean;
    public isUserAllowedToCreateLetterCode: boolean;
    public isUserAllowedToCreateLetterAssets: boolean;
    public isUserAllowedToEditLetterAssetDetails: boolean;
    public isUserAllowedToApproveAssetVariables: boolean;
    public isUserAllowedToOverrideAssertVariables: boolean;
    constructor(user: User) {
        this.userProfileInfo = new UserProfileInfo();
        this.currentUser = user;
        this.assignUserProfileInfo();
        this.setUserPermission();
    }

    assignUserProfileInfo() {
        this.userProfileInfo.email = this.currentUser.profile.emailaddress;
        this.userProfileInfo.userId = this.currentUser.profile.sub;
        this.userProfileInfo.userName = this.currentUser.profile.surname;
        if (this.currentUser.profile.roleId.length === 1) {
            this.userProfileInfo.roleId.push(this.currentUser.profile.roleId);
            this.userProfileInfo.roleName.push(this.currentUser.profile.roleName);
        } else {
            this.userProfileInfo.roleId = this.currentUser.profile.roleId;
            this.userProfileInfo.roleName = this.currentUser.profile.roleName;
        }

        this.userProfileInfo.userSettingInfo = new UserSettingInfo();
        // We initialize it by passing in a parsed object because this parsed object will not have the custom properties.
        this.userProfileInfo.userSettingInfo.Initialize(JSON.parse(this.currentUser.profile.usersetting));
    }

    setUserPermission() {
        this.isSysAdminUser = this.userProfileInfo.roleId.filter(a => a === ApplicationUserRole.SystemAdmin.toString()).length > 0
            ? true : false;
        this.isAdminUser = this.userProfileInfo.roleId.filter(a => a === ApplicationUserRole.Admin.toString()).length > 0 ? true : false;
        this.isBridgetreeUser = this.userProfileInfo.roleId.filter(a => a === ApplicationUserRole.Bridgetreeuser.toString()).length > 0
            ? true : false;
        this.isAsurionUser = this.userProfileInfo.roleId.filter(a => a === ApplicationUserRole.AsurionUser.toString()).length > 0
            ? true : false;
        this.isVisionuser = this.userProfileInfo.roleId.filter(a => a === ApplicationUserRole.VisionUser.toString()).length > 0
            ? true : false;
        // except vision and asurion users other users are allowed to Add/ Edit client
        this.isUserAllowedToAddEditClient = !this.isVisionuser ;

        // except vision and asurion users other users are allowed to Add/ Edit Forms
        this.isUserAllowedToAddEditForms = !this.isVisionuser;

        // System Admin, Admin and Asurion users are allowed to create letter Code
        this.isUserAllowedToCreateLetterCode = this.isSysAdminUser || this.isAdminUser || this.isAsurionUser;

        // System Admin, Admin and vision users are allowed to create letter assets variables
        this.isUserAllowedToCreateLetterAssets = this.isSysAdminUser || this.isAdminUser || this.isVisionuser;

        // System Admin, Admin and Asurion users are allowed to edit letter assets details info
        this.isUserAllowedToEditLetterAssetDetails = this.isSysAdminUser || this.isAdminUser || this.isAsurionUser;

        // System Admin, Admin and Asurion users are allowed to Approve letter assets variables
        this.isUserAllowedToApproveAssetVariables = this.isSysAdminUser || this.isAdminUser || this.isAsurionUser;

        // System Admin, Admin and Asurion users are allowed to override letter assets variables
        // this.isAsurionUser can see only Replace value as readonly
        this.isUserAllowedToOverrideAssertVariables = this.isSysAdminUser || this.isAdminUser || this.isAsurionUser;
    }
}
