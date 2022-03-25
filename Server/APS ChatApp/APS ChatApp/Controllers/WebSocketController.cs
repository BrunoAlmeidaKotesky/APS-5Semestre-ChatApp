using Microsoft.AspNetCore.Mvc;
using APS_ChatApp.Handlers;

namespace APS_ChatApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WebSocketController : ControllerBase
    {
        private readonly ILogger<WebSocketController> _logger;
        private ChatMessageHandler? handler { get; set; }

        public WebSocketController(ILogger<WebSocketController> logger)
        {
            _logger = logger;
        }


        [HttpGet]
        public async Task SendMessage([FromQueryAttribute] string message)
        {
            await handler.SendMessageToAllAsync(message);
        }
    }
}
