using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public class DataCacheService : IDataCache
    {
        private Dictionary<string, Dictionary<string, dynamic>> cache = new Dictionary<string, Dictionary<string, dynamic>>();

        public T LoadCache<T>(string name)
        {
            var typeName = typeof(T).ToString();
            if (cache.ContainsKey(typeName))
            {
                var dict = cache[typeName];
                if (dict?.ContainsKey(name) == true)
                {
                    return dict[name];
                }
            }
            return default(T);
        }

        public void SetCache<T>(string name, T data)
        {
            var typeName = typeof(T).ToString();
            if (!cache.ContainsKey(typeName))
            {
                cache.Add(typeName, new Dictionary<string, dynamic>());
            }
            var dict = cache[typeName];
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
            foreach(var dict in cache)
            {
                dict.Value?.Clear();
            }
        }
    }
}
