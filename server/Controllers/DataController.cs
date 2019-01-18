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
    [ApiController]
    public class DataController<T> : ControllerBase
    {
        public IDataLoader Dataloader { get; }

        public DataTypes Type { get; }

        public DataController(IDataLoader dataloader, DataTypes type)
        {
            Dataloader = dataloader;
            Type = type;
        }

        [HttpGet]
        public async Task<object> Index()
        {
            return await Dataloader.GetListAsync(Type);
        }

        [HttpGet("{name}")]
        public async Task<object> GetAsync(string name)
        {
            try
            {
                return await Dataloader.LoadAsync<T>(Type, name);
            }
            catch(FileNotFoundException)
            {
                return null;
            }
        }
    }
}