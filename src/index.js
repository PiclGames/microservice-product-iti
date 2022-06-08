const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 8080;

let corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});*/

db.sequelize.sync();

require("./routes/brand.routes")(app, {});
require("./routes/product.routes")(app, {});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});