import WebSocket from "ws";
import { stockData } from "./stocksData";

const DELAY_BETWEEN_MESSAGES = 400;

class WebSocketServer {
  private wss: WebSocket.Server | null = null;
  private connections = {};
  // private messageHandlers: MessageHandler[] = [];

  constructor(private port: number) {}

  start(): void {
    this.wss = new WebSocket.Server({ port: this.port });

    this.wss.on("listening", () => {
      console.log(`WebSocket server listening on port ${this.port}.`);
    });

    this.wss.on("connection", (ws: WebSocket) => {
      console.log(`WebSocket client connected.`);
      let count = 0;

      const prices = setInterval(() => {
        const stock = stockData[Math.floor(Math.random() * stockData.length)];
        const data = {
          id: stock.symbol,
          exchange: stock.exchange,
          price: Math.random() * 100,
        };
        ws.send(JSON.stringify(data));
        // console.log(`SENT: ${data}`);
        count++;
      }, DELAY_BETWEEN_MESSAGES);

      ws.on("close", () => {
        console.log(`WebSocket client disconnected.`);
        clearInterval(prices);
      });

      ws.on("error", (error) => {
        console.error("WebSocket error:", error);
      });
    });
  }
}

export default WebSocketServer;
