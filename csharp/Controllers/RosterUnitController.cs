using Microsoft.AspNetCore.Mvc;

namespace hellocrud.Controllers;
[ApiController]
public class RosterUnitController : ControllerBase

{

    [HttpGet(GLOBALS.UNITS_URL)]
    public IActionResult Get()
    {
        Console.WriteLine("Getting Roster Units types");
        var units = Models.RosterDatabase.GetRosterUnitsFromDatabase();
        return Ok(units);
    }
}