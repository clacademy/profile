
export const Constants = {
    common: {
        boolean: 'boolean',
        addLabel: 'Add',
        updateLabel: 'Update',
        deletelabel: 'Delete',
        closeLabel: 'Close',
        saveLabel: 'Save',
        gridSelectLabel: 'GridSelect',
        sortOrderAsc: 'asc',
        sortOrderDesc: 'desc',
        // Used For Toaster
        success: 'success', // Don't Change this property value it will affect toaster messages
        info: 'info', // Don't Change this property value
        warn: 'warn', // Don't Change this property value
        error: 'error', // Don't Change this property value
        successMessage: 'Success Message',
        infoMessage: 'Info Message',
        warnMessage: 'Warn Message',
        errorMessage: 'Error Message',
        errorSummary: 'Request failed, please try again later.',
        forbiddenSummary: 'Forbidden. You do not have access to do this action.',
        unauthorized: 'Unauthorized. If you frequently get this error, try signing out and back in.',
        dmyDateFormat: 'dd-MMM-yyyy'


    },
    messages: {
        successfulSavedMessage: 'Saved Successfully.',
        successfulAddedMessage: 'Added Successfully.',
        unSuccessfulAddedMessage: 'Added Failed',
        successfulUpdatedMessage: 'Updated Successfully.',
        unSuccessfulUpdatedMessage: 'Updated Failed',
        successfulDeletedMessage: 'Deleted Successfully.',
        unSuccessfulDeletedMessage: 'Deleted Failed.',
        successfulActivatedMessage: 'Activated Successfully.',
        unSuccessfulActivatedMessage: 'Activated Failed.',
        successfulInActivatedMessage: 'Inactivated Successfully.',
        unSuccessfulInActivatedMessage: 'Inactivated Failed.',
        successfulResetMessage: 'Reset Successfully.',
        successfulRefreshedMessage: 'Refreshed Successfully.',
        unSavedDataMessage: 'Do you want to save changes before continuing?',
        errorMessage: 'Oops! Something went wrong! Please contact system administrator.',
        signoutConfirmMessage: 'Are you sure you want to sign out?',
        successfulAssignedMessage: 'Assigned Successfully.',
        integerValidation: 'Field should be integer Type.',
        noChangesWarning: 'There is no changes to save.',
        successfulSendMail: 'Successfully sent email.',
        noChangeSearch: 'Please select any of the search fields.',
        successRemoveFailedRecords: 'Successfully Removed Failed Records.',
        undoRemovedFailedRecords: 'Successfully Undo Last Submission Records.',
        noFailedRecordsToRemove: 'There are no failed records that were removed.',
        successRemoveAllFailedRecords: 'Successfully Removed All Failed Records.',
        successTargetFullfilllmentUpdate: 'Successfully Updated Communication Preference.'
    },
    regExPattern: {
        emailPattern: '\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*?[\\s]*',
        digits: '^[0-9]*$',
        fixedFourDigits: '^([0-9]{4})$',
        fixedFiveDigits: '^([0-9]{5})$',
        fixedThreeAlphanumeric: '^([0-9A-Za-z]{3})$',
        usPhonePattern: '((\\(\\d{3}\\)\\s)|(\\d{3}-))\\d{3}-\\d{4}$',
        tollfreePattern: '^1[\s]?(800)?[\s\-]?\d{3}\-?\d{4}$',
        zipCodePatternNonUS: '^([a-zA-Z0-9 ]{0,15})*$',
        contractCodePattern: '^[a-zA-Z0-9\\-\\s]+$',
        numberNotStartWithZero: '^[1-9][0-9,]*$',
        alphaNumericPattern: '^[a-zA-Z0-9]*?[\\s]*$',
        alphaNumericPatternWithoutSpace: '^[\\sa-zA-Z0-9]*?[\\s]*$'
    },
    client: {
        // set Headers of client table
        clientIdDuplicate: 'Client id is already associated with another client.'
    },
    letter: {
        successfulSavedAssetvariable: 'Successfully saved asset variable information.',
        successfulUpdatedAssetvariable: 'Successfully updated asset variable information.',
        // tslint:disable-next-line:max-line-length
        noProofProfileDataFound: 'Note: No Proof Profile data found for this Form Type or Client ID, please select one from the list below, or create proof profile data for this form.'

    },
    validation: {
        duplicateProofProfileName: ' Profile Name is already associated with another Proof Profile.'

    },
    user: {
        duplicateUserNameError: 'Username/Email already existed.',
        savingEroor: 'Error on saving user information. Please try again.',
        successfulCreateUser: 'Successfully created user.',
        successfulUpdatedUser: 'Successfully updated user info.'

    },
    breadCrumbUrls: {
        home: { label: '', routerLink: '/', icon: 'fa fa-home' },
        clienthome: { label: 'Client', routerLink: '/client' },
        clientAdd: [{ label: 'Client', routerLink: '/client' }, { label: 'Add' }],
        clientEdit: [{ label: 'Client', routerLink: '/client' }, { label: 'Edit' }],
        letterhome: { label: 'Forms', routerLink: '/letter' },
        letteradd: [{ label: 'Forms', routerLink: '/letter' }, { label: 'Add' }],
        letterEdit: [{ label: 'Forms', routerLink: '/letter' }, { label: 'Edit' }],
        userManagerHome: { label: 'User', routerLink: '/user' },
        userAdd: [{ label: 'User', routerLink: '/user' }, { label: 'Add' }],
        userEdit: [{ label: 'User', routerLink: '/user' }, { label: 'Edit' }],
        userSettings: [{ label: 'User', routerLink: '/user' }, { label: 'User Setting' }],
        letterCodeManager: { label: 'Letter Code', routerLink: '/letter/letter-code' },
        // tslint:disable-next-line:max-line-length
        letterCodeDetail: [{ label: 'Letter Code', routerLink: '/letter/letter-code' }, { label: 'Detail' }],
        letterAssetManager: { label: 'Letter Asset', routerLink: '/letter/letter-asset' },
        letterAssetDetail: [{ label: 'Letter Asset', routerLink: '/letter/letter-asset' }, { label: 'Detail' }],
        validationSearch: { label: 'Validation Search', routerLink: '/validation/validation-search' },
        proofProfile: { label: 'Proof Profile', routerLink: '/validation/proof-profile' },
        proofProfileAdd: [{ label: 'Proof Profile', routerLink: '/validation/proof-profile' }, { label: 'Add' }],
        proofProfileEdit: [{ label: 'Proof Profile', routerLink: '/validation/proof-profile' }, { label: 'Edit' }],
        proofProfileCopy: [{ label: 'Proof Profile', routerLink: '/validation/proof-profile' }, { label: 'Copy' }],
        // tslint:disable-next-line:max-line-length
        proofProfileGenerate: [{ label: 'Letter Asset', routerLink: '/letter/letter-asset' },
        { label: 'Detail', routerLink: '/letter/letter-asset/detail/' },
        { label: 'Proof Generation' }],
        failedRecords: { label: 'Failed Records', routerLink: '/validation/failed-records' },
        activityReport: { label: 'Activity Report', routerLink: '/reports/activity' },
        processingReport: { label: 'Processing Report', routerLink: '/reports/processing' },
        heldRecords: { label: 'Held Records', routerLink: '/validation/held-records' },
        invoiceReport: { label: 'Invoice Report', routerLink: '/reports/invoice' },
        emailTrackingReport: { label: 'Email Tracking Report', routerLink: '/reports/email-tracking' },
        failedTransactionReport: { label: 'Failed Transaction Report', routerLink: '/reports/failed-transaction' },
        agingTransactionReport: { label: 'Aging Transaction Report', routerLink: '/reports/aging-transaction' },
        sentEmailReport: { label: 'Sent Email Report', routerLink: '/reports/sent-email-report' },
        dripCampaign: { label: 'Drip Campaign Manager', routerLink: '/client/drip-campaign' },
        dripCampaignEdit: [{ label: 'Drip Campaign Manager', routerLink: '/client/drip-campaign' }, { label: 'Edit' }],
        dripCampaignAdd: [{ label: 'Drip Campaign Manager', routerLink: '/client/drip-campaign' }, { label: 'Add' }],
    },
    control: { popUpClose: 'popUpClose' }
};
