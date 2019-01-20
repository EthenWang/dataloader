using System;
using System.IO;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Server.Services;
using Server.Models.Translation;
using Server.Models.Messages;
using Server.Models.Screen;
using System.Collections.Generic;

namespace Server.Services
{
    using SearchResult = KeyValuePair<string, string>;

    public enum DataTypes { Screen, Translation, Messages }  // Name must match data folder suffix
    
    public enum Languages { Default, CS, DE, EN, ES, FR, JA, KO, NL, PT, RU, ZH }

    public class DataloadService : IDataLoader
    {
        public DataloadService(IConfiguration configuration, IDataCache cache)
        {
            Configuration = configuration;
            Cache = cache;
        }

        public IConfiguration Configuration { get; }

        public IDataCache Cache { get; }

        public Translation TranslationCollection { get; protected set; }
        
        public Messages MessageCollection { get; protected set; }

        public IList<Screen> ScreenCollection { get; protected set; }

        public async Task<T> LoadAsync<T>(DataTypes type, string name)
        {
            var data = Cache.LoadCache<T>(name);
            if (data != null)
            {
                return data;
            }

            try
            {
                StreamReader file = File.OpenText(BuildFilePath(type, name));
                var jsonObject = await JToken.ReadFromAsync(new JsonTextReader(file));
                data = jsonObject.ToObject<T>();
                Cache.SetCache(name, data);
                return data;
            }
            catch(Exception e)
            {
                throw e;
            }
        }    

        public async Task<IEnumerable<SearchResult>> GetListAsync(DataTypes type, Languages lang = Languages.Default)
        {
            try
            {
                switch (type)
                {
                    case DataTypes.Screen:
                        return Directory.GetFiles(BuildDirPath(type))?.Select(s => new SearchResult(Path.GetFileNameWithoutExtension(s), ""));
                    case DataTypes.Translation:
                        {
                            var translation = await LoadAsync<Translation>(type, lang.ToString());
                            return translation?.DsTranslation?.TtTranslation?.Select(t => new SearchResult(t.SdCode, t.SdText));
                        }
                    case DataTypes.Messages:
                        {
                            var messages = await LoadAsync<Messages>(type, lang.ToString());
                            return messages?.DsMessages?.TtMessages?.Select(m => new SearchResult(m.MessageNumber.ToString(), m.MessageDescription));
                        }
                    default:
                        return null;
                }
            }
            catch(Exception e)
            {
                throw e;
            }
        }

        public string BuildDirPath(DataTypes type) 
        {
            return $"{Configuration["DataPath"]}\\sd-{type.ToString()}";
        }

        public string BuildFilePath(DataTypes type, string name) 
        {
            return $"{BuildDirPath(type)}\\{name}.json";
        }
    }
}