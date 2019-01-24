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
                return NotFound();
            }
        }

        [HttpGet("{name}/{key}")]
        public async Task<ActionResult<IEnumerable<IScreenData>>> GetAsync(string name, IList<string> key)
        {
            try
            {
                return Ok(await Dataloader.LoadAsync<T>(Type, name, key));
            }
            catch (Exception)
            {
                return NotFound();
            }
        }

        [HttpPost]
        [Route("{name}")]
        public async Task<ActionResult<string>> PostAsync(string name, [FromBody]JObject data)
        {
            try
            {
                return await Dataloader.SaveAsync(Type, name, data);
            }
            catch (Exception)
            {
                return NotFound();
            }
        }

        [HttpPost]
        [Route("{name}/{key}")]
        public async Task<ActionResult<string>> PostAsync(string name, string key, [FromBody]JObject data)
        {
            try
            {
                return await Dataloader.SaveAsync(Type, name, key, data);
            }
            catch (Exception)
            {
                return NotFound();
            }
        }

        [HttpDelete("{name}")]
        public async Task<ActionResult<string>> DeleteAsync(string name)
        {
            try
            {
                return await Dataloader.DeleteAsync<T>(Type, name);
            }
            catch (Exception)
            {
                return NotFound();
            }
        }

        [HttpDelete("{name}/{key}")]
        public async Task<ActionResult<string>> DeleteAsync(string name, string key)
        {
            try
            {
                return await Dataloader.DeleteAsync<T>(Type, name, key);
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
                return NotFound();
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
                return NotFound();
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