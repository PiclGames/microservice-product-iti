const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.brands = require("./brand.model.js")(sequelize, Sequelize);
db.products = require("./product.model.js")(sequelize, Sequelize);
db.products.belongsTo(db.brands);
module.exports = db;