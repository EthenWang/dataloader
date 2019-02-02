namespace Server.Services
{
    using System.Threading.Tasks;
    using System.Collections.Generic;
    using Server.Models.Translation;
    using Server.Models.Messages;
    using Server.Models.Screen;
    using Server.Models;
    using Newtonsoft.Json.Linq;

    public interface IDataLoader
    {
        Task<IEnumerable<KeyValuePair<string, string>>> GetListAsync(DataTypes type, Languages lang = Languages.Default);
        Task<T> LoadAsync<T>(DataTypes type, string name) where T : class, IDataFile;
        Task<IEnumerable<IScreenData>> LoadAsync<T>(DataTypes type, string name, IList<string> key) where T : class, IDataFile;
        Task SaveAsync(DataTypes type, string name, JObject data);
        void Delete<T>(DataTypes type, string name) where T : class, IDataFile;
        Task DeleteAsync<T>(DataTypes type, string name, string key) where T : class, IDataFile;
        IEnumerable<KeyValuePair<string, string>> GetFiles(DataTypes type);
    }
}