using Microsoft.AspNetCore.Mvc;

namespace hellocrud.Controllers;
[ApiController]
public class UnitTypesController : ControllerBase

{

    [HttpGet(GLOBALS.UNITS_URL + "types/")]
    public IActionResult Get()
    {
        Console.WriteLine("Getting unit types");
        var units = Models.UnitTypesDatabase.GetUnitTypesFromDatabase();
        return Ok(units);
    }
}