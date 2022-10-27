namespace hellocrud
{
    public static class GLOBALS
    {
        public const string BASE_URL = "/api/v1/";
        public const string UNITS_URL = BASE_URL + "units/";

        public const string DB_URL = "Data Source=../database.sqlite";

    }
    class HelloCrud
    {
        static void Main(string[] args)
        {
            var AllowedOrigins = "allowTheseOrigins";
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: AllowedOrigins, policy =>
                {
                    policy.WithOrigins("http://127.0.0.1:1337", "*").SetIsOriginAllowedToAllowWildcardSubdomains().AllowAnyHeader();
                });
            });
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
            else
            {
                app.UseHttpsRedirection();

            }

            app.UseCors(AllowedOrigins);

            app.UseAuthorization();

            app.MapControllers();

            Console.WriteLine("HelloCrud is running");
            app.Run();
        }
    }
}