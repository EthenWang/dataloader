using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Server.Services;
using Server.Models.Translation;

namespace Server.Controllers
{
    using SearchResult = KeyValuePair<string, string>;

    public class DataController<T> : ControllerBase
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
        public async Task<IEnumerable<SearchResult>> Index()
        {
            try
            {
                return await Dataloader.GetListAsync(Type);
            }
            catch (Exception)
            {
                return null;
            }
        }

        [HttpGet("{name}")]
        public async Task<T> GetAsync(string name)
        {
            try
            {
                return await Dataloader.LoadAsync<T>(Type, name);
            }
            catch(Exception)
            {
                return default(T);
            }
        }

        [HttpGet("searchcode/{value}")]
        public async Task<IEnumerable<SearchResult>> SearchCode(string value)
        {
            try
            {
                var list = await Dataloader.GetListAsync(Type);
                return list.Where(r => !string.IsNullOrEmpty(r.Key) && r.Key.StartsWith(value, true, null));
            }
            catch (Exception)
            {
                return null;
            }
        }

        [HttpGet("searchvalue/{value}")]
        public async Task<IEnumerable<SearchResult>> SearchValue(string value)
        {
            try
            {
                var list = await Dataloader.GetListAsync(Type);
                return list.Where(r => !string.IsNullOrEmpty(r.Value) && r.Value.StartsWith(value, true, null));
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