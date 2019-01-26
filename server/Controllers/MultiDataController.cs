using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Server.Models;
using Server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Controllers
{
    public class MultiDataController<T, U> : DataController<T> where T : IDataFile where U : IScreenData
    {
        public new IMultiDataLoader Dataloader => base.Dataloader as IMultiDataLoader;

        public MultiDataController(IMultiDataLoader dataloader, IDataCache cache, DataTypes type)
            :base(dataloader, cache, type) {}

        [HttpGet("{name}/{key}")]
        public async Task<ActionResult<IEnumerable<IScreenData>>> GetAsync(string name, string key)
        {
            try
            {
                return Ok(await Dataloader.LoadAsync<T>(Type, name, key?.Split(',')));
            }
            catch (Exception)
            {
                return NotFound();
            }
        }

        [HttpPost("{name}/{key}")]
        public async Task<ActionResult> PostAsync(string name, string key, JObject data)
        {
            try
            {
                await Dataloader.SaveAsync(Type, name, key, data);
                return Ok();
            }
            catch (Exception)
            {
                return NotFound();
            }
        }

        [HttpDelete("{name}/{key}")]
        public async Task<ActionResult> DeleteAsync(string name, string key)
        {
            try
            {
                await Dataloader.DeleteAsync<T>(Type, name, key);
                return Ok();
            }
            catch (Exception)
            {
                return NotFound();
            }
        }
    }
}
