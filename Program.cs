using YGOPriceCalculator.Models;
using YGOPriceCalculator.Services;

var CorsPolicy = "YGOPC_Policy";
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers().AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.Configure<CardDatabaseSettings>(builder.Configuration.GetSection("CardStoreDatabase"));
builder.Services.AddSingleton<CardService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: CorsPolicy, corsBuilder =>
    {
        corsBuilder.WithOrigins("https://localhost:5002").AllowAnyHeader().AllowAnyMethod();
    });
});
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(CorsPolicy);
app.UseAuthorization();

app.MapControllers();

app.Run();
