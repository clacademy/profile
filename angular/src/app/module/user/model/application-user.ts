import { GridHeader } from '../../../shared/model/common-models';
import { ApplicationUserRole } from '../../../shared/enums/enum';

class ApplicationUser {
    applicationUserId: number;
    email: string;
    firstName: string;
    lastName: string;
    isEnabled: boolean;
    userName: string;
    userRoles: ApplicationUserRoles[];
    password: string;

    constructor() {
        this.applicationUserId = 0;
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.isEnabled = true;
        this.userName = '';
        this.password = '';
        this.userRoles = [];
    }
}

class ApplicationUserRoles {
    id: ApplicationUserRole;
    name: string;
}

const UserHeader: GridHeader[] = [
    { field: 'firstName', header: 'First Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'userName', header: 'User Name' },
    { field: 'email', header: 'Email' },
    { field: 'userRoles', header: 'Roles' },
    { field: 'isEnabled', header: 'Enabled' },
    { field: 'action', header: 'Action' }
];

const ApplicationRoles: ApplicationUserRoles[] = [
    { id: ApplicationUserRole.SystemAdmin, name: 'System Admin' },
    { id: ApplicationUserRole.Admin, name: 'Admin' },
    { id: ApplicationUserRole.AsurionUser, name: 'Asurion User' },
    { id: ApplicationUserRole.VisionUser, name: 'Vision User' },
    { id: ApplicationUserRole.Bridgetreeuser, name: 'Bridgetree User' }
];

export { ApplicationUser, UserHeader, ApplicationUserRoles, ApplicationRoles };
