enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

/**
 * Enum to handle what currency a given client is set at.  Note: if you update this, you need to update the enum on the server as well.
 */
enum CurrencyType {
    UnitedStatesDollar = 1,
    Pound = 3,
    Euro = 4
}

/**
 * Enum for handling User Roles in the system
 */
enum ApplicationUserRole {
    SystemAdmin = 1,

    /// <summary>
    /// All-powerful admin role. The only role that may manage users.
    /// </summary>
    Admin = 2,

    AsurionUser = 3,

    VisionUser = 4,

    Bridgetreeuser = 5
}

/**
 * This Enum is replication of Enum in Asurion.RVS.Model/Enums/StepsEnum.cs
 * If any changes made in .Net side please make changes here also.
 */
enum Step {
    LetterCodeRequested = 1,
    AsurionAcknowledgment = 2,
    VisionAcknowledgment = 3,
    BridgetreeAcknowledgment = 4,
    AsurionFinalSignoff = 5,
    VisionEntersLetterPieceVariables = 6,
    VisionConfirmsReadyforReview = 7,
    AsurionApprovesLetterPiece = 8,
    AsurionSubmitsRevisionRequest = 9,
    VisionAcknowledgementofRevisionRequest = 10,
    VisionUpdatesLetterPieceVariables = 11,
    AsurionApprovesLetterPieceUpdates = 12
}

enum LetterAssetType {
    Email = 1,
    Print = 2
}

enum PageName {
    clientManager = 'client',
    form = 'form',
    letterCodeManager = 'letterCode',
    letterAssetManager = 'letterAsset',
    proofProfile = 'proofProfile',
    emailTrackingReport = 'emailTrackingReport',
    agingTransactionReport = 'agingTransactionReport'
}

enum ReportingDrillLevel {
    Client = 1,
    Daily = 2,
    FormType = 3
}
enum AgingTransactionReportDrillLevel {
    Client = 1,
    FormType = 2
}

enum FailedTransactionReportingDrillLevel {
    Client = 1,
    FormType = 2,
    validationId = 3,
    FailedReason = 4
}
enum PageType {
    Client = 1,
    ClientAdd = 2,
    ClientEdit = 3,
    Form = 4,
    FormAdd = 5,
    FormEdit = 6

}

enum CloneType {
    Form = 1,
    LetterCode = 2,
    LetterAsset = 3
}

export {
    Direction,
    ApplicationUserRole,
    Step,
    LetterAssetType,
    CurrencyType,
    PageName,
    ReportingDrillLevel,
    FailedTransactionReportingDrillLevel,
    AgingTransactionReportDrillLevel,
    PageType,
    CloneType
};
