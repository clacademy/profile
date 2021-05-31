using System.ComponentModel;

namespace Services.Utility
{
    public enum StatusType
    {
        None = 0, // invalid

        [Description("Ok")]
        Ok = 1,

        [Description("Ok")]
        Created = 2,

        [Description("Failed")]
        Failed = 3,

        [Description("Not Found")]
        NotFound = 4,

        [Description("Unauthorized")]
        Unauthorized = 5
    }
}
