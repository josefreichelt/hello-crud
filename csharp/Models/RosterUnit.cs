using Microsoft.Data.Sqlite;
using System.Text.Json.Serialization;

namespace hellocrud.Models;
public class RosterUnit
{
    [JsonPropertyName("id")]
    public uint RosterId { get; set; }
    [JsonPropertyName("unit_id")]
    public uint UnitID { get; set; }
    [JsonPropertyName("amount")]
    public int Amount { get; set; }

    [JsonPropertyName("unit_name")]
    public string? UnitName { get; set; }
    [JsonPropertyName("unit_attack_type")]
    public string? UnitAttackType { get; set; }
    [JsonPropertyName("unit_damage")]
    public int UnitDamage { get; set; }
    [JsonPropertyName("unit_health")]
    public int UnitHealth { get; set; }
    [JsonPropertyName("unit_cost")]
    public int UnitCost { get; set; }
}

public class RosterUnitPutBody
{
    [JsonPropertyName("roster_id")]
    public uint RosterId { get; set; }
    [JsonPropertyName("is_adding")]
    public bool isAdding { get; set; }
}

public static class RosterDatabase
{
    public static List<RosterUnit> GetRosterUnitsFromDatabase()
    {
        List<RosterUnit> rosterUnits = new();
        using (var connection = new SqliteConnection(GLOBALS.DB_URL))
        {
            connection.Open();

            var command = connection.CreateCommand();
            command.CommandText = @"SELECT roster.id,roster.amount, unit_types.* FROM roster INNER JOIN unit_types ON roster.unit_id = unit_types.unit_id;";

            using (var reader = command.ExecuteReader())
            {
                while (reader.Read())
                {
                    var newUnit = new RosterUnit();
                    newUnit.RosterId = uint.Parse(reader.GetString(0));
                    newUnit.UnitID = uint.Parse(reader.GetString(1));
                    newUnit.Amount = reader.GetInt32(2);
                    newUnit.UnitName = reader.GetString(3);
                    newUnit.UnitAttackType = reader.GetString(4);
                    newUnit.UnitDamage = reader.GetInt32(5);
                    newUnit.UnitHealth = reader.GetInt32(6);
                    newUnit.UnitCost = reader.GetInt32(7);
                    rosterUnits.Add(newUnit);
                }
            }
        }
        Console.WriteLine($"Returnting {rosterUnits.Count} units");
        return rosterUnits;
    }

    public static List<RosterUnit> UpdateRosterUnitsInDatabase(uint rosterId, bool isAdding)
    {
        using (var connection = new SqliteConnection(GLOBALS.DB_URL))
        {
            connection.Open();

            var command = connection.CreateCommand();
            command.CommandText = @$"UPDATE roster SET amount = amount + {(isAdding ? 1 : -1)} WHERE id={rosterId};";
            command.ExecuteNonQuery();
        }

        return GetRosterUnitsFromDatabase();
    }
}