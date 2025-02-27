using Microsoft.EntityFrameworkCore;
using Tasks.Server.Data;

var builder = WebApplication.CreateBuilder(args);

// تعيين سلسلة الاتصال بقاعدة البيانات
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));

// تفعيل CORS للسماح لتطبيق React بالوصول إلى API
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("https://localhost:52674")  // عنوان تطبيق React
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

// إضافة خدمات أخرى
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// تفعيل CORS
app.UseCors("AllowReactApp");

app.UseDefaultFiles();
app.UseStaticFiles();

// تكوين Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.MapFallbackToFile("/index.html");

app.Run();
