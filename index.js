const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const moviesRoute = require("./routes/movies");
const listsRoute = require("./routes/lists");

dotenv.config();

mongoose.set("strictQuery", false);
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("DB connection successful");
	})
	.catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/lists", listsRoute);


app.listen(5000, () => {
	console.log("listening on port 5000");
});
