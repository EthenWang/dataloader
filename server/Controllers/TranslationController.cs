namespace Server.Controllers
{
    using System;
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using Server.Services;
    using Server.Models.Translation;

    [Route("api/[controller]")]
    [ApiController]
    public class TranslationController : DataController<Translation>
    {
        public TranslationController(IDataLoader dataLoader, IDataCache cache)
            : base(dataLoader, cache, DataTypes.Translation) { }
    }
}