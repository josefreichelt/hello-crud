using Microsoft.Data.Sqlite;
using System.Text.Json.Serialization;

namespace hellocrud.Models
{
    public class UnitType
    {
        [JsonPropertyName("unit_id")]
        public uint UnitID { get; set; }

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

    public static class UnitTypesModel
    {
        public static List<UnitType> GetUnitTypesFromDatabase()
        {
            List<UnitType> unitTypes = new();
            using (var connection = new SqliteConnection(GLOBALS.DB_URL))
            {
                connection.Open();

                var command = connection.CreateCommand();
                command.CommandText = @"SELECT * from unit_types;";

                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var newUnit = new UnitType();
                        newUnit.UnitID = uint.Parse(reader.GetString(0));
                        newUnit.UnitName = reader.GetString(1);
                        newUnit.UnitAttackType = reader.GetString(2);
                        newUnit.UnitDamage = reader.GetInt32(3);
                        newUnit.UnitHealth = reader.GetInt32(4);
                        newUnit.UnitCost = reader.GetInt32(5);
                        Console.WriteLine(
                        "Got Unit\n" +
                        $"ID: {newUnit.UnitID}\n" +
                        $"Name: {newUnit.UnitName}\n" +
                        $"AttackType: {newUnit.UnitAttackType}\n" +
                        $"Damage: {newUnit.UnitDamage}\n" +
                        $"Health: {newUnit.UnitHealth}\n" +
                        $"Cost: {newUnit.UnitCost}\n\n"
                        );
                        unitTypes.Add(newUnit);
                    }
                }
            }
            return unitTypes;
        }
    }

}