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
        public JToken Get(string id = null)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            return JObject.Parse(File.ReadAllText(path + "App_Data/Event/" + id + ".json"));
        }

        public void Post(string id, JObject eventData)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            File.WriteAllText(path + "App_Data/Event/" + id + ".json", eventData.ToString(Formatting.None));
        }
    }
}
