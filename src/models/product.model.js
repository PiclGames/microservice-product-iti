module.exports = (sequelize, Sequelize) => {
    return sequelize.define("product", {
        pro_name: {
            type: Sequelize.STRING
        },
        pro_price: {
            type: Sequelize.FLOAT
        },
    });
};