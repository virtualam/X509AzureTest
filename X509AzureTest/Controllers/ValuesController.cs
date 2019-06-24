using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Web.Http;
using System.Web.Http.Cors;

namespace X509AzureTest.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ValuesController : ApiController
    {
        // GET api/values
        public string Get()
        {
            string fileName = System.Web.Hosting.HostingEnvironment.MapPath("~/Certs/WildCatApp-fa0a0e18-f305-40b4-93ee-9ff30436a212.pfx");
            X509Certificate2 cert = new X509Certificate2(fileName, "", X509KeyStorageFlags.PersistKeySet);
            return $"success!";
        }

        // GET api/values/5
        public string Get(int id)
        {
            string fileName = System.Web.Hosting.HostingEnvironment.MapPath("~/Certs/WildCatApp-fa0a0e18-f305-40b4-93ee-9ff30436a212.pfx");
            X509Certificate2 cert = new X509Certificate2(fileName, "", X509KeyStorageFlags.PersistKeySet | X509KeyStorageFlags.MachineKeySet);
            return $"success - {id}";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
