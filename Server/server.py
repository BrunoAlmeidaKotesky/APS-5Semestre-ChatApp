import websockets
import asyncio

clients = set()
PORT = 8765

async def on_client_connected(socket, path: str) -> None:
    print(f"Cliente conectado: {socket.remote_address}")
    clients.add(socket)
    try:
        async for message in socket:
            print(f"Mensagem recebida do cliente: " + message)
            for client in clients:
                await client.send(message)
    except websockets.exceptions.ConnectionClosedError as er:
        print(f"Cliente desconectado: {socket.remote_address}", er)
    except websockets.exceptions.ConnectionClosedOK as er2:
        print(f"Cliente desconectado: {socket.remote_address}", er2)
    finally:
        print(f"Cliente desconectado: {socket.remote_address}")
        clients.remove(socket)

start_server = websockets.serve(on_client_connected, "localhost", PORT)
if __name__ == '__main__':
    event_loop = asyncio.get_event_loop()
    event_loop.run_until_complete(start_server)
    try:
        event_loop.run_forever()
    except KeyboardInterrupt:
        print("Servidor encerrado.")
        event_loop.stop()
        event_loop.close()