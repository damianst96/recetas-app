module.exports = function(sequelize, dataTypes){
    let alias = "Recipes";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: dataTypes.VARCHAR(255),
            allowNull: false
        },

        ingredients: {
            type: dataTypes.TEXT,
            allowNull: false
        },

        description: {
            type: dataTypes.TEXT,
            allowNull: true 
        }
    }

    let config = {
        tableName: 'recipes',
        timestamps: false
    }

    let Recipe = sequelize.define(alias, cols, config);

    return Recipe;
}