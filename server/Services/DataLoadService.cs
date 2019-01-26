using System;
using System.IO;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Server.Models.Translation;
using Server.Models.Messages;
using Server.Models.Screen;
using System.Collections.Generic;
using Server.Models;

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

        public async Task<IDataFile> LoadAsync<T>(DataTypes type, string name) where T : IDataFile
        {
            FileStream file = null;
            StreamReader sr = null;
            IDataFile data = Cache.LoadCache<T>(type, name);
            if (data != null)
            {
                return data;
            }

            try
            {
                file = File.Open(BuildFilePath(type, name), FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
                sr = new StreamReader(file);
                var jsonObject = await JToken.ReadFromAsync(new JsonTextReader(sr));
                data = jsonObject.ToObject<T>();
                Cache.SetCache(type, name, data);
                return data;
            }
            catch (Exception e)
            {
                throw e;
            }
            finally
            {
                sr?.Close();
                file?.Close();
            }
        }

        public async Task<IEnumerable<IScreenData>> LoadAsync<T>(DataTypes type, string name, IList<string> key) where T : IDataFile
        {
            FileStream file = null;
            StreamReader sr = null;
            IDataFile data = Cache.LoadCache<T>(type, name);

            if (data != null)
            {
                return key.Select(k => data.GetByKey(k));
            }

            try
            {
                file = File.Open(BuildFilePath(type, name), FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
                sr = new StreamReader(file);
                var jsonObject = await JToken.ReadFromAsync(new JsonTextReader(sr));
                data = jsonObject.ToObject<T>();
                Cache.SetCache(type, name, data);
                return key.Select(k => data.GetByKey(k));
            }
            catch (Exception e)
            {
                throw e;
            }
            finally
            {
                sr?.Close();
                file?.Close();
            }
        }

        public async Task SaveAsync(DataTypes type, string name, JObject data)
        {
            FileStream file = null;
            StreamWriter sw = null;
            try
            {
                file = File.Open(BuildFilePath(type, name), FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.Read);
                IDataFile dataFile = null;

                switch (type) // Validate input format
                {
                    case DataTypes.Screen:
                        dataFile = Screen.FromJson(data.ToString());
                        break;
                    case DataTypes.Messages:
                        dataFile = Messages.FromJson(data.ToString());
                        break;
                    case DataTypes.Translation:
                        dataFile = Translation.FromJson(data.ToString());
                        break;
                    default:
                        throw new NotSupportedException($"Data type: {type.ToString()} not supported");
                }
                sw = new StreamWriter(file);
                await sw.WriteAsync(dataFile.Serialize());
                Cache.SetCache(type, name, dataFile);
            }
            catch (Exception e)
            {
                throw e;
            }
            finally
            {
                sw?.Close();
                file?.Close();
            }
        }

        public void Delete<T>(DataTypes type, string name) where T : IDataFile
        {
            string filePath = BuildFilePath(type, name);
            try
            {
                if(!File.Exists(filePath))
                {
                    throw new IOException("File not found");
                }
                File.Delete(filePath);
                Cache.Clear(type);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task DeleteAsync<T>(DataTypes type, string name, string key) where T : IDataFile
        {
            FileStream file = null;
            StreamReader sr = null;
            StreamWriter sw = null;
            IDataFile data = Cache.LoadCache<T>(type, name);
            if (data != null)
            {
                data.DeleteByKey(key);

                file = File.Open(BuildFilePath(type, name), FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.Read);
                sw = new StreamWriter(file);
                await sw.WriteAsync(data.Serialize());
                Cache.SetCache(type, name, data);
            }

            try
            {
                file = File.Open(BuildFilePath(type, name), FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
                sr = new StreamReader(file);
                var jsonObject = await JToken.ReadFromAsync(new JsonTextReader(sr));
                sr.Close();
                file.Close();

                data = jsonObject.ToObject<T>();
                data.DeleteByKey(key);

                file = File.Open(BuildFilePath(type, name), FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.Read);
                sw = new StreamWriter(file);
                await sw.WriteAsync(data.Serialize());
                Cache.SetCache(type, name, data);
            }
            catch (Exception e)
            {
                throw e;
            }
            finally
            {
                sr?.Close();
                sw.Close();
                file?.Close();
            }
        }

        public async Task<IEnumerable<SearchResult>> GetListAsync(DataTypes type, Languages lang = Languages.Default)
        {
            try
            {
                switch (type)
                {
                    case DataTypes.Screen:
                        return Directory.GetFiles(BuildDirPath(type))?.Select(s =>
                        {
                            var fileName = Path.GetFileNameWithoutExtension(s);
                            return new SearchResult(fileName, fileName);
                        });
                    case DataTypes.Translation:
                        {
                            IDataFile translation = await LoadAsync<Translation>(type, lang.ToString());
                            return translation.GetAll().Select(t => t.ToSearchResult());
                        }
                    case DataTypes.Messages:
                        {
                            IDataFile messages = await LoadAsync<Messages>(type, lang.ToString());
                            return messages.GetAll().Select(t => t.ToSearchResult());
                        }
                    default:
                        throw new NotSupportedException($"Data type: {type.ToString()} not supported");
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public string BuildDirPath(DataTypes type)
        {
            return BuildDirPath(Configuration, type);
        }

        public static string BuildDirPath(IConfiguration configuration, DataTypes type)
        {
            return Path.Combine(configuration["DataPath"], $"sd-{type.ToString()}");
        }

        public string BuildFilePath(DataTypes type, string name)
        {
            return BuildFilePath(Configuration, type, name);
        }

        public static string BuildFilePath(IConfiguration configuration, DataTypes type, string name)
        {
            return Path.Combine(BuildDirPath(configuration, type), $"{name}.json");
        }
    }
}