using APS_ChatApp.Handlers;
using APS_ChatApp.Manager;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddWebSocketManager();
var app = builder.Build();

var serviceScopeFactory = app.Services.GetRequiredService<IServiceScopeFactory>();
var serviceProvider = serviceScopeFactory.CreateScope().ServiceProvider;

app.UseWebSockets(options: new WebSocketOptions() { KeepAliveInterval = TimeSpan.FromMinutes(2) });
app.MapWebSocketManager("/ws", serviceProvider.GetService<ChatMessageHandler>());
app.UseStaticFiles();
app.UseRouting();

app.Run();