using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class ConsultaController : ControllerBase {
   [HttpGet("{id}")]
   public IActionResult Get(int id) {
     try {
       var list = new List<KeyValuePair<int, string>>();
       list.Add(new KeyValuePair<int, string>(1, "João"));
       list.Add(new KeyValuePair<int, string>(2, "Maria"));
       list.Add(new KeyValuePair<int, string>(3, "Ana"));
       return Ok(list.FirstOrDefault(x => x.Key == id)); 
     }
     catch (Exception ex)
     {
       return BadRequest(ex.Message);
     }
     
  }
}