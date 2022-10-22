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
- POST
  - Add unit type to your army  
  Parameters:
  - Type of the unit to add
- UPDATE
  - Increase or decrease the number of units  
  Parameters:
  - Types of the units to modify
  - Amount of units to change
- DELETE
  - Remove unit type from your army
 
 ## Route api/v1/units/types
 - GET
   - Will return all unit types info
 

Port frontend is listening on: 1337
Port backend is listening on: 1338

------
## Currently implemented:

- [x] Common web client
- [x] Node
- [x] Python
- [ ] PHP
- [ ] Go
- [ ] Rust
- [ ] C#
- [ ] Java
  
Other potential variants
- [ ] Nim
- [ ] Ruby
- [ ] Kotlin
- [ ] Perl
- [ ] C++

------

# Requirements
Minimum requirements for running the clients are **Node 16**

Inside the client folder, all you need to do is:
- **npm i** which install the required dependency to start a web server
- **npm start** which starts the webserver which serves the client