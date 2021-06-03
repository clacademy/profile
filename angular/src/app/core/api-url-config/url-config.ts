

import { environment } from '../../../environments/environment';
const BASE_API_URL = environment.apiBaseUrl;

export const CONFIG = {
    apiUrls: {
        base: BASE_API_URL,
        homePageUrl: 'values',
    },
    dashBoardApiUrls: {
        getFullFillmentSentRecords: 'Dashboard/fulFillmentSent',

    },
    clientApiUrls: {
        getClientsUrl: 'Client/filter',
        getClientFormUrls: 'Client/filterForm',
        addClient: 'Client',
        export: 'Client/export',
        clientWithFailedRecords: 'Client/withFailedRecords'
    },
    replaceRuleUrls: {
        getRuleByClient: 'replacerule/client'
    },
    FormApiUrls: {
        getAllForms: 'Form/filter',
        forms: 'Form',
        getAllFormsByClientId: 'Form/GetAllFormCodesByClientId',
        cloneFormLetterCodeAndAssets: 'Form/CloneFormLetterCodeAndAssets'
    },
    userApiUrls: {
        getAllUsers: 'user/filter',
        createUpdateUser: 'user',
        statusUpdate: 'user/UpdateStatus',
        saveTimeFormat: 'user/usersetting'
    },
    validationApiUrls: {
        getAllValidation: 'Validation/filter',
        export: 'Validation/export',
        eventHistory: 'validation/{0}/eventHistory',
        getFulfilledDetails: 'validation/{0}/fulfilled',
        failedRecords: 'Validation/failedrecords',
        removeFailedRecords: 'Validation/removefailedrecords',
        undoRemovedFailedRecords: 'Validation',
        heldRecords: 'Validation/holdrecords',
        heldRecordsExport: 'Validation/export/holdrecords',
        fialedRecordsExport: 'Validation/export/failedrecords',
    },
    proofProfileApiUrls: {
        getProofProfile: 'ProofProfile/filter',
        proofProfile: 'ProofProfile',
        mockValidationData: 'ProofProfile/Validation',
        getProofProfileForDropdown: 'ProofProfile/names',
        getProofReplacement: 'ProofProfile/RuleReplacement',
        getProofReplacementAsIs: 'ProofProfile/Replacement',
        generateProof: 'ProofProfile/GenerateProof',
        getAutoPopulateProofProfile: 'ProofProfile/AutoPopulateProofProfile',
    },
    letterApiUrls: {
        letterCode: 'Letter',
        approveLetterCode: 'Letter/approve',
        exportLetterCodes: 'Letter/export',
        getAllLetterCodesByFormId: 'Letter/filterByFormId',
        getAllLetterAssetTypesForLetterCode: 'Letter/{0}/LetterAssetIds',
        getAllLetterCodes: 'Letter/filter',
    },
    letterAssetApiUrls: {
        letterAsset: 'LetterAsset',
        getAllLetterAssetsByFormId: 'LetterAsset/filterByFormId',
        getAllLetterAssets: 'LetterAsset/filter',
        exportLetterAssets: 'LetterAsset/export',
        getAllAprroveLetterCodes: 'LetterAsset/letterCodes',
        getAllLetterAssetTypesForLetterCode: 'LetterAsset/{0}/LetterAssetIds',
        createNewLetterAsset: 'LetterAsset/newLetterAsset',
        getAllApproveLetterCodesByFormId: 'LetterAsset/{0}/letterCodes',
        letterAssetUpdate: 'LetterAsset/update',
        approveLetterAsset: 'LetterAsset/approve',
        getAllStepsStatus: 'LetterAsset/assetStatus',
        letterAssetVariables: 'LetterAsset/variables'
    },
    reportsApiUrls: {
        activityReport: 'report/activity/filter',
        activityReportExport: 'report/activity/export',
        processingReport: 'report/processing/filter',
        processingReportExport: 'report/processing/export',
        getInvoiceReport: 'ReportInvoice/filter',
        getInvoiceExcelDocument: 'ReportInvoice',
        emailTrackerRport: 'report/emailTracking/filter',
        emailTrackerRportExport: 'report/emailTracking/export',
        failedTransactionReport: 'report/failedrecord/filter',
        failedTransactionReportExport: 'report/failedrecord/export',
        agingTransactionReport: 'report/agingTransaction/filter',
        sentEmailReport: 'report/sentEmail/filter',
        sentEmailReportExcelDocument: 'report/sentEmail',
    },
    dripCampaignApiUrls: {
        campaign: 'DripCampaign',
        createCampaignDetails: 'DripCampaign/createCamapign',
        updateTrackingDetials: 'DripCampaign/updateTrackingDetials',
        getCampaignData: 'DripCampaign/filter',
        export: 'DripCampaign/export',
        updateTracking: 'DripCampaign/updateTrackingDetials',
        createUpdateGroup: 'DripCampaign/createUpdateGroup',
        getPayloadLetterAssets: 'DripCampaign/getPayloadLetterAssets',
        deletePayloadSchedule: 'DripCampaign/deletePayloadSchedule',
        createUpdatePayloadSchedule: 'DripCampaign/createUpdatePayloadSchedule',
        getCampaigns: 'DripCampaign/getCampaigns',
        getTrackingPercentage: 'DripCampaign/getTrackingPercentage'
    },
    communicationPreferenceUrls: {
        commPref: 'CommunicationPreference'
    }
};
