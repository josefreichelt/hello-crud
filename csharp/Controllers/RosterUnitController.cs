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
    [HttpPut(GLOBALS.UNITS_URL)]
    public IActionResult Put(Models.RosterUnitPutBody body)
    {
        Console.WriteLine($"Updating Roster {body.RosterId} unit amount");
        var units = Models.RosterDatabase.UpdateRosterUnitsInDatabase(body.RosterId, body.isAdding);
        return Ok(units);
    }
    [HttpPost(GLOBALS.UNITS_URL)]
    public IActionResult Post()
    {
        Console.WriteLine("Getting Roster Units types");
        var units = Models.RosterDatabase.GetRosterUnitsFromDatabase();
        return Ok(units);
    }
    [HttpDelete(GLOBALS.UNITS_URL)]
    public IActionResult Delete()
    {
        Console.WriteLine("Getting Roster Units types");
        var units = Models.RosterDatabase.GetRosterUnitsFromDatabase();
        return Ok(units);
    }

}
