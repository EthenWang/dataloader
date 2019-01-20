using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public interface IDataCache
    {
        T LoadCache<T>(string name);
        void SetCache<T>(string name, T data);
        void Clear();
    }
}
