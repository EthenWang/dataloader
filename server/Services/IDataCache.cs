using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public interface IDataCache
    {
        IDataFile LoadCache<T>(DataTypes type, string name) where T : IDataFile;
        void SetCache<T>(DataTypes type, string name, T data) where T : IDataFile;
        void Clear();
        void Clear(DataTypes type);
    }
}
