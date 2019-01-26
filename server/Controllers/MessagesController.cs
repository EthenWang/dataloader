namespace Server.Controllers
{
    using System;
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using Server.Services;
    using Server.Models.Messages;
    using System.Threading.Tasks;
    using System.Linq;

    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : MultiDataController<Messages, TtMessage>
    {
        public MessagesController(IMultiDataLoader dataLoader, IDataCache cache)
            : base(dataLoader, cache, DataTypes.Messages) { }

        [HttpGet("code/{value}/{lang?}")]
        public async Task<ActionResult<IEnumerable<TtMessage>>> SearchMessageCode(string value, Languages lang = Languages.Default)
        {
            try
            {
                var list = await Dataloader.LoadAsync<Messages>(Type, lang.ToString()) as Messages;
                var res = list?.DsMessages.TtMessages?.Where(r => r.MessageNumber.ToString().StartsWith(value, true, null));
                return Ok(res);
            }
            catch (Exception)
            {
                return null;
            }
        }

        [HttpGet("text/{value}/{lang?}")]
        public async Task<ActionResult<IEnumerable<TtMessage>>> SearchMessageText(string value, Languages lang = Languages.Default)
        {
            try
            {
                var list = await Dataloader.LoadAsync<Messages>(Type, lang.ToString()) as Messages;
                var res = list?.DsMessages.TtMessages?.Where(r => r.MessageDescription.StartsWith(value, true, null));
                return Ok(res);
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}