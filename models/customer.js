module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            defaultValue: "",
            allowNull: false
    }
    });

    Customer.associate = function (models) {
        // We're saying that a customer should belong to an burger
        // A customer can't be created without a burger due to the foreign key constraint
        Customer.belongsTo(models.Burger, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Customer;
};