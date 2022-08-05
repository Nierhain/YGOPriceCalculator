using AutoMapper;
using AutoMapper.EquivalencyExpression;
using YGOPriceCalculator.Core.Data;

var corsPolicy = "YGOPC_Policy";
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers().AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy(corsPolicy,
        corsBuilder => { corsBuilder.WithOrigins("https://localhost:5002").AllowAnyHeader().AllowAnyMethod(); });
});

builder.Services.AddAutoMapper((provider, options) =>
{
    options.AddCollectionMappers();
    options.UseEntityFrameworkCoreModel<DbContext>(provider);
}, typeof(Program));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(corsPolicy);

app.MapControllers();

app.Run();