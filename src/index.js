import dotenv from "dotenv";
import server from "./server.js";

import connectDB from "./db/index.js";

dotenv.config({ path: "../.env" });

process.setMaxListeners(15);

console.log(process.env.MONGO_URI)

const serverPort = process.env.PORT || 7000;

connectDB()
  .then(() => {
    server.listen(serverPort, () => {
      console.log({
        serverStatus: "🌐  Application is Running",
        URL: `🔗 http://localhost:${serverPort}`,
      });
    });

    server.on("error", (err) => {
      console.log("Error occurred at index.js", err);
    });
  })
  .catch((error) => {
    console.log("DB connection failed from index.js", error);
  });
  console.log('MongoDB URI:', process.env.MONGO_URI);
