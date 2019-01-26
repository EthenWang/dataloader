namespace Server.Controllers
{
    using System;
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using Server.Services;
    using Server.Models.Messages;

    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : MultiDataController<Messages, TtMessage>
    {
        public MessagesController(IMultiDataLoader dataLoader, IDataCache cache)
            : base(dataLoader, cache, DataTypes.Messages) { }
    }
}