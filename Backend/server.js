import express from "express";
import dotenv from "dotenv";
import auth_route from "./route/auth_route.js";
import user_route from "./route/user_route.js"
import connectToMongoDB from "./DB/connectToMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 9000;
dotenv.config();

app.use(express.json());//from req.body (controller)
app.use(cookieParser());
// Apply middleware
app.use("/api/auth", auth_route);
app.use("/api/user", user_route);

// Define routes
// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });

// Start server
app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});
