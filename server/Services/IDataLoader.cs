namespace Server.Services
{
    using System.Threading.Tasks;
    using System.Collections.Generic;
    using Server.Models.Translation;
    using Server.Models.Messages;
    using Server.Models.Screen;

    public interface IDataLoader
    {
        Translation TranslationCollection { get; }
        Messages MessageCollection { get; }
        IList<Screen> ScreenCollection { get; }
        Task<IEnumerable<KeyValuePair<string, string>>> GetListAsync(DataTypes type, Languages lang = Languages.Default);
        Task<T> LoadAsync<T>(DataTypes type, string name);
    }
}