using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAsp.netCore.Models;

namespace WebAsp.netCore.Controllers
{
    public class SqlController : Controller
    {
        private readonly ILogger<HomeController> _logger;
      
        public SqlController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }


        public IActionResult Index()
        {
            return View();
        }
        public ActionResult Please(string val)
        {
            TempData["Result"] = val;

            return View();
        }
        public IActionResult getCreateTableSQLCode()
        {
            return View();
        }
        public IActionResult InsertSqlMaker()
        {
            return View();
        }
        public IActionResult SelectSqlMaker()
        {
            return View();
        }
        public IActionResult UpdateSqlmaker()
        {
            return View();
        }
        public IActionResult DeleteSqlmaker()
        {
            return View();
        }

  

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
