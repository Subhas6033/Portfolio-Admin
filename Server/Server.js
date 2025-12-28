import { app } from "./app.js";
import { connectDB } from "./DB/Db.db.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.get("/", (req, res) => {
      res.send("Welcome to Our Server");
    });

    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `Server is running  on the PORT : http://localhost:${
          process.env.PORT || 5000
        }`
      );
    });
  })
  .catch((err) => {
    console.log("Error While Running the App", err);
  });
