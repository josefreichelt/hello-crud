export interface IUnit {
    unit_id: number;
    unit_name: string;
    unit_attack_type: string;
    unit_damage: number;
    unit_health: number;
    unit_cost: number;
}

export interface IRoster {
    id: number;
    unit_id: number;
    amount: number;
}

