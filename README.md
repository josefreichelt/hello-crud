# Hello C.R.U.D.

Goal of this repository is to show how to implement a simple backend API in various programming languages.

Theme of the application is:
Army manager

Common web client will be used across the various versions.
Common database will be provided via sqlite, which will be created externaly.

# Database
2 tables 
First table will host unit type information and will be strictly read-only

## Table: ``unit_types``
| unit_id | unit_name | unit_attack_type | unit_damage | unit_health | unit_cost |
| ------- | --------- | ---------------- | ----------- | ----------- | --------- |

Second will host your army roster
## Table: ``roster``
| id | unit_id(reference to table 1) | amount |
| -- | ----------------------------- | ------ |


# API Specification:
## Route: api/v1/units

- GET  
  - Will return all units in your army  
  - SQL: ```SELECT roster.id,roster.amount, unit_types.* FROM roster INNER JOIN unit_types ON roster.unit_id = unit_types.unit_id```
- POST
  - Add unit type to your army  
  Parameters:
    - Type of the unit to add
  - SQL: ```INSERT INTO roster(unit_id, amount) VALUES([unit_id], 1);```
- UPDATE
  - Increase or decrease the number of units  
  Parameters:
    - Id of the unit in roster to modify
    - Amount of units to change
  - SQL: ```UPDATE roster SET amount = amount + [isAdding ? 1 : -1] WHERE id=[id_in_roster];```
- DELETE
  - Remove unit type from your army
  - Parameters:
    - Id of the unit in roster to delete
  - SQL: ```DELETE FROM roster WHERE id=[id_in_roster];```  

 ## Route api/v1/units/types
 - GET
   - Will return all unit types info
  - SQL: ```SELECT * FROM unit_types;```  


Port frontend is listening on: 1337
Port backend is listening on: 1338

------
## Currently implemented:

- [x] Common web client  
- [x] C#
- [x] Go
- [x] Node
- [x] Python

### Other potential variants
- [ ] C++
- [ ] Java
- [ ] Kotlin
- [ ] Nim
- [ ] Perl
- [ ] PHP
- [ ] Ruby
- [ ] Rust

------

# Requirements
Minimum requirements for running the clients are **Node 16**

Inside the client folder, all you need to do is:
- **npm i** which install the required dependency to start a web server
- **npm start** which starts the webserver which serves the client