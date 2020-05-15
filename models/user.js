module.exports = function(sequelize, DataTypes) {

  var User = sequelize.define("User", {

    
    userName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [2, 40]
          }
      },

    // password: {
    //     type: DataTypes.STRING,
    //     allowNull: false,

    // },

    // email: {
    //     type: DataTypes.STRING
    // }

   
  });

  User.associate = function(models) {
    models.User.hasMany(models.Movies, models.Votes, { onDelete: 'cascade' });

};

return User;

};

