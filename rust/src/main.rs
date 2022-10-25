mod controllers;
mod models;
use actix_web::{get, App, HttpServer, Responder};
// static BASE_URL: &str = "/api/v1/";
// static UNIT_TYPES_URL: &str = "/api/v1/units/types";
// #[get("/api/v1/units/types")]
// async fn get_unit_types() -> impl Responder {
//     format!("Hello there!")
// }


#[actix_web::main] // or #[tokio::main]
async fn main() -> std::io::Result<()> {
    
    println!("Starting hellocrud");
    return HttpServer::new(|| App::new().service(controllers::unit_types_controller::get_unit_types))
        .bind(("127.0.0.1", 1338))?
        .run()
        .await;
}
