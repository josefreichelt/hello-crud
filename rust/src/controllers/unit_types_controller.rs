use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use serde::{Deserialize, Serialize};

#[get("/api/v1/units/types")]
pub async fn get_unit_types() -> impl Responder {
    println!("GETTING UNITS");
    crate::models::unit_types_model::get_unit_types_from_db();
    return "Hi there";
}
