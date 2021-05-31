using System;
using System.Collections.Generic;
using System.Text;

namespace Services.Utility
{
    public class Result
    {
        private Result(StatusType status, string message = null)
        {
            this.Status = status;
            this.Message = message;
        }

        private Result(StatusType status, object entity, string message = null)
        {
            this.Status = status;
            this.Entity = entity;
            this.Message = message;
        }

        public string Message { get; set; }

        public StatusType Status { get; }

        public object Entity { get; }

        public static Result Failed(string message = null)
        {
            return new Result(StatusType.Failed, message);
        }

        public static Result Ok()
        {
            return new Result(StatusType.Ok);
        }

        public static Result Ok(object entity)
        {
            return new Result(StatusType.Ok, entity);
        }

        public static Result NotFound()
        {
            return new Result(StatusType.NotFound);
        }

        public static Result Unauthorized()
        {
            return new Result(StatusType.Unauthorized);
        }
    }
}
