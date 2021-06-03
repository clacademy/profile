import { ApplicationUserRole } from '../../enums/enum';

interface NavAttributes {
    [propName: string]: any;
}
interface NavWrapper {
    attributes: NavAttributes;
    element: string;
}
interface NavBadge {
    text: string;
    variant: string;
}
interface NavLabel {
    class?: string;
    variant: string;
}

export interface NavData {
    name?: string;
    url?: string;
    icon?: string;
    badge?: NavBadge;
    title?: boolean;
    children?: NavData[];
    variant?: string;
    attributes?: NavAttributes;
    divider?: boolean;
    class?: string;
    label?: NavLabel;
    wrapper?: NavWrapper;
    allowedUserRoles?: ApplicationUserRole[];
}

export const navItem: NavData[] = [
    {
        name: 'Home',
        url: '/home',
        icon: 'fa fa-home'
    },

    {
        name: 'Client',
        url: '/client',
        icon: 'fa fa-handshake-o',
        children: [
            {
                name: 'Client Manager',
                url: '/client/client-list'
            },
            {
                name: 'Drip Campaign',
                url: '/client/drip-campaign'
            }
        ]

    },


    {
        name: 'Letter Management',
        url: '/letter',
        icon: 'fa fa-envelope-o',
        children: [
            {
                name: 'Forms',
                url: '/letter/forms'
            },
            {
                name: 'Letter Code Manager',
                url: '/letter/letter-code'
            },
            {
                name: 'Letter Asset Manager',
                url: '/letter/letter-asset'
            }
        ]

    },


    {
        name: 'Validation Management',
        url: '/validation',
        icon: 'fa fa-user-circle-o',
        children: [
            {
                name: 'Validation Search',
                url: '/validation/validation-search'
            },
            {
                name: 'Held Record',
                url: '/validation/held-records'
            },
            {
                name: 'Failed Records',
                url: '/validation/failed-records'
            },
            {
                name: 'Proof Profile',
                url: '/validation/proof-profile'
            },
        ]

    },

    {
        name: 'Reporting', // Don't change this name,if you change then it needs to change in userDeatil() under mainpage component .
        url: '/reports',
        icon: 'fa fa-file-text-o',
        children: [
            {
                name: 'Activity Report',
                url: '/reports/activity'
            },
            {
                name: 'Invoice Report',
                url: '/reports/invoice',
                allowedUserRoles: [ApplicationUserRole.SystemAdmin, ApplicationUserRole.Bridgetreeuser]
            },
            {
                name: 'Email Tracking Report',
                url: '/reports/email-tracking'
            },
            {
                name: 'Failed Transaction Report',
                url: '/reports/failed-transaction',
                allowedUserRoles: [
                    ApplicationUserRole.AsurionUser,
                    ApplicationUserRole.Admin,
                    ApplicationUserRole.SystemAdmin,
                    ApplicationUserRole.Bridgetreeuser]
            },
            {
                name: 'Aging Transaction Report',
                url: '/reports/aging-transaction',
                allowedUserRoles: [
                    ApplicationUserRole.AsurionUser,
                    ApplicationUserRole.Admin,
                    ApplicationUserRole.SystemAdmin,
                    ApplicationUserRole.Bridgetreeuser]
            },
            {
                name: 'Sent Email Reports',
                url: '/reports/sent-email-report',
                allowedUserRoles: [
                    ApplicationUserRole.SystemAdmin,
                ]
            }
        ]

    },
];
