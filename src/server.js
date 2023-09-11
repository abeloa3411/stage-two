import connectDB from "./db/db.js";
import app from "./index.js";
import dotenv from "dotenv";

dotenv.config();

connectDB(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`server started on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(err));
