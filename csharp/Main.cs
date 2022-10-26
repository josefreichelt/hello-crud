namespace hellocrud
{
    public static class GLOBALS
    {
        public const string BASE_URL = "/api/v1/";
        public const string UNITS_URL = BASE_URL + "units/";

    }
    class HelloCrud
    {
        static void Main(string[] args)
        {

            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();
            app.UseHttpLogging();

            // app.MapControllerRoute("unittypes","{controller=UnitTypes}/{action=Index}");

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}