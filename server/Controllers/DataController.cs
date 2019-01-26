using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Server.Services;
using Server.Models.Translation;
using Server.Models;
using Newtonsoft.Json.Linq;

namespace Server.Controllers
{
    using SearchResult = KeyValuePair<string, string>;

    public class DataController<T> : ControllerBase where T : IDataFile
    {
        public IDataLoader Dataloader { get; }

        public IDataCache Cache { get; }

        public DataTypes Type { get; }

        public DataController(IDataLoader dataloader, IDataCache cache, DataTypes type)
        {
            Dataloader = dataloader;
            Cache = cache;
            Type = type;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SearchResult>>> Index()
        {
            try
            {
                return Ok(await Dataloader.GetListAsync(Type));
            }
            catch (Exception)
            {
                return NotFound();
            }
        }

        [HttpGet("{name}")]
        public async Task<ActionResult<IDataFile>> GetAsync(string name)
        {
            try
            {
                return Ok(await Dataloader.LoadAsync<T>(Type, name));
            }
            catch (Exception)
            {
                return null;
            }
        }

        [HttpPost("{name}")]
        public async Task<ActionResult> PostAsync(string name, JObject data)
        {
            try
            {
                await Dataloader.SaveAsync(Type, name, data);
                return Ok();
            }
            catch (Exception)
            {
                return NotFound();
            }
        }

        [HttpDelete("{name}")]
        public ActionResult DeleteAsync(string name)
        {
            try
            {
                Dataloader.Delete<T>(Type, name);
                return Ok();
            }
            catch (Exception)
            {
                return NotFound();
            }
        }

        [HttpGet("searchcode/{value}")]
        public async Task<ActionResult<IEnumerable<SearchResult>>> SearchCode(string value)
        {
            try
            {
                var list = await Dataloader.GetListAsync(Type);
                var res = list.Where(r => !string.IsNullOrEmpty(r.Key) && r.Key.StartsWith(value, true, null));
                return Ok(res);
            }
            catch (Exception)
            {
                return null;
            }
        }

        [HttpGet("searchvalue/{value}")]
        public async Task<ActionResult<IEnumerable<SearchResult>>> SearchValue(string value)
        {
            try
            {
                var list = await Dataloader.GetListAsync(Type);
                var res = list.Where(r => !string.IsNullOrEmpty(r.Value) && r.Value.StartsWith(value, true, null));
                return Ok(res);
            }
            catch (Exception)
            {
                return null;
            }
        }

        [HttpGet("clearcache")]
        public ActionResult ClearCache()
        {
            Cache.Clear();
            return Ok();
        }
    }
}