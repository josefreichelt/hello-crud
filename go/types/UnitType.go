package types

type UnitType struct {
	UnitId         uint   `json:"unit_id"`
	UnitName       string `json:"unit_name"`
	UnitAttackType string `json:"unit_attack_type"`
	UnitDamage     int    `json:"unit_damage"`
	UnitHealth     int    `json:"unit_health"`
	UnitCost       int    `json:"unit_cost"`
}

type RosterUnit struct {
	Id             uint   `json:"id"`
	Amount         int    `json:"amount"`
	UnitId         uint   `json:"unit_id"`
	UnitName       string `json:"unit_name"`
	UnitAttackType string `json:"unit_attack_type"`
	UnitDamage     int    `json:"unit_damage"`
	UnitHealth     int    `json:"unit_health"`
	UnitCost       int    `json:"unit_cost"`
}
