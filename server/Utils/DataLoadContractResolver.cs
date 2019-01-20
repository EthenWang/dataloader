using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Utils
{
    public class DataLoadContractResolver : DefaultContractResolver
    {
        protected override string ResolvePropertyName(string name)
        {
            return name.ToLower().Replace("-", "");
        }
    }
}
