namespace Server.Controllers
{
    using System;
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using Server.Services;
    using Server.Models.Translation;

    [Route("api/[controller]")]
    [ApiController]
    public class TranslationController : MultiDataController<Translation, TtTranslation>
    {
        public TranslationController(IMultiDataLoader dataLoader, IDataCache cache)
            : base(dataLoader, cache, DataTypes.Translation) { }
    }
}