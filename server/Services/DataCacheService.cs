using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public class DataCacheService : IDataCache
    {
        private Dictionary<DataTypes, Dictionary<string, IDataFile>> cache = new Dictionary<DataTypes, Dictionary<string, IDataFile>>();

        public T LoadCache<T>(DataTypes type, string name) where T : class, IDataFile
        {
            if (cache.ContainsKey(type))
            {
                var dict = cache[type];
                if (dict?.ContainsKey(name) == true)
                {
                    return dict[name] as T;
                }
            }
            return default(T);
        }

        public void SetCache<T>(DataTypes type, string name, T data) where T : IDataFile
        {
            if (!cache.ContainsKey(type))
            {
                cache.Add(type, new Dictionary<string, IDataFile>());
            }
            var dict = cache[type];
            if (dict.ContainsKey(name))
            {
                dict[name] = data;
            }
            else
            {
                dict.Add(name, data);
            }
        }
        
        public void Clear()
        {
            foreach (var dict in cache)
            {
                dict.Value?.Clear();
            }
        }

        public void Clear(DataTypes type)
        {
            if (cache.ContainsKey(type))
            {
                cache[type].Clear();
            }
        }
    }
}
