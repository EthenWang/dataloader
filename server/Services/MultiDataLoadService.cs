using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Server.Models;
using Server.Models.Messages;
using Server.Models.Translation;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services
{
    public class MultiDataLoadService : DataloadService, IMultiDataLoader
    {
        public MultiDataLoadService(IConfiguration configuration, IDataCache cache)
            : base(configuration, cache) { }

        public async Task SaveAsync(DataTypes type, string name, string key, JObject data)
        {
            FileStream file = null;
            StreamWriter sw = null;
            try
            {
                file = File.Open(BuildFilePath(type, name), FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.Read);

                IDataFile dataFile = null;
                IScreenData screenData = null;
                switch (type)
                {
                    /*case DataTypes.Screen:
                        dataFile = await LoadAsync<Screen>(type, name);
                        if (data.ContainsKey("screenobjname")) // ScreenObj
                        {
                            screenData = data.ToObject<TtScreenObj>(new JsonSerializer() { ContractResolver = new Utils.DataLoadContractResolver() });
                        }
                        else if (data.ContainsKey("objname")) // ScreenChildObj
                        {
                            screenData = data.ToObject<TtScreenChildObj>(new JsonSerializer() { ContractResolver = new Utils.DataLoadContractResolver() });
                        }
                        else
                        {
                            throw new FormatException("Do not put stones into the machine");
                        }
                        break;*/
                    case DataTypes.Messages:
                        dataFile = await LoadAsync<Messages>(type, name);
                        screenData = data.ToObject<TtMessage>(new JsonSerializer() { ContractResolver = new Utils.DataLoadContractResolver() });
                        break;

                    case DataTypes.Translation:
                        dataFile = await LoadAsync<Translation>(type, name);
                        screenData = data.ToObject<TtTranslation>(new JsonSerializer() { ContractResolver = new Utils.DataLoadContractResolver() });
                        break;
                    default:
                        throw new NotSupportedException($"Data type: {type.ToString()} not supported");
                }
                dataFile.CreateOrUpdate(screenData);
                string newData = dataFile.Serialize();

                sw = new StreamWriter(file);
                await sw.WriteAsync(newData);
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
    }
}
