using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public interface IMultiDataLoader : IDataLoader
    {
        Task SaveAsync(DataTypes type, string name, string key, Newtonsoft.Json.Linq.JObject data);
    }
}
