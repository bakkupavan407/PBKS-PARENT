using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Mvc;
using ProBL;

namespace ProUI.Controllers
{
    public class DataEntryController : Controller
    {
        //
        // GET: /DataEntry/
        [HttpGet]
        public JsonResult WelcomeNote()
        {
            bool isAdmin = false;
            //TODO: Check the user if it is admin or normal user, (true-Admin, false- Normal user)  
            string output = isAdmin ? "Welcome to the Admin User" : "Welcome to the User";

            //var obj = new Object();

            return Json(output, JsonRequestBehavior.AllowGet);
        }

        private List<Class1> GetUsers()
        {
            var usersList = new List<Class1>  
            {  
                new Class1
                {  
                    UserId = 1,  
                    UserName = "Ram",  
                    Company = "Mindfire Solutions"  
                },  
                new Class1  
                {  
                    UserId = 1,  
                    UserName = "chand",  
                    Company = "Mindfire Solutions"  
                },  
                new Class1  
                {  
                    UserId = 1,  
                    UserName = "Abc",  
                    Company = "Abc Solutions"  
                }
            };

            return usersList;
        }

        public JsonResult GetUsersData()
        {
            var users = GetUsers();
            return Json(users, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult UpdateUsersDetail(string usersJson)
        {
            var js = new JavaScriptSerializer();
            //Class1[] user = js.Deserialize<Class1[]>(usersJson);

            //TODO: user now contains the details, you can do required operations  
            return Json("User Details are updated");
        }

        [HttpPost]
        public JsonResult SaveUser(user uu)
        {
            var js = new JavaScriptSerializer();
            //Class1[] user = js.Deserialize<Class1[]>(usersJson);

            //TODO: user now contains the details, you can do required operations  
            return Json("User Details are updated");
        }

    }
}
