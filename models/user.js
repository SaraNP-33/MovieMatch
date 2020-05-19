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


    // userName: {
    //       type: DataTypes.STRING,
    //       allowNull: false,
    //       validate: {
    //           len: [2, 40]
    //       }
    //   },

    // password: {
    //     type: DataTypes.STRING,
    //     allowNull: false,

    // },

    // email: {
    //     type: DataTypes.STRING
    // }


  });

  User.associate = function (models) {
    models.User.hasMany(models.Votes, {
      onDelete: 'cascade'
    });

    models.User.hasMany(models.Movies,  {
      onDelete: 'cascade'
    });

  };

  return User;

};