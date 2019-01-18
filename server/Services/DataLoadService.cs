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
using System.Collections.Generic;

namespace Server.Services
{
    public enum DataTypes { Screen, Translation, Messages }  // Name must match data folder suffix
    
    public enum Languages { Default, CS, DE, EN, ES, FR, JA, KO, NL, PT, RU, ZH }

    public class DataloadService : IDataLoader
    {
        public DataloadService(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public Translation TranslationCollection { get; }
        
        public Messages MessageCollection { get; }

        public async Task<T> LoadAsync<T>(DataTypes type, string name)
        {
            try
            {
                StreamReader file = File.OpenText(BuildFilePath(type, name));
                var jsonObject = await JToken.ReadFromAsync(new JsonTextReader(file));
                return jsonObject.ToObject<T>();
            }
            catch(Exception e)
            {
                throw e;
            }
        }    

        public async Task<IEnumerable<(string Key, string Value)>> GetListAsync(DataTypes type, Languages lang = Languages.Default)
        {
            try
            {
                switch (type)
                {
                    case DataTypes.Screen:
                        return Directory.GetFiles(BuildDirPath(type))?.Select(s => (s, ""));
                    case DataTypes.Translation:
                        {
                            var translation = await LoadAsync<Translation>(type, lang.ToString());
                            return translation?.DsTranslation?.TtTranslation?.Select(t => (t.SdCode, t.SdText));
                        }
                    case DataTypes.Messages:
                        {
                            var messages = await LoadAsync<Messages>(type, lang.ToString());
                            return messages?.DsMessages?.TtMessages?.Select(m => (m.MessageNumber.ToString(), m.MessageDescription));
                        }
                    default:
                        return null;
                }
            }
            catch(IOException e)
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