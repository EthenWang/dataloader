namespace Server.Controllers
{
    using System;
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using Server.Services;
    using Server.Models.Messages;

    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : DataController<Messages>
    {
        public MessagesController(IDataLoader dataloader)
            : base(dataloader, DataTypes.Messages) {}
    }
}