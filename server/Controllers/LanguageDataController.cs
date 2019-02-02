using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Server.Models;
using Server.Services;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Controllers
{
    using SearchResult = KeyValuePair<string, string>;

    public class LanguageDataController<T> : ItemDataController<T> where T : class, IDataFile
    {
        public LanguageDataController(IMultiDataLoader dataloader, IDataCache cache, DataTypes type)
            : base(dataloader, cache, type) { }

        [HttpGet("language")]
        public ActionResult<IEnumerable<SearchResult>> GetLanguages()
        {
            try
            {
                return Ok(Dataloader.GetFiles(Type));
            }
            catch (Exception)
            {
                return NotFound();
            }
        }
    }
}
