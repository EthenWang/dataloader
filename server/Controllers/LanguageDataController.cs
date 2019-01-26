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

    public class LanguageDataController<T, U> : MultiDataController<T, U> where T : IDataFile where U : IScreenData
    {
        public IConfiguration Configuration { get; }

        public LanguageDataController(IConfiguration configuration, IMultiDataLoader dataloader, IDataCache cache, DataTypes type)
            : base(dataloader, cache, type)
        {
            Configuration = configuration;
        }

        [HttpGet("language")]
        public ActionResult<IEnumerable<SearchResult>> GetLanguages()
        {
            try
            {
                var dirPath = DataloadService.BuildDirPath(Configuration, Type);
                return Ok(Directory.GetFiles(dirPath)?.Select(s => new SearchResult(Path.GetFileNameWithoutExtension(s), "")));
            }
            catch (Exception)
            {
                return NotFound();
            }
        }
    }
}
