namespace Server.Controllers
{
    using System;
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using Server.Services;
    using Server.Models.Screen;
    using System.Threading.Tasks;

    [Route("api/[controller]")]
    [ApiController]
    public class ScreenController : DataController<Screen>
    {
        public ScreenController(IDataLoader dataLoader, IDataCache cache)
            : base(dataLoader, cache, DataTypes.Screen) { }
    }
}