using Microsoft.AspNetCore.Mvc;

using backend.Models;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class CadastroController : ControllerBase {
  [HttpPost("")] 
  public IActionResult post([FromBody] Conta Conta) {
     try {
       var v = Convert.ToDecimal(Conta.Valor);
       var p = Convert.ToDecimal(Conta.Parcelas);
       var z = 1.05m; 
       return Ok(((v * p) * z) / 100);
     }
     catch (Exception ex)
     {
       return BadRequest(ex.Message);
     }
  }
}