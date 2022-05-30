module.exports = (sequelize, Sequelize) => {
    return sequelize.define("brand", {
        bra_name: {
            type: Sequelize.STRING
        },
    });
};