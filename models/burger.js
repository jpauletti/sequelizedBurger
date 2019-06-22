module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    });

    Burger.associate = function (models) {
        // Associating Burger with Customer
        // When a Burger is deleted, also delete any associated Customers
        Burger.hasMany(models.Customer, {
            onDelete: "cascade"
        });
    };

    return Burger;
};
