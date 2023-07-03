import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import postsRoutes from "./routes/posts.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "../frontend/public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(postsRoutes);


app.listen(3001, () => {
  console.log(`Server running on port ${3001}`);
});

export default app;
