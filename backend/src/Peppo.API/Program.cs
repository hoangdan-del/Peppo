var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
var frontendUrl = app.Configuration.GetSection("FrontendSettings:BaseUrl").Value;

app.UseCors(options =>
    options.WithOrigins(frontendUrl)
           .AllowAnyMethod()
           .AllowAnyHeader()
           .AllowCredentials());

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();
