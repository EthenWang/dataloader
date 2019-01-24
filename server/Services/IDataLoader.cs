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
        Translation TranslationCollection { get; }
        Messages MessageCollection { get; }
        IList<Screen> ScreenCollection { get; }
        Task<IEnumerable<KeyValuePair<string, string>>> GetListAsync(DataTypes type, Languages lang = Languages.Default);
        Task<IDataFile> LoadAsync<T>(DataTypes type, string name) where T : IDataFile;
        Task<IEnumerable<IScreenData>> LoadAsync<T>(DataTypes type, string name, IList<string> key) where T : IDataFile;
        Task<string> SaveAsync(DataTypes type, string name, JObject data);
        Task<string> SaveAsync(DataTypes type, string name, string key, JObject data);
        Task<string> DeleteAsync<T>(DataTypes type, string name) where T : IDataFile;
        Task<string> DeleteAsync<T>(DataTypes type, string name, string key) where T : IDataFile;

    }
}