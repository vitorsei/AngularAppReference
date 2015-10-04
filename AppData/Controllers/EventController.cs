using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AppData.Controllers
{
    [EnableCors(origins: "http://localhost:18774", headers: "*", methods: "*")] 
    public class EventController : ApiController
    {
        private readonly string path = System.Web.Hosting.HostingEnvironment.MapPath("/") + "App_Data\\Event\\";
        
        public JToken Get(string id = null)
        {
            if (id == null)
                return GetAllJsonEventsArray();
            return GetSingleJsonFile(id);
        }

        public void Post(JObject eventData)
        {
            File.WriteAllText(path + GetNewId() + ".json", eventData.ToString(Formatting.None));
        }

        private JArray GetAllJsonEventsArray()
        {
            var contents = "";
            foreach (var file in Directory.GetFiles(path))
            {
                contents += File.ReadAllText(file) + ",";
            }

            return JArray.Parse("[" + contents.Substring(0, contents.Length - 1) + "]");
        }

        private JToken GetSingleJsonFile(string id)
        {
            return JObject.Parse(File.ReadAllText(path + id + ".json"));
        }

        private string GetNewId()
        {
            var lastId = Directory.GetFiles(path, "*.json")
                                    .Select(x => Path.GetFileNameWithoutExtension(x)).Max();

            int newId = int.Parse(lastId) + 1;
            
            return newId.ToString();
        }
    }
}
