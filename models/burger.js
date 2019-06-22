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

    // Burger.associate = function (models) {
    //     // We're saying that a burger should belong to an customer
    //     // A burger can't be created without an customer due to the foreign key constraint
    //     Burger.belongsTo(models.Customer, {
    //         foreignKey: {
    //             allowNull: true
    //         }
    //     });
    // };

    Burger.associate = function (models) {
        // Associating Burger with Customer
        // When a Burger is deleted, also delete any associated Customers
        Burger.hasMany(models.Customer, {
            onDelete: "cascade"
        });
    };

    return Burger;
};
