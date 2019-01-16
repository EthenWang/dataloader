using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Server.Controllers
{
    [Route("api/label")]
    [ApiController]
    public class TranslationController : ControllerBase
    {
        [HttpPost("api/label/search")]
        public ActionResult<IList<object>> Search([FromBody] string labelText)
        {
            return null;
        }
    }
}