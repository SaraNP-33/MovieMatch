module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define("User", {



    firstname: {
      type: DataTypes.STRING,
      allowNull: true
    },

    lastname: {
      type: DataTypes.STRING,
      allowNull: true
    },

    username: {
      type: DataTypes.TEXT
    },

    about: {
      type: DataTypes.TEXT
    },

    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    last_login: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },

    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }


    

  });

  User.associate = function (models) {
   User.hasMany(models.MovieUserVotes)

    

  };

  return User;

};