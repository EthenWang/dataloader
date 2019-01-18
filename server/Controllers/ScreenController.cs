namespace Server.Controllers
{
    using System;
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using Server.Services;
    using Server.Models.Screen;

    [Route("api/[controller]")]
    [ApiController]
    public class ScreenController : DataController<Screen>
    {
        public ScreenController(IDataLoader dataloader)
            : base(dataloader, DataTypes.Screen) {}
    }
}