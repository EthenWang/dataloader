namespace Server.Controllers
{
    using System;
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using Server.Services;
    using Server.Models.Translation;
    using System.Threading.Tasks;
    using System.Linq;

    [Route("api/[controller]")]
    [ApiController]
    public class TranslationController : MultiDataController<Translation, TtTranslation>
    {
        public TranslationController(IMultiDataLoader dataLoader, IDataCache cache)
            : base(dataLoader, cache, DataTypes.Translation) { }

        [HttpGet("code/{value}/{lang?}")]
        public async Task<ActionResult<IEnumerable<TtTranslation>>> SearchLabelCode(string value, Languages lang = Languages.Default)
        {
            try
            {
                var list = await Dataloader.LoadAsync<Translation>(Type, lang.ToString()) as Translation;
                var res = list?.DsTranslation.TtTranslation.Where(r => r.SdCode.StartsWith(value, true, null));
                return Ok(res);
            }
            catch (Exception)
            {
                return null;
            }
        }

        [HttpGet("text/{value}/{lang?}")]
        public async Task<ActionResult<IEnumerable<TtTranslation>>> SearchLabelText(string value, Languages lang = Languages.Default)
        {
            try
            {
                var list = await Dataloader.LoadAsync<Translation>(Type, lang.ToString()) as Translation;
                var res = list?.DsTranslation.TtTranslation.Where(r => r.SdText.StartsWith(value, true, null));
                return Ok(res);
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}