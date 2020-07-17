using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_vue_startup_template.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BlogController : Controller
    {
        public BlogController()
        {
        }


        [HttpGet]
        public List<Blog> GetAll()
        {
            return new List<Blog>
            {
                new Blog {Id = 1, Title = "adsfasf"},
                new Blog {Id = 2, Title = "adsfasf"},
                new Blog {Id = 3, Title = "adsfasf"},
                new Blog {Id = 4, Title = "adsfasf"}
            };
        }
    }

    public class Blog
    {
        public int Id { get; set; }

        public string Title { get; set; }
    }
}