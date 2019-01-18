namespace Server.Services
{
    using System.Threading.Tasks;
    using System.Collections.Generic;
    
    public interface IDataLoader
    {
        Task<IEnumerable<(string Key, string Value)>> GetListAsync(DataTypes type, Languages lang = Languages.Default);
        Task<T> LoadAsync<T>(DataTypes type, string name);
    }
}